module.exports = (_req, res) => {
  res.status(404).json({
    code: 404,
    status: 'Error',
    message: 'Route not found.',
    data: null,
  });
};
