import { Image } from 'react-native';
import { Asset, Font } from 'expo';

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export const fontAssets = {
  fonts: [
    { 'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf') },
    { montserrat: require('../assets/fonts/Montserrat-Regular.ttf') },
    { 'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf') },
  ],
};

export default function cacheAssetsAsync({ images = [], fonts = [] }) {
  return Promise.all([...cacheImages(images), ...cacheFonts(fonts)]);
}
