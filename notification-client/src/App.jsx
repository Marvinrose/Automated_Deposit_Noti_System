import { Container, Stack } from "@mui/material";
import "./App.css";
import { Outlet } from "react-router-dom";
import Register from "./components/Register";
// import UserDashboard from "./components/userDashboard";

function App() {
  return (
    <>
      <div>
        <Container sx={{ mt: 5 }} maxWidth="sm">
          <Stack spacing={5}>
            <Stack
              sx={{ width: "100% " }}
              direction="column"
              alignItems="center"
            >
              <img
                style={{ width: 120, height: 120 }}
                // src={logo}
                alt={"logo"}
              />
            </Stack>
          </Stack>
          <Register />

          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
