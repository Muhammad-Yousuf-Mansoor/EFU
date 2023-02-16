import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import colors from '../../theme/colors';
import {useSelector, useDispatch} from 'react-redux';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import Retry from '../../components/Retry';
import API_CALLS from '../../services/constants';
import AppStyles from '../../theme/AppStyles';
import {navigate} from '../../navigation/RootNavigtaion';
import PushNotification, {Importance} from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {fontFamily, size} from '../../theme/fonts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  useEffect(() => {
    createChannels();
  }, []);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  const [horizontalBlogs, setHorizontalBlogs] = useState([1, 2, 3]);

  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test-channel',
      Importance: 4,
      vibrate: true,
    });
  };

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Travel Pakistan', //heading
      message: 'Travel to skardu , naran and kaghan', //text under the heading
      bigText:
        'The north of Pakistan has been one of he most tourist visited places beacuse of vast green land, mountains and light blue natural lakes',
      // color:"red",
    });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <Header title="GENERAL" />

      <View style={{flex: 1, paddingHorizontal: moderateScale(20)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: moderateScale(20),
            }}>
            <View>
              <Text style={styles.headingText}>Abdul Qadir</Text>
              <Text style={styles.smallText}>Abdul-qadir@gmail.com</Text>
            </View>
            {/* <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: AppStyles.fontSize.large,
                  fontFamily: 'Inter-ExtraBold',
                  color: colors.primary,
                }}>
                6140
              </Text>
              <Text style={styles.smallText}>Points</Text>
            </View> */}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: moderateScale(120),
              borderRadius: moderateScale(10),
              alignSelf: 'center',
              marginVertical: moderateScale(30),
            }}>
            <Image
              style={{
                borderRadius: moderateScale(10),
                width: '100%',
                height: '100%',
              }}
              source={require('../../assests/images/banner1.png')}
            />
          </View>
          <Text style={styles.headingText}>Buy Insurance</Text>

          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: moderateScale(115),
              borderRadius: moderateScale(7),
              alignSelf: 'center',
              marginVertical: moderateScale(20),
              // padding: moderateScale(15),
              // alignItems:'center',
              justifyContent: 'center',
            }}>
            <View style={styles.firstIconRaw1}>
              <TouchableOpacity
                onPress={() => {
                  navigate('GetAQuote');
                }}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/car.png')}
                />
                <Text style={styles.iconText}>Car</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}
                // onPress={() => {
                //   handleNotification();
                // }}
                onPress={() => {
                  // navigation.navigate('TravelOne');
                  navigation.navigate('TravelInsurancePlans');
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/travel.png')}
                />
                <Text style={styles.iconText}>Travel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/Home.png')}
                />
                <Text style={styles.iconText}>Home</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/mobile.png')}
                />
                <Text style={styles.iconText}>Mobile</Text>
              </TouchableOpacity> */}
            </View>

            {/* <View style={{...styles.secondIcopnRaw}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}></View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/health.png')}
                />
                <Text style={styles.iconText}>Health</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/bike.png')}
                />
                <Text style={styles.iconText}>Bike</Text>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}></View>
            </View> */}
          </View>

          <Text style={styles.headingText}>Value Features</Text>

          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: moderateScale(190),
              borderRadius: moderateScale(7),
              alignSelf: 'center',
              marginVertical: moderateScale(20),
              justifyContent: 'center',
            }}>
            <View style={styles.firstIconRaw}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/invite.png')}
                />
                <Text style={styles.iconText}>Invite</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/Home.png')}
                />
                <Text style={styles.iconText}>Market</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/renewal.png')}
                />
                <Text style={styles.iconText}>Renewal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/drivePro.png')}
                />
                <Text style={styles.iconText}>Drive Pro</Text>
              </TouchableOpacity>
            </View>

            <View style={{...styles.secondIcopnRaw}}>
              <View style={{flex: 1}}></View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/sos.png')}
                />
                <Text style={[styles.iconText, {textAlign: 'center'}]}>
                  Sos Numbers
                </Text>
                {/* <Text style={[styles.iconText,{textAlign:"center"}]}>Numbers</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{height: moderateScale(45), width: moderateScale(45)}}
                  source={require('../../assests/images/offers.png')}
                />
                <Text style={styles.iconText}>Offers</Text>
              </TouchableOpacity>
              <View style={{flex: 1}}></View>
            </View>
          </View>
          <View>
            <Text style={styles.headingText}>Our Blogs</Text>

            <FlatList
              style={styles.flatList}
              data={horizontalBlogs}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.flatListMainView}>
                    <View style={styles.imageView}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: moderateScale(10),
                        }}
                        // resizeMode={'cover'}

                        source={require('../../assests/images/blogImage.png')}
                      />
                    </View>
                    <View
                      style={{
                        marginTop: moderateScale(5),
                        paddingLeft: moderateScale(12),
                      }}>
                      <Text style={styles.mediumText}>20 July, 2022</Text>
                    </View>
                    <View style={{paddingLeft: moderateScale(12)}}>
                      <Text style={[styles.boldText]}>
                        Redfin Ranks The Most Competitive
                      </Text>
                    </View>
                    <View style={{paddingLeft: moderateScale(12)}}>
                      <Text
                        style={[
                          styles.mediumText,
                          {color: colors.grayOpacityFifty},
                        ]}>
                        Written By: Charles Reyes
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.goToFeedback}
            onPress={() => {
              navigation.navigate('Feedback');
            }}>
            <View style={{width: moderateScale(164)}}>
              <View>
                <Text style={styles.boldText}>Share Feedback</Text>
              </View>
              <View>
                <Text
                  style={[styles.mediumText, {color: colors.grayOpacitySixty}]}>
                  Help us Improve by send us your Feedback
                </Text>
              </View>
            </View>
            <View>
              <Image
                style={{height: 50, width: 50}}
                source={require('../../assests/images/feedback.png')}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  iconText: {
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.small,
    color: colors.grayOpacityNinety,
  },
  firstIconRaw1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(35),
  },
  firstIconRaw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(5),
  },
  secondIcopnRaw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
    marginTop: moderateScale(15),
  },
  headingText: {
    fontSize: AppStyles.fontSize.large,
    fontFamily: AppStyles.fontName.semi,
    color: colors.grayOpacityHundred,
  },
  smallText: {
    fontFamily: AppStyles.fontName.medium,
    color: colors.grayOpacityFourty,
    fontSize: AppStyles.fontSize.small,
  },
  mediumText: {
    color: colors.primary,
    fontFamily: fontFamily.medium,
    fontSize: size.smallText,
  },
  flatList: {
    width: '100%',
    marginVertical: moderateScale(20),
  },
  boldText: {
    color: colors.grayOpacityHundred,
    fontFamily: fontFamily.bold,
    fontSize: size.sixteen,
  },
  flatListMainView: {
    marginHorizontal: moderateScale(10),
    backgroundColor: colors.white,
    width: moderateScale(226),
    paddingBottom: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  imageView: {
    // backgroundColor: 'orange',
    width: '100%',
    height: 100,
    borderRadius: moderateScale(10),
  },
  goToFeedback: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateVerticalScale(20),
    height: moderateScale(90),
    width: moderateScale(336),
    alignItems: 'center',
    marginVertical: moderateScale(17),
  },
});
