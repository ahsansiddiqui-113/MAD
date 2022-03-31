import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function landingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Welcome Back!</Text>
      <Text style={styles.headerText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
        dolor sit amet
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username, & Phone Number"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        type="password"
      />
      <TouchableOpacity
        style={styles.forgotPaswordContainer}
        onPress={() => alert("Forgot Password")}
      >
        <Text style={styles.forgotPasword}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signIn} onPress={() => alert("Pressed")}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signUp}>
        <View style={styles.left}></View>
        <Text style={styles.signUpWith}>Or Sign Up With</Text>
        <View style={styles.right}></View>
      </View>
      <View style={styles.logoHeader}>
        <View style={styles.loginLogos}>
          <Image source={require("../login/assets/Googlelogo.png")}></Image>
        </View>
        <View style={styles.loginLogos}>
          <Image source={require("../login/assets/Facbook.png")}></Image>
        </View>
        <View style={styles.loginLogos}>
          <Image source={require("../login/assets/Group.png")}></Image>
        </View>
      </View>
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

  textContainer: {
    backgroundColor: "#fff",
    fontWeight: 900,
    fontSize: 20,
  },

  headerText: {
    textAlign: "center",
    width: "80%",
    justifyContent: "center",
  },

  textInput: {
    alignItems: "start",
    paddingLeft: "10px",
    width: "100%",
    height: "40px",
    width: "80%",
    marginTop: "20px",
    borderRadius: "10px",
    backgroundColor: "#ccc",
  },

  forgotPaswordContainer: {
    width: "100%",
    flexDirections: "row",
    justifyContent: "flex-end",
  },

  forgotPasword: {
    width: "88%",
    marginTop: "10px",
    textAlign: "end",
    fontWeight: 700,
  },

  signIn: {
    alignItems: "center",
    paddingLeft: "10px",
    width: "100%",
    justifyContent: "center",
    height: "40px",
    width: "80%",
    marginTop: "20px",
    borderRadius: "10px",
    backgroundColor: "pink",
  },

  signInText: {
    fontWeight: 600,
  },

  signUp: {
    marginTop: "20px",
    fontWeight: 700,
  },

  signUpWith: {
    width: "100%",
    fontWeight: 700,
  },

  logoHeader: {
    justifyContent: "center",
    flexDirection: "row",
  },

  loginLogos: {
    margin: 6,
    backgroundColor: "#dcdcdc",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#ee82ee",
    borderWidth: 0.5,
  },
});