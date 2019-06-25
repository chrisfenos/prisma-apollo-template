import React from 'react';
import { connect } from 'react-redux';
import { ethers } from 'ethers';
import { logDomainRequest } from '../../../actions/acitonCreators/domainActions';
import { DOMAIN_PROXY_CONTRACT } from '../../../../../shared/constants/domain';
import { getContractByType } from '../../../../../shared/contracts';

class DomainProxy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        window.web3.currentProvider.publicConfigStore.on('update', (e) => console.log("something happened on update", {e}));
        this.localProvider = new ethers.providers.Web3Provider(window.web3.currentProvider, parseInt(window.ethereum.networkVersion));
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});        
    }

    deployDomainProxy = () => {
        getContractByType(DOMAIN_PROXY_CONTRACT);
        console.log('just fired off domain proxy in deployDomainProxy');
    }

    render() {
        return (
            <div>
                <div style={styles.txtInputContainer}>   
                    <button 
                        onClick={this.deployDomainProxy}
                        style={styles.btnDeployProxy}
                        className="btnDeployProxy"
                        >
                        Deploy Domain Proxy
                    </button>
                    <input 
                        style={styles.txtInput} 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        placeholder="commit message :)"
                        />
                    
                </div>
            </div>
        )
    }
}

const styles = {
    txtInputContainer: {
        marginBottom: 16,
    },
    txtInput: {
        width: '350px',
        height: '28px',
        padding: '8px',
        borderColor:'black',
        borderWidth:'0.5px',
        borderRadius: '2px',
    },
    btnDeployProxy: {
        padding: '8px',
        width: '200px',
        height: '45px',
        marginRight: '25px',
        backgroundColor: 'transparent',
        borderRadius: '2px',
        borderWidth:'0.5px',
        borderColor:'#ececec',
        textTransform:'uppercase',
        letterSpacing:'1px',
        fontSize:'10px',
        fontWeight:'600',
        borderColor:'black',     
    }
}

const mapDispatchToProps = (state) => {
    return { state };
} 

export default connect(mapDispatchToProps, {logDomainRequest})(DomainProxy);