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

// function ContactUs({navigation}) {
//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
// // 

//     return (
//         <View style={{flex:1}}>
//         <View style={styles.header}>
//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(28)}
//             color={colors.black}
//             onPress={() => navigation.goBack()}
//           />
//         </View>

//         <View style={styles.checkoutHeadingContainer}>
//           <Text style={styles.checkoutHeading}>Contact Us</Text>
//         </View>
//         {/* transparent arrow to center the heading */}
//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(36)}
//             color={'transparent'}
//           />    
//         </View>
//       </View>
//         <ScrollView>
//             <View style={styles.container}>

//                 <View style={styles.detailsView}>
//                     <View style={styles.details}>
//                         <View>
//                             <Text style={styles.heading}>
//                                 Outlet Phone
//                             </Text>
//                             <Text style={styles.text}>
//                                 0303-0558883
//                             </Text>
//                         </View>
//                         <View style={styles.margin}>
//                             <Text style={styles.heading}>
//                                 Helpline
//                             </Text>
//                             <Text style={styles.text}>
//                                 03111222393
//                             </Text>
//                         </View>
//                     </View>
//                     <View style={styles.margin}>
//                         <Text style={styles.heading}>
//                             Karachi Outlet Address:
//                         </Text>
//                         <Text style={styles.text}>
//                             8th Commercial Lane, Zamzama Commercial Area,
//                             Defence Phase 5, Karachi City, Sindh 75500,
//                             Pakistan (Albaraka bank lane)
//                         </Text>
//                         <View style={styles.seperator} />
//                         <View style={styles.socials}>
//                             <View style={{ justifyContent: 'center' }}>
//                                 <Text style={styles.heading}>
//                                     Our Socials
//                                 </Text>
//                             </View>
//                             <View style={styles.socialIcon}>
//                                 <View style={{ margin: moderateScale(5) }}>
//                                     <Image source={require('../../assests/images/facebook.png')} />
//                                 </View>
//                                 <View style={{ margin:moderateScale( 5) }}>
//                                     <Image source={require('../../assests/images/twitter.png')} />
//                                 </View>
//                                 <View style={{ margin: moderateScale(5) }}>
//                                     <Image source={require('../../assests/images/instagram.png')} />
//                                 </View>
//                             </View>
//                         </View>

//                     </View>

//                 </View>

//                 <View style={styles.messageBox}>
//                     <Text style={styles.messageText}>Send us a message</Text>


//                     <Text style={styles.label}>
//                         Name
//                     </Text>

//                     <Input placeholder={"Enter Name"} backgroundColor={colors.deliveriAddressTextInputColor}  />
//                     <Text style={styles.label}>
//                         Email Address
//                     </Text>

//                     <Input placeholder={"Enter Email Address"} backgroundColor={colors.deliveriAddressTextInputColor}  />
//                     <Text style={styles.label}>
//                         Message
//                     </Text>

//                     <Input placeholder={"Type your message here"} multiline={true} numberOfLines={4}
//                         newStyles={[styles.textarea, { height: windowWidth * 0.3, }]} backgroundColor={colors.deliveriAddressTextInputColor}  />
//                     <CustomButton mystyle={styles.button} text={"SEND"} />
//                 </View>


//             </View>
//         </ScrollView>

//         </View>
//     );
// }
// export default ContactUs;

// const styles = StyleSheet.create({
//     container:
//     {
//         // flex: 1,
//         backgroundColor: colors.lightGray
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
//     detailsView: {
//         backgroundColor: 'white',
//         marginHorizontal: moderateScale(15),
//         marginVertical: moderateScale(15),
//         flex: 1

//     },
//     heading:
//     {
//         fontFamily: "Inter-Bold",
//         fontSize: moderateScale(13),
//         color: colors.black
//     },
//     text:
//     {
//         fontFamily: 'inter-Medium',
//         fontSize: moderateScale(13),
//         color:colors.darkGrayOpacitySix
//     },
//     margin:
//     {
//         paddingHorizontal: moderateScale(20)
//     },
//     seperator:
//     {
//         marginTop: moderateScale(15),
//         backgroundColor: colors.gray,
//         height: 1,
        
//     },

//     socialIcon:
//     {
//         flexDirection: 'row',
//         marginVertical: moderateScale(15),
//     },

//     details:
//     {
//         flexDirection: 'row',
//         padding: moderateScale(20)
//     },
//     socials:
//     {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     messageBox: {
//         backgroundColor: 'white',
//         flex: 1,
//         paddingHorizontal:20
//     },
//     messageText: {
//         fontFamily: 'Inter-SemiBold',
//         fontSize: moderateScale(16),
//         textAlign: 'center',
//         color: colors.black,
//         marginTop: moderateScale(15),
//     },
//     label: {
//         fontFamily: 'Inter-Bold',
//         fontSize: moderateScale(12),
//         // marginHorizontal: moderateScale(20),
//         margin: moderateScale(5),
//         marginTop: moderateScale(10),
//         color:colors.darkGrayOpacityFour
//     },
//     textarea:
//     {
//         textAlignVertical: 'top',
//         borderRadius: moderateScale(6),

//         backgroundColor: colors.lightGray,

//     },
//     button:
//     {
//         backgroundColor: colors.primary,
//         marginTop: moderateScale(12),
//         marginBottom:moderateScale(20),
//         borderRadius: moderateScale(6)
//     }
// });