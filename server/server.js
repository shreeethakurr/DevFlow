import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import taskRoutes from './routes/tasks.js';

dotenv.config();
const app=express();
app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173'}));
app.use(express.json());
app.get('/api/health',(req,res)=>res.json({ok:true,service:'DevFlow API'}));
app.use('/api/auth',authRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(err.status||500).json({message:err.message||'Server error'});});
const port=process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URI).then(()=>app.listen(port,()=>console.log(`DevFlow API running on ${port}`))).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exit(1)});
