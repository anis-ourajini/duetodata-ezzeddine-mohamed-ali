const validation = require("../helpers").validation;

exports.verifyEntry = async (req, res, next) => {
  let { email, password } = req.body;

  if (await validation.isMail(email) === false) {
    return res.status(401).send({
      message: "email is not valid",
    });
  }

  if (await validation.passwordlengthValidation(password) == false) {
    return res.status(401).send({
      message: "password must be between 8 and 16",
    });
  }

  if (await validation.passwordCharValidation(password) == false) {
    return res.status(401).send({
      message:
        "password must contain uppercase letter , lowercase letter and numbers",
    });
  }

  next();
};
