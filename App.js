import { StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import styles from "./src/styles/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login"; 
import ForgotPassword from "./src/pages/ForgotPassword";
import Register from "./src/pages/Register";
import Profile from "./src/pages/Profile";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [loaded] = useFonts({
    Poppins: require("./assets/font/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/font/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null; // You might want to add a loading indicator here
  }

  return (
    <NavigationContainer style={[styles.container, {backgroundColor: 'blue'}]}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const loginStyle = StyleSheet.create(styles);
