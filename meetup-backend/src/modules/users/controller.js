import User from './model';
import { createToken } from './utils/createToken';
import { facebookAuth } from './utils/facebookAuth';

const loginWithAuth0 = async (req, res) => {
  const { provider, token } = req.body;
  let userInfo;

  try {
    if (provider === 'google') {
      // todo
    } else if (provider === 'facebook') {
      userInfo = await facebookAuth(token);
    } else {
      console.error(`Unknown provider ${provider}`);
    }

    const user = await User.findOrCreate(userInfo);

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
      },
      token: `JWT ${createToken(user)}`,
    });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};

export {
  loginWithAuth0,
};
