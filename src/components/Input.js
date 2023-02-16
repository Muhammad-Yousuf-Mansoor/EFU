import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import AppStyles from '../theme/AppStyles';
import  Colors from '../theme/colors';
import fontFamily from '../theme/fonts';

const Input = (
    {
      value,
      autoCapitalize,
      onChangeText,
      placeholder,
      secureTextEntry,
      error,
      errorStyles,
      onSubmitEditing,
      rel,
      returnKeyType,
      keyboardType,
      newStyles,
      autoFocus,
      multiline,
      maxLength,
      backgroundColor,
      placeholderTextColor,
      editable
    }) => {
  const {textInput, errorStyle} = InputFieldStyles;
  
  return (
      <View style={{ }}>
        <View style={{marginHorizontal:moderateScale(0)}}>
          <TextInput
              ref={rel}
              returnKeyType={returnKeyType}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              onSubmitEditing={onSubmitEditing}
              placeholder={placeholder}
              autoCorrect={false}
              value={value}
              onChangeText={onChangeText}
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              autoCapitalize={ autoCapitalize ? autoCapitalize : 'none' }
              style={ error ? ( (errorStyles) ? errorStyles : errorStyle ) : (newStyles ? newStyles : textInput)}
              autoFocus={autoFocus}
              multiline={multiline}
              maxLength={maxLength}
              editable={editable}
              placeholderTextColor={placeholderTextColor}
              backgroundColor={backgroundColor}
              color="black"
              
          />
        </View>
      </View>
  );
};

InputFieldStyles
const InputFieldStyles = {
  inputHeight: {
    height:moderateScale( 50)
  },
  textInput: {
    backgroundColor: Colors.gray,
    color: Colors.grayOpacityHundred,
    fontFamily:AppStyles.fontName.semi,
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(7)
  },
  errorStyle: {
    height: moderateScale(35),
    borderColor: 'red',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(2),
    color: '#000',
    paddingHorizontal: moderateScale(8)
  },
  requireField: {
    color: 'red'
  }
};

export default Input;