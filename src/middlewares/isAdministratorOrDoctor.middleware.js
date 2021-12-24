module.exports = function (req, res, next) {
  if (req.user.roleId === 3) {
    const error = new Error();
    error.message = "Invalid role";
    error.status = 401;
    throw error;
  }
  next();
};
