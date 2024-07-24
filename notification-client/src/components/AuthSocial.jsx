import { Box, Button, Divider, IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";

const AuthSocial = () => {
  return (
    <Box mb={5}>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction={"column"} spacing={2}>
        <Button
          startIcon={<GoogleLogo weight="bold" />}
          fullWidth
          color="inherit"
          variant="outlined"
          type="submit"
          size="large"
        >
          Sign In with Google
        </Button>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <IconButton>
            <GoogleLogo color="#DF3E30" />
          </IconButton>
          <IconButton color="inherit">
            <GithubLogo />
          </IconButton>
          <IconButton>
            <TwitterLogo color="#1C9CEA" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AuthSocial;
