const User = require("../models/user.model");

//packages
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (email, password, name, birthday) => {
  try {
    const user = User.create({
      email: email,
      password: bcrypt.hashSync(password, 10),
      name: name,
      birthday: birthday,
    });
    return user;
  } catch (error) {
    return error;
  }
};

exports.existingUser = async (email) => {
  return await User.findOne({ email: email });
};

exports.findUser = async (email) => {
  try {
    return User.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }
};

exports.comparePasswords = (password, enteredPassword) => {
  const result = bcrypt.compareSync(enteredPassword, password);
  return result;
};

exports.generateJWT = async (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};

