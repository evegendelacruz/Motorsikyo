import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, Image, View, Platform } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  TextInput,
  Button,
  Checkbox,
  HelperText,
  RadioButton,
  TouchableRipple,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/styles";
import ReturnButtons from "../components/returnButtons";
import { supabase } from "../utils/supabase";

const Register = ({ navigation }) => {
  const logo = require("../../assets/Logo.png");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hasErrors = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return input && !emailRegex.test(input);
  };
  

  const handleRegister = async () => {
    setIsRegisterPressed(true);
    setIsLoading(true);
  
    // Basic Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      setIsRegisterPressed(false);
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      setIsRegisterPressed(false);
      return;
    }
  
    try {
      // Create User with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (authError) {
        alert(`Registration failed: ${authError.message}`);
        setIsRegisterPressed(false);
        return;
      }
  
      // Format Birthdate
      const formattedBirthdate = birthdate
        ? new Date(birthdate.split("/").reverse().join("-")).toISOString().split("T")[0]
        : null;
  
      // Prepare User Data
      const payload = {
        user_fname: firstName,
        user_lname: lastName,
        user_gender: gender,
        user_birthdate: formattedBirthdate,
        user_address: address,
        user_phone_number: phoneNumber,
        user_email: email,
        user_password: password
      };
  
      console.log("Inserting Payload:", payload);
  
      // Insert User Data into Database (public schema)
      const { data: insertData, error: insertError } = await supabase
        .from("user") // Automatically refers to the `public` schema
        .insert([payload]);
  
      if (insertError) {
        console.error("Database Insert Error:", insertError);
        alert(`Error inserting user data: ${insertError.message}`);
        setIsRegisterPressed(false);
        return;
      }
  
      console.log("Database Insert Successful:", insertData);
      alert("Registration successful!");
      navigation.navigate("DeviceReg");
    } catch (error) {
      console.error("Unexpected Error:", error);
      alert("An unexpected error occurred during registration. Please try again.");
    } finally {
      setIsRegisterPressed(false);
    }
  };
  

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      const day = selectedDate.getDate().toString().padStart(2, "0");
      setBirthdate(`${day}/${month}/${year}`);
    }
  };

  const handlePhoneNumberChange = (input) => {
    const numericInput = input.replace(/[^0-9]/g, "");
    if (numericInput.length <= 11) {
      setPhoneNumber(numericInput);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    mode="outlined"
                    activeOutlineColor="green"
                    outlineColor="#a6a6a6"
                    textColor="black"
                    onChangeText={setFirstName}
                    style={[registerStyle.textInput, { fontFamily: "PoppinsBold", flex: 1, marginRight: 8 }]} // Adjust margin as needed
                />
                
                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    mode="outlined"
                    activeOutlineColor="green"
                    outlineColor="#a6a6a6"
                    textColor="black"
                    onChangeText={setLastName}
                    style={[registerStyle.textInput, { fontFamily: "PoppinsBold", flex: 1 }]} // Adjust margin as needed
                />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginHorizontal:15 }}>
                <Text style={{fontFamily:'Poppins', fontSize: 17, color: 'white', }}>GENDER </Text>
                <RadioButton
                    value="male"
                    color="white"
                    uncheckedColor="white"
                    status={gender === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('male')}
                />
                <Text style={{ fontFamily: "Poppins", color: 'white',  }}>MALE</Text>

                <RadioButton
                    value="female"
                    color="white"
                    uncheckedColor="white"
                    status={gender === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('female')}
                />
                <Text style={{ fontFamily: "Poppins", color: 'white' }}>FEMALE</Text>
                </View>
                
                <View>
                <TouchableRipple onPress={() => setShowPicker(true)}>
                  <TextInput
                    placeholder="Birthdate"
                    value={birthdate}
                    mode="outlined"
                    activeOutlineColor="green"
                    outlineColor="#a6a6a6"
                    textColor="black"
                    editable={false} // Prevent manual text input
                    right={
                      <TextInput.Icon
                        icon={"calendar"}
                        color="gray"
                      />
                    }
                    style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
                  />
                </TouchableRipple>

                {showPicker && (
                  <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            
            <TextInput
              placeholder="Address"
              value={address}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setAddress} 
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
              maxLength={11}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Email"
              value={email}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={(text) => {
                setEmail(text);
                setEmailTouched(true);
              }}
              onBlur={() => setEmailTouched(true)}
              style={[registerStyle.textInput, { fontFamily: "PoppinsBold" }]}
            />
            {emailTouched && hasErrors(email) && (
              <HelperText type="error" visible={true} style={{color:'yellow'}}>
                Email address is invalid!
              </HelperText>
            )}
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
            {password !== confirmPassword && confirmPassword !== "" && (
              <HelperText type="error" visible={true} style={{color:'yellow'}}>
                Passwords do not match!
              </HelperText>
            )}

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
              onPress={handleRegister}
              disabled={isRegisterPressed}
              loading={isLoading}
              buttonColor={isRegisterPressed ? "#bbeda6" : "#46d808"}
              labelStyle={{
                fontSize: 18,
                textAlign: "center",
                color: "white",
                fontFamily: "PoppinsBold",
              }}
              style={{
                paddingVertical: 7,
                paddingHorizontal: 5,
                margin: 10,
                borderRadius: 5,
                width: 290,
                height: 50,
              }}
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

const registerStyle = StyleSheet.create(styles); 
