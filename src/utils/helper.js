import {ToastAndroid} from 'react-native';

export const Toast = (text, duration) => {
  ToastAndroid.showWithGravityAndOffset(
    text,
    duration || 1000,
    ToastAndroid.BOTTOM,
    25,
    150,
  );
  return true;
};
