import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
import { listTags } from '../../graphql/queries'

export const tagList: () => Promise<any> = async () => {
  try {
    const response = await GraphQLAPI.graphql({
      query: listTags,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })
    return response
  } catch (err) {
    //
  }
}
