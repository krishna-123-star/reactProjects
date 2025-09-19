import React, { useState } from "react";
import DatePickerComp from "./pages/DatePicker";
import DialogsPage from "./pages/Dialog";
import BasicTable from "./pages/TablePagination";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import { colors, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  const theme = createTheme({
    status:{
      danger: '#e53e3e',
    },
  palette: {
    secondary: {  
        main: colors.orange[500]
    },
  neutral: {
    main: colors.grey[500],
    darker: colors.grey[700],
},
},
});

  return (
    <ThemeProvider theme={theme}>
      <MuiResponsiveness></MuiResponsiveness>
    </ThemeProvider>
    // <div style={{ padding: "20px" }}>
    //   <DatePickerComp value={selectedDate} onChange={setSelectedDate} />
    //   <p>Selected Date: {selectedDate?.toLocaleDateString()}</p>
    // </div>
    // <DialogsPage/>
    // <BasicTable />
    // <div>
    // <Button variant="contained" onClick={() => setOpen(true)}>
    //     Open Dialog
    //   </Button>

    //   <DialogComp
    //     open={open}
    //     onClose={() => setOpen(false)}
    //     title="Welcome!"
    //     content="This is a simple reusable dialog."
    //   />
    //   </div>
    // <div style={{ padding: "20px" }}>
    //   <DatePickerComp value={selectedDate} onChange={setSelectedDate} />
    //   {selectedDate && <p>Selected Date: {selectedDate.format("YYYY-MM-DD")}</p>}
    // </div>
  );
}

export default App;
