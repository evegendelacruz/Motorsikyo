import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Switch } from "react-native-paper";
import { MaterialIcons, FontAwesome, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import styles from "../styles/styles";

const logoIcon = require("../../assets/LogoIcon.png");
const banner = require("../../assets/subscriptionBanner.png");

const Dashboard = ({ navigation }) => {
  // Declare states for dark mode and switch value
  const [isSwitchOn, setIsSwitchOn] = useState(false); // Correctly declare the switch state

  // Function to toggle the switch
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  // Determine the icon color based on switch state
  const getIconColor = () => (isSwitchOn ? '#0f55e3' : '#d3d3d3'); // blue if on, gray if off

  // Handle button click to navigate to the correct page
  const handleNavigation = (label) => {
    if (label === 'Notification') {
      navigation.navigate('Notification'); // Navigate to Notification.js
    } else if (label === 'Monitor Vehicle') {
      navigation.navigate('MonitorVehicle'); // Navigate to MonitorVehicle.js
    } else if (label === 'Track Vehicle') {
      navigation.navigate('TrackVehicle'); // Navigate to TrackVehicle.js
    } else if (label === 'Emergency Alert') {
      navigation.navigate('EmergencyAlert'); // Navigate to EmergencyAlert.js
    } else if (label === 'Security Footage') {
      navigation.navigate('SecurityFootage'); // Navigate to SecurityFootage.js
    } else if (label === 'Recent Activity') {
      navigation.navigate('RecentActivity'); // Navigate to RecentActivity.js
    } else if (label === 'Settings') {
      navigation.navigate('Settings'); // Navigate to Settings.js
    } else if (label === 'Account') {
      navigation.navigate('Account'); // Navigate to Account.js
    }
  };

  return (
    <SafeAreaView style={dashStyle.insideContainer}>
      <View style={[dashStyle.insideHeaderCon, {marginTop: -50}]}>
        <Image source={logoIcon} style={{ width: 35, height: 35, marginBottom: 20 }} />
        <Text style={dashStyle.insideHeader}>MOTORSIKYO</Text>
      </View>
      <Image source={banner} style={{ width: 330, height: 111, marginVertical: 10, borderRadius: 10 }} />

      <View style={dashStyle.deviceControllerCon}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="verified-user" size={24} color={getIconColor()} style={{ marginRight: 5 }} />
            <Text style={dashStyle.deviceControllerTitle}>Motorsikyo is {isSwitchOn ? 'running...' : 'disabled'}</Text>
          </View>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#0f55e3' style={{ marginRight: 15 }} />
        </View>
        <Text style={[dashStyle.deviceControllerSubtitle, { marginTop: -15, paddingBottom: 10 }]}>{isSwitchOn ? 'Device Connected' : 'Device Disconnected'}</Text>
      </View>
      
      <View style={dashStyle.buttonGallery}>
        {['Notification', 'Monitor Vehicle', 'Track Vehicle', 'Emergency Alert', 'Security Footage', 'Recent Activity', 'Settings', 'Account'].map((label, index) => {
          const icons = [
            <MaterialIcons name="notifications" size={30} color={getIconColor()} />,
            <MaterialCommunityIcons name="webcam" size={30} color={getIconColor()} />,
            <MaterialIcons name="location-on" size={30} color={getIconColor()} />,
            <MaterialIcons name="warning" size={30} color={getIconColor()} />,
            <Entypo name="folder" size={30} color={getIconColor()} />,
            <MaterialIcons name="history" size={30} color={getIconColor()} />,
            <MaterialIcons name="settings" size={30} color={getIconColor()} />,
            <FontAwesome name="user" size={30} color={getIconColor()} />
          ];

          return (
            <TouchableOpacity
              key={index}
              style={dashStyle.galleryButton}
              disabled={!isSwitchOn}  // Disable button when switch is off
              onPress={() => handleNavigation(label)}  // Navigate to the correct page
            >
              {icons[index]}
              <Text style={dashStyle.galleryButtonText}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
const dashStyle = StyleSheet.create(styles);
