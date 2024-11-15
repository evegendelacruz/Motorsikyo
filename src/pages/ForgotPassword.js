import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styles";
import { TextInput, Button} from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import ReturnButtons from "../components/returnButtons";  

const ForgotPassword = ({ navigation }) => {
  const logo = require("../../assets/ForgotPassword.png");
  const [firstName, setFirstName] = useState("");
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  return (
    <SafeAreaView style={forgotStyle.container}>
      <ReturnButtons onPress={() => navigation.goBack()} />
      <View>
        <Text style={[forgotStyle.headingTitle, {alignSelf:'center', marginBottom: 1, marginTop:-70}]}>
          Forgot Password
        </Text>
        <Text style={[styles.subheadingTitle, {marginLeft: 22, marginRight: 22, textAlign: 'justify', marginBottom: 10, fontSize:12}]}>
        Please enter your email address to receive instructions for resetting your password.
        </Text>
        <Image source={logo} style={[styles.logoImage, { width: 190, height: 190 }]} />
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
              style={{ paddingVertical: 7, paddingHorizontal: 5, margin: 10, borderRadius: 5, width: 290, height: 50, marginTop:20 }}
            >
              RECOVER
            </Button>
          </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const forgotStyle = StyleSheet.create(styles);
