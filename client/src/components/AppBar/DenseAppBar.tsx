import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./DenseAppBar.css";
import { Colors } from "../../constants/Colors";

export default function DenseAppBar() {
  const handleOnClick = () => {
    console.log("passed");
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar variant="regular" className="Tool-bar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <ArrowBackIcon style={{ color: Colors.BLACK, marginRight: 20 }} />
            <Typography
              variant="h5"
              fontWeight="bold"
              color={Colors.BLACK}
              style={{ marginRight: 50 }}
            >
              VAN HEUSEN
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle1"
                color={Colors.BLACK}
                fontWeight="100"
              >
                Brands
              </Typography>
              <ArrowDropDownIcon style={{ color: Colors.BLACK }} />
            </div>
          </div>
          <IconButton sx={{ mr: 2 }} onClick={handleOnClick}>
            <SearchIcon style={{ color: Colors.BLACK }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
