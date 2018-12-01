import * as React from 'react';
import './App.css';

import { Button } from '@material-ui/core';
import MyComponent from './component/MyComponent';
import logo from './logo.svg';

class App extends React.Component {
  public onButtonClick = () => {
    window.open('http://localhost/blat/auth', '_blank', 'height=500,width=500');
  }
  public componentDidMount() {
    // const baseUrl = 'http://localhost';
    // fetch(baseUrl + '/'),
    Promise.all([
      // fetch(baseUrl + '/auth'),
      // fetch(baseUrl + '/blat/auth'),
    ])
      .then((values) => {
        // tslint:disable-next-line:no-console
        console.log("Received values:");
        // values.forEach((val) => val.body);
      })
      .catch((e) => {
        // tslint:disable-next-line:no-console
        console.error(e, "Failed fetching from server");
      });
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={this.onButtonClick}>
          Click
          </Button>
        <MyComponent prop="d" />
      </div>
    );
  }
}

export default App;
