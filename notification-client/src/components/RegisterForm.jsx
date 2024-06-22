import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send data to the server
  };

  return (
    <>
      <Stack>
        <form onSubmit={handleSubmit}>
          <Stack direction={"column"} spacing={3}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                required
                name={"fullName"}
                type="text"
                fullWidth
                id="outlined-basic"
                label="Fullname"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                required
                name={"email"}
                type="email"
                fullWidth
                sx={{}}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                required
                name={"phone"}
                type="number"
                fullWidth
                sx={{}}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </Stack>
            <Button
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
              Create Account
            </Button>
          </Stack>
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
        </form>
      </Stack>
    </>
  );
};

export default RegisterForm;
