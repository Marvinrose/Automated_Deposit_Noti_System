import NotificationForm from "./NotificationForm";
import UserManagement from "./userManagement";
import WalletInfo from "./walletInfo";

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserManagement />
      <WalletInfo />
      <NotificationForm />
    </div>
  );
};

export default UserDashboard;
