import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../theme/AppStyles';
import colors from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

const MyHeader = ({title, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={{marginLeft: moderateScale(12)}}>
        <Ionicons
          name="arrow-back"
          size={moderateScale(28)}
          color={colors.grayOpacityHundred}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.checkoutHeadingContainer}>
        <Text style={styles.checkoutHeading}>{title}</Text>
      </View>

      <View style={{marginLeft: moderateScale(12)}}>
        <Ionicons
          name="arrow-back"
          size={moderateScale(36)}
          color={'transparent'}
        />
      </View>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateScale(10),
  },
  checkoutHeadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutHeading: {
    fontFamily: AppStyles.fontName.bold,
    fontSize: moderateScale(16),
    color: colors.grayOpacityHundred,
  },
});
