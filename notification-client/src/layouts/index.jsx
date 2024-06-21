import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import GeneralApp from "../pages/Dashboard/GeneralApp";

const Dashboard = () => {
  return (
    <Stack direction="row">
      <Sidebar />
      <GeneralApp />
    </Stack>
  );
};

export default Dashboard;
