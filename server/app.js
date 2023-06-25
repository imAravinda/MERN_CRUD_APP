import express from 'express';
import cors from "cors";
import cookieSession from "cookie-session";

import UserRoutes from './Routes/UserRoutes.js';
import AuthRoutes from './Routes/AuthRoutes.js';
import cookieParser from "cookie-parser";
import morgan from 'morgan';
const app = express();

app.use(morgan("dev"));

app.use(function (req, res, next) {
    res.header("Access-Control-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  app.use(cors(corsOptions));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);


app.use("/api/v1",UserRoutes);

app.use("/api/v1",AuthRoutes);

export default app;