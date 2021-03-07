export const config = {
  aws_project_region: process.env.REACT_APP_REGIOM,
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.REACT_APP_APPSYNC_REGIOM,
  aws_appsync_authenticationType: process.env.REACT_APP_APPSYNC_AUTH_TYPE,
  aws_appsync_apiKey: process.env.REACT_APP_APPSYNC_API_KEY,
  aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_COGNITO_REGIOM,
  aws_user_pools_id: process.env.REACT_APP_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID,
  oauth: {},
}
