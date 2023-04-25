import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import DenseAppBar from "../AppBar/DenseAppBar";
import CustomDrawer from "./components/CustomDrawer";
import { ShowroomInterface } from "../../types/showroom.types";
import BoardList from "../BoardList/BoardList";

interface ClipperDrawerProps {
  data?: ShowroomInterface
}

// main component
export default function ClippedDrawer(props: ClipperDrawerProps) {
  const { data } = props

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DenseAppBar />
      <CustomDrawer/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {<BoardList boards={data?.boards}/>}
      </Box>
    </Box>
  );
}
