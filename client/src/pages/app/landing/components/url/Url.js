import React from 'react';
import { connect } from 'react-redux';
import { ethers } from 'ethers';
import { logDomainRequest } from '../../../actions/acitonCreators/domainActions';
import UrlHash from './UrlHash';
import { URL_CONTRACT } from '../../../../../shared/constants/domain';
import { getContractByType } from '../../../../../shared/contracts';

class Url extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        window.web3.currentProvider.publicConfigStore.on('update', (e) => console.log("something happened on update", {e}));
        this.localProvider = new ethers.providers.Web3Provider(window.web3.currentProvider, parseInt(window.ethereum.networkVersion));
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});        
    }

    registerDomain = () => {
        const { value } = this.state;
        this.props.logDomainRequest(value)
        getContractByType(URL_CONTRACT);
    }

    render() {
        const { value } = this.state;
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
                        style={styles.btnRegister}
                        className="btnRegister"
                        >
                        Load
                    </button>
                </div>
                <UrlHash hash={value}/>
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
    btnRegister: {
        padding: '8px',
        width: '150px',
        height: '45px',
        marginLeft: '25px',
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

export default connect(mapDispatchToProps, {logDomainRequest})(Url);