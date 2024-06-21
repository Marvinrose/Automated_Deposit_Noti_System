import { Link, Stack, TextField, Typography } from "@mui/material";

const RegisterForm = () => {
  return (
    <>
      <Stack>
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

export default RegisterForm;
