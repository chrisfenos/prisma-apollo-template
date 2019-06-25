import React from 'react';
import { connect } from 'react-redux';
import { setMetaMaskAccount } from '../../../pages/app/actions/acitonCreators/provider';
import { getMetaMaskAccount } from '../../contracts'

class MetaMask extends React.Component { 
    state = {
        metaMaskEnabled: false,
    }

    toggleMetaMask = async () => {
        const { setMetaMaskAccount } = this.props;
        const accounts =  await getMetaMaskAccount();
        // error handling - copped out on the return
        setMetaMaskAccount(accounts[0]);
    };

    render() {
        const { metaMaskEnabled } = this.props;
        return (
            <button 
                onClick={this.toggleMetaMask}
                style={metaMaskEnabled ? styles.disabled : styles.btnMetaMask}
                className="btnMetaMask"
                disabled={metaMaskEnabled}
                >
                enable meta mask
            </button>
        )
    }
}

const styles = {
    btnMetaMask: {
        padding: '8px',
        width: '200px',
        height: '45px',
        marginRight: '25px',
        backgroundColor: '#82d5ec',
        borderRadius: '2px',
        borderWidth:'0.5px',
        textTransform:'uppercase',
        letterSpacing:'1px',
        fontSize:'10px',
        fontWeight:'600',
        borderColor:'black',   
    },
    disabled: {
        padding: '8px',
        width: '200px',
        height: '45px',
        marginRight: '25px',
        backgroundColor: 'transparent',
        borderRadius: '2px',
        borderWidth:'0.5px',
        textTransform:'uppercase',
        letterSpacing:'1px',
        fontSize:'10px',
        fontWeight:'600',
        borderColor:'black',   
    }
}

const mapStateToProps = ({ provider }) => {
    return { metaMaskEnabled: provider.metaMaskEnabled }
}
export default connect(mapStateToProps, { setMetaMaskAccount })(MetaMask);