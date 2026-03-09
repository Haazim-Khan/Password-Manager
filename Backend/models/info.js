import mongoose from "mongoose"

const info = new mongoose.Schema({
    id: String,
    site: String,
    username: String,
    password: String
})

export default mongoose.model("Info", info);