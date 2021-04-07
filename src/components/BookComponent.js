import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import IconPack from '../utils/IconPack';
const {width, height} = Dimensions.get('window');
const hRem = height / 411;
const wRem = width / 187.5;
const BookComponent = ({title, url, price, onPress, buttonTitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={url} style={styles.imageStyle} resizeMode="contain" />
      </View>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.amountWrapper}>
        <Image
          source={IconPack.INR_ICON}
          style={styles.inrIcon}
          resizeMode="contain"
        />
        <Text style={styles.amountText}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.btnStyles} onPress={() => onPress()}>
        <Text style={styles.addTocarText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wRem * 75,
    backgroundColor: '#FFF',
    borderRadius: hRem * 7.5,
    borderStyle: 'solid',
    marginBottom: hRem * 12.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 5,
  },
  titleText: {
    marginHorizontal: 2,
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 14,
  },
  imageStyle: {
    width: hRem * 50,
    height: hRem * 50,
  },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyles: {
    backgroundColor: '#a3c08f',
    marginHorizontal: 10,
    borderRadius: 6,
    marginBottom: hRem * 14,
    marginVertical: hRem * 6,
    alignItems: 'center',
  },
  amountText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 2.5,
  },
  imgWrapper: {
    alignItems: 'center',
    marginTop: hRem * 10,
  },
  inrIcon: {
    width: 10,
    height: 10,
    marginTop: 1,
  },
  addTocarText: {
    marginVertical: hRem * 4,
    color: '#fff',
    letterSpacing: 0.6,
    fontSize: 12,
  },
});

export default BookComponent;
