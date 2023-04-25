import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import DenseAppBar from "../AppBar/DenseAppBar";
import DrawerList from "./components/ListDrawer";
import Showroom from "../Showroom/Showroom";
import { drawerSections } from "./layout/DrawerLayout";

const drawerWidth = 280;

interface ClipperDrawerProps {
}

export default function ClippedDrawer(props: ClipperDrawerProps) {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DenseAppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "hidden" }}>
          <DrawerList
            id={drawerSections.brandBook.id}
            data={drawerSections.brandBook.subSections}
          />
          <DrawerList
            id={drawerSections.seasonalStories.id}
            data={drawerSections.seasonalStories.subSections}
          />
          <DrawerList
            id={drawerSections.seasonalColors.id}
            data={drawerSections.seasonalColors.subSections}
          />
          <DrawerList
            id={drawerSections.concept.id}
            data={drawerSections.concept.subSections}
          />
          <DrawerList
            id={drawerSections.product.id}
            data={drawerSections.product.subSections}
          />
          <DrawerList
            id={drawerSections.productBoard.id}
            data={drawerSections.productBoard.subSections}
          />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Showroom name="my showroom" />
      </Box>
    </Box>
  );
}
