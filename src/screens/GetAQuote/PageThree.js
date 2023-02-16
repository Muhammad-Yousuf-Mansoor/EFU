import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../../theme/AppStyles';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import {ModalContext} from '../../context/ModalContext';
import CustomButton from '../../components/CustumButton';
const PageThree = ({route, navigation}) => {
  const item = route.params.user2;
  console.log(item);
  const [product, setProduct] = useState('');
  const [appliedForRegistration, setAppliedForRegistration] = useState(false);
  const [_, setModal] = useContext(ModalContext);
  const [images, setImages] = useState([
    {
      id: 1,
      type: 'Front Side View',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: 2,
      type: 'Back Side View',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: 3,
      type: 'Right Side View',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: 4,
      type: 'Left Side View',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: 5,
      type: 'Dashboard / Console',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: 6,
      type: 'With Bonnet Open',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: 7,
      type: 'With Boot Open',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: 8,
      type: 'Engine No',
      image: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
  ]);

  const selectFile = async imgId => {
    try {
      var options = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'Pictures/myAppPicture/', //-->this is neccesary
          privateDirectory: true,
        },
        quality: 0.3,
      };
      ImagePicker.launchCamera(options, res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else {
          console.log('resssss', res['assets'][0].fileName);
          let source = res;
          let img = [...images];
          img[imgId].image = {
            type: res['assets'][0].type,
            fileName: res['assets'][0].fileName,
            uri: res['assets'][0].uri,
          };
          //   img.push(source);
          setImages(img);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const renderImages = () => {
    return (
      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return renderPhotos(item, index);
        }}
        ListFooterComponent={() => {
          return (
            <View style={{width: '100%', paddingHorizontal: moderateScale(10)}}>
              <CustomButton
                mystyle={{
                  backgroundColor: colors.primary,
                  marginTop: moderateScale(10),
                  borderRadius: moderateScale(10),
                  width: '100%',
                }}
                textStyle={{
                  color: colors.white,
                  fontFamily: AppStyles.fontName.semi,
                }}
                text={'Submit'}
                onPress={() => {
                  setModal(state => ({
                    ...state,
                    visible: true,
                    action: 'success',
                    message: 'Your request has been submitted successfully',
                  }));
                }}></CustomButton>
            </View>
          );
        }}
      />
    );
  };

  const renderPhotos = (item, deleteId) => {
    return item.image.uri ? (
      <View
        style={{
          flex: 0.5,
          zIndex: -1,
          aspectRatio: 1,
          borderColor: colors.secondary,
          backgroundColor: 'rgba(1, 125, 140, 0.8)',
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          margin: moderateScale(10),
        }}>
        <Image
          source={{uri: item.image.uri}}
          style={{
            width: '100%',
            height: moderateScale(moderateScale(135)),
            aspectRatio: 1,
            borderRadius: 12,
          }}
          resizeMode={'contain'}
        />
        <Icon
          onPress={() => {
            let copy = [...images];
            copy[deleteId].image = {};
            setImages(copy);
          }}
          name="cross"
          style={{position: 'absolute', top: 1, right: 1}}
          size={moderateScale(24)}
          color={colors.secondary}
        />
      </View>
    ) : (
      <TouchableOpacity
        onPress={() => {
          selectFile(deleteId);
        }}
        style={{
          flex: 0.5,
          zIndex: -1,
          aspectRatio: 1,
          borderColor: colors.secondary,
          backgroundColor: 'rgba(1, 125, 140, 0.8)',
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          margin: moderateScale(10),
        }}>
        <Feather name="camera" size={moderateScale(30)} color={'white'} />
        <Text
          style={{
            fontFamily: AppStyles.fontName.semi,
            marginTop: moderateScale(2),
            color: 'white',
            fontSize: moderateScale(11),
          }}>
          {item.type}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
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
          <Text style={styles.checkoutHeading}>Get a Quote</Text>
        </View>

        <View style={{marginLeft: moderateScale(12)}}>
          <Ionicons
            name="arrow-back"
            size={moderateScale(36)}
            color={'transparent'}
          />
        </View>
      </View>

      <View style={styles.multiFormStatus}>
        <Text style={styles.multiFormTextOne}>Personal Details</Text>
        <Text style={styles.multiFormTextTwo}>Vehicle Details</Text>
        <Text style={styles.multiFormTextThree}>Vehicle Pictures</Text>
        <View
          style={{
            width: moderateScale(26),
            height: moderateScale(26),
            borderRadius: moderateScale(13),
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
          }}>
          <FontAwesome
            name="check"
            size={moderateScale(16)}
            color={colors.primary}
          />
        </View>
        <View
          style={{
            width: moderateScale(90),
            backgroundColor: colors.white,
            height: moderateScale(2),
          }}></View>

        {/* second */}
        <View
          style={{
            width: moderateScale(26),
            height: moderateScale(26),
            borderRadius: moderateScale(13),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: 1,
          }}>
          <FontAwesome
            name="check"
            size={moderateScale(16)}
            color={colors.primary}
          />
        </View>
        <View
          style={{
            width: moderateScale(90),
            backgroundColor: 'white',
            height: moderateScale(2),
          }}></View>

        {/* third */}

        <View
          style={{
            width: moderateScale(26),
            height: moderateScale(26),
            borderRadius: moderateScale(13),
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
            borderColor: 'rgba(255, 255, 255, 0.25)',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: colors.primary,
              fontFamily: AppStyles.fontName.bold,
              fontSize: moderateScale(14),
            }}>
            3
          </Text>
        </View>
      </View>

      <View style={styles.contentContainerStyle}>{renderImages()}</View>
    </View>
  );
};

export default PageThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
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
  multiFormStatus: {
    backgroundColor: colors.primary,
    width: '90%',
    height: '15%',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  multiFormTextOne: {
    color: colors.white,
    position: 'absolute',
    bottom: moderateScale(20),
    left: moderateScale(12),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
  },
  multiFormTextTwo: {
    color: colors.white,
    position: 'absolute',
    bottom: moderateScale(20),
    left: moderateScale(133),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
  },
  multiFormTextThree: {
    color: colors.white,
    position: 'absolute',
    bottom: moderateScale(20),
    left: moderateScale(242),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
  },
  contentContainerStyle: {
    // alignItems: 'center',
    flex: 1,
    marginTop: moderateScale(18),
    paddingHorizontal: moderateScale(20),
    width: '100%',
    backgroundColor: colors.background,
  },
  scrollViewContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
  textInputAndPickerStyle: {
    backgroundColor: colors.white,
    width: '100%',
    height: moderateScale(56),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: 8,
  },
  textInContainer: {
    marginLeft: moderateScale(10),
    color: colors.grayOpacityHundred,
    fontFamily: AppStyles.fontName.medium,
  },
});
