import { StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import styles from "./src/styles/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login"; 
import ForgotPassword from "./src/pages/ForgotPassword";
import Register from "./src/pages/Register";
import Account from "./src/pages/Account";
import DeviceReg from "./src/pages/DeviceReg";
import Dashboard from "./src/pages/Dashboard";
import Notification from "./src/pages/Notification";
import EmergencyAlert from "./src/pages/EmergencyAlert";
import MonitorVehicle from "./src/pages/MonitorVehicle";
import RecentActivity from "./src/pages/RecentActivity";
import SecurityFootage from "./src/pages/SecurityFootage";
import Settings from "./src/pages/Settings";
import TrackVehicle from "./src/pages/TrackVehicle";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [loaded] = useFonts({
    Poppins: require("./assets/font/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/font/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null; 
  }

  return (
    <NavigationContainer style={[styles.container, {backgroundColor: 'blue'}]}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DeviceReg" component={DeviceReg} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="EmergencyAlert" component={EmergencyAlert} />
        <Stack.Screen name="MonitorVehicle" component={MonitorVehicle} />
        <Stack.Screen name="RecentActivity" component={RecentActivity} />
        <Stack.Screen name="SecurityFootage" component={SecurityFootage} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="TrackVehicle" component={TrackVehicle} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const loginStyle = StyleSheet.create(styles);
