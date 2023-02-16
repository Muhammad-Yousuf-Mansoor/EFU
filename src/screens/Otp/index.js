import React, {useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  PixelRatio,
  Switch,
  ScrollView,
  Platform
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustumButton';
import colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import Text from '../../components/Text';
import AppStyles from '../../theme/AppStyles';
import {UserContext} from '../../context/UserContext';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { AllowNumbers } from '../../utils/regex';
import { time } from '../../utils/validator';
const Otp = () => {
 
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const [_, setUser] = useContext(UserContext);
  const resentTimeout = 30;
  // const email = route.params.email || '';
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(true);
  const [clearInput, setClearInput] = useState(false);
  const [counter, setCounter] = React.useState(resentTimeout);
  const [error, setError] = useState(null);
  const [_code, setCode] = useState('');
  const [ValidationError, setValidationError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let countTimer;
    if (counter > 0) {
      countTimer = setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setResendLoading(false);
      countTimer && clearTimeout(countTimer);
    }
    return () => {
      countTimer && clearTimeout(countTimer);
    };
  }, [counter]);
  const onCodeChanged = (code) => {
    code?.length === 4 && AllowNumbers.test(code)
      ? handleSubmit(parseInt(code))
      : setValidationError(true);
  };

  const handleSubmit = async (code) => {
    if (AllowNumbers.test(code)) {
      setValidationError(false);
      setLoading(true);
      setError(null);
      try {
        const data = {
          email: email,
          code: code.toString(),
        };
        // const response = await APICALLS.otp(data);
        // if (response.status == 200 && response.message == 'ok') {
        //   setClearInput(true);
        //   setCode('');
        //   setLoading(false);
        //   showToast('success', 'Verified', 'OTP Verified!');
        //   navigation.navigate('NewPassword', {
        //     email: email,
        //   });
        // } else {
        //   setLoading(false);
        //   setError(response?.error?.message);
        //   showToast('error', 'Invalid Code', response?.error?.message);
        // }
      } catch (error) {
        setLoading(false);
        // setError(error?.response?.data?.message);
        // showToastMsg(error);
      }
    } else {
      setValidationError(true);
    }
  };

  const resendSubmit = async () => {
    setResendLoading(true);
    setCounter(resentTimeout);
    setError(null);
    try {
      const data = {
        email: email ? email : '',
      };
      // const response = await APICALLS.forgetPassword(data);
      // if (response.status == 200 && response.message == 'ok') {
      //   showToast('success', 'Success', response.data.otp);
      // } else {
      //   showToast('error', 'Problem', response?.error?.message);
      // }
    } catch (error) {
      // showToastMsg(error);
    }
  };

  return (
    <>
      

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
            <Text style={styles.heading}>Verification</Text>
          </View>

          <View>
            <Text style={styles.label}>A verification code was sent to your number</Text>
          </View>
          <View style={styles.optView}>
            <OTPInputView
              style={styles.OTPInputView}
              pinCount={4}
              autoFocusOnLoad
              editable={!isLoading}
              codeInputHighlightStyle={styles.codeInputHighlightStyle}
              codeInputFieldStyle={styles.codeInputFieldStyle}
              onCodeFilled={onCodeChanged}
              clearInputs={clearInput}
            />
          </View>
          <View style={styles.optView}>
            {error ? (
              <Text style={styles.errorText}>Please enter correct verification code</Text>
            ) : ValidationError ? (
              <Text style={styles.errorText}>4 digits Verification code is required</Text>
            ) : null}
          </View>

          <View style={{marginTop: moderateScale(10)}}>
            <CustomButton
              mystyle={{
                backgroundColor: colors.primary,
                marginTop: moderateScale(10),
                borderRadius: moderateScale(10),
              }}
              textStyle={{color:colors.white,fontFamily:AppStyles.fontName.semi}}
              text={'Verify'}
              onPress={() => {
                setUser(state => ({
                  ...state,
                  isUserFirstTime: true,
                  isLoggedIn: true,
                }));
              }}></CustomButton>
          </View>
          <View style={{alignSelf:'center',marginTop:moderateScale(10)}}>
          {resendLoading ? (
            <Text style={styles.resendText}>{time(counter)} </Text>
          ) : (
            <TouchableOpacity
            onPress={() => resendSubmit()}
            style={styles.resendText}>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
          )}
          </View>

          
        </KeyboardAwareScrollView>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {},
  logo: {
    alignSelf: 'center',
    margin: moderateScale(50),
    width:moderateScale(170),
    height:moderateScale(170)
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
  optView: {
    paddingHorizontal: moderateScale(20),
  },
  OTPInputView: {
    height: moderateScale(80),
    alignItems: 'center',
  },
  codeInputHighlightStyle: {
    borderColor: colors.primary,
    borderWidth:moderateScale(2),
    padding: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInputFieldStyle: {
    fontSize: moderateScale(20),
    // borderColor: 'rgba(142, 124, 124, 0.9)',
    backgroundColor:'rgba(142, 124, 124, 0.08)',
    borderRadius: moderateScale(5),
    height: moderateScale(60),
    width: moderateScale(60),
    color: 'black',
  },
  errorText: {
    color: 'red',
    fontFamily:AppStyles.fontName.semi,
  },
  resendText: {
    color: colors.primary,
    fontFamily:AppStyles.fontName.semi,
  },
});
