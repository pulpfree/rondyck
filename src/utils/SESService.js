import AWS from 'aws-sdk'

const IdentityPoolId = 'us-east-1:948a3b34-728e-447b-87d8-6b5ab26a6039'
const email = 'Webbtech Sysadmin <sysadmin@webbtech.net>'

AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId,
  }, {
    region: 'us-east-1',
  }),
})

// Create sendEmail params
const params = {
  Destination: {
    ToAddresses: [
      email,
    ],
  },
  Message: {
    Body: {
      Text: {
        Charset: 'UTF-8',
        Data: '',
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Contact Request from rondyck.com',
    },
  },
  Source: email,
}

export default async function sendEmail(senderParams) {
  const svc = new AWS.SES({ apiVersion: '2010-12-01' })
  let body = `From: ${senderParams.name} <${senderParams.email}>\n\n`
  body += `Message:\n${senderParams.comments}`
  params.Message.Body.Text.Data = body

  await svc.sendEmail(params).promise()
    .catch((err) => {
      console.error(err, err.stack) // eslint-disable-line
    })
}
