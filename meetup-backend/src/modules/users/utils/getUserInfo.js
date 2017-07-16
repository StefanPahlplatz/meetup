export const getUserInfo = (data, provider) => {
  let fullName;
  let avatar;

  if (provider === 'google') {
    fullName = `${data.give_name} ${data.family_name}`;
    avatar = data.picture;
  } else if (provider === 'facebook') {
    fullName = data.name;
    avatar = data.picture.data.url;
  } else {
    console.error(`Unknown provider ${provider}`);
  }

  return {
    fullName,
    avatar,
    email: data.email,
    providerData: {
      uid: data.id,
      provider,
    },
  };
};
