import React from 'react';
import Url from './landing/components/url';
import './App.css';
import DomainByHash from './actions/queries/domain/getDomainByHash';
import DomainProxy from './landing/components/domainProxy';
import MetaMask from '../../shared/components/metamask';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <DomainProxy />
          <Url />
          <MetaMask />
          {/* <DomainByHash urlHashString="ox00000" /> */}
        </header>
      </div>
    );
  }
}

export default App;
