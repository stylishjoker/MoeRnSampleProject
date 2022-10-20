import { View, TextInput, Text, StyleSheet, ImageBackground } from "react-native"
import React from "react"
import NewButton from "../../components-child/Button"
const handleClick = () => {

}
const Register: React.FC = () => {
    return (
        <ImageBackground source={require('../../../assets/background/background.jpg')} resizeMode="cover">
            <View style={styles.container}>
                <Text style={styles.title}>Sign up</Text>
                <View style={styles.speacer}></View>
                <View style={styles.form_group}>
                    <Text style={styles.text}>Account</Text>
                    <TextInput style={styles.input} placeholder="Account" placeholderTextColor="white" />
                </View>
                <View style={styles.form_group}>
                    <Text style={styles.text}>Gmail</Text>
                    <TextInput style={styles.input} placeholder="Gmail" placeholderTextColor="white" />
                </View>
                <View style={styles.form_group}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="white" />
                </View>
                <View style={styles.form_group}>
                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="white" />
                </View>
                <View style={styles.speacer}></View>
                <NewButton color={"white"} bgColor="#00E5FF" title="Sign up" callback={handleClick} />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    form_group: {
        width: "90%",
        marginBottom: 10,
    },
    input: {
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25,
        borderColor: "#333"
    },
    speacer: {
        height: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: "900",
        color: "white",
        textTransform: "uppercase"
    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "700",
    }
})
export default Register;