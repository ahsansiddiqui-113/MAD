import React from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

function CalenderPicker({ date, shown, handleChange }) {
  return (
    <>
      {shown && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default CalenderPicker;
