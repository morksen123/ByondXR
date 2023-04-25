import { useQuery } from "@apollo/client";
import { GET_SHOWROOM } from "../../graphql/Queries";
import { useEffect, useState } from "react";
import { ShowroomInterface } from "../../types/showroom.types";
import Board from "../Board/Board";
import CircularIndicator from "../ActivityIndicator/CircularIndicator";

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
    <>
      {showroomData ? (
        showroomData.boards?.map((board) => (
          <Board key={board.image} id={board.id} title={board.title} imageLink={board.image} />
        ))
      ) : (
        <CircularIndicator />
      )}
    </>
  );
}
