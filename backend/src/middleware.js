// Middleware: Catches error and transforms it to a JSON response.
const errorHandler = () => (err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
  });

  next();
};

export default errorHandler;