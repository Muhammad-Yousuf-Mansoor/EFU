import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import MyHeader from '../../components/MyHeader';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../theme/colors';
import {fontFamily, size} from '../../theme/fonts';
const MyPolicy = () => {
  const [policyCard, setPolicyCard] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10,
  ]);
  return (
    <View style={styles.container}>
      <MyHeader title="My Policy" />
      <FlatList
        style={styles.flatList}
        data={policyCard}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.cardMainView}>
              <View>
                <Text style={styles.mediumText}>12 July, 2022</Text>
              </View>
              <View style={styles.mainTextView}>
                <View style={{flex: 0.7}}>
                  <Text numberOfLines={2} style={styles.boldText}>
                    The Quick, Brown Fox Jumps Over A Lazy Dog.
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={[styles.mediumText]}>Expires</Text>
                </View>
              </View>
              <View style={styles.bottomView}>
                <View>
                  <Text
                    style={[
                      styles.mediumText,
                      {color: colors.grayOpacityFifty},
                    ]}>
                    Lorem Ipsum
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.mediumText,
                      {color: colors.grayOpacityFifty},
                    ]}>
                    02/02/2022
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF1F3',
  },
  flatList: {
    flex: 1,
    // backgroundColor: 'purple',
    paddingHorizontal: moderateScale(20),
  },
  cardMainView: {
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(10),
    padding: moderateScale(10),
  },
  mediumText: {
    color: colors.primary,
    fontFamily: fontFamily.medium,
    fontSize: size.smallText,
  },
  boldText: {
    color: colors.grayOpacityHundred,
    fontFamily: fontFamily.bold,
    fontSize: size.sixteen,
  },
  mainTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
