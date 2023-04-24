import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import DenseAppBar from "../AppBar/DenseAppBar";
import DrawerList from "./components/ListDrawer";

const drawerWidth = 280;

const drawerSections = {
  brandBook: ["Brand Book", "Introduction video", "Van Heusen Brandbook"],
  seasonalStories: ["Seasonal Stories"],
  seasonalColors: ["Seasonal Colors"],
  concept: ["Concept"],
  product: ["Product", "Traveler", "Never Tuck", "Flex", "Key Looks"],
  productBoard: ["Product Board"],
};

export default function ClippedDrawer() {
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
          <DrawerList data={drawerSections.brandBook} />
          <DrawerList data={drawerSections.seasonalStories} />
          <DrawerList data={drawerSections.seasonalColors} />
          <DrawerList data={drawerSections.concept} />
          <DrawerList data={drawerSections.product} />
          <DrawerList data={drawerSections.productBoard} />
        </Box>
      </Drawer>
    </Box>
  );
}

