import { useQuery } from "@apollo/client";
import { GET_SHOWROOM } from "../../graphql/Queries";
import { useEffect, useState } from "react";
import { ShowroomInterface } from "../../types/showroom.types";
import ClippedDrawer from "../Drawer/ClippedDrawer";

interface ShowroomProps {
  name: string;
}

export default function Showroom(props: ShowroomProps) {
  const { error, loading, data } = useQuery(GET_SHOWROOM, {
    variables: { name: props.name },
  });

  const [showroomData, setShowroomData] = useState<
    ShowroomInterface | undefined
  >();

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
