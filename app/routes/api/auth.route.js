const router = require("express").Router();
const auth = require("../../controllers/auth.controller.js");
const  validation  = require("../../middleware/validation");
router.post("/", [validation.verifyEntry], auth.createUser);
router.post("/login", auth.login);

module.exports = router;
