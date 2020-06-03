import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.REACT_APP_HTTP_LINK || 'http://localhost:8080/v1/graphql'
})

export default client
