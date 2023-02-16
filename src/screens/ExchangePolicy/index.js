// import React from 'react';
// import { Image, Text, TextInput, TouchableOpacity, FlatList, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
// import { CartItem, product } from '../../config';
// import CustomButton from '../../components/CustumButton';
// import Input from '../../components/Input'
// import colors from '../../theme/colors';
// import fontFamily from '../../theme/fonts';
// import Header from '../../components/Header';
// import { moderateScale } from 'react-native-size-matters';
// import AppStyles from '../../theme/AppStyles';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function ExchangePolicy({navigation}) {
//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;

//     return (

//         <View style={styles.container}>
//              <View style={styles.header}>
//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(28)}
//             color={colors.black}
//             onPress={() => navigation.goBack()}
//           />
//         </View>

//         <View style={styles.checkoutHeadingContainer}>
//           <Text style={styles.checkoutHeading}>Return & Exchange Policy</Text>
//         </View>

//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(36)}
//             color={'transparent'}
//           />
//         </View>
//       </View>
//             <ScrollView style={styles.mainBox}>
//                 <View>
//                     <Image 
//                     source={require('../../assests/images/policy.png')}
//                     style={{ width: '100%', height: windowHeight * 0.3 }} 
//                     />
//                 </View>
//                 <View style={{ marginTop: moderateScale(20), }}>
//                     <View>
//                         <Text style={styles.heading}>
//                             Our Policy
//                         </Text>
//                         <Text style={styles.text}>
//                             Facing size issues? Don't like the product? Wrong or defective product
//                             delivered?{'\n'} Don't worry! Khazanay offers a 7-day hassle free return policy.
//                             To qualify for a refund or exchange, all items must be unworn, unused and
//                             with product tag attached.{'\n'}{'\n'} If you wish to return or exchange your online
//                             order, please complete the return form and include it with your return
//                             shipment. Don't have a return form? Download from the link below and print
//                             it.{'\n'} {'\n'}For further assistance, please email us at cs@khazanay.com or call us
//                             at 03111-222-393 (between 10am to 5pm Monday - Saturday)
//                         </Text>
//                     </View>



//                 </View>
//                 {/* <View> */}
//                     <CustomButton mystyle={styles.button} text={"DOWNLOAD RETURN FORM"} />
//                 {/* </View> */}
                
//             </ScrollView>
//         </View>
//     );
// }
// export default ExchangePolicy;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.lightGray,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: moderateScale(22),
//       },
//       checkoutHeadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       checkoutHeading: {
//         fontFamily: AppStyles.fontName.bold,
//         fontSize: moderateScale(16),
//         color: colors.darkGrayFullOpacity,
//       },
//     mainBox:
//     {
//         marginVertical:moderateScale( 22),
//         marginHorizontal:moderateScale(20),
//         // flex: 1,
//     },
//     heading: {
//         fontSize:moderateScale( 16),
//         fontFamily: 'Inter-Bold',
//         color: colors.black
//     },
//     text: {
//         fontSize: moderateScale(14),
//         fontFamily: 'Inter-Medium',
//         color: colors.black,
        
//     }, button:
//     {
//         backgroundColor: colors.primary,
//         marginTop:moderateScale(32),
//         marginBottom:moderateScale(178)
//     }
// });