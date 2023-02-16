import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import colors from '../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import AppStyles from '../theme/AppStyles'
  


const Button = ({showIcon ,text, onPress,mystyle,textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btnContainerStyle,{...mystyle}]}>
        <Text style={[styles.btnTextStyle ,{...textStyle}]}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    // backgroundColor: colors.primary,
    paddingVertical: moderateScale(12),
    width:'90%',
    alignSelf:'center'
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: moderateScale(15),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: AppStyles.fontName.bold
  }
})

export default Button