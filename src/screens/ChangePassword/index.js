// import React, {useEffect, useState} from 'react';
// import {
//   Image,
//   Text,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   View,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import {Subscription} from '../../config';
// import CustomButton from '../../components/CustumButton';
// // import Input from '../../components/Input'
// import colors from '../../theme/colors';
// import fontFamily from '../../theme/fonts';
// import Header from '../../components/Header';
// import Input from '../../components/InputWithText';
// import {moderateScale} from 'react-native-size-matters';
// import AppStyles from '../../theme/AppStyles';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useFormik, validateYupSchema, validationSchema } from 'formik';
// // import * as yup from 'yup';
// import ErrorText from '../../components/ErrorText';
// function ChangePassword({navigation}) {

//   return (
//     <View style={styles.container}>
      

//       {/* <View style={{flex:1}}> */}
//       <View style={styles.labelBox}>
//         <Text style={styles.text}>Current Password</Text>
//       </View>
    
//     </View>
//   );
// }
// export default ChangePassword;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: '100%',
//     width: '100%',
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: moderateScale(22),
//   },
//   checkoutHeadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkoutHeading: {
//     fontFamily: AppStyles.fontName.bold,
//     fontSize: moderateScale(16),
//     color: colors.darkGrayFullOpacity,
//   },
//   text: {
//     fontFamily: 'Inter-Bold',
//     fontSize: moderateScale(12),
//     color: colors.darkGrayOpacityFour,
//   },
//   labelBox: {
//     marginHorizontal: moderateScale(20),
//     marginVertical: moderateScale(10),
//   },
//   CustomButtonView:{
//       width: '100%',
//       position: 'absolute',
//       justifyContent: 'center',
//       bottom: moderateScale(10),
//   }
// });
