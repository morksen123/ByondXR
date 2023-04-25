import Board from "../Board/Board";
import CircularIndicator from "../ActivityIndicator/CircularIndicator";
import { BoardInterface } from "../../types/showroom.types";

interface BoardListProps {
  boards: BoardInterface[] | undefined;
}

export default function BoardList(props: BoardListProps) {
  const { boards } = props;

  return (
    <>
      {boards ? (
        boards.map((board) => (
          <Board
            key={board.image}
            _id={board._id}
            title={board.title}
            image={board.image}
          />
        ))
      ) : (
        <CircularIndicator />
      )}
    </>
  );
}
