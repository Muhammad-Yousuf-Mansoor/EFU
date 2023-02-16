import React, { useState } from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import colors from '../theme/colors';
import { HomeSliderImages } from '../config';
import { moderateScale } from 'react-native-size-matters';
function HomeSlider() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{backgroundColor:"white"}}>
<SliderBox images={HomeSliderImages}
           sliderBoxHeight={moderateScale( 200)}
           style={{height:windowHeight*0.17,  width: '95%', marginBottom:moderateScale( 18), alignSelf: 'center'}}
           dotColor={colors.primary}
           inactiveDotColor={colors.borderColor}
            
            dotStyle={{    marginLeft: -windowWidth*0.02,width:moderateScale( 10), height:moderateScale( 10), borderRadius: moderateScale(5), }}
            paginationBoxStyle={{
                bottom: 0,
                alignSelf: "flex-start",
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 0,
                paddingHorizontal:moderateScale( -20),
            }}

        />
        </View>
        

    );
}
export default HomeSlider;

const styles = StyleSheet.create({
    
});