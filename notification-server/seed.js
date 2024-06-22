// seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database for seeding"));

const dummyUsers = [
  { name: "John Doe", email: "john@example.com", phone: "1234567890", id: "1" },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "2345678901",
    id: "2",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "3456789012",
    id: "3",
  },
  { name: "Bob Brown", email: "bob@example.com", phone: "4567890123", id: "4" },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone: "5678901234",
    id: "5",
  },
  {
    name: "Diana Evans",
    email: "diana@example.com",
    phone: "6789012345",
    id: "6",
  },
  {
    name: "Frank Green",
    email: "frank@example.com",
    phone: "7890123456",
    id: "7",
  },
  {
    name: "Grace Harris",
    email: "grace@example.com",
    phone: "8901234567",
    id: "8",
  },
  {
    name: "Hank Ives",
    email: "hank@example.com",
    phone: "9012345678",
    id: "9",
  },
  {
    name: "Ivy Jones",
    email: "ivy@example.com",
    phone: "0123456789",
    id: "10",
  },
];

const seedDB = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(dummyUsers);
    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDB();
