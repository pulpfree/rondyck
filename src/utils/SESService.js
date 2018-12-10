import AWS from 'aws-sdk'

// Create sendEmail params
const params = {
  Destination: {
    ToAddresses: [],
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
      Data: '',
    },
  },
  Source: '',
}

export default async function sendEmail(fields, cognitoPoolID, recipient, subject) {
  AWS.config.update({
    region: 'us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: cognitoPoolID,
    }, {
      region: 'us-east-1',
    }),
  })

  const svc = new AWS.SES({ apiVersion: '2010-12-01' })
  let body = `From: ${fields.name} <${fields.email}>\n\n`
  body += `Message:\n${fields.comments}`

  params.Destination.ToAddresses.push(recipient)
  params.Message.Body.Text.Data = body
  params.Message.Subject.Data = subject
  params.Source = recipient

  await svc.sendEmail(params).promise()
    .catch((err) => {
      console.error(err, err.stack) // eslint-disable-line
    })
}
