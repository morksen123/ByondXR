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

interface DrawerSectionProps {
  id: string;
  data: string[];
}

const DrawerSection = (props: DrawerSectionProps) => {
  const { data } = props;

  const [addUserActivity] = useMutation(ADD_USER_ACTIVITY);

  const handleAddUserActivity = () => {
    const input = {
      timestamp: Date.now().toString(),
      page: "my showroom",
      entity_id: "6444b528ba622c36d2bcb2be",
      event_type: "click",
      data: {
        board_id: "6444b528ba622c36d2bcb2be",
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
    <>
      <List>
        {data.map((text, index) => (
          <ListItem key={index} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemButton onClick={handleAddUserActivity}>
              <ListItemText>
                {index === 0 ? (
                  <span className="Header">{text}</span>
                ) : (
                  <span>{text}</span>
                )}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default DrawerSection;
