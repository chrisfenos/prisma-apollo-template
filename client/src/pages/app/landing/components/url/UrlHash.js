import React from 'react';
import { connect } from 'react-redux';
import { getDomainHash } from '../../../../../shared/contracts';

class UrlHash extends React.Component {
    render() {
        return (
            <p style={styles.hashContainer}> Url Hash: { getDomainHash('xxxxx') } </p>
        )
    }
}

const styles = {
    hashContainer: {
        color: 'black',
        fontSize: '0.5em'
    }
}
export default connect(null, null)(UrlHash);

