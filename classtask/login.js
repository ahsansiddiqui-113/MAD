import { StyleSheet, Text, View, Image } from "react-native";

export default function login() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={require("../login/assets/Saly-1intro-image.png")}
        ></Image>
      </View>
      <Text style={styles.header}>Discover Your Own Dream House</Text>
      <Text style={styles.headerText}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      </Text>
      <View style={styles.bottom}>
        <View style={{ borderRadius: 10 }}>
          <Text style={styles.signup}>Signup</Text>
        </View>
        <Text style={styles.register}>Register</Text>
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

  top: {
    overflowY: "hidden",
    width: "89%",
    height: "55%",
    backgroundColor: "#ee82ee",
    alignContent: "center",
    justifyContent: "center",
    margin: 20,
    marginTop: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  header: {
    backgroundColor: "#fff",
    textAlign: "center",
    width: "70%",
    fontWeight: 900,
    alignitems: "center",
    justifyContent: "center",
    fontSize: 20,
  },

  headerText: {
    textAlign: "center",
    width: "80%",
    justifyContent: "center",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  bottom: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  signup: {
    backgroundColor: "#ee82ee",
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    fontWeight: "bold",
  },

  register: {
    backgroundColor: "#dcdcdc",
    fontSize: 15,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    fontWeight: "bold",
  },
});