import { ThemeProvider, createTheme } from "@mui/material";
import ClippedDrawer from "./components/Drawer/ClippedDrawer";
import Showroom from "./components/Showroom/Showroom";
import Board from "./components/Board/Board";

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
        {/* <Showroom name="my showroom"/> */}
    {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
