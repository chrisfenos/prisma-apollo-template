import React from 'react';
import { connect } from 'react-redux';
import { ethers } from 'ethers';
import { logDomainRequest } from '../../../actions/acitonCreators/domainActions';
import UrlHash from './UrlHash';
import { URL_CONTRACT } from '../../../../../shared/constants/domain';
import { getContractByType, deployUrlContract, getDomainHash } from '../../../../../shared/contracts';

class Url extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            domainHash: ''
        };

        window.web3.currentProvider.publicConfigStore.on('update', (e) => console.log("something happened on update", {e}));
        this.localProvider = new ethers.providers.Web3Provider(window.web3.currentProvider, parseInt(window.ethereum.networkVersion));
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            domainHash: getDomainHash(event.target.value)
        });        
    }

    registerDomain = async () => {
        const { value, domainHash } = this.state;
        const { metaMaskAccount } = this.props;
        if (metaMaskAccount === "") return;
        const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        const signer =  await provider.getSigner();
        const build = getContractByType(URL_CONTRACT);        
        const contract = await deployUrlContract(build, signer, domainHash); // deployed url contract
        // need to save this in the DB & execute funciton in domain proxy to add it
        this.props.logDomainRequest(value); // TODO: add more details log later
    }

    render() {
        const { value, domainHash } = this.state;
        const { metaMaskEnabled } = this.props;
        return (
            <div>
                <div style={styles.txtInputContainer}>   
                    <input 
                        style={styles.txtInput} 
                        type="text" 
                        value={value} 
                        onChange={this.handleChange} 
                        placeholder="load public domain"
                        />
                    <button 
                        onClick={this.registerDomain}
                        style={metaMaskEnabled ? styles.enabled : styles.disabled}
                        >
                        Load
                    </button>
                </div>
                <UrlHash hash={domainHash}/>
            </div>
        )
    }
}

const styles = {
    txtInputContainer: {
        marginBottom: 16,
    },
    txtInput: {
        width: '400px',
        height: '28px',
        padding: '8px',
        borderColor:'black',
        borderWidth:'0.5px',
        borderRadius: '2px',
    },
    enabled: {
        padding: '8px',
        width: '150px',
        height: '45px',
        marginLeft: '25px',
        backgroundColor: '#82d5ec',
        borderRadius: '2px',
        borderWidth:'0.5px',
        borderColor:'black',  
        textTransform:'uppercase',
        letterSpacing:'1px',
        fontSize:'10px',
        fontWeight:'600',

    },
    disabled: {
        padding: '8px',
        width: '150px',
        height: '45px',
        marginLeft: '25px',
        backgroundColor: 'transparent',
        borderRadius: '2px',
        borderWidth:'0.5px',
        textTransform:'uppercase',
        letterSpacing:'1px',
        fontSize:'10px',
        fontWeight:'600',
        borderColor:'black',     
    },
}

const mapDispatchToProps = ({ provider }) => {
    return { 
        metaMaskEnabled: provider.metaMaskEnabled,
        metaMaskAccount: provider.metaMaskAccount,
    };
} 

export default connect(mapDispatchToProps, {logDomainRequest})(Url);