const Services = require("../services");
const util = require("../utils/utils");
const authService = Services.auth;

exports.createUser = async (req, res) => {
  let { name, email, password, birthday } = req.body;
  try {
    if (!email || !password || !name || !birthday) {
      util.setError(400, "missing field");
      return util.send(res);
    }
    if (await authService.existingUser(email)) {
      util.setError(409, "email already in use");
      return util.send(res);
    }
    await authService
      .createUser(email, password, email, birthday)
      .then((user) => {
        util.setSuccess(200, "user created successfuly");
        return util.send(res);
      });
  } catch (error) {
    util.setSuccess(400, "error",error);
    return util.send(res);
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;

  if (!email.length || !password.length) {
    util.setError(400, "Can not be empty");
    return util.send(res);
  }

  if (!email || !password) {
    util.setError(400, "Please provide complete details");
    return util.send(res);
  }

  const login = await authService.findUser(email);
  if (!login) {
    util.setError(400, "user not found");
    return util.send(res);
  }
  const passwordIsValid = authService.comparePasswords(
    login.password,
    password
  );
  if (!passwordIsValid) {
    util.setError(401, "Invalid Credentials");
    return util.send(res);
  }
  const userData = {
    id: login.id,
    email: login.email,
    token: await authService.generateJWT(login.id),
  };
  util.setSuccess(200, "user connected successfuly", userData);
  return util.send(res);
};

