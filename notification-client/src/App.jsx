import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./layouts";
import WalletInfo from "./components/walletInfo";
import NotificationForm from "./components/NotificationForm";
import UserManagement from "./components/userManagement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="wallet" element={<WalletInfo />} />
          <Route path="notification" element={<NotificationForm />} />
          <Route path="userManagement" element={<UserManagement />} />
          {/* Add more nested routes as needed */}
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
