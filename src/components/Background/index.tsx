import { View, ImageBackground, StyleSheet } from "react-native"
import React from "react";
const Background: React.FC = ({ props }: any) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background/background.jpg')} resizeMode="cover">
                {props}
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Background;