import React from 'react';
import { connect } from 'react-redux';
import { toggleMetaMask } from '../../../pages/app/actions/acitonCreators/provider';

class MetaMask extends React.Component { 
    state = {
        metaMaskEnabled: false,
    }

    toggleMetaMask = async () => {
        const { metaMaskEnabled } = this
        // this.setState({ value: !metaMaskEnabled});
        const { toggleMetaMask } = this.props;

        try {
            if (typeof window.ethereum === 'undefined') {
              alert('Looks like you need a Dapp browser to get started.')
            } else {
              await window.ethereum.enable()
                .then((accounts) => {
                    console.log({ accounts });
                  if (window.ethereum.networkVersion === '1') {
                    alert('Do you really want to swap mainnet eth for testnet?')
                    toggleMetaMask(metaMaskEnabled);
                  } else {
                    console.log('not on 1');
                  }
                })
                .catch((reason) => {
                  console.log(`Could not enable metamask: ${reason}`)
                })
            }
          } catch (err) {
            console.log(err);
          }
    };

    render() {
        return (
            <button 
                onClick={this.toggleMetaMask}
                style={styles.btnMetaMask}
                className="btnMetaMask"
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
        borderColor:'#ececec',
        textTransform:'uppercase',
        letterSpacing:'1px',
        fontSize:'10px',
        fontWeight:'600',
        borderColor:'black',   
    }
}

export default connect(null, { toggleMetaMask })(MetaMask);