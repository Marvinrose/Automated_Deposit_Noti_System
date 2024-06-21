import { Box, Divider, IconButton, Stack } from "@mui/material";

const Sidebar = () => {
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
              backgroundColor: '#000',
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            {/* <img alt="logo" src={Logo}></img> */}
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
                  p={1}
                  sx={{
                    // backgroundColor: theme.palette.primary.main,
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
                  // onClick={() => {
                  //   setSelected(el.index);
                  //   navigate(getPath(el.index));
                  // }}
                  // key={el.index}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.primary.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
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
                // onClick={() => {
                //   setSelected(3);
                //   navigate(getPath(3));
                // }}
                sx={{
                  color: '#000'
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

        <Stack spacing={4}>
          {/* <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          /> */}
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
