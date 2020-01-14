import React, { Component } from 'react';
import './App.css';
import ItemContainer from './components/ItemContainer';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';

class App extends Component {

  render() {
    return(
      <Provider store={store}>
        <div className="App">
            <UserContainer />
            {/* <ItemContainer cake />
            <ItemContainer />
            <HooksCakeContainer />
            <CakeContainer />
            <IceCreamContainer />
            <NewCakeContainer /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
