import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const profile = require("../../assets/profile.jpg");

const Profile = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.darkContainer]}
    >
      <View style={[styles.header, isDarkMode && styles.darkHeader]}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontFamily: "Poppins" }]}>
          PROFILE
        </Text>
        <TouchableOpacity style={styles.iconButton} onPress={toggleDarkMode}>
          <Ionicons name="moon-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Image
        source={profile}
        style={[
          styles.profileImage,
          { borderColor: isDarkMode ? "#bbb" : "#0f55e3" }, // Change border color based on dark mode
        ]}
      />
      <Text style={[styles.name, isDarkMode && styles.darkText]}>
        Evegen P. Dela Cruz
      </Text>
      <Text
        style={[
          { fontSize: 14, fontFamily: "Poppins", marginBottom: 10 },
          isDarkMode && styles.darkText,
        ]}
      >
        delacruz.evegen30@gmail.com
      </Text>

      <View style={styles.statsContainer}>
        <View>
          <Text style={[styles.statsValue, isDarkMode && styles.darkText]}>
            1
          </Text>
          <Text style={[styles.statsTitle, isDarkMode && styles.darkSubtitle]}>
            Following
          </Text>
        </View>
        <View>
          <Text style={[styles.statsValue, isDarkMode && styles.darkText]}>
            5.4M
          </Text>
          <Text style={[styles.statsTitle, isDarkMode && styles.darkSubtitle]}>
            Followers
          </Text>
        </View>
        <View>
          <Text style={[styles.statsValue, isDarkMode && styles.darkText]}>
            1 yr
          </Text>
          <Text style={[styles.statsTitle, isDarkMode && styles.darkSubtitle]}>
            Joined
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={[
            styles.statsValue,
            { marginLeft: -208, color: isDarkMode ? "#bbb" : "#0f55e3" },
          ]}
        >
          Profile
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.darkButton]}
      >
        <FontAwesome5
          name="user"
          size={20}
          color={isDarkMode ? "white" : "gray"}
          marginLeft={50}
        />
        <Text
          style={[
            styles.buttonLabel,
            { marginLeft: 25, color: isDarkMode ? "white" : "black" },
          ]}
        >
          Manage Account
        </Text>
      </TouchableOpacity>

      <View>
        <Text
          style={[
            styles.statsValue,
            { marginLeft: -190, color: isDarkMode ? "#bbb" : "#0f55e3" },
          ]}
        >
          Settings
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.darkButton]}
      >
        <Ionicons
          name="notifications-outline"
          size={23}
          color={isDarkMode ? "white" : "gray"}
          marginLeft={50}
        />
        <Text
          style={[
            styles.buttonLabel,
            { marginLeft: 21, color: isDarkMode ? "white" : "black" },
          ]}
        >
          Notifications
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.darkButton]}
      >
        <Ionicons
          name="settings-outline"
          size={21}
          color={isDarkMode ? "white" : "gray"}
          marginLeft={50}
        />
        <Text
          style={[
            styles.buttonLabel,
            { marginLeft: 23, color: isDarkMode ? "white" : "black" },
          ]}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#0f55e3",
    paddingVertical: 15,
    fontFamily: "Poppins",
    marginTop: -100,
  },
  darkHeader: {
    backgroundColor: "#444",
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
    fontFamily: "PoppinsBold",
  },
  iconButton: {
    padding: 8,
    fontFamily: "Poppins",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 18,
    borderWidth: 5,
    borderColor: "#0f55e3",
    fontFamily: "Poppins",
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "PoppinsBold",
  },
  darkText: {
    color: "white",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
    fontFamily: "Poppins",
  },
  statsValue: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 25,
    fontFamily: "PoppinsBold",
  },
  statsTitle: {
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: 25,
    fontFamily: "Poppins",
    color: "gray",
  },
  darkSubtitle: {
    color: "#bbb",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    width: "100%",
    marginVertical: 8,
    borderRadius: 10,
    justifyContent: "left",
    alignItems: "left",
  },
  darkButton: {
    backgroundColor: "#333",
  },
  buttonLabel: {
    color: "black",
    marginLeft: 8,
    fontFamily: "Poppins",
    fontSize: 16,
  },
});
