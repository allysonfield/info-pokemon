import React from 'react';
import './config/ReactotronConfig';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import Routes from './routes/routes';
import {store} from './store';
import theme from './styles/theme';

Icon.loadFont();

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
