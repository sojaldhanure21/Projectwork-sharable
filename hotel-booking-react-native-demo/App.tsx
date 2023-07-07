import React from 'react';
import { Provider } from 'react-redux';
import Layout from './src/Layout';
import { store } from './src/redux/store';

// const Stack = createNativeStackNavigator();
const App = () => {
  // const linking = {
  //   prefixes: ['http://localhost:8080/'],
  //   config: {
  //     screens: {
  //       Home: 'home',
  //       Search: 'search',
  //     },
  //   },
  // };

  return (
    <Provider store={store}>
      <Layout />
    </Provider>

  );
};


export default App;
