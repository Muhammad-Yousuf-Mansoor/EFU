import React from 'react';
import {View} from 'react-native';
import WalkThrough from '../screens/WalkThrogh';
import Login from '../screens/Login';
import Header from '../components/Header';

import Home from '../screens/Home';
import Notification from '../screens/Notification';
import StoreLocation from '../screens/StoreLocation';
import Search from '../screens/Search';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconRem from 'react-native-vector-icons/Entypo';

import Chat from 'react-native-vector-icons/MaterialCommunityIcons';
import Edit from 'react-native-vector-icons/Feather';
import House from 'react-native-vector-icons/Ionicons';
import Drawer from './Drawer';

import 'react-native-gesture-handler';
import colors from '../theme/colors';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import Store from '../redux/store';
import Text from '../components/Text';
import AppStyles from '../theme/AppStyles';
import MyPolicy from '../screens/MyPolicy';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = props => {
  const cart = useSelector(state => state.cart.cart);

  const cartt = [...Store.getState().cart.cart];
  console.log('tab', props, cart);
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, IconLib}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
            color = focused ? colors.primary : colors.darkGray;
            IconLib = House;
            size = moderateScale(25);
          } else if (route.name === 'Policy') {
            iconName = focused ? 'note-text-outline' : 'note-text-outline';
            color = focused ? colors.primary : colors.darkGray;
            IconLib = MaterialCommunityIcons;
            size = moderateScale(25);
          } else if (route.name === 'Claim') {
            iconName = focused ? 'file-document-edit' : 'file-document-edit';
            color = focused ? colors.primary : colors.darkGray;
            IconLib = MaterialCommunityIcons;
            size = moderateScale(22);
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chat-outline' : 'chat-outline';
            color = focused ? colors.primary : colors.darkGray;
            IconLib = Chat;
            size = moderateScale(25);
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: moderateScale(100),
              }}>
              <Chat name={iconName} size={size} color={color} />
              <Text
                style={{
                  fontSize: moderateScale(10),
                  fontFamily: AppStyles.fontName.semi,
                  color: focused
                    ? 'rgba(41, 38, 42, 1)'
                    : 'rgba(41, 38, 42, 0.4)',
                }}>
                {route.name === 'Policy' ? 'My Policy' : route.name}
              </Text>
            </View>
          );
        },
      })}
      tabBarOptions={{
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
        }}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
        }}
        name="Policy"
        component={MyPolicy}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
        }}
        name="Claim"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
        }}
        name="Chat"
        component={Home}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
