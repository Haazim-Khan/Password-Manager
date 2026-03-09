import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv";
import Info from "./models/info.js"
import { v4 as uuidv4 } from "uuid"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
await mongoose.connect(process.env.DATA_BASE);

app.post('/save', async (req,res)=>{
    const savedPassword = await Info.create({
        id: uuidv4(),
        site: req.body.site,
        username: req.body.username,
        password: req.body.password
    });
    res.json(savedPassword);
});

app.get('/info', async(req,res)=>{
    const data = await Info.find();
    res.json(data);
});

app.delete('/delete/:id', async(req,res)=>{
    await Info.deleteOne({id:req.params.id});
    res.json({ success: true });
})

app.listen(process.env.PORT, ()=>{
    console.log('Server Is Running...');
});