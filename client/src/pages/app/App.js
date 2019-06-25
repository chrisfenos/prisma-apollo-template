import React from 'react';
import Url from './landing/components/url';
import './App.css';
import DomainByHash from './actions/queries/domain/getDomainByHash';
import DomainProxy from './landing/components/domainProxy';
import UrlHash from './landing/components/url/UrlHash';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <DomainProxy />
          <Url />
          <UrlHash />
          <DomainByHash urlHashString="ox00000" />
        </header>
      </div>
    );
  }
}

export default App;
