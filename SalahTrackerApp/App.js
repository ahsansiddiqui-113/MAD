import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import PrayerItem from "./CalenderPicker";
import CalenderPicker from "./CalenderPicker";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      {/* <CalenderPicker /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
