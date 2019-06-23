import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_DOMAIN_BY_HASH = gql`
  query domainByHash($urlHashString: String!){
    domainByHash(urlHash: $urlHashString){
      id
      url
    }
  }
`;

const domainByHash = ({ urlHashString }) => {
  return (
    <Query query={GET_DOMAIN_BY_HASH} variables={{ urlHashString }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const { domainByHash } = data;
        return (
          <p style={{color: 'black'}}> { domainByHash.url }  </p>
        )
      }}
    </Query>
  )
};

export default domainByHash; 