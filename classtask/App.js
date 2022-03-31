import { StyleSheet, View } from "react-native";
import LandingPage from "./LandingPage";
import Login from "./Login";

export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage></LandingPage>
      {/* <Login></Login> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});