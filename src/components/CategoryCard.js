import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import colors from '../theme/colors';
import {category} from '../config';
import Text from './Text';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import AppStyles from '../theme/AppStyles';
// import Background from './Background'

function CategoryList({onPress}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const renderItem = item => {
    return (
      <TouchableOpacity
      onPress={onPress}
        key={item.item.id}
        style={{marginLeft: moderateScale(10)}}>
        <View
          style={{
            height: windowHeight / 5,
            width: windowWidth / 3,
            borderRadius: moderateScale(10),
          }}>
          <Image
            source={item.item.images}
            style={styles.imageStyle}
          />
          <Text numberOfLines={1} style={styles.itemText}>
            {item.item.shoesType}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{marginTop: moderateScale(20), marginBottom: moderateScale(10)}}>
        <Text style={styles.categoryText}>Our Categories</Text>
      </View>
      <View>
        <FlatList
          data={category}
          renderItem={item => renderItem(item)}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export default CategoryList;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: moderateScale(16),
    fontFamily: AppStyles.fontName.bold,
    color: colors.black,
    alignSelf: 'center',
  },
  itemText: {
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(20),
    color: 'white',
    fontSize: moderateScale(10),
    fontFamily: AppStyles.fontName.bold,
  },
  imageStyle:{
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10),
    opacity: 0.9,
  }
});
