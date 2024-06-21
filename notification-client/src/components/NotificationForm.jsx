import { useState } from "react";
// import { sendFailedDepositNotification } from "../api";

const NotificationForm = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [notificationType, setNotificationType] = useState("email");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    // try {
    //   const response = await sendFailedDepositNotification(
    //     userId,
    //     amount,
    //     notificationType
    //   );
    //   setMessage(response);
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <h1>Failed Deposit Notification</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Notification Type:</label>
          <select
            value={notificationType}
            onChange={(e) => setNotificationType(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Notification"}
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default NotificationForm;
