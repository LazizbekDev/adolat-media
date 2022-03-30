import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/user.js";
import news from "./data/news.js";
import Xabar from "./models/xabar.js";
import User from "./models/user.js";
import connect from "./db/db.js";
import colors from "colors";

dotenv.config();
connect();

const importData = async () => {
    try {
        await Xabar.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleData = news.map(item => {
            return {...item, user: adminUser};
        })

        await Xabar.insertMany(sampleData);

        console.log('Ma\'lumotlar import qilindi'.bgCyan.black);
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Xabar.deleteMany();
        await User.deleteMany();

        console.log('Ma\'lumotlar ombori tozalandi'.bgRed.white);
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}