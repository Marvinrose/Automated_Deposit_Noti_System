import { useState } from "react";
import { sendFailedDepositNotification } from "../api";
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
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const response = await sendFailedDepositNotification(
        userId,
        amount,
        notificationType
      );
      setMessage(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5} textAlign={"center"}>
          <Stack sx={{ width: "100% " }} direction="column">
            <h1>Failed Deposit Notification</h1>
            <form onSubmit={handleSubmit}>
              <Stack direction={"column"} spacing={3}>
                <TextField
                  required
                  // name={"email"}
                  fullWidth
                  sx={{}}
                  id="outlined-basic"
                  label="User ID"
                  variant="outlined"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <TextField
                  required
                  // name={"password"}

                  fullWidth
                  sx={{}}
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
    </>
  );
};

export default NotificationForm;
