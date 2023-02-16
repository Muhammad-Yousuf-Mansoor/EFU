import React from 'react';
import {Text, View, StyleSheet, Image, StatusBar} from 'react-native';
import {size} from '../theme/fonts';
import colors from '../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AppStyles from '../theme/AppStyles';
function Header({title, onPress, backIcon}) {
  const navigation = useNavigation();

  return (
    <View style={{width: '100%'}}>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor={'white'}
        translucent={false}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colors.background,
          padding: moderateScale(10),
          height: moderateScale(50),
        }}>
        <FontAwesome
          name="navicon"
          size={moderateScale(25)}
          color={'#29262A'}
        />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.headerLogo} onPress={() => {}}>
          <Image
            style={{height: moderateScale(37), width: moderateScale(29)}}
            source={require('../assests/Icons/logo.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: size.headerText,
    color: colors.primary,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: 'bold',
  },
  renderTextHeaderMainContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    // height:70,
  },
  renderTextHeaderText: {
    fontSize: moderateScale(22),
    color: colors.white,
    fontWeight: 'bold',
    top: 0,
    textTransform: 'uppercase',
  },
  headerLogo: {
    height: moderateScale(52),
    width: moderateScale(45),

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: moderateScale(5),
  },
});
