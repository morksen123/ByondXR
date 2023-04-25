import { useQuery } from "@apollo/client";
import { GET_SHOWROOM } from "../../graphql/Queries";
import { useContext, useEffect, useState } from "react";
import ClippedDrawer from "../Drawer/ClippedDrawer";
import { ShowroomContext } from "../../contexts/showRoomContext";

interface ShowroomProps {
  name: string;
}

export default function Showroom(props: ShowroomProps) {
  const { error, loading, data } = useQuery(GET_SHOWROOM, {
    variables: { name: props.name },
  });

  const { showroomData, setShowroomData } = useContext(ShowroomContext)

  useEffect(() => {
    if (error) {
      console.log("showroom data error");
    }
    if (!loading) {
      setShowroomData(data.getShowroom);
    }
  }, [data]);

  useEffect(() => {
    console.log(showroomData);
  }, [showroomData]);

  return (
    <ClippedDrawer
      data={showroomData}
    />
  );
}
