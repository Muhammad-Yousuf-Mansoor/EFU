// import React, {useEffect} from 'react';
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
// import {CartItem, product} from '../../config';
// import CustomButton from '../../components/CustumButton';
// import Input from '../../components/Input';
// import colors from '../../theme/colors';
// import fontFamily from '../../theme/fonts';
// import Header from '../../components/Header';
// import {moderateScale} from 'react-native-size-matters';
// import AppStyles from '../../theme/AppStyles';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// function Faqs({navigation}) {
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;

//   const Faqs = [
//     {
//       id: 1,
//       question:
//         'All products are 100% original with money back guarantee. We dont sell any fake replica or copy product.',
//     },
//     {
//       id: 2,
//       question:
//         'We take original pictures of all the products which you see on our website. We don t edit any product picture to make the product look good. What you see in the pictures is exactly what you will receive.',
//     },
//     {
//       id: 3,
//       question:
//         "We offer 07 days FREE Exchange & Return policy. If you don't like what you ordered, we will return your money. Just email us at cs@khazanay.com",
//     },
//     {
//       id: 4,
//       question: 'We deliver all across Pakistan.',
//     },
//     {
//       id: 5,
//       question:
//         "All products are sorted and inspected for quality and condition. Our team makes sure that our customers don't receive any defected or faulty product.",
//     },
//     {
//       id: 6,
//       question:
//         'Shoes and Shirts are washed. You can wear them directly when you receive without having to wash them.',
//     },
//     {
//       id: 7,
//       question:
//         'We strive to offer top variety of international brands to our customers which are not available in the local market.',
//     },
//     {
//       id: 8,
//       question:
//         'We offer top condition products to our customers which are as good as buying brand new. Such condition products are very hard to find in the local market but at Khazanay you can find them easily.',
//     },
//   ];

//   function renderItem(item) {
//     return (
//       <View>
//         <View>
//           <Text></Text>

//           <Text style={styles.text}>
//             0{item.item.id}. {item.item.question}
//           </Text>
//         </View>
//       </View>
//     );
//   }
//   return (
//     <View style={{flex: 1}}>
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
//           <Text style={styles.checkoutHeading}>Why buy from Khazanay?</Text>
//         </View>

//         <View style={{marginLeft: moderateScale(12)}}>
//           <Ionicons
//             name="arrow-back"
//             size={moderateScale(36)}
//             color={'transparent'}
//           />
//         </View>
//       </View>

//       <ScrollView style={{marginTop:57,marginBottom:23}}>
//         <View style={{marginHorizontal: moderateScale(20)}}>
//           <View style={{marginTop: '5%', alignItems: 'center'}}>
//             <Image source={require('../../assests/images/Group2276.png')} />
//           </View>
//           <FlatList
//             data={Faqs}
//             renderItem={item => renderItem(item)}
//             keyExtractor={(item, index) => {
//               return index.toString();
//             }}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
// export default Faqs;
// const styles = StyleSheet.create({
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
//     fontFamily: 'Inter-Medium',
//     color: 'black',
//     fontSize: moderateScale(14),
//   },
// });
