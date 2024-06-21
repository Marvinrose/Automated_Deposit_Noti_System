import { Container, Stack } from "@mui/material";
import Register from "../../components/Register";

const DashboardLayout = () => {
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

        <Register />
      </Container>
    </>
  );
};

export default DashboardLayout;
