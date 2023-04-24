import { Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface DrawerListProps {
  data: string[];
}

const DrawerList = (props: DrawerListProps) => {
  const { data } = props;
  return (
    <>
      <List>
        {data.map((text, index) => (
          <ListItem key={text} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemButton>
              <ListItemText>
                {index === 0 ? (
                  <span style={{ fontWeight: "bold" }}>{text}</span>
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
