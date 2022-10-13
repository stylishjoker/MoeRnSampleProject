import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import ReactMoE from 'react-native-moengage';
import {Provider} from 'react-redux';
import store from './src/app/store';
import Counter from './src/features/counter/Counter';
import {useMoeTrackInstallUpdate} from './src/hooks/useMoeTrackInstallUpdate';
import {isPushFromMoEngage} from './src/utils/moengage-util';

const registerRemoteNotification = async () => {
  const isDeviceRegisteredForRemoteMessages =
    messaging().isDeviceRegisteredForRemoteMessages;
  if (!isDeviceRegisteredForRemoteMessages || Platform.OS === 'android') {
    await messaging().registerDeviceForRemoteMessages();

    const token = await messaging().getToken();
    ReactMoE.passFcmPushToken(token);
    console.info(`Push token is: ${token}`);
  }
};

const App = () => {
  useEffect(() => {
    ReactMoE.initialize('ODG364GC2UOEWDTAXOOG4PJK');
    ReactMoE.showInApp();
  }, []);

  useMoeTrackInstallUpdate();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (isPushFromMoEngage(remoteMessage)) {
        ReactMoE.passFcmPushPayload(remoteMessage.data!);
        console.log(`Nam ${JSON.stringify(remoteMessage.data)}`);
        return;
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    registerRemoteNotification();
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
