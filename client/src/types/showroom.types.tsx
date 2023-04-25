export interface ShowroomInterface {
  _id: number;
  title: string;
  boards: BoardInterface[];
}

export interface BoardInterface {
  id: number;
  title: string;
  image: string;
}

export enum DrawerSections {
  BRAND_BOOK = "brand-book",
  SEASONAL_STORIES = "seasonal-stories",
  SEASONAL_COLORS = "seasonal-colors",
  CONCEPT = "concept",
  PRODUCT = "product",
  PRODUCT_BOARD = "product-board",
}
