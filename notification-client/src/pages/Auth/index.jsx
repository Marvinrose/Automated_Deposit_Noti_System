import { Container, Stack } from "@mui/material";

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack sx={{ width: "100% " }} direction="column" alignItems="center">
            <img
              style={{ width: 120, height: 120 }}
              // src={logo}
              alt={"logo"}
            />
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default AuthLayout;
