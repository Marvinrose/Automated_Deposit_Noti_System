import { Container, Stack } from "@mui/material";

import { Outlet } from "react-router-dom";
import AuthSocial from "../../components/AuthSocial";

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
        <AuthSocial />
      </Container>
    </>
  );
};

export default AuthLayout;
