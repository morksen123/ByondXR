import { Box, Typography } from "@mui/material";
import "./Board.css";
import { BoardInterface } from "../../types/showroom.types";

export default function Board(props: BoardInterface) {
  const { title, image } = props;

  return (
    <div id={title} className="container">
      <Typography variant="h3" color={"#474747"} fontFamily={"hel"} marginBottom={"10px"}>
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
        style={{ marginBottom: 50}}
        sx={{
          height: 570,
          width: 850,
        }}
      />
    </div>
  );
}
