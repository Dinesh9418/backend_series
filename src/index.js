// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/indexDB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 8000, () =>
      console.log(`server is running on PORT: ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log("db connection faild !!", error));

/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/

/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${backend}`);
    app.on("error", (err) => {
      console.error("err: ", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`APP is listening on PORT: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
