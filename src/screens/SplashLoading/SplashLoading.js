import React, {useContext, useEffect} from 'react';
import {StatusBar, StyleSheet, View, ActivityIndicator} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import {UserContext} from '../../context/UserContext';
import {getItemFromStorage} from '../../utils/storage';
import * as Animatable from 'react-native-animatable';
import Text from '../../components/Text';
import colors from '../../theme/colors';
const SplashLoading = () => {
  const [_, setUser] = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(function () {
      bootstrapAsync();
    }, 1000);
    const bootstrapAsync = async () => {
      try {
        let currentUser = await getItemFromStorage('current_user');
        let userLoginFirst = await getItemFromStorage('userLoginFirst');

        if (!userLoginFirst || userLoginFirst == null) {
          setUser(state => ({
            ...state,
            // ...currentUser,
            isLoggedIn: false,
            isUserFirstTime: true,
          }));
          return;
        }
        if (currentUser) {
          setUser(state => ({
            ...state,
            isLoggedIn: true,
            isUserFirstTime: false,
          }));
          return;
        }
        setUser(state => ({
          ...state,
          isLoggedIn: false,
          isUserFirstTime: false,
        }));
      } catch (error) {
        setUser(state => ({
          ...state,
          isLoggedIn: false,
          isUserFirstTime: false,
        }));
      }
    };
  }, []);

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.Image
        source={require('../../assests/Icons/logo_1.png')}
        style={{width: moderateScale(140), height: moderateScale(140)}}
        useNativeDriver={true}
        iterationCount={1}
        // duration={1500}
        // delay={500}
        animation="fadeInDownBig"
      />
    </View>
  );
};

export default SplashLoading;

const styles = StyleSheet.create({});
