import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Colors from '../theme/colors';
import fontFamily from '../theme/fonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../theme/colors';
import { moderateScale } from 'react-native-size-matters';
import AppStyles from '../theme/AppStyles';

const Input = (
    {
        value,
        autoCapitalize,
        changeText,
        placeholder,
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
        onBlur,
    }) => {
        const [passwordVisibility, setPasswordVisibility] = useState(true);
        const [rightIcon, setRightIcon] = useState('eye-slash');
        console.log(passwordVisibility,rightIcon)

        const handlePasswordVisibility = () => {
            if (rightIcon === 'eye-slash') {
              setRightIcon('eye');
              setPasswordVisibility(!passwordVisibility);
            } else if (rightIcon === 'eye') {
              setRightIcon('eye-slash');
              setPasswordVisibility(!passwordVisibility);
            }
          };
    return (
    
        <View style={[styles.searchSection,{borderWidth: !passwordVisibility ?  1 :0 , backgroundColor: !passwordVisibility ? 'white' :"#e7e7e7" , opacity: !passwordVisibility ? 1: 1,}]} >
            <TextInput
                style={styles.input}
                ref={rel}
                returnKeyType={returnKeyType}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onBlur={onBlur}
                onChangeText={changeText}
                underlineColorAndroid={'transparent'}
                blurOn tiline={multiline}
                maxLength={maxLength}
                secureTextEntry={passwordVisibility}
                placeholderTextColor={'#A2A2A2'}

            />

            <View>
                <TouchableOpacity onPress={() => handlePasswordVisibility()}>
                    <Icon style={styles.searchIcon} name={rightIcon} size={moderateScale(20)} color="#A2A2A2" />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    searchSection: {
      
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: moderateScale(18),
        borderRadius: moderateScale(6),
        // backgroundColor: "#e7e7e7",
        backgroundColor: 'colors.gray',
        paddingHorizontal: moderateScale(13),
    },
    searchIcon: {
        padding: moderateScale(10),

    },
    input: {
        flex: 1,
        paddingTop: moderateScale(10),
        paddingRight: moderateScale(10),
        paddingBottom: moderateScale(10),
        paddingLeft: moderateScale(0),
        fontSize: moderateScale(14),
        color: 'black',
        fontFamily:AppStyles.fontName.medium,
        borderTopLeftRadius:moderateScale(6),
        borderBottomLeftRadius: moderateScale(6)
    },
});

export default Input;