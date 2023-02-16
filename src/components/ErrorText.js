import React from 'react';
import {TextStyle, StyleSheet} from 'react-native';
import {FormikProps} from 'formik';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../theme/AppStyles';
import Text from './Text';

export const ErrorText = ({name, formik, style}) => {
  console.log("formik error",formik.errors[name])
    return formik.touched[name] && formik.errors[name] ? (
      <Text style={{...styles.text, ...style}}>{formik.errors[name]}</Text>
    ) : null;
  };
  export default ErrorText;
  const styles = StyleSheet.create({
    text: {
      color: 'red',
      fontSize: moderateScale(10),
      fontFamily:AppStyles.fontName.regular
    },
  });