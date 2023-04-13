import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoute from "./routes/client.js";
import generalRoute from "./routes/general.js";
import salesRoute from "./routes/sales.route.js"
import managementRoute from "./routes/managment.route.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

import User from "./models/user.model.js";

const PORT = process.env.PORT || 9000;
import Product from "./models/product.js";
import ProductStat from "./models/productstat.js";
import Transactions from "./models/transaction.model.js";
import overallStat from "./models/overallstats.model.js";
import AffiliateStat from "./models/affilatestats.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat
} from "./data/index.js";

app.use("/client", clientRoute);
app.use("/general", generalRoute);
app.use("/management",managementRoute);
app.use("/sales",salesRoute);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server listening At ${PORT}`));
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transactions.insertMany(dataTransaction);
    // overallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
