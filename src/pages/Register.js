import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput, Button, Checkbox } from "react-native-paper";
import styles from "../styles/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import ReturnButtons from "../components/returnButtons";
import { supabase } from '../lib/supabase';

const Register = ({ navigation }) => {
  const logo = require("../../assets/Logo.png");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
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
      <ReturnButtons onPress={() => navigation.goBack()} />
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={registerStyle.scrollContent} 
          keyboardShouldPersistTaps="handled" 
        >
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
              placeholder="Sex"
              value={sex}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setSex}
              right={
                <TextInput.Icon 
                  icon={"chevron-down"} 
                  color="gray" 
                />
              }
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="Country"
              value={country}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setCountry}
              right={
                <TextInput.Icon 
                  icon={"chevron-down"} 
                  color="gray"  
                />
              }
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="Region"
              value={region}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setRegion}
              right={
                <TextInput.Icon 
                  icon={"chevron-down"} 
                  color="gray" 
                />
              }
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            <TextInput
              placeholder="City/Municipality"
              value={city}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setCity}
              right={
                <TextInput.Icon 
                  icon={"chevron-down"} 
                  color="gray" 
                />
              }
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
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
              By proceeding, I agree with the Terms and Conditions.
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Button
              mode="elevated"
              onPress={() => navigation.navigate("DeviceReg")}
              onPressIn={() => setIsRegisterPressed(true)}
              onPressOut={() => setIsRegisterPressed(false)}
              buttonColor={isRegisterPressed ? "#bbeda6" : "#46d808"}
              labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
              style={{ paddingVertical: 7, paddingHorizontal: 5, margin: 10, borderRadius: 5, width: 290, height: 50 }}
            >
              PROCEED
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;

const registerStyle = StyleSheet.create(styles); // Ensure this refers to the correct styles
