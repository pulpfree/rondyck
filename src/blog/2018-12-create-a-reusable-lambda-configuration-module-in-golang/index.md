---
title: "Build a Reusable Lambda Configuration Module In Golang"
category: "web development"
date: "2018-12-12"
published: true
excerpt: "Build a reusable configuration module for Lambda apps that is Twelve Factor App compliant."
tags:
    - Golang
    - AWS
    - Lambda
    - Serverless
---
![Alain Pham](alain-pham-248563-unsplash.jpg)
Photo by Alain Pham on Unsplash

## Objective
One of the issues I found when building Serverless Lambda functions is how to best handle the app's config. The [Twelve-Factor App](https://12factor.net) methodology is a great resource and if you haven't read it yet I highly recommend you spend a few minutes learning these principles.

Quoting from the **Config** section, the following describes an app's config:
> - *Resource handles to the database, Memcached, and other backing services*
> - *Credentials to external services such as Amazon S3 or Twitter*
> - *Per-deploy values such as the canonical hostname for the deploy*

The important points to take away from this section are:
- Config varies substantially across deploys, code does not
- A litmus test is whether the codebase could be made open source at any moment, without compromising any credentials

So with this criteria in mind, I wanted to create a reusable module that I could input a variety of values and have the module export the required configuration that would work for all my Serverless apps.

As an example of the values an app may require, here are some of the more common config properties used a typical app:
- AWS region
- Cognito client id
- Cognito pool id
- Cognito region
- Graphql URI
- MongoDB username
- MongoDB password
- MongoDB host
- MongoDB name
- MongoDB port
- S3 bucket name
- SSM path
- Stage

The **Twelve-Factor App** recommends that all config properties are stored in environment variables (env vars) and never with the app itself. The last point certainly makes sense and you've probably seen the use of .env files to store configs but they are problematic and not as flexible as needed. But I'm not a big fan of using only env vars for all the configuration variables that may change between different deployments. Wow, you may say, isn't the Twelve-Factor App the defacto standard? Well given the long list of config properties listed above, I think there's a way to meet most of what the Twelve-Factor App recommends and avoid having to keep track of a long list of env vars that may change between deployments. Allow me to expound a bit.

If you look at the list above there are 5 separate variables for MongoDB used to create a single connection string. When connecting locally in my **dev** environment I don't require MongoDB usernames, passwords, the port is the default and there is no replica set. All that to say that the connection string is considerably different:

`mongodb://localhost/dbname`  
vs  
`mongodb://username:password@myhostname1:27071,myhostname2:20701/dbname/?authSource=admin`  

... you get the picture.

So what if we had a way to store the config parameters safely for each deployment and then use a method to create the MongoDB connection string based on those same params? After some research I discovered [AWS SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html). Together with the [AWS Key Management Service](https://docs.aws.amazon.com/kms/index.html#lang/en_us) it's possible to manage parameters for a variety of deployments safely, and use a single configuration module to manage them all. Ok, that's gotta resonate a least a little, no?

## Solution
The solution I came up with has a flow that goes like this:
1. Parse a yaml (defaults) file and populate the `defaults` struct.
2. Check for any environment variables and populate the `defaults` struct.
3. Query for SSM params and populate the `defaults` struct.
4. Extract and transform `defaults` to the `Config` struct.

So let's have a look at each of these steps individually

### Step 1 Defaults
The primary purpose of a "defaults" file is to:  
>a) Set some defaults for our `defaults` struct  
>b) Set a few core required values like the stage or deployment value  

Looking at a sample defaults yaml file we might get something the following:
```javascript{numberLines: true}
AWSRegion: "ca-central-1"
CognitoClientID: ""
CognitoPoolID: ""
CognitoRegion: ""
MongoDBUser: ""
MongoDBPassword: ""
MongoDBHost: 10.0.1.9
MongoDBName: ""
S3Bucket: ""
SsmPath: "my-ssm-path"
Stage: "prod"
```

The `AWSRegion`, `SsmPath` and `Stage` items are required to query SSM, and so having them here as defaults makes things easier. While it's possible to use env vars for these values, having to enter `AWSRegion=ca-central-1` each time you want to hack at your code is somewhat inconvenient, having a few defaults makes life so much simpler.



---
*The list of items in this file correspond with a Golang struct named `defaults`. This struct is part of the config package and is not exported. Another struct named `Config` holds all of our config vars after everything is processed. We start with parsing the default.yml file and copy the values to the `defaults` struct.*

*So yes, with this solution is it possible to use just env vars.*
