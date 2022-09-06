const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

exports.verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  let token = (req.headers.authorization).replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // console.log("decode", decoded);
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    if (Date.now() >= decoded.exp * 1000) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    req.userId = decoded.id;
    next();
  });
};
