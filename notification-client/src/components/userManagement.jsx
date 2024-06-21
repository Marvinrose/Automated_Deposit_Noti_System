import { useState } from "react";
import { getUserInfo } from "../api";

const UserManagement = () => {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchUser = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getUserInfo(userId);
      setUserInfo(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleFetchUser} disabled={loading}>
          {loading ? "Fetching..." : "Fetch User"}
        </button>
      </div>
      {userInfo && (
        <div>
          <h3>User Info:</h3>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Mobile: {userInfo.mobileNumber}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default UserManagement;
