import { GraphQLClient } from 'graphql-request'

export const request = async (query = {}) => {
  const endpoint = 'https://graphql.fauna.com/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization:'Basic Zm5BRDk4Z05WeUFDQk1NaDFCX1Z3YmwwVFE0eUpxSl9VOFQwRnoxZTpteV9kYjpzZXJ2ZXI='
    },
  })

  try {
    return await graphQLClient.request(query)
  } catch (error) {
    console.log(error)
    return error
  }
}
