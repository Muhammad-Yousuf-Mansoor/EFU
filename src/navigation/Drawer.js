import React from 'react';

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import WalkThrough from '../screens/WalkThrogh';
import Login from '../screens/Login';
import Header from '../components/Header';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import ContactUs from '../screens/ContactUs';
import StoreLocation from '../screens/StoreLocation';
import ExchangePolicy from '../screens/ExchangePolicy';
import Faqs from '../screens/Faqs';
import ChangePassword from '../screens/ChangePassword';
import Search from '../screens/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconRem from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyles from '../theme/AppStyles';
function Drawer() {
  const drawer = [
    {
      screenName: 'Notifications',
      moveTo: 'Notification',
      icon: require('../assests/DrawerIcon/notif.png'),
    },
    {
      screenName: 'Store Location',
      moveTo: 'StoreLocation',
      icon: require('../assests/DrawerIcon/storelocation.png'),
    },
    {
      screenName: 'Change Password',
      moveTo: 'ChangePassword',
      icon: require('../assests/DrawerIcon/password.png'),
    },
    {
      screenName: 'Contact Us',
      moveTo: 'ContactUs',
      icon: require('../assests/DrawerIcon/supp.png'),
    },
    {
      screenName: 'Why buy from Khazanay?',
      moveTo: 'Faqs',
      icon: require('../assests/DrawerIcon/checkForm.png'),
    },
    {
      screenName: 'Return & Exchange Policy',
      moveTo: 'ExchangePolicy',
      icon: require('../assests/DrawerIcon/return.png'),
    },
  ];

  const navigation = useNavigation();
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.item.moveTo);
        }}>
        <View style={styles.drawerBox}>
          <Image source={item.item.icon} />
          <View style={styles.drawerView}>
            <Text style={styles.drawerText}>{item.item.screenName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View
            style={{
              marginLeft: moderateScale(12),
              marginTop: moderateScale(12),
              alignItems: 'center',
            }}>
            <Ionicons
              name="arrow-back"
              size={moderateScale(28)}
              color={colors.white}
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.checkoutHeadingContainer}>
            <Text style={styles.checkoutHeading}>Settings</Text>
          </View>

          <View style={{marginLeft: moderateScale(12)}}>
            <Ionicons
              name="arrow-back"
              size={moderateScale(36)}
              color={'transparent'}
            />
          </View>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.profileView}>
            <View style={styles.textView}>
              <Text style={styles.username}>Roy Hawkins</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{marginTop: moderateScale(50)}}>
            <FlatList
              data={drawer}
              renderItem={item => renderItem(item)}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              ItemSeparatorComponent={() => (
                <View
                  style={{backgroundColor: '#ccc', height: moderateScale(0.5)}}
                />
              )}
              showsVerticalScrollIndicator={false}
              // showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: moderateScale(100),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(22),
    marginBottom: moderateScale(10),
    backgroundColor: colors.black,
    height: moderateScale(120),
  },
  checkoutHeadingContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(12),
    marginTop: moderateScale(12),
  },
  checkoutHeading: {
    fontFamily: AppStyles.fontName.bold,
    fontSize: moderateScale(16),
    color: colors.white,
  },
  profileBox: {
    width: moderateScale(400),
    marginTop: moderateScale(80),
    alignItems: 'center',
    position: 'absolute',
    left: moderateScale(7),
    zIndex: 1,
  },

  profileView: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    width: '90%',
    paddingVertical: moderateScale(15),
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(50),
    justifyContent: 'center',
  },
  textView: {
    paddingHorizontal: moderateScale(20),
    justifyContent: 'center',
  },
  username: {
    fontFamily: 'Inter-SemiBold',
    fontSize: moderateScale(18),
    color: 'black',
  },
  accountinfor: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(12),
  },
  drawerBox: {
    paddingVertical: moderateScale(15),
    marginHorizontal: moderateScale(23),
    flexDirection: 'row',
  },
  drawerView: {
    justifyContent: 'center',
    marginLeft: moderateScale(10),
  },
  drawerText: {
    fontSize: moderateScale(14),
    fontFamily: AppStyles.fontName.medium,
    color: colors.drawerText,
  },
});
