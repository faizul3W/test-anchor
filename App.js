import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

// ...
class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#0003db'} />
        <WebView
          source={{uri: 'https://lovely-salmiakki-1a7d5f.netlify.app/'}}
        />
      </>
    );
  }
}

export default App;
