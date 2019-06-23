import React from 'react';

class Url extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        // it will always check the api for the hash
    }

    registerDomain = () => {
        console.log('[register domain]');
        // makes a request to check the domain
    }

    render() {
        return (
            <div>
                <div style={styles.txtInputContainer}>
                    <input 
                        style={styles.txtInput} 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        />
                    <button 
                        onClick={this.registerDomain}
                        style={styles.btnRegister}
                        className="btnRegister"
                        >
                        Load
                    </button>
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

export default Url;