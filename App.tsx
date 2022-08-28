import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ReactMoE from 'react-native-moengage';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useMoeTrackInstallUpdate} from './src/hooks/useMoeTrackInstallUpdate';
import {isPushFromMoEngage} from './src/utils/moengage-util';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const registerRemoteNotification = async () => {
  const isDeviceRegisteredForRemoteMessages =
    messaging().isDeviceRegisteredForRemoteMessages;
  if (!isDeviceRegisteredForRemoteMessages || Platform.OS === 'android') {
    await messaging().registerDeviceForRemoteMessages();

    const token = await messaging().getToken();
    ReactMoE.passFcmPushToken(token);
    console.log(`Push token is: ${token}`);
  }
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    ReactMoE.initialize();
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
