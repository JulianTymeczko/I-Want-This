import gql from "graphql-tag";

export const GET_ME = gql`
  {
    User {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;