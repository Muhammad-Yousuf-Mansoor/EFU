import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../../theme/AppStyles';
import colors from '../../theme/colors';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../components/Input';
import CustomButton from '../../components/CustumButton';
import {navigate} from '../../navigation/RootNavigtaion';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import * as ImagePicker from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import {useToast} from 'react-native-toast-notifications';
const FamilyApplicantInfo = ({route, navigation}) => {
  const item = route.params.user;
  console.log('Applicant Info page', item);

  const [issueDate, setIssueDate] = useState(new Date());
  const [selectedIssueDate, setSelectedIssueDate] = useState('');
  const [renderIssueDate, setRenderIssueDate] = useState(false);
  const [openIssueDateModal, setOpenIssueDateModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [city, setCity] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [passport, setPassport] = useState('');
  const [NTN, setNTN] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');

  const [images, setImages] = useState([
    {
      id: '1',
      type: 'CNIC (Front)',
      img: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
    {
      id: '2',
      type: 'Passport',
      img: {
        type: '',
        uri: '',
        fileName: '',
      },
    },
  ]);

  const toast = useToast();

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
          let image = [...images];
          image[imgId].img = {
            type: res['assets'][0].type,
            fileName: res['assets'][0].fileName,
            uri: res['assets'][0].uri,
          };
          //   img.push(source);
          setImages(image);
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
      />
    );
  };

  const renderPhotos = (item, deleteId) => {
    return item.img.uri ? (
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
          source={{uri: item.img.uri}}
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
            copy[deleteId].img = {};
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

  const goToFamilyInfo = () => {
    if (firstName.trim() === '') {
      toast.show('Enter First Name');
      return;
    } else if (middleName.trim() == '') {
      toast.show('Enter Middle Name');
      return;
    } else if (lastName.trim() == '') {
      toast.show('Enter Last Name');
      return;
    } else if (postalAddress == '') {
      toast.show('Enter Postal Address');
      return;
    } else if (city.trim() == '') {
      toast.show('Enter City');
      return;
    } else if (CNIC.trim() == '') {
      toast.show('Enter CNIC');
      return;
    } else if (passport.trim() == '') {
      toast.show('Enter Passport Number');
      return;
    } else if (NTN.trim() == '') {
      toast.show('Enter NTN');
      return;
    } else if (selectedIssueDate == '') {
      toast.show('Select CNIC/Passport Issue Date');
      return;
    } else if (mobileNo.trim() == '') {
      toast.show('Enter Mobile Number');
      return;
    } else if (email.trim() == '') {
      toast.show('Enter Email');
      return;
    } else {
      let FamilyApplicantInfoObject = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        postalAddress: postalAddress,
        city: city,
        CNIC: CNIC,
        passport: passport,
        NTN: NTN,
        selectedIssueDate: selectedIssueDate.toDateString(),
        mobileNo: mobileNo,
        email: email,
      };

      navigation.navigate('FamilyInfo', {
        user2: {
          ...item,
          ...FamilyApplicantInfoObject,
        },
      });
    }
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
          <Text style={styles.checkoutHeading}>Travel Insurance</Text>
        </View>

        <View style={{marginLeft: moderateScale(12)}}>
          <Ionicons
            name="arrow-back"
            size={moderateScale(36)}
            color={'transparent'}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollViewContainer}>
        <View style={styles.multiFormStatus}>
          <Text style={styles.multiFormTextOne}>Travel{'\n'}Details</Text>
          <Text style={styles.multiFormTextTwo}>Applicant's{'\n'}Info</Text>
          <Text style={styles.multiFormTextThree}>Family{'\n'}Info</Text>
          <Text style={styles.multiFormTextFour}>Beneficiary{'\n'}Info</Text>
          <View
            style={{
              width: moderateScale(26),
              height: moderateScale(26),
              borderRadius: moderateScale(13),
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'rgba(255, 255, 255, 1)',
              borderWidth: moderateScale(1),
            }}>
            <FontAwesome
              name="check"
              size={moderateScale(16)}
              color={colors.primary}
            />
          </View>
          <View
            style={{
              width: moderateScale(60),
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
              borderWidth: moderateScale(1),
            }}>
            <Text
              style={{
                color: colors.primary,
                fontFamily: AppStyles.fontName.bold,
                fontSize: moderateScale(14),
              }}>
              2
            </Text>
          </View>
          <View
            style={{
              width: moderateScale(60),
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              height: moderateScale(2),
            }}></View>

          {/* third */}

          <View
            style={{
              width: moderateScale(26),
              height: moderateScale(26),
              borderRadius: moderateScale(13),
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              borderWidth: moderateScale(1),
            }}>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.25)',
                fontFamily: AppStyles.fontName.bold,
                fontSize: moderateScale(14),
              }}>
              3
            </Text>
          </View>
          <View
            style={{
              width: moderateScale(60),
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              height: moderateScale(2),
            }}></View>

          <View
            style={{
              width: moderateScale(26),
              height: moderateScale(26),
              borderRadius: moderateScale(13),
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              borderWidth: moderateScale(1),
            }}>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.25)',
                fontFamily: AppStyles.fontName.bold,
                fontSize: moderateScale(14),
              }}>
              4
            </Text>
          </View>
        </View>

        {/* <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollViewContainer}> */}
        <View style={styles.HeadingScrollView}>
          <Text style={styles.checkoutHeading}>Applicants Information</Text>
        </View>
        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="First Name"
            placeholderTextColor={colors.grayOpacityHundred}
            value={firstName}
            onChangeText={value => setFirstName(value)}
            maxLength={30}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Middle Name"
            placeholderTextColor={colors.grayOpacityHundred}
            value={middleName}
            onChangeText={value => setMiddleName(value)}
            maxLength={30}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Last Name"
            placeholderTextColor={colors.grayOpacityHundred}
            value={lastName}
            onChangeText={value => setLastName(value)}
            maxLength={30}
          />
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Postal Address"
              placeholderTextColor={colors.grayOpacityHundred}
              value={postalAddress}
              onChangeText={value => setPostalAddress(value)}
              maxLength={100}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="City"
              placeholderTextColor={colors.grayOpacityHundred}
              value={city}
              onChangeText={value => setCity(value)}
              maxLength={20}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="CNIC No."
              placeholderTextColor={colors.grayOpacityHundred}
              value={CNIC}
              onChangeText={value => setCNIC(value)}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Passport"
              placeholderTextColor={colors.grayOpacityHundred}
              value={passport}
              onChangeText={value => setPassport(value)}
            />
          </View>
        </View>
        {/* 
          <View style={styles.accidentView}>
            <View>
              <Text style={styles.accidentViewText}>
                Personal Accident For Driver + 4 Passengers
              </Text>
            </View>
  
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <CheckBox
                    value={personalAccidentYes}
                    onValueChange={newValue => {
                      setPersonalAccidentYes(newValue);
                      setPersonalAccidentNo(!newValue);
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles.textInContainer,
                      {marginLeft: moderateScale(4)},
                    ]}>
                    Yes
                  </Text>
                </View>
              </View>
  
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: moderateScale(16),
                }}>
                <View>
                  <CheckBox
                    value={personalAccidentNo}
                    onValueChange={newValue => {
                      setPersonalAccidentNo(newValue);
                      setPersonalAccidentYes(!newValue);
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles.textInContainer,
                      {marginLeft: moderateScale(4)},
                    ]}>
                    No
                  </Text>
                </View>
              </View>
            </View>
          </View> */}

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="NTN "
            placeholderTextColor={colors.grayOpacityHundred}
            value={NTN}
            onChangeText={value => setNTN(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={[styles.textInputAndPickerStyle]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setOpenIssueDateModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderIssueDate
                ? issueDate.toDateString()
                : ' CNIC/Passport Issue Date'}
            </Text>
            <View>
              <Ionicons
                name="calendar"
                size={25}
                color={colors.primary}
                style={{marginRight: moderateScale(10)}}
              />
              <DatePicker
                modal
                open={openIssueDateModal}
                date={issueDate}
                mode="date"
                onConfirm={issueDate => {
                  console.log({issueDate});
                  setOpenIssueDateModal(false);
                  setIssueDate(issueDate);
                  setSelectedIssueDate(issueDate);
                  setRenderIssueDate(true);
                }}
                onCancel={() => {
                  setOpenIssueDateModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Mobile No."
            placeholderTextColor={colors.grayOpacityHundred}
            value={mobileNo}
            onChangeText={value => setMobileNo(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={[styles.textInputAndPickerStyle]}>
          <Input
            placeholder="Email"
            placeholderTextColor={colors.grayOpacityHundred}
            value={email}
            onChangeText={value => setEmail(value)}
            maxLength={30}
          />
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
          }}>
          <Text style={styles.semiBoldText}>Upload</Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: moderateScale(18),
            paddingHorizontal: moderateScale(20),
            width: '100%',
            backgroundColor: colors.background,
            marginBottom: moderateScale(120),
          }}>
          {renderImages()}
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: moderateScale(90),
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          //   elevation: 30,
          shadow: 1,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 20,
          justifyContent: 'center',
        }}>
        <CustomButton
          mystyle={{
            backgroundColor: colors.primary,
            marginVertical: moderateScale(10),
            borderRadius: moderateScale(10),
            width: '90%',
          }}
          textStyle={{
            color: colors.white,
            fontFamily: AppStyles.fontName.semi,
          }}
          text={'PROCEED'}
          // onPress={() => {
          //   let page2Obj = {
          //     Product: vehicleValue,
          //     AppliedForRegistration: appliedForRegistration,
          //     RegistrationNumber: registrationNo,
          //     EngineNo: engineNo,
          //     ChasisNo: chasisNo,
          //     VehicleMake: vehicleMakeValue,
          //     vehicleSubMake: vehicleSubMakeValue,
          //     Model: modelValue,
          //     Color: colorValue,
          //     BodyType: bodyValue,
          //     CubicCapacity: cubicCapacity,
          //     SeatingCapacity: seatingCapacity,
          //     TrackerCompany: trackerCompanyValue,
          //     AdditionalAccessories: additionalAccessories,
          //     AdditionalAccessoriesValue: additionalAccessoriesValue,
          //     PersonalAccidentYes: personalAccidentYes,
          //     PersonalAccidentNo: personalAccidentNo,
          //     AmountDecutable: amountDecutable,
          //     PolicyStartDate: policyStartDate.toDateString(),
          //     PolicyEndDate: policyEndDate.toDateString(),
          //     InsuredEstimatedValue: insuredEstimatedValue,
          //     Contribution: contribution,
          //     Monthly: monthly,
          //   };
          //   navigation.navigate('PageThree', {
          //     user2: {
          //       ...item,
          //       ...page2Obj,
          //     },
          //   });
          // }}
          onPress={() => {
            goToFamilyInfo();
          }}></CustomButton>
      </View>
    </View>
  );
};

export default FamilyApplicantInfo;

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
  HeadingScrollView: {
    marginVertical: moderateScale(10),
    width: '100%',
  },
  checkoutHeading: {
    fontFamily: AppStyles.fontName.bold,
    fontSize: moderateScale(16),
    color: colors.grayOpacityHundred,
  },
  multiFormStatus: {
    backgroundColor: colors.primary,
    width: '100%',
    height: moderateScale(110),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  multiFormTextOne: {
    color: colors.white,
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(20),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
    textAlign: 'center',
  },
  multiFormTextTwo: {
    color: colors.white,
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(95),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
    textAlign: 'center',
  },
  multiFormTextThree: {
    color: colors.grayOpacityTwentyFive,
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(195),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
    textAlign: 'center',
  },
  multiFormTextFour: {
    color: colors.grayOpacityTwentyFive,
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(265),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
    textAlign: 'center',
  },

  contentContainerStyle: {
    alignItems: 'center',
    marginTop: moderateScale(18),
    paddingHorizontal: moderateScale(20),
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
    marginVertical: moderateScale(8),
  },

  accidentView: {
    height: moderateScale(56),
    width: '100%',
    justifyContent: 'center',
    marginVertical: moderateScale(8),
  },
  accidentViewText: {
    color: colors.grayOpacityHundred,
    fontFamily: AppStyles.fontName.medium,
    fontSize: moderateScale(15),
  },
  textInContainer: {
    marginLeft: moderateScale(10),
    color: colors.grayOpacityHundred,
    // fontFamily: AppStyles.fontName.medium,
  },
  semiBoldText: {
    fontFamily: AppStyles.fontName.semi,
    fontSize: moderateScale(18),
    color: colors.grayOpacityHundred,
  },
});
