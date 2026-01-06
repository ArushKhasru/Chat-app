// const express = require('express');
import express from 'express';
import { ENV } from './lib/env.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import path from "path";
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
const __dirname = path.resolve();
const PORT = ENV.PORT || 3000;

app.use(express.json({limit:"5mb"}));//req.body
app.use(cors({origin: ENV.CLIENT_URL.replace(/\/$/, ''), credentials:true}))
app.use(cookieParser());// to compare cookies to check whether the user is valid or not

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

//make ready for deployment
if (ENV.NODE_ENV === "development") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});