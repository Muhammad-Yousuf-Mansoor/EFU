import React, {useContext, useState} from 'react';
import {
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  PixelRatio,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {slides} from '../../config';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomButton from '../../components/CustumButton';
import Input from '../../components/Input';
import InputIcon from '../../components/InputWithText';
import colors from '../../theme/colors';
import fontFamily from '../../theme/fonts';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import Text from '../../components/Text';
import AppStyles from '../../theme/AppStyles';
import {UserContext} from '../../context/UserContext';
import {Picker} from '@react-native-picker/picker';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../../types';
import {json} from 'stream/consumers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryFlag from 'react-native-country-flag';
import {navigate} from '../../navigation/RootNavigtaion';

const Login = () => {
  const [_, setUser] = useContext(UserContext);
  const [countryCode, setCountryCode] = useState('+92');
  const [country, setCountry] = useState('PK');
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState('');
  const [fullName, setFullName] = useState('');

  return (
    <>
      {visible && (
        <CountryPicker
          withEmoji
          withFlag
          withFilter
          withCallingCode
          onClose={() => {
            setVisible(false);
          }}
          onSelect={code => {
            console.log(code);
            setCountryCode(code.callingCode[0]);
            setCountry(code.cca2);
          }}
          visible={visible}
        />
      )}

      <ImageBackground
        source={require('../../assests/images/background.png')}
        style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#f5f5f5"
          translucent={false}
        />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.logoView}>
            <Image
              style={styles.logo}
              source={require('../../assests/Icons/logo.png')}
              resizeMode={'contain'}
            />
          </View>
          <KeyboardAwareScrollView
            style={{flex: 0.8, width: '100%'}}
            keyboardShouldPersistTaps="always">
            <View>
              <Text style={styles.heading}>Login</Text>
            </View>

            <View>
              <Text style={styles.label}>Full Name</Text>
            </View>
            <View style={styles.countryPickerView}>
              <View style={{flex: 3.5}}>
                <Input
                  placeholder="Abdul Qadir"
                  value={fullName}
                  onChangeText={value => {
                    setFullName(value);
                  }}
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Enter your Mobile Number</Text>
            </View>
            <View style={styles.countryPickerView}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                  onPress={() => {
                    setVisible(true);
                  }}>
                  <CountryFlag isoCode={country} size={moderateScale(15)} />
                  <Text style={styles.countryCodeText}>{countryCode}</Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={moderateScale(22)}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 3.5}}>
                <Input
                  placeholder="41651513826"
                  keyboardType="number-pad"
                  value={number}
                  onChangeText={text => {
                    setNumber(text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
                  }}
                />
              </View>
            </View>

            <View style={{marginTop: moderateScale(10)}}>
              <CustomButton
                mystyle={{
                  backgroundColor: colors.primary,
                  marginTop: moderateScale(10),
                  borderRadius: moderateScale(10),
                }}
                textStyle={{
                  color: colors.white,
                  fontFamily: AppStyles.fontName.semi,
                }}
                text={'Login'}
                onPress={() => {
                  navigate('Otp');
                  // setUser(state => ({
                  //   ...state,
                  //   isUserFirstTime: true,
                  //   isLoggedIn: true,
                  // }));
                }}></CustomButton>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {},
  logo: {
    alignSelf: 'center',
    margin: moderateScale(50),
    width: moderateScale(170),
    height: moderateScale(170),
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(80),
  },

  heading: {
    marginTop: moderateScale(30),
    marginLeft: moderateScale(20),
    fontSize: moderateScale(22),
    fontFamily: AppStyles.fontName.semi,
    color: colors.grayOpacityHundred,
  },
  label: {
    marginLeft: moderateScale(20),
    fontSize: moderateScale(12),
    fontFamily: AppStyles.fontName.semi,
    color: colors.grayOpacityEighty,
    margin: moderateScale(10),
  },
  accountView: {
    flex: 1,
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  accountText: {
    fontSize: moderateScale(16),
    color: '#171717',
    fontSize: moderateScale(14),
    fontFamily: 'Inter-SemiBold',
  },
  accountLink: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: moderateScale(13),
  },
  footer: {
    marginHorizontal: moderateScale(20),
    flex: 0.15,
    backgroundColor: colors.gray,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bottomButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  forgetText: {
    marginHorizontal: moderateScale(24),
    alignSelf: 'flex-end',
    fontSize: moderateScale(13),
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
  },
  countryPickerView: {
    backgroundColor: colors.veryLightGray,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: moderateScale(18),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    flexDirection: 'row',
  },
  emailInputStyle: {
    flex: 1,
    paddingTop: moderateScale(10),
    paddingRight: moderateScale(20),
    paddingBottom: moderateScale(10),
    paddingLeft: moderateScale(12),
    borderRadius: moderateScale(6),
    fontFamily: AppStyles.fontName.medium,
    fontSize: moderateScale(14),
  },
  countryCodePicker: {
    flexDirection: 'row',
  },
  countryCodeText: {
    fontFamily: AppStyles.fontName.semi,
    marginLeft: moderateScale(3),
  },
});
