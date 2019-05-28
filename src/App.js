import React from 'react';
import './App.css';

class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;
