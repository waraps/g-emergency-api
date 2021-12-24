module.exports = function (req, res, next) {
  if (req.user.roleId === 1) {
    next();
  } else {
    const error = new Error();
    error.message = "Invalid role";
    error.status = 401;
    throw error;
  }
};
