import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "./DrawerSection.css";
import { useMutation } from "@apollo/client";
import { ADD_USER_ACTIVITY } from "../../../graphql/Mutations";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ShowroomContext } from "../../../contexts/showRoomContext";

interface DrawerSectionProps {
  id: string;
  data: string[];
}

const DrawerSection = (props: DrawerSectionProps) => {
  const { data } = props;
  const { showroomData } = useContext(ShowroomContext);

  const [addUserActivity] = useMutation(ADD_USER_ACTIVITY);

  const handleAddUserActivity = (name: string) => {
    let targetBoard = getBoardByTitle(name);

    if (targetBoard.length === 0) {
      return;
    }

    let boardId = targetBoard[0]._id;

    const input = {
      timestamp: Date.now().toString(),
      page: showroomData.title,
      entity_id: showroomData._id,
      event_type: `${name}_DRAWER_CLICK`,
      data: {
        board_id: boardId,
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

  const getBoardByTitle = (text: string) => {
    const boards = showroomData.boards;
    const targetBoard = boards.filter((board) => board.title === text);
    return targetBoard;
  };

  return (
    <>
      <List>
        {data.map((text, index) => (
          <ListItem key={index} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Link to={text} smooth duration={300} style={{ width: "100%" }}>
              <ListItemButton onClick={() => handleAddUserActivity(text)}>
                <ListItemText>
                  {index === 0 ? (
                    <span className="Header">{text}</span>
                  ) : (
                    <span>{text}</span>
                  )}
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default DrawerSection;
