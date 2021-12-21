module.exports = (err, req, res, next) => {
  const httpStatus = err.status || 500;

  const errorMessage =
    err.message && err.errors
      ? `${err.message}: ${err.errors[0].message}`
      : err.message
      ? err.message
      : null;

  return res.status(httpStatus).send({
    status: httpStatus,
    message: errorMessage || "Internal server error",
  });
};
