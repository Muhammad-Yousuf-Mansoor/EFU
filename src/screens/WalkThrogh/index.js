import React, {useState, useRef, StatusBar, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {slides} from '../../config';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomButton from '../../components/CustumButton';
import colors from '../../theme/colors';
import {size} from '../../theme/fonts';
import {useIsFocused} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../context/UserContext';
import AppStyles from '../../theme/AppStyles';
const App = () => {
  const [_, setUser] = useContext(UserContext);
  const [showRealApp, setShowRealApp] = useState(false);
  const isFocused = useIsFocused();
  const slider = useRef();
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.setItem('userLoginFirst', 'true');
      } catch (e) {}
    };
    bootstrapAsync();
  }, [isFocused]);
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <ImageBackground
        source={require('../../assests/images/background.png')}
        style={styles.renderItemMainContainer}>
        <View style={styles.ImageStyle}>
          <Image
            source={require('../../assests/Icons/logo.png')}
            resizeMode={'contain'}
            style={{
              width: moderateScale(170),
              height: moderateScale(170),
            }}
          />
        </View>
        <View>
          <Text style={styles.introTextStyle}>{item.text}</Text>
          <View style={{marginHorizontal: moderateScale(50)}}>
            <Text style={styles.desText}>{item.description}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };
  const RenderNext = () => {
    return (
      <View>
        <CustomButton
          text={'NEXT'}
          mystyle={{backgroundColor: colors.primary}}
          onPress={() =>
            slider.current.goToSlide(slider.current.state.activeIndex + 1, true)
          }></CustomButton>
      </View>
    );
  };

  const RenderSkip = () => {
    return (
      <View>
        <CustomButton
          text={'Skip'}
          onPress={() => {
            setUser(state => ({
              ...state,
              isLoggedIn: false,
              isUserFirstTime: false,
            }));
          }}></CustomButton>
      </View>
    );
  };

  const RenderDone = () => {
    return (
      <View style={{marginBottom: '12.5%'}}>
        <CustomButton
          text={'DONE'}
          mystyle={{backgroundColor: colors.primary, borderRadius: 10}}
          onPress={() => {
            setUser(state => ({
              ...state,
              isLoggedIn: false,
              isUserFirstTime: false,
            }));
          }}></CustomButton>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        onSkip={onSkip}
        showSkipButton={true}
        activeDotStyle={[styles.dotStyle, {backgroundColor: colors.primary}]}
        dotStyle={styles.dotStyle}
        buttonTextStyle={{color: 'red'}}
        bottomButton
        renderNextButton={() => RenderNext()}
        renderSkipButton={() => RenderSkip()}
        renderDoneButton={() => RenderDone()}
        ref={ref => (slider.current = ref)}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    padding: moderateScale(10),
    justifyContent: 'center',
  },
  imageBox: {
    width: '100%',
    height: moderateScale(350),
  },
  paragraphStyle: {
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
  introImageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  introTextStyle: {
    fontSize: moderateScale(20),
    color: colors.grayOpacityHundred,
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: '500',
    fontFamily: AppStyles.fontName.regular,
  },
  desText: {
    fontSize: moderateScale(14),
    fontFamily: AppStyles.fontName.semi,
    color: colors.grayOpacityEighty,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: moderateScale(10),
  },
  introTitleStyle: {
    fontSize: size.headerText,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dotStyle: {
    marginBottom: moderateScale(25),
    backgroundColor: 'gray',
    width: moderateScale(15),
    height: moderateScale(15),
    borderRadius: moderateScale(10),
    // position:'absolute'
  },
  ImageStyle: {
    // width: '100%',
    alignItems: 'center',
    marginTop: moderateScale(50),
  },
  renderItemMainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: moderateScale(100),
  },
});
