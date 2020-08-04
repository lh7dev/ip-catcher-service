const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const TrackerRoutes = require("./app_modules/routes/tracker.routes");
//const ProductRouter = require("./src/routes/product.routes");

const app = express();

app
  .use(
    cors({
      origin: true,
    })
  )
  .use(bodyParser.json())
  .use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  // initialize routes
  .use("/tracker", TrackerRoutes)
  /*.use("/customer", CustomerRouter) */
  //.use("/product", ProductRouter)
  .get("*", (_, res) => {
    console.log(_.route);
    res.status(404).json({
      success: false,
      error: {
        message: "Endpoint not found",
      },
    });
  });

module.exports = app;
