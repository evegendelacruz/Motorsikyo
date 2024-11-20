import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform, Keyboard, Alert } from "react-native"; // Importing Keyboard here
import styles from "../styles/styles";
import { TextInput, Button, ActivityIndicator, MD2Colors } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { supabase } from "../utils/supabase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isForgotPasswordPressed, setIsForgotPasswordPressed] = useState(false);
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); 
  const [isLoginLoading, setIsLoginLoading] = useState(false); // Login button loading state
  const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false); // Forgot Password button loading state
  const [isRegisterLoading, setIsRegisterLoading] = useState(false); // Register button loading state
  
  // State to manage logo size
  const [logoSize, setLogoSize] = useState(150); // Initial size

  const logo = require("../../assets/Logo.png");

  const handleLogin = async () => {
    setIsLoginLoading(true); // Show loading for login
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password.");
      setIsLoginLoading(false); // Hide loading on error
      return;
    }
  
    try {
      // Log in the user using Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (authError) {
        Alert.alert("Log In Failed", "Invalid email or password.");
        setIsLoginLoading(false); // Hide loading on error
        return;
      }
  
      // Successful login
      Alert.alert("Login Successful", "Welcome back!");
      navigation.navigate("Dashboard"); // Navigate to the dashboard or desired screen
  
    } catch (error) {
      console.error("Error logging in:", error.message);
      Alert.alert("Error", "An error occurred while logging in. Please try again.");
      setIsLoginLoading(false); // Hide loading on error
    } finally {
      setIsLoginLoading(false); // Hide loading after process
    }
  };

  const handleForgotPassword = () => {
    setIsForgotPasswordLoading(true); // Show loading for forgot password
    // Simulate password recovery process or navigate to the Forgot Password screen
    setTimeout(() => {
      setIsForgotPasswordLoading(false); // Hide loading after simulated action
      navigation.navigate("ForgotPassword"); // Navigate to the Forgot Password screen
    }, 2000);
  };

  const handleRegister = () => {
    setIsRegisterLoading(true); // Show loading for register
    // Simulate registration process or navigate to the Register screen
    setTimeout(() => {
      setIsRegisterLoading(false); // Hide loading after simulated action
      navigation.navigate("Register"); // Navigate to the Register screen
    }, 2000);
  };

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
            onPress={handleLogin}
            loading={isLoginLoading}
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
            onPress={handleForgotPassword}
            loading={isForgotPasswordLoading}
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
                loading={isRegisterLoading}
                onPress={handleRegister}
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
