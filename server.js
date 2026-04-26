import express from "express";
import path from "path";

const app = express();

// 🔥 THIS LINE FIXES MIME TYPES
app.use(express.static(path.join(process.cwd())));
