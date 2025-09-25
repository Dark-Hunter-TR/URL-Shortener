require('dotenv').config();
const mongoose = require('mongoose');
const colors = require('colors');

const database = async () => {
    try {
        const databaseUrl = process.env.MONGOODB_URL || "";

        console.log(colors.blue("🔌 Connecting to MongoDB..."));

        if(!databaseUrl) {
            throw new Error("MongoDB connection string is not defined in environment variables.");
            process.exit(0);
        }

        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(colors.green("✅ Connected to MongoDB successfully"));
    }
    catch (error) {
        console.error(colors.red("❌ Database connection error:", error));
        process.exit(0);
    }
};


async function main() {
    await database();
    
    console.log(colors.blue("🚀 Starting server..."));
    
    setTimeout(async() => {
        await require(`${process.cwd()}/src/server.js`);
    }, 3000);
}

main();