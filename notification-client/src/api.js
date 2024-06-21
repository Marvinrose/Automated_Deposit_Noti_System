import axios from "axios";

const API_URL = "http://localhost:3000";

export const sendFailedDepositNotification = async (
  userId,
  amount,
  notificationType
) => {
  try {
    const response = await axios.post(`${API_URL}/notify-failed-deposit`, {
      userId,
      amount,
      notificationType,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "Error sending notification");
  }
};

export const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}/user-management/users/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "Error fetching user information");
  }
};

export const getWalletInfo = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}/wallet-service/wallets/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data || "Error fetching wallet information"
    );
  }
};
