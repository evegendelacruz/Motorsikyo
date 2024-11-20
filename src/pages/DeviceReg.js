import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, PaperProvider } from "react-native-paper";
import styles from "../styles/styles";
import {MaterialIcons} from '@expo/vector-icons';
import ReturnButtons from "../components/returnButtons"; 
import { supabase } from "../utils/supabase";

const DeviceReg = ({ navigation }) => {
  const [logoSize, setLogoSize] = useState(150);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); 
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

  const handleDeviceRegistration = async () => {
    setIsLoading(true);
    // Dismiss the keyboard when the button is clicked
    Keyboard.dismiss();
    // Input validation: Check if deviceID is provided
    if (!deviceID.trim()) {
      Alert.alert("Error", "Please enter a valid Device ID.");
      return;
    }
  
    try {
      // Query the device table in the public schema
      const { data, error } = await supabase
        .from("device") // Table name
        .select("*") // Selecting all columns, you can modify to 'device_registered' if you only want that column
        .eq("device_registered", deviceID); // Filter for rows where device_registered matches the deviceID
  
      // Log the response for debugging purposes
      console.log("Query Result:", data);
      console.log("Error:", error);
  
      if (error) {
        console.error("Error fetching device ID:", error);
        Alert.alert("Error", "An unexpected error occurred. Please try again.");
        return;
      }
  
      // Check if the data contains any matches
      if (data && data.length > 0) {
        showModal(); // Show success modal
      } else {
        // No match found for the provided device ID
        Alert.alert("Error", "Device ID Invalid. Please enter a valid Device ID.");
      }
    } catch (err) {
      // Catch any unexpected errors
      console.error("Device registration error:", err);
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    }
  };
  
  
  
  const logo = require("../../assets/Logo.png");
  const [deviceID, setDeviceID] = useState("");
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const [isProceedPressed, setIsProceedPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
      <ReturnButtons onPress={() => navigation.goBack()} />
        {/* Overlay Entire Page When Modal is Visible */}
        {visible && (
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Touchable Background to Close Modal */}
            <TouchableOpacity 
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
              onPress={hideModal} 
            />
            {/* Modal Content */}
            <View style={{
              width: '65%',
              height: '30%',
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <MaterialIcons name="verified-user" size={50} color="#0097ff" />
              <Text style={{ marginBottom: 10, marginVertical: 10, fontFamily:'PoppinsBold', color:'#0f55e3', fontSize:20, textAlign:'center' }}>Registration Complete</Text>
              <Button mode="elevated"
                buttonColor={isProceedPressed ? "#0f55e3" : "#0f55e3"}
                labelStyle={{
                fontSize: 14,
                textAlign: 'center',
                color: 'white',
                fontFamily: "PoppinsBold"
              }}
              style={{
                borderRadius: 5,
                width: 180,
                height: '20%'
              }}
              onPress={() => {
                hideModal();  // Hide the modal first
                navigation.navigate('Login');  // Navigate to the Login page
              }}>Proceed to Login</Button>
            </View>
          </View>
        )}

        {/* Main Content of DeviceReg */}
        <Image source={logo} style={[styles.logoImage, { width: 150, height: 150 }]} />
        <Text style={[styles.headingTitle, { textAlign: 'center' }]}>
          Register your Device
        </Text>
        <Text style={styles.subheadingTitle}>
          Guarding Your Ride, Wherever You Roam!
        </Text>
        
        <View style={{ marginTop: 30 }}>
          <TextInput
            placeholder="Enter your Device ID"
            value={deviceID}
            mode="outlined"
            activeOutlineColor="green"
            outlineColor="#a6a6a6"
            textColor="black"
            onChangeText={setDeviceID}
            style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
          />
        </View>
        
        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: isKeyboardVisible ? -60 : 140 }}>
          <Button
            mode="elevated"
            onPress={handleDeviceRegistration}
            onPressIn={() => setIsRegisterPressed(true)}
            onPressOut={() => setIsRegisterPressed(false)}
            buttonColor={isRegisterPressed ? "#bbeda6" : "#46d808"}
            loading={isLoading}
            labelStyle={{
              fontSize: 18,
              textAlign: 'center',
              color: 'white',
              fontFamily: "PoppinsBold"
            }}
            style={{
              paddingVertical: 7,
              paddingHorizontal: 5,
              margin: 10,
              borderRadius: 5,
              width: 290,
              height: 50
            }}
          >
            REGISTER
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default DeviceReg;

const registerStyle = StyleSheet.create(styles); 
