import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import DenseAppBar from "../AppBar/DenseAppBar";
import CustomDrawer from "./components/CustomDrawer";
import BoardList from "../BoardList/BoardList";

interface ClipperDrawerProps {}

// main component
export default function ClippedDrawer(props: ClipperDrawerProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DenseAppBar />
      <CustomDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <BoardList />
      </Box>
    </Box>
  );
}
