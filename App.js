import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {StackNavigation} from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {isReadyRef, navigationRef} from './src/navigation/RootNavigtaion';
import {UserProvider} from './src/context/UserContext';
import SplashScreen from 'react-native-splash-screen';
import {ModalProvider} from './src/context/ModalContext';
import {ToastProvider} from 'react-native-toast-notifications';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <UserProvider>
        <ModalProvider>
          <SafeAreaView style={{flex: 1}}>
            <ToastProvider>
              <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                  isReadyRef.current = true;
                }}>
                <StackNavigation />
              </NavigationContainer>
            </ToastProvider>
          </SafeAreaView>
        </ModalProvider>
      </UserProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
