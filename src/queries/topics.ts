import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
query getTopics($name: String!) {
  topics: topic(name: $name) {
    relatedTopics {
      id
      name 
      stargazers {
        totalCount
      }
      relatedTopics {
        id
        name
        stargazers {
          totalCount
        }
      }
    }
  }
}
`;
