export interface ShowroomInterface {
  _id: string;
  title: string;
  boards: BoardInterface[];
}

export interface BoardInterface {
  _id: string;
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

export type ShowroomContextType = {
  showroomData: ShowroomInterface
  setShowroomData: (data: ShowroomInterface) => void
}
