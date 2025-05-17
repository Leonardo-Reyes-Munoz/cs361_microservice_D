const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getAdminUsers,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/admin', getAdminUsers);
router.get('/:id', getUserById);

module.exports = router;
