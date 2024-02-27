import express from "express";
import { connectToDB } from "./db/connection";
import router from "./routes";
import cors from "cors"
import { config } from "dotenv"

config()

const app = express();
app.use(express.json());

const PORT = 3000;
connectToDB();

app.use(cors())
app.use(router)
app.use("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
