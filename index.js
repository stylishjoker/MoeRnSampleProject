/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import ReactMoE from 'react-native-moengage';
import {isPushFromMoEngage} from './src/utils/moengage-util';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  if (isPushFromMoEngage(remoteMessage)) {
    ReactMoE.passFcmPushPayload(remoteMessage.data);
    return;
  }
});

AppRegistry.registerComponent(appName, () => App);
