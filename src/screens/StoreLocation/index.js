// import React from 'react';
// import {
//   Image,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   View,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import {CartItem, product} from '../../config';
// import CustomButton from '../../components/CustumButton';
// import Input from '../../components/Input';
// import colors from '../../theme/colors';
// import fontFamily from '../../theme/fonts';
// import Header from '../../components/Header';
// import Text from '../../components/Text';
// import AppStyles from '../../theme/AppStyles';
// import {moderateScale} from 'react-native-size-matters';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {NavigationContainer} from '@react-navigation/native';

// function StoreLocation({navigation}) {
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(28)}
//             color={colors.black}
//             onPress={() => navigation.goBack()}
//           />
//         </View>

//         <View style={styles.checkoutHeadingContainer}>
//           <Text style={styles.checkoutHeading}>Store Location</Text>
//         </View>

//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(28)}
//             color={'transparent'}
//           />
//         </View>
//       </View>
//       <View style={styles.mainBox}>
//         <View>
//           <Image
//             source={require('../../assests/images/location.png')}
//             style={{width: '100%', height: windowHeight * 0.3}}
//           />
//         </View>
//         <View
//           style={{marginTop: moderateScale(20), marginLeft: moderateScale(20)}}>
//           <View>
//             <Text style={styles.heading}>Outlet Phone</Text>
//             <Text style={styles.text}>0330-23635145</Text>
//           </View>

//           <View style={{marginTop: windowHeight * 0.03}}>
//             <Text style={styles.heading}>Store Timeing</Text>
//             <Text style={styles.text}>
//               Monday: 11AM -- 9PM {'\n'}
//               Monday: 11AM -- 9PM{'\n'}
//               Monday: 11AM -- 9PM{'\n'}
//               Monday: 11AM -- 9PM{'\n'}
//               Monday: 11AM -- 9PM{'\n'}
//               Monday: 11AM -- 9PM{'\n'}
//               Monday: 11AM -- 9PM
//             </Text>
//           </View>
//           <View style={{marginTop: windowHeight * 0.03, width: '90%'}}>
//             <Text style={styles.heading}>Karachi Outlet Address</Text>
//             <Text style={styles.text}>
//               8th Commercial Lane, Zamzama Commercial Area, Defence Phase 5,
//               Karachi City, Sindh 75500, Pakistan (Albaraka bank lane)
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }
// export default StoreLocation;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.lightGray,
//   },
//   header:{
//     flexDirection:"row",
//     justifyContent:"center",
//     marginTop:moderateScale(22),
//     marginBottom:10
// },
// checkoutHeadingContainer:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center",
// },
// checkoutHeading:{
//   fontFamily:AppStyles.fontName.bold,
//     fontSize:moderateScale(16),
//     color:colors.darkGrayFullOpacity
// },
//   mainBox: {
//     marginHorizontal: moderateScale(15),
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   heading: {
//     fontSize: moderateScale(14),
//     fontFamily: 'Inter-Bold',
//     color: colors.black,
//   },
//   text: {
//     fontSize: moderateScale(14),
//     fontFamily: AppStyles.fontName.medium,
//     color: colors.darkGrayHigherOpacity,
//   },
// });
