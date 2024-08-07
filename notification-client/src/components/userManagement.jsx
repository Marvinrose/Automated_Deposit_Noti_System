import { useEffect, useState } from "react";
import axios from "axios";
// import { getUserInfo } from "../api";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { Eye, X } from "phosphor-react";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchId(e.target.value);
    if (e.target.value === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) => user.id.includes(e.target.value));
      setFilteredUsers(filtered);
    }
  };
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <Container sx={{ mt: 5 }} maxWidth="lg">
      <Stack spacing={5} textAlign={"center"}>
        <Stack sx={{ width: "100% " }} direction="column">
          <Box p={2}>
            <Stack direction="row" spacing={2} mb={2}>
              <TextField
                label="Search User by ID"
                value={searchId}
                onChange={handleSearch}
                fullWidth
              />
            </Stack>
            <Typography variant="h6" mb={2}>
              User List:
            </Typography>
            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleViewUser(user)}>
                            <Eye />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              fullWidth={true}
            >
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                User Details
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <X />
              </IconButton>
              <DialogContent>
                {selectedUser && (
                  <Box>
                    <Typography>ID: {selectedUser.id}</Typography>
                    <Typography>Name: {selectedUser.name}</Typography>
                    <Typography>Email: {selectedUser.email}</Typography>
                    <Typography>Phone: {selectedUser.phone}</Typography>
                  </Box>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </BootstrapDialog>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default UserManagement;
