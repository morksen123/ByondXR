import { Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import './ListDrawer.css'

interface DrawerListProps {
  data: string[];
}

const DrawerList = (props: DrawerListProps) => {
  const { data } = props;

  return (
    <>
      <List>
        {data.map((text, index) => (
          <ListItem key={text} className="List-item">
            <ListItemButton>
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

export default DrawerList; 
