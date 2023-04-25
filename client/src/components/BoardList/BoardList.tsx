import Board from "../Board/Board";
import CircularIndicator from "../ActivityIndicator/CircularIndicator";
import { useContext } from "react";
import { ShowroomContext } from "../../contexts/showRoomContext";

interface BoardListProps {}

export default function BoardList(props: BoardListProps) {
  const { showroomData } = useContext(ShowroomContext);

  return (
    <>
      {showroomData ? (
        showroomData.boards.map((board) => (
          <Board
            key={board.image}
            _id={board._id}
            title={board.title}
            image={board.image}
            showroomData={showroomData}
          />
        ))
      ) : (
        <CircularIndicator />
      )}
    </>
  );
}
