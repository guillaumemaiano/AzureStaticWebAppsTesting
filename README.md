# AzureStaticWebAppsTesting
Testing out the eponymous Azure service

## Information
- https://azure.microsoft.com/fr-fr/services/app-service/static/
- https://blog.codewithdan.com/getting-started-with-azure-static-web-apps/
- https://docs.microsoft.com/fr-fr/azure/static-web-apps/authentication-authorization

## TODO

### staticwebapps.config.json

Add some improvements:

 `,
  "notes": {
    "alternativeCSP": "default-src https:; script-src https:; style-src https:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'",
    "futureLoginRedirect": {
      "errorType": "Unauthenticated",
      "statusCode": 302,
      "serve": "/login"
    },
    "comment": "Routes.json is deprecated in favor of this unified config."
  }`