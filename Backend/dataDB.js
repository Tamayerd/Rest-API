require("dotenv").config();
const connectDB = require("./db/connect")
const data = require("./models/data")
const dataJson = require("./data.json")

const start = async () => {
    try {
        await connectDB(process.env.URI);
        await data.create(dataJson);
        console.log("Success...")
    } catch (error) {
        console.log(error)
    }
}

start()