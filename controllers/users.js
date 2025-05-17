const getAllUsers = async (req, res) => {
  res.send('Get all users');
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  res.send(`Get user with ID: ${id}`);
};

const getAdminUsers = async (req, res) => {
  res.send(`Get admin users`);
};

module.exports = {
  getAllUsers,
  getUserById,
  getAdminUsers,
};
