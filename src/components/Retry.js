import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '@react-navigation/native';
import Text from './Text';
import AppStyles from '../theme/AppStyles';

const Retry = ({isLoading, onPress, error}) => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          marginTop: moderateScale(10),
          fontFamily: AppStyles.fontName.medium,
          fontSize: moderateScale(17),
          color: colors.text,
        }}>
        Something went wrong , please retry
      </Text>
      <TouchableOpacity
        disabled={isLoading}
        onPress={onPress}
        style={styles.buttonStyle}>
        <Text style={{color: 'white', fontFamily: AppStyles.fontName.regular}}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Retry;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: moderateScale(10),
    backgroundColor: '#FFD426',
    width: moderateScale(80),
    marginTop: moderateScale(10),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: AppStyles.fontName.medium,
  },
  errorText: {
    color: AppStyles.color.text,
    fontFamily: AppStyles.fontName.medium,
    fontSize: AppStyles.fontSize.medium,
  },
  lottieStyle: {width: moderateScale(150), height: moderateScale(150)},
});
