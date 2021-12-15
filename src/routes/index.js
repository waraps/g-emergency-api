const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
compression = require("compression");
const morgan = require("morgan");
require("express-async-errors");

const pkg = require("../../package.json");

module.exports = function ({ UserRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan("dev"));

  router.use("/", (req, res) => {
    res.json({
      name: pkg.name,
      description: pkg.description,
      version: pkg.version,
      author: pkg.author,
    });
  });

  apiRoutes.use("/users", UserRoutes);

  router.use("/v1/api", apiRoutes);

  return router;
};
