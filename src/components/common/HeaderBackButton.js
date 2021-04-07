import React from 'react';
import {Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import IconPack from '../../utils/IconPack';
const {height} = Dimensions.get('window');
const hRem = height / 424.5;

const HeaderBackButton = ({onPress}) => (
  <TouchableOpacity onPress={() => onPress()}>
    <Image source={IconPack.BACK_ICON} style={styles.imageStyle} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  imageStyle: {
    width: undefined,
    height: Math.round(9 * hRem),
    aspectRatio: 21 / 37,
    marginHorizontal: 16,
  },
});

export default HeaderBackButton;
