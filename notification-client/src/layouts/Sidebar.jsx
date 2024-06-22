import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import Nav_Buttons from "../data";
import { Gear } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/fin-tech-logo.png";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const getPath = (index) => {
    switch (index) {
      case 0:
        return "/dashboard/userManagement";
      case 1:
        return "/dashboard/wallet";
      case 2:
        return "/dashboard/notification";
      case 3:
        return "/dashboard/signOut";

      default:
        break;
    }
  };

  return (
    <Box
      p={2}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              backgroundColor: "#000",
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img width={64} alt="logo" src={Logo}></img>
          </Box>
          <Stack
            spacing={3}
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  p={1}
                  sx={{
                    backgroundColor: "#000",
                    borderRadius: 1.5,
                  }}
                >
                  {" "}
                  <IconButton
                    key={el.index}
                    sx={{ width: "max-content", color: "#fff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                    navigate(getPath(el.index));
                  }}
                  key={el.index}
                  sx={{
                    width: "max-content",
                    color: "#000",
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 4 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ color: "#fff" }}>
                  <Gear></Gear>
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                  navigate(getPath(3));
                }}
                sx={{
                  color: "#000",
                  // theme.palette.primary.mode === "light"
                  //   ? "#000"
                  //   : theme.palette.text.primary,
                }}
              >
                <Gear></Gear>
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Avatar
            sx={{ cursor: "pointer" }}
            id="basic-button"
            // aria-controls={open ? "basic-menu" : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
            // src={faker.image.avatar()}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
