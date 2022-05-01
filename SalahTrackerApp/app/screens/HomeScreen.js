import React, { useState } from "react";

import { Button, StyleSheet, StatusBar, View } from "react-native";

import CalenderPicker from "../components/CalenderPicker";
import PrayerList from "../components/PrayerList";
import Reports from "../components/Reports";

function HomeScreen(props) {
  const [calenderShown, setCalenderShown] = useState(false);
  const [date, setDate] = useState(new Date());

  const [prayerStatus, setPrayerStatus] = useState({});

  const handleOffered = (prayerIndex, offeredStatus) => {
    const newPrayerStatus = { ...prayerStatus };
    newPrayerStatus[date][prayerIndex] = offeredStatus;
    setPrayerStatus(newPrayerStatus);
  };

  const handleDateChanged = (_, selectedDate) => {
    if (selectedDate < new Date()) setDate(selectedDate);

    prayerStatus[selectedDate] =
      prayerStatus[selectedDate] ||
      new Array(5).fill({ alone: false, jamat: false });

    setPrayerStatus(prayerStatus);
    setCalenderShown(false);
  };

  return (
    <View style={styles.contianer}>
      <CalenderPicker
        date={date}
        handleChange={handleDateChanged}
        shown={calenderShown}
      />
      <Button
        title="Show Calender"
        onPress={() => setCalenderShown(!calenderShown)}
      />
      {prayerStatus[date] && (
        <PrayerList
          prayerStatus={prayerStatus[date]}
          handleOffered={handleOffered}
        />
      )}
      <Reports prayerStatus={prayerStatus} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  contianer: {
    paddingTop: StatusBar.currentHeight,
  },
});
