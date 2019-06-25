const ethers = require('ethers');

const DomainProxy = require('../betaContracts/build/contracts/DomainProxy');
const Url = require('../betaContracts/build/contracts/Url');
const { DOMAIN_PROXY_CONTRACT, URL_CONTRACT } = require('./constants/domain');

export const getContractByType = (contractType) => {
    const abi = getContractAbi(contractType);
    if (abi === null) return null;

    console.log({ abi });
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
    console.log({ url, hashedUrl });
    return hashedUrl;
} 