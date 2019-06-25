pragma solidity >=0.4.21 <0.6.0;

contract Url {

  address public owner;
  bytes32 urlHash;
  bytes32[] categories; // for now just the hash of a sub domain category -> "subdomainish"

  constructor(bytes32 urlHashString) public {
    owner = msg.sender;
    urlHash = urlHashString;
  }
}
