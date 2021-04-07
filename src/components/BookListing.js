import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  Vibration,
} from 'react-native';
import IconPack from '../utils/IconPack';
import BookComponent from './BookComponent';
import {useSelector, useDispatch} from 'react-redux';
import {addTocart} from '../redux/action/bookAction';

const {width, height} = Dimensions.get('window');
const hRem = height / 411;
const wRem = width / 187.5;

const BookListing = props => {
  const booksInfo = useSelector(state => state.booksCollection.books);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.booksCollection.cartData);
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'BOOK STORE',
      headerTitleStyle: styles.headerTitleStyle,
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CartScreen')}>
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
        onPress={() => {
          dispatch(addTocart(item)), Vibration.vibrate();
        }}
        buttonTitle="ADD TO CART"
      />
    );
  };
  return (
    <FlatList
      data={booksInfo}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={styles.columnWrapperStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: wRem * 75,
    backgroundColor: 'green',
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
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  headerTitleStyle: {
    fontSize: 17,
    lineHeight: 21,
    letterSpacing: 1.2,
    color: '#000',
  },
  contentContainerStyle: {
    paddingTop: 12 * hRem,
    paddingHorizontal: 12 * wRem,
    backgroundColor: '#fff',
  },
  cartContainer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 11,
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
});

export default BookListing;
