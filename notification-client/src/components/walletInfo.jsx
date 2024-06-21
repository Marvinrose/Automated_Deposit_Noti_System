import { useState } from "react";
import { getWalletInfo } from "../api";

const WalletInfo = () => {
  const [userId, setUserId] = useState("");
  const [walletInfo, setWalletInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchWallet = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getWalletInfo(userId);
      setWalletInfo(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Wallet Information</h2>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleFetchWallet} disabled={loading}>
          {loading ? "Fetching..." : "Fetch Wallet"}
        </button>
      </div>
      {walletInfo && (
        <div>
          <h3>Wallet Info:</h3>
          <p>Balance: ${walletInfo.balance}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default WalletInfo;
