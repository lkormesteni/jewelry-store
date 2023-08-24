const  user  = require('../models/usersModels.js')

async function createUser(req, res) {
  try {
    const newuser = await user.create(req.body);
    res.status(201).json(newuser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
}
}

async function getUserById(req, res) {
  try {
    const user = await user.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
}
}

async function updateUser(req, res) {
  try {
    const updateduser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateduser) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteUser(req, res) {
  try {
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.status(204).send();
  } catch (error) {
  res.status(500).json({ error: 'Internal server error' })
}
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
}