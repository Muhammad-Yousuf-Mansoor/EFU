import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MyHeader from '../../components/MyHeader';
import colors from '../../theme/colors';
import {fontFamily, size} from '../../theme/fonts';
import {moderateScale} from 'react-native-size-matters';
import Input from '../../components/Input';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/CustumButton';

const Feedback = () => {
  return (
    <View style={styles.container}>
      <MyHeader title="Share Feedback" />
      <ScrollView style={{padding: moderateScale(20)}}>
        <View>
          <Text style={styles.boldText}>Get in touch with us</Text>
        </View>
        <View style={{marginTop: moderateScale(5)}}>
          <Text style={styles.mediumText}>
            Vestibulum blandit viverra convallis. Pellentesque ligula urna,
            fermentum ut semper.
          </Text>
        </View>
        <View style={{marginTop: moderateScale(17)}}>
          <View style={styles.iconView}>
            <View>
              <Image
                style={{width: moderateScale(30), height: moderateScale(30)}}
                source={require('../../assests/images/phone.png')}
              />
            </View>
            <View>
              <Text style={styles.mediumTextsize12}>(+92) 078-4232</Text>
            </View>
          </View>
          <View style={styles.iconView}>
            <View>
              <Image
                style={{width: moderateScale(30), height: moderateScale(30)}}
                source={require('../../assests/images/mail.png')}
              />
            </View>
            <View>
              <Text style={styles.mediumTextsize12}>
                support@efugeneral.com
              </Text>
            </View>
          </View>
          <View style={styles.iconView}>
            <View>
              <Image
                style={{width: moderateScale(30), height: moderateScale(30)}}
                source={require('../../assests/images/location.png')}
              />
            </View>
            <View>
              <Text style={styles.mediumTextsize12}>
                3636 Flavie Crest Barton Parkways Pedroton
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalRule}></View>
        <View style={{marginTop: moderateScale(20.5)}}>
          <Text style={styles.boldText}>Send us a Message</Text>
        </View>
        <View style={{marginTop: moderateScale(5)}}>
          <Text style={styles.mediumText}>
            Vestibulum blandit viverra convallis. Pellentesque ligula urna,
            fermentum ut semper.
          </Text>
        </View>
        <View
          style={{
            marginVertical: moderateScale(16),
            borderRadius: moderateScale(8),
            backgroundColor: colors.white,
          }}>
          <Input
            placeholder="Your Message"
            placeholderTextColor={colors.grayOpacityHundred}
            newStyles={{
              height: moderateScale(191),
              width: moderateScale(335),
              padding: moderateScale(5),
              textAlignVertical: 'top',
              borderRadius: moderateScale(8),
            }}
            multiline={true}
          />
        </View>
        <Button
          text="SEND"
          textStyle={[styles.boldText, {fontSize: size.fiften}]}
          mystyle={{
            backgroundColor: colors.primary,
            borderRadius: moderateScale(10),
            width: '100%',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.veryLightGray,
  },

  mediumText: {
    color: colors.darkGrayOpacityFour,
    fontFamily: fontFamily.medium,
    fontSize: size.text,
  },
  mediumTextsize12: {
    color: colors.darkGrayFullOpacity,
    fontFamily: fontFamily.medium,
    fontSize: size.text,
    marginLeft: moderateScale(5),
  },
  boldText: {
    color: colors.grayOpacityHundred,
    fontFamily: fontFamily.bold,
    fontSize: size.sixteen,
  },
  iconView: {
    flexDirection: 'row',
    // width: moderateScale(250),
    width: '100%',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateScale(5),
    // backgroundColor: 'purple',
  },
  horizontalRule: {
    backgroundColor: colors.lightGrayOpacityTwo,
    width: '100%',
    height: moderateScale(2),
    marginTop: moderateScale(27),
  },
});
