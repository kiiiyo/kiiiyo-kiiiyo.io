import { API } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
//
import { Domain } from '..'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'

export const tagList: () => Promise<Domain.Tag.TagCollection> = async () => {
  try {
    const response = (await API.graphql({
      query: queries.listTags,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: Domain.Tag.TagCollection }
    const { data } = response
    return data
  } catch (err) {
    //
    return err
  }
}

export const tagDetail: (id: string) => Promise<Domain.Tag.TagDetail> = async (
  id: string
) => {
  try {
    const response = (await API.graphql({
      query: queries.getTag,
      variables: { id },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: Domain.Tag.TagDetail }
    const { data } = response
    return data
  } catch (err) {
    //
    return err
  }
}

export const createTag: (
  form: Domain.Tag.TagCreateForm
) => Promise<any> = async (form: Domain.Tag.TagCreateForm) => {
  try {
    const response = (await API.graphql({
      query: mutations.createTag,
      variables: {
        input: form,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: Domain.Tag.TagCreateResult }
    const { data } = response
    return data
  } catch (err) {
    //
    return err
  }
}

export const deleteTag: (
  id: string
) => Promise<Domain.Tag.TagDeleteResult> = async (id: string) => {
  try {
    const response = (await API.graphql({
      query: mutations.deleteTag,
      variables: {
        input: { id },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: Domain.Tag.TagDeleteResult }
    const { data } = response
    return data
  } catch (err) {
    //
    return err
  }
}

export const updateTag: (
  form: Domain.Tag.TagUpdateForm
) => Promise<any> = async (form: Domain.Tag.TagUpdateForm) => {
  try {
    const response = (await API.graphql({
      query: mutations.updateTag,
      variables: {
        input: form,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: Domain.Tag.TagCreateResult }
    const { data } = response
    return data
  } catch (err) {
    //
    return err
  }
}
