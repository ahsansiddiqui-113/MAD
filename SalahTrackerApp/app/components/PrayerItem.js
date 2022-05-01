import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function PrayerItem({ prayer, prayerIndex, offered, handleOffered }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{prayer}</Text>
      <View style={styles.prayerContainer}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() =>
            handleOffered(prayerIndex, { alone: true, jamat: false })
          }
        >
          <MaterialCommunityIcons
            name="human-child"
            size={40}
            color={offered.alone ? "dodgerblue" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() =>
            handleOffered(prayerIndex, { alone: false, jamat: true })
          }
        >
          <MaterialCommunityIcons
            name="human-male-male"
            size={40}
            color={offered.jamat ? "dodgerblue" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PrayerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    margin: 4,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prayerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    flex: 1,
  },
});
