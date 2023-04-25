import { DrawerSections } from "../../../types/showroom.types";

export const drawerSections = {
    brandBook: {
      id: DrawerSections.BRAND_BOOK,
      subSections: ["Brand Book", "Introduction video", "Van Heusen Brandbook"],
    },
    seasonalStories: {
      id: DrawerSections.SEASONAL_STORIES,
      subSections: ["Seasonal Stories"],
    },
    seasonalColors: {
      id: DrawerSections.SEASONAL_COLORS,
      subSections: ["Seasonal Colors"],
    },
  
    concept: {
      id: DrawerSections.CONCEPT,
      subSections: ["Concept"],
    },
  
    product: {
      id: DrawerSections.PRODUCT,
      subSections: ["Product", "Traveler", "Never Tuck", "Flex", "Key Looks"],
    },
  
    productBoard: {
      id: DrawerSections.PRODUCT_BOARD,
      subSections: ["Product Board"],
    },
  };