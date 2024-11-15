import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform, Keyboard } from "react-native"; // Importing Keyboard here
import styles from "../styles/styles";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isForgotPasswordPressed, setIsForgotPasswordPressed] = useState(false);
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); // New state for keyboard visibility
  
  // State to manage logo size
  const [logoSize, setLogoSize] = useState(150); // Initial size

  const logo = require("../../assets/Logo.png");

  useEffect(() => {
    // Listener for keyboard events
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setLogoSize(50); // Size when keyboard is visible
      setIsKeyboardVisible(true); // Set keyboard visible state
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setLogoSize(150); // Original size
      setIsKeyboardVisible(false); // Reset keyboard visible state
    });

    // Cleanup listeners on unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#0f55e3' }}>
      <KeyboardAvoidingView 
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Image source={logo} style={[styles.logoImage, { width: logoSize, height: logoSize }]} />
        <View style={loginStyle.header}>
          <Text style={loginStyle.headingTitle}>Welcome, Rider!</Text>
          <Text style={loginStyle.subheadingTitle}>
            Guarding Your Ride, Wherever You Roam!
          </Text>
          <Text style={loginStyle.pageTitle}>Log In</Text>
        </View>
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            mode="outlined"
            activeOutlineColor="green"
            outlineColor="#a6a6a6"
            textColor="black"
            onChangeText={(newEmail) => setEmail(newEmail)}
            left={<TextInput.Icon icon="email" color="gray" />}
            style={[loginStyle.textInput, { fontFamily: "PoppinsBold" }]}
          />
          
          <TextInput
            placeholder="Password"
            value={password}
            mode="outlined"
            activeOutlineColor="green"
            outlineColor="#a6a6a6"
            textColor="black"
            onChangeText={(newPassword) => setPassword(newPassword)}
            secureTextEntry={!isPasswordVisible}
            left={<TextInput.Icon icon="key" color="gray" />}
            right={
              <TextInput.Icon
                icon={isPasswordVisible ? "eye-off" : "eye"}
                color="gray"
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            }
            style={[loginStyle.textInput, { fontFamily: "PoppinsBold" }]}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            mode="elevated"
            onPress={() => navigation.navigate("Dashboard")}
            onPressIn={() => setIsLoginPressed(true)} 
            onPressOut={() => setIsLoginPressed(false)} 
            buttonColor={isLoginPressed ? "#bbeda6" : "#46d808"} 
            labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold", marginBottom:-5 }} 
            style={[styles.button, { borderRadius: 5, width: 290, height: 50 }]}
          >
            LOG IN
          </Button>
        </View>

        <View style={{ alignItems: 'center', marginBottom: isKeyboardVisible ? -50 : 0 }}>
              <Button
                mode="text"
                onPress={() => navigation.navigate("ForgotPassword")}
                onPressIn={() => setIsForgotPasswordPressed(true)} 
                onPressOut={() => setIsForgotPasswordPressed(false)}
                labelStyle={{
                  fontSize: 14,
                  textAlign: 'center',
                  color: isForgotPasswordPressed ? '#46cd0c' : 'white',
                  fontFamily: "Poppins"
                }}
                style={{ padding: 0 }}
              >
                Forgot Password?
              </Button>
            </View>
            
        {/* Conditionally render both Forgot Password and Register buttons based on keyboard visibility */}
        {!isKeyboardVisible && (
          <>

            <View style={{ height: 0.5, width: "80%", alignSelf: 'center', backgroundColor: 'white', marginVertical: 15 }} />

            <View style={{ alignItems: 'center' }}>
              <Button
                mode="elevated"
                onPress={() => navigation.navigate("Register")}
                onPressIn={() => setIsRegisterPressed(true)} 
                onPressOut={() => setIsRegisterPressed(false)}
                buttonColor={isRegisterPressed ? "#e6d2a2" : "#ffb600"} 
                labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
                style={{ paddingVertical: 7, paddingHorizontal: 5, margin: 10, borderRadius: 5, width: 290, height: 50 }}
              >
                REGISTER
              </Button>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const loginStyle = StyleSheet.create(styles);
