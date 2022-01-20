const util = require("util");
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("receipt");

const uploadImage = util.promisify(uploadFile);

module.exports = uploadImage;
