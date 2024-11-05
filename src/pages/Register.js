import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput, Button, Checkbox } from "react-native-paper";
import styles from "../styles/styles";
import Ionicons from '@expo/vector-icons/Ionicons';

const Register = ({ navigation }) => {
  const logo = require("../../assets/Logo.png");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handlePhoneNumberChange = (input) => {
    // Allow only numbers and limit to 10 characters
    const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (numericInput.length <= 10) {
      setPhoneNumber(numericInput);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={registerStyle.scrollContent} 
          keyboardShouldPersistTaps="handled" 
        >
            <View style={styles.iconContainer}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                marginTop: -40,
                marginBottom: -80, 
                marginLeft: -35,
                padding: 40, 
                alignItems: 'flex-start',
                justifyContent: 'center',
                position: 'sticky'
                }}
            >
                <Ionicons name="arrow-back-outline" size={25} color="white" />
            </TouchableOpacity>
            </View>
          <Image source={logo} style={[styles.logoImage, { width: 150, height: 150 }]} />
          <Text style={[styles.headingTitle, { textAlign: 'center' }]}>
            Create an Account
          </Text>
          <Text style={styles.subheadingTitle}>
            Connect to your motorcycle with Motorsikyo
          </Text>
          <View>
            <TextInput
              placeholder="First Name"
              value={firstName}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setFirstName}
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="Last Name"
              value={lastName}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setLastName}
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="+63 | Phone Number"
              value={phoneNumber}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={handlePhoneNumberChange}
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
              maxLength={10} // Limit input to 10 characters
            />
            <TextInput
              placeholder="Current Address"
              value={currentAddress}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setCurrentAddress}
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="Email"
              value={email}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setEmail}
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="Password"
              value={password}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              secureTextEntry={!isPasswordVisible}
              onChangeText={setPassword}
              right={
                <TextInput.Icon 
                  icon={isPasswordVisible ? "eye-off" : "eye"} 
                  color="gray" 
                  onPress={togglePasswordVisibility} 
                />
              }
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              secureTextEntry={!isConfirmPasswordVisible}
              onChangeText={setConfirmPassword}
              right={
                <TextInput.Icon 
                  icon={isConfirmPasswordVisible ? "eye-off" : "eye"} 
                  color="gray" 
                  onPress={toggleConfirmPasswordVisibility} 
                />
              }
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
          </View>

          <View style={[registerStyle.checkboxContainer, { marginBottom: 2, marginLeft: 3 }]}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              type="unchecked"
              uncheckedColor="white"
              color="white"
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={registerStyle.checkboxLabel}>
              I agree to the terms and conditions.
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Button
              mode="elevated"
              onPress={() => navigation.navigate("Login")}
              onPressIn={() => setIsRegisterPressed(true)}
              onPressOut={() => setIsRegisterPressed(false)}
              buttonColor={isRegisterPressed ? "#e6d2a2" : "#ffb600"}
              labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
              style={{ paddingVertical: 7, paddingHorizontal: 5, margin: 10, borderRadius: 5, width: 290, height: 50 }}
            >
              REGISTER
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;

const registerStyle = StyleSheet.create(styles); // Ensure this refers to the correct styles
