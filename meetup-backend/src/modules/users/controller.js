import User from './model';
import { createToken } from './utils/createToken';

const loginWithAuth0 = async (req, res) => {
  const { ...args } = req.body;

  try {
    const user = await User.create(args);
    return res.status(201).json({
      success: true,
      user,
      token: `JWT ${createToken(user)}`,
    });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error occurred while authenticating!' });
  }
};

export {
  loginWithAuth0,
};
