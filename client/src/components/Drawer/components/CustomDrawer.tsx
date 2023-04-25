import { Box, Drawer, Toolbar } from "@mui/material";
import { DrawerSections } from "../../../types/showroom.types";
import DrawerSection from "./DrawerSection";

const drawerSections = [
  {
    id: DrawerSections.BRAND_BOOK,
    subSections: ["Brand Book", "Introduction video", "Van Heusen Brandbook"],
  },
  {
    id: DrawerSections.SEASONAL_STORIES,
    subSections: ["Seasonal Stories"],
  },
  {
    id: DrawerSections.SEASONAL_COLORS,
    subSections: ["Seasonal Colors"],
  },
  {
    id: DrawerSections.CONCEPT,
    subSections: ["Concept"],
  },
  {
    id: DrawerSections.PRODUCT,
    subSections: ["Product", "Traveler", "Never Tuck", "Flex", "Key Looks"],
  },
  {
    id: DrawerSections.PRODUCT_BOARD,
    subSections: ["Product Board"],
  },
];

const drawerWidth = 280;

interface CustomDrawerProps {}

export default function CustomDrawer(props: CustomDrawerProps) {
  return (
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
        {drawerSections.map((section) => (
          <DrawerSection
            key={section.id}
            id={section.id}
            data={section.subSections}
          />
        ))}
      </Box>
    </Drawer>
  );
}
