export const  configokta = {
    issuer: 'https://dev-19848523.okta.com/oauth2/default',
    clientId: '0oa9j91addFVUdzG35d7',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: `http://localhost:3000/login/callback`,
    pkce: true,
    disableHttpsCheck: true
  }
