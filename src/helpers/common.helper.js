module.exports.isValidEmail = function (email) {
  const Emailregex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return Emailregex.test(email);
};

module.exports.isValidPhone = function (phone) {
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneRegex.test(phone);
};
