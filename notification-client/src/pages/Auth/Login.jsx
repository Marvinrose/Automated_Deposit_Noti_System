import { Link, Stack, Typography } from "@mui/material";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Log In To Tawk</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link href="/register"  variant="subtitle2">
            Create an Account
          </Link>
        </Stack>
        {/* Register form */}
        <LoginForm />
      </Stack>
    </>
  );
};

export default Login;
