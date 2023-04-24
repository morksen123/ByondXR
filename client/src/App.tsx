import { ThemeProvider, createTheme } from "@mui/material";
import ClippedDrawer from "./components/Drawer/ClippedDrawer";

function App() {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#000000', // Set the default color for icons to black
  //     },
  //   },
  // });
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
        <ClippedDrawer/>
    {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
