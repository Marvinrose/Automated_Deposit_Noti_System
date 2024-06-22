import { Button, Link, Stack, TextField } from "@mui/material";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
            <TextField
              required
              name={"email"}
              type="email"
              fullWidth
              sx={{}}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              name={"password"}
              type="password"
              fullWidth
              sx={{}}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
            />
            <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
              <Link variant="body2" color={"inherit"} underline="always">
                Forgot Password?
              </Link>
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
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default LoginForm;
