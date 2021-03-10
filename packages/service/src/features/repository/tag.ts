import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
//
import { Domain } from '..'
import { listTags } from '../../graphql/queries'

export const tagList: () => Promise<Domain.Tag.TagCollection> = async () => {
  try {
    const response = (await GraphQLAPI.graphql({
      query: listTags,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: Domain.Tag.TagCollection }
    const { data } = response
    return data
  } catch (err) {
    //
    return err
  }
}
