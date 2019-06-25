const Migrations = artifacts.require("Migrations");
const DomainProxy = artifacts.require("DomainProxy");
const Url = artifacts.require("Url");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DomainProxy);
  deployer.deploy(Url);
};
