// import React, { useEffect, useState } from 'react';
// import { Image, Text, TextInput, StatusBar, TouchableOpacity, FlatList, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
// import { Subscription } from '../../config';
// import CustomButton from '../../components/CustumButton';
// // import Input from '../../components/Input'
// import colors from '../../theme/colors';
// import fontFamily from '../../theme/fonts';
// import Header from '../../components/Header';
// import Input from '../../components/InputWithText';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import ProductCardVertically from '../../components/ProductCardVertically'
// import { moderateScale } from 'react-native-size-matters';

// function Search() {

//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
//     return (

//         <View style={styles.container}>
//             <StatusBar barStyle="dark-content" backgroundColor={colors.lightGray} />
//             <View style={styles.labelBox}>
//                 <Text style={styles.text}>
//                     Search
//                 </Text>
//             </View>
//             <View style={styles.searchSection}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Search your product"
//                     underlineColorAndroid="transparent"
//                     placeholderTextColor={colors.black}
//                 />
//                 <Icon style={styles.searchIcon} name="search" size={moderateScale(20)} color="#000" />
//             </View>
//             <View style={{ marginTop: '7%' }} >

//             </View>
//             <ProductCardVertically />

            
//         </View>

//     );
// }
// export default Search;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.lightGray,
//         marginBottom: '25%',
//     },
//     text: {
//         fontFamily: 'Inter-Bold',
//         fontSize: moderateScale(12)
//     },
//     searchSection: {

//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginHorizontal: moderateScale(12),
//         borderRadius: moderateScale(6),
//         backgroundColor: "#e7e7e7",
//         paddingHorizontal: moderateScale(13),
//     },
//     searchIcon: {
//         padding: moderateScale(10),
//     },
//     input: {
//         borderRadius: moderateScale(6),
//         paddingTop: moderateScale(10),
//         paddingRight: moderateScale(10),
//         paddingBottom: moderateScale(10),
//         paddingLeft: 0,
//         height: moderateScale(50),
//         color: colors.black,
//     },
//     labelBox:
//     {
//         marginHorizontal: moderateScale(20),
//         marginVertical:moderateScale(5),

//     },

// });