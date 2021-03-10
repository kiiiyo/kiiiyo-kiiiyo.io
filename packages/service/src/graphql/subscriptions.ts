/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($owner: String) {
    onCreateArticle(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($owner: String) {
    onUpdateArticle(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($owner: String) {
    onDeleteArticle(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
      id
      slug
      name
      description
      sortOrder
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
      id
      slug
      name
      description
      sortOrder
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
      id
      slug
      name
      description
      sortOrder
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
