/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification, {Importance} from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  requestPermissions: Platform.OS === 'ios',
});
messaging().onMessage(async remoteMessage => {
  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  console.log('when app open');
});
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  console.log('when app close');
  createChannels();
  handleNotification();
});

const createChannels = () => {
  PushNotification.createChannel({
    channelId: 'test-channel',
    channelName: 'Test-channel',
    importance: Importance.HIGH,
    vibrate: true,
  });
};

const handleNotification = () => {
  PushNotification.localNotification({
    channelId: 'test-channel',
    title: 'Travel Pakistan', //heading
    message: 'Travel to skardu , naran and kaghan', //text under the heading
    bigText:
      'The north of Pakistan has been one of he most tourist visited places beacuse of vast green land, mountains and light blue natural lakes',
    // color:"red",
  });
};

AppRegistry.registerComponent(appName, () => App);
