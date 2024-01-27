import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#0003db'} />
        <WebView source={{ uri: 'https://freemlm.in/' }} />
      </>
    );
  }
}


export default App;