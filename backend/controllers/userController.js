import User from '../models/userModel.js';

export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({
    name: user.name,
    email: user.email,
    preferences: user.preferences
  });
};

export const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name || user.name;
  user.preferences = req.body.preferences || user.preferences;

  await user.save();

  res.json({ message: 'Profile updated successfully' });
};
