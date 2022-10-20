import React from "react";
import {
  // Platform,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import { NavigationContainer, NavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/app/store';
import Login from './src/components/Layout/Login';
import NewButton from "./src/components/components-child/Button";
import Register from "./src/components/Layout/Register";
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground source={require('./src/assets/background/background.jpg')} resizeMode="cover">
      <View style={styles.container}>
        <Login />
        <View style={{ height: 40 }}></View>
        <NewButton color="#333" bgColor="white" title="Sign Up" callback={() => navigation.navigate('Register')} ></NewButton>
      </View>
    </ImageBackground>
  )
}

const RegiterScreen = () => {
  return (
    <Register />
  )
}
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={RegiterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default App;
