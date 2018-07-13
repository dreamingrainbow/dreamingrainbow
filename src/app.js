import React, { Component } from 'react';
import DreamingRainbow from './components/dreamingrainbow';
class App extends Component {
  render() {
    return (<h1><DreamingRainbow phrase="Hello World; "/><DreamingRainbow phrase="DreamingRainbow"/><DreamingRainbow phrase=' is creating magic with weird!'/></h1>);
  }
}

export default App;
