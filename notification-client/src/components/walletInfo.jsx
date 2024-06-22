// components/WalletInfo.js
import { useState } from "react";
import { getWalletInfo } from "../api";
import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

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
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={5} textAlign={"center"}>
        <Stack sx={{ width: "100% " }} direction="column">
          <h2>Wallet Information</h2>
          <Stack direction={"column"} spacing={3}>
            <TextField
              required
              fullWidth
              sx={{}}
              id="outlined-basic"
              label="User ID"
              variant="outlined"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <Button
              onClick={handleFetchWallet}
              disabled={loading}
              fullWidth
              color="inherit"
              variant="contained"
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
              {loading ? "Fetching..." : "Fetch Wallet"}
            </Button>
          </Stack>
          {walletInfo && (
            <Card variant="outlined" sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Wallet Info:
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  User ID: {walletInfo.userId}
                </Typography>
                <Typography variant="body2">
                  Balance: ${walletInfo.balance}
                </Typography>
              </CardContent>
            </Card>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Stack>
      </Stack>
    </Container>
  );
};

export default WalletInfo;
