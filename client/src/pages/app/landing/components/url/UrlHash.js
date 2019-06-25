import React from 'react';
import { getDomainHash } from '../../../../../shared/contracts';

class UrlHash extends React.Component {
    render() {
        const { hash } = this.props;
        return (
            <div>
                {
                    hash !== "" &&  <p style={styles.hashContainer}> Url Hash: { getDomainHash(hash) } </p>
                }
            </div>
        )
    }
}

const styles = {
    hashContainer: {
        color: 'black',
        fontSize: '0.5em'
    }
}
export default UrlHash;

