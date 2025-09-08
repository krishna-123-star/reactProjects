import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface DatePickerCompProps {
  value: Date | null;
  onChange: (newValue: Date | null) => void;
}

const DatePickerComp: React.FC<DatePickerCompProps> = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Choose a date"
        value={value}
        onChange={onChange}
        sx={{ mt: 2, width: "100%" }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComp;
