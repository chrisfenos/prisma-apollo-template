import React from 'react';
import Url from './landing/components/url';
import './App.css';
import DomainByHash from './actions/queries/domain/getDomainByHash';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Url />
          <DomainByHash urlHashString="ox00000" />
        </header>
      </div>
    );
  }
}

export default App;
