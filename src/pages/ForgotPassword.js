import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styles";
import { TextInput, Button} from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons"; // Ensure to import Ionicons for the back button icon

const ForgotPassword = ({ navigation }) => {
  const logo = require("../../assets/ForgotPassword.png");
  const [firstName, setFirstName] = useState("");
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  return (
    <SafeAreaView style={forgotStyle.container}>
      <View style={forgotStyle.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginTop: -150,
            marginBottom: -80,
            marginLeft: -190,
            padding: 40,
            alignItems: "flex-start",
            justifyContent: "center",
            position: "sticky",
          }}
        >
          <Ionicons name="arrow-back-outline" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[forgotStyle.headingTitle, {alignSelf:'center', marginBottom: 10, marginTop:-30}]}>
          Forgot Password
        </Text>
        <Text style={[styles.subheadingTitle, {marginLeft: 22, marginRight: 22, textAlign: 'justify', marginBottom: 10, fontSize:12}]}>
        Enter the email address or phone number associated with your account, and we will send a One-Time Password (OTP) to help you reset your password and recover your account.
        </Text>
        <Image source={logo} style={[styles.logoImage, { width: 180, height: 180 }]} />
      </View>
      <View>
            <TextInput
              placeholder="Email or Phone Number"
              value={firstName}
              mode="outlined"
              activeOutlineColor="green"
              outlineColor="#a6a6a6"
              textColor="black"
              onChangeText={setFirstName}
              style={[styles.textInput, { fontFamily: "PoppinsBold", marginTop: 20 }]}/>
      </View>
      <View style={{ alignItems: 'center' }}>
            <Button
              mode="elevated"
              onPress={() => navigation.navigate("Login")}
              onPressIn={() => setIsRegisterPressed(true)}
              onPressOut={() => setIsRegisterPressed(false)}
              buttonColor={isRegisterPressed ? "#bbeda6" : "#46d808"}
              labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
              style={{ paddingVertical: 7, paddingHorizontal: 5, margin: 10, borderRadius: 5, width: 290, height: 50 }}
            >
              RECOVER
            </Button>
          </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const forgotStyle = StyleSheet.create(styles);
