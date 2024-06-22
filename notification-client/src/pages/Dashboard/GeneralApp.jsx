import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const GeneralApp = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          // overflow: "auto",
          padding: 2,
        }}
      >
        <Stack direction={"row"} sx={{ height: "100vh" }}>
          {" "}
          <Outlet />
        </Stack>
      </Box>
    </>
  );
};

export default GeneralApp;
