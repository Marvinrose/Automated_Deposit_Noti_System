import { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const NotificationForm = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [notificationType, setNotificationType] = useState("email");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple client-side validation
    if (!userId || !amount) {
      setError("User ID and Amount are required");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/notify-failed-deposit",
        {
          userId,
          amount: parseFloat(amount), // Ensure amount is sent as a number
          notificationType,
        }
      );
      setMessage(response.data);
      //  setSnackbarOpen(true); // Assuming you have a Snackbar for success messages
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError(err.response?.data || "Error sending notification");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={5} textAlign={"center"}>
        <Stack sx={{ width: "100% " }} direction="column">
          <h1>Failed Deposit Notification</h1>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={3}>
              <TextField
                required
                fullWidth
                id="outlined-basic"
                label="User ID"
                variant="outlined"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <TextField
                required
                fullWidth
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Notification Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Notification Type"
                  value={notificationType}
                  onChange={(e) => setNotificationType(e.target.value)}
                >
                  <MenuItem value={"email"}>Email</MenuItem>
                  <MenuItem value={"mobile"}>Mobile</MenuItem>
                </Select>
              </FormControl>
              <Button
                disabled={loading}
                fullWidth
                color="inherit"
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#000",
                    color: "#fff",
                  },
                }}
              >
                {loading ? "Sending..." : "Send Notification"}
              </Button>
            </Stack>
          </form>
        </Stack>
        {message && <p>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Stack>
    </Container>
  );
};

export default NotificationForm;
