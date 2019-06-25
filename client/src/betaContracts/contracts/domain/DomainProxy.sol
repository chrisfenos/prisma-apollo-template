pragma solidity >=0.4.21 <0.6.0;

/**
 Contains a mapping of every domain registered in the app.
 Should mapp to a category. Catgeroies is a storage middleware
 and associative proxy by relevance.
 NOTE: super beta bs -> will not be in prod
 */
contract DomainProxy {
  address public owner;
  bytes32[] public domains;

  constructor() public {
    owner = msg.sender;
  }

  function registerDomain(bytes32 domainHash) public {
    domains.push(domainHash);
  }
}
