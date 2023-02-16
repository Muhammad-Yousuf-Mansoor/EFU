// import React from 'react';
// import { Image, Text, TextInput, TouchableOpacity, FlatList, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
// import { CartItem, product } from '../../config';
// import CustomButton from '../../components/CustumButton';
// import Input from '../../components/Input'
// import colors from '../../theme/colors';
// import fontFamily from '../../theme/fonts';
// import Header from '../../components/Header';
// import { Notification } from '../../config';
// import {moderateScale} from 'react-native-size-matters';
// import AppStyles from '../../theme/AppStyles';
// import Ionicons from 'react-native-vector-icons/Ionicons'

// function NotificationScreen({navigation}) {
//     const renderItem = (item) => {
//         return (
//             <View key={item.item.id} style={{ flexDirection: 'row', margin: moderateScale( 10), }}>
//                 <View>
//                     {item.item.notifyType === 'order'
//                         ? <Image source={require('../../assests/images/cart.png')} />
//                         : <Image source={require('../../assests/images/Group2919.png')} />}
//                 </View>
//                 <View style={{ marginLeft: moderateScale( 10) }}>
//                     <Text style={styles.heading}>
//                         {item.item.notifyOrder}
//                     </Text>
//                     <View style={{width:'85%', }}> 
//                     <Text style={styles.orderText}>
//                         {item.item.orderNo}
//                     </Text> 
//                     </View>
//                     <View style={{ marginTop:moderateScale(10)}}> 
//                     <Text  style={styles.dateText}>
//                         {item.item.Date}
//                     </Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
//     return (

//         <View style={styles.container}>

// <View style={styles.header}>
//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(28)}
//             color={colors.black}
//             onPress={() => navigation.goBack()}
//           />
//         </View>

//         <View style={styles.checkoutHeadingContainer}>
//           <Text style={styles.checkoutHeading}>Notification</Text>
//         </View>

//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(36)}
//             color={'transparent'}
//           />
//         </View>
//       </View>

//             <View style={{ marginTop: moderateScale(15) }}>
//                 <FlatList
//                     data={Notification}
//                     renderItem={(item) => renderItem(item)}
//                     keyExtractor={(item, index) => {
//                         return index.toString();
//                     }}
//                     ItemSeparatorComponent={() => (
//                         <View style={{ backgroundColor: colors.gray, height: moderateScale(0.5)}} />
//                     )} />
//             </View>
//             <View style={{ backgroundColor: colors.gray, height: moderateScale(0.5)}} />
//         </View>

//     );
// }
// export default NotificationScreen;

// const styles = StyleSheet.create({
//     container:
//     {
//         flex: 1,
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
//     heading: {
//         fontSize: moderateScale(15),
//         fontFamily: 'Inter-SemiBold',
//         color: colors.black
//     },
//     orderText: {
//         fontSize: moderateScale(13),
//         fontFamily: 'Inter-Medium',
//         color: colors.black
//     },
//     dateText: {
//         fontSize: moderateScale(13),
//         fontFamily: 'Inter-Medium',

//     }
// });