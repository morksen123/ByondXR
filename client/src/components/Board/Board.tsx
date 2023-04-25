import { Box, Typography } from "@mui/material";
import "./Board.css";
import { BoardInterface, ShowroomInterface } from "../../types/showroom.types";
import { useMutation } from "@apollo/client";
import { ADD_USER_ACTIVITY } from "../../graphql/Mutations";

type BoardProps = BoardInterface & {
  showroomData: ShowroomInterface;
};

export default function Board(props: BoardProps) {
  const { _id, title, image, showroomData } = props;
  const [addUserActivity] = useMutation(ADD_USER_ACTIVITY);

  const handleMouseEnter = () => {
    const input = {
      timestamp: Date.now().toString(),
      page: showroomData.title,
      entity_id: showroomData._id,
      event_type: "board_mouse_enter",
      data: {
        board_id: _id,
      },
    };

    addUserActivity({ variables: { input: input } })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id={title} className="container" onMouseEnter={handleMouseEnter}>
      <Typography
        variant="h3"
        color={"#474747"}
        fontFamily={"hel"}
        marginBottom={"10px"}
      >
        {title}
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Rhoncus dolor purus non enim praesent elementum facilisis leo
        vel.
      </Typography>
      <Box
        component="img"
        alt="board image"
        src={image}
        style={{ marginBottom: 50 }}
        sx={{
          height: 570,
          width: 850,
        }}
      />
    </div>
  );
}
