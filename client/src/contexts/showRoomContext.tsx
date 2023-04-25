import { ShowroomInterface } from "../types/showroom.types";
import React, { useState, createContext } from "react";
import { ShowroomContextType } from "../types/showroom.types";

const defaultShowroomData = {
  _id: "",
  title: "",
  boards: [],
};

export const ShowroomContext = createContext<ShowroomContextType>({
  showroomData: defaultShowroomData,
  setShowroomData: () => {},
});

export const ShowroomProvider = ({ children }: React.PropsWithChildren) => {
  const [showroomData, setShowroomData] =
    useState<ShowroomInterface>(defaultShowroomData);

  const value = {
    showroomData,
    setShowroomData,
  };

  return (
    <ShowroomContext.Provider value={value}>
      {children}
    </ShowroomContext.Provider>
  );
};
