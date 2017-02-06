import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import HomePage from './HomePage';

// Initialize GraphQL queries or mutations with the `gql` tag
const oppsData = gql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      id
    }
  }
`;

// const MyMutation = gql`mutation MyMutation { addTodo(text: "Test 123") { id } }`;

const HomePageContainer = graphql(oppsData, {
  options: {
    variables: {
      id: "T3Bwb3J0dW5pdHlOb2RlOjM1MDU1NQ=="
    }
  }
})(HomePage);

export default HomePageContainer;
