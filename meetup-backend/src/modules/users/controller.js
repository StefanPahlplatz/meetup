import User from './model';
import { createToken } from './utils/createToken';
import { facebookAuth } from './utils/facebookAuth';
import { googleAuth } from './utils/googleAuth';

const loginWithAuth0 = async (req, res) => {
  console.log('============================');
  console.log(req.body);
  console.log('============================');

  const { provider, token } = req.body;
  let userInfo;

  try {
    if (provider === 'google') {
      userInfo = await googleAuth(token);
    } else if (provider === 'facebook') {
      userInfo = await facebookAuth(token);
    } else {
      console.error(`Unknown provider ${provider}`);
    }

    const user = await User.findOrCreate(userInfo);

    console.log('====================================');
    console.log(user);
    console.log('====================================');

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
