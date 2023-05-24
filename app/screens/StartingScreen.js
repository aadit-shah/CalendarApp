import React from 'react'
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { ImageBackground } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
function StartingScreen() {
  return (
        //Background
        // Testing comment
        <ImageBackground 
            style={styles.background}
            source={require('../assets/Starting_Background.jpg')}
        >
            {/*logo and slogan */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
                <Text style={{fontSize: 30}}>Starting Screen</Text>
            </View>

            {/* login button */}
            <View style = {styles.loginButton}>
                <Text 
                    style={{textAlign: "center", top: '40%'}}>
                    Login
                </Text>
            </View>

            {/* register button */}
            <View style = {styles.registerButton}>
                <Text 
                    style={{textAlign: "center", top: '40%'}}>
                    Register
                </Text>
            </View>

        </ImageBackground>  
        
  );
}

export default StartingScreen;

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        loginButton: {
            width: "100%",
            height: 70,
            backgroundColor: "#fc5c65",
            textAlign: 'center',
        },
        registerButton: {
            width: "100%",
            height: 70,
            backgroundColor: "#4ecdc4",
        },
        logo: {
            height: 150,
            width: 150,
        },
        logoContainer:{
            position: 'absolute',
            top: 300, 
        },

      });



