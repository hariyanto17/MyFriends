import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { Loading } from './components';

const MainApp = () => {
  const loading = useSelector(state => state.loading)
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      {loading && <Loading/>}
    </>
  )
}

const App = () => {

  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App


