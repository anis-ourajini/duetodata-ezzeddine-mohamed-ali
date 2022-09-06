exports.isMail = async (email) => {
  const re = /^\S+@\S+\.\S+$/;
  return re.test(email);
};

exports.passwordCharValidation = async (password) => {
  const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
    return re.test(password);
};

exports.passwordlengthValidation = async (password) => {
  const re = /^.{8,16}$/;
    return re.test(password);
};
