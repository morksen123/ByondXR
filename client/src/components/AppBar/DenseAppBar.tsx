import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./DenseAppBar.css";

export default function DenseAppBar() {
  // const handleOnClick = () => {
  //   console.log("passed");
  // };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar variant="regular" className="Tool-bar">
          <div className="Typography-icon">
            <ArrowBackIcon className="Arrow-back-icon" />
            <Typography
              className="Black-theme"
              variant="h5"
              fontWeight="bold"
              style={{ marginRight: 50 }}
            >
              VAN HEUSEN
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                className="Black-theme"
                variant="subtitle1"
                fontWeight="100"
              >
                Brands
              </Typography>
              <ArrowDropDownIcon className="Black-theme" />
            </div>
          </div>
          {/* <IconButton sx={{ mr: 2 }} onClick={handleOnClick}> */}
          <IconButton sx={{ mr: 2 }}>
            <SearchIcon className="Black-theme" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
