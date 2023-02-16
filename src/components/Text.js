import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import AppStyles from '../theme/AppStyles';
// import AppStyles from '../utils/AppStyle';
// import {Text as RNText} from 'react-native-paper';
import colors from '../theme/colors';
import { fontFamily } from '../theme/fonts';

const Text = ({text, children, style, variant}) => {
  let content = children || text;

  let textStyle = {};
  switch (variant) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'semi_bold':
      textStyle = styles.semi_bold;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <RNText numberOfLines={10} style={{...textStyle, ...passedStyles}}>
      {content}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Inter-Light',
    color:'#171717',
  },
  bold: {
    fontFamily: AppStyles.fontName.regular,
    color:'#171717',
  },
  semi_bold: {
    fontFamily: AppStyles.fontName.regular,
    color:'#171717',
  },
});
