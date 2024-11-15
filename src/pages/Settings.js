import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from "../styles/styles";
import ReturnButtons from "../components/returnButtons";

const Settings = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <SafeAreaView style={[styles.insideContainer, isDarkMode && styles.darkContainer]}>
      <ReturnButtons onPress={() => navigation.goBack()} />
      <View style={[settingsStyle.insideHeaderCon, {marginBottom: 715}]}>
        <Text style={settingsStyle.insideHeader}>SETTINGS</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const settingsStyle = StyleSheet.create(styles);
  
