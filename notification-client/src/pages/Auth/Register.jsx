import { Link, Stack, Typography } from "@mui/material";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Get Started With Tawk</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2"> Already have an account?</Typography>
          <Link to="/auth/login" variant="subtitle2">
            Sign In
          </Link>
        </Stack>
        {/* Register form */}
        <RegisterForm />
      </Stack>
    </>
  );
};

export default Register;
