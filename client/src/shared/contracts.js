const ethers = require('ethers');

const DomainProxy = require('../betaContracts/build/contracts/DomainProxy');
const Url = require('../betaContracts/build/contracts/Url');
const { DOMAIN_PROXY_CONTRACT, URL_CONTRACT } = require('./constants/domain');

export const getContractByType = (contractType) => {
    const abi = getContractAbi(contractType);
    if (abi === null) return null;
    return abi;
}

const getContractAbi = (contractType) => {
    switch (contractType) {
        case URL_CONTRACT: 
            console.log({ contractType }, 'url');
            return Url;
            break;
        case DOMAIN_PROXY_CONTRACT: 
            console.log({ contractType }, 'domain');
            return DomainProxy;
            break;
        default: 
            console.log({ contractType }, 'default');
            return null;
    }
}

export const getDomainHash = (url) => {
    let urlBytes = ethers.utils.toUtf8Bytes(url);
    const hashedUrl = ethers.utils.keccak256(urlBytes);
    return hashedUrl;
} 

/**
 * Enable metamask and return accounts
 */
export const getMetaMaskAccount = async () => {
    let acct;
    try {
        if (typeof window.ethereum === 'undefined') {
         return { status: "error", msg: 'Install MetaMask or use a dapp browser' }
        } else {
            await window.ethereum.enable()
            .then((accounts) => {
                console.log('in then', { accounts });
                acct = accounts;
              if (window.ethereum.networkVersion === '1') {
                alert('Do you really want to swap mainnet eth for testnet?')
              } else {
                console.log('not on 1');
              }
            })
            .catch((reason) => {
              console.log(`Could not enable metamask: ${reason}`)
            })
            console.log('after');
            
            // return { status: 'success', msg: account }
        }
      } catch (err) {
        console.log(err);
        return { status: "error", msg: err }
      }
      return acct;
}

const hashToBytes32 = (hash) => {
    const bytes32Hash = ethers.utils.formatBytes32String(hash);
    return bytes32Hash;
}

export const deployUrlContract = async (build, signer, domainHash) => {
    try {
      let factory = new ethers.ContractFactory(build.abi, build.bytecode, signer);
      // const domainBytes = hashToBytes32(domain); //is this better than keccak256?
      let contract = await factory.deploy(domainHash);      
      await contract.deployed(); 
      console.log('deployed and mined', contract);
      return contract;
    } catch (e) {
      console.log(e);
    }
}