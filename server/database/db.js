const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Atlas successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
};
