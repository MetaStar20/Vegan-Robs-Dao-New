import React from 'react';
import ThemeConfig from './Theme';
import Router from './router';

class App extends React.Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <ThemeConfig>
        <Router />
      </ThemeConfig>
    );
  }
}

export default App;