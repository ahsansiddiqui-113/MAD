import React, { useState } from "react";

import { View } from "react-native";
import PrayerItem from "./PrayerItem";

const prayers = ["Fajar", "Zohar", "Asar", "Maghrib", "Isha"];

function PrayerList({ prayerStatus, handleOffered }) {
  return (
    <View>
      {prayers.map((prayer, index) => (
        <PrayerItem
          key={index}
          prayer={prayer}
          prayerIndex={index}
          offered={prayerStatus[index]}
          handleOffered={handleOffered}
        />
      ))}
    </View>
  );
}

export default PrayerList;
