import { Link, Stack, TextField, Typography } from "@mui/material";

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
        {/* <RegisterForm /> */}
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signing up, I agree to "}

          <Link underline="always" color={"text.primary"}>
            Terms of service
          </Link>
          {" and "}

          <Link underline="always" color={"text.primary"}>
            Privacy Policy
          </Link>
        </Typography>
        {/* <AuthSocial /> */}
      </Stack>
    </>
  );
};

export default Register;
