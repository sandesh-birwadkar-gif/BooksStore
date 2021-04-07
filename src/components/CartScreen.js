import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  Text,
  Vibration,
} from 'react-native';

import BookComponent from './BookComponent';
import {useSelector, useDispatch} from 'react-redux';
import IconPack from '../utils/IconPack';
import {addToremove} from '../redux/action/cartAction';
import HeaderBackButton from './common/HeaderBackButton';
import {Toast} from '../utils/helper';

const {width, height} = Dimensions.get('window');
const hRem = height / 411;
const wRem = width / 187.5;

const CartScreen = props => {
  const cartData = useSelector(state => state.booksCollection.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'CART',
      headerTitleStyle: styles.headerTitleStyle,
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <HeaderBackButton onPress={() => props.navigation.goBack()} />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => null}>
          <Image
            source={IconPack.CART_ICON}
            resizeMode="contain"
            style={styles.cartIconStyles}
          />
          {cartData.length > 0 ? (
            <View style={styles.cartContainer}>
              <Text style={styles.cartCountText}>{cartData.length}</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      ),
    });
  }, [cartData]);

  const renderItem = ({item}) => {
    return (
      <BookComponent
        title={item.title}
        url={item.Img}
        price={item.price}
        onPress={() => null}
        onPress={() => {
          dispatch(addToremove(item), Toast('Removed from Cart')),
            Vibration.vibrate();
        }}
        buttonTitle="REMOVE"
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  headerTitleStyle: {
    fontSize: 17,
    lineHeight: 21,
    letterSpacing: 1.2,
    color: '#000',
  },
  cartContainer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 15,
  },
  cartCountText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 12,
  },
  cartIconStyles: {
    width: wRem * 15,
    height: hRem * 15,
    marginRight: wRem * 8,
  },
  contentContainerStyle: {
    paddingTop: 12 * hRem,
    paddingHorizontal: 12 * wRem,
    backgroundColor: '#fff',
  },
});

export default CartScreen;
