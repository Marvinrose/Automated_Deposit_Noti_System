import { Box, Stack } from "@mui/material";

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
        Hello world
      </Stack>
    </Box>
  );
};

export default Sidebar;
