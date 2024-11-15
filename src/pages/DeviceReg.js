import React, { useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, PaperProvider } from "react-native-paper";
import styles from "../styles/styles";
import {MaterialIcons} from '@expo/vector-icons';
import ReturnButtons from "../components/returnButtons"; 

const DeviceReg = ({ navigation }) => {
  const logo = require("../../assets/Logo.png");
  const [deviceID, setDeviceID] = useState("");
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const [isProceedPressed, setIsProceedPressed] = useState(false);
  const [visible, setVisible] = useState(false);

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
        
        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 140 }}>
          <Button
            mode="elevated"
            onPress={showModal}
            onPressIn={() => setIsRegisterPressed(true)}
            onPressOut={() => setIsRegisterPressed(false)}
            buttonColor={isRegisterPressed ? "#bbeda6" : "#46d808"}
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
