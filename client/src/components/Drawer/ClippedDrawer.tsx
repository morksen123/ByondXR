import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DenseAppBar from "../AppBar/DenseAppBar";

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

interface DrawerListProps {
  data: string[];
}

const DrawerList = (props: DrawerListProps) => {
  const { data } = props;
  return (
    <>
      <List>
        {data.map((text, index) => (
          <ListItem key={text} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemButton>
              <ListItemText>
                {index === 0 ? (
                  <span style={{ fontWeight: "bold" }}>{text}</span>
                ) : (
                  <span>{text}</span>
                )}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};
