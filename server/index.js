require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/user.routes");
const loginRoutes = require("./routes/login.routes");
const authRoutes = require("./routes/register.routes");
const serviceRoutes = require('./routes/serviceRoutes');
const rdvRoutes = require('./routes/rdv.routes');
const connection = require("./database/db");

const app = express();
const PORT = process.env.PORT || 8080;

// Database
connection();

// Cors
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/register", authRoutes);
app.use("/api/services", serviceRoutes);
app.use('/api/rendezvous',rdvRoutes );
app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
