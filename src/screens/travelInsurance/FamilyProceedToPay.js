import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
import size from '../../theme/fonts';
import fontName from '../../theme/AppStyles';
import AlertModal from '../../components/AlertModal';
import Modal from 'react-native-modal';
const FamilyProceedToPay = ({route, navigation}) => {
  //   const item=route.params.user
  //   console.log(item)

  const [vehicleArray, setVehicleArray] = useState([
    'Car',
    'Bike',
    'Truck',
    'Rikshaw',
  ]);
  const [vehicleValue, setVehicleValue] = useState('');
  const [appliedForRegistration, setAppliedForRegistration] = useState(false);
  const [vehicleMake, setVehicleMake] = useState([
    'Honda',
    'Toyota',
    'Nissan',
    'Isuzu',
  ]);
  const [vehicleMakeValue, setVehicleMakeValue] = useState('');
  const [vehicleSubMake, setVehicleSubMake] = useState(['Dihatsu', 'Isuzu']);
  const [vehicleSubMakeValue, setVehicleSubMakeValue] = useState('');
  const [model, setModel] = useState(['2015', '2018', '2020', '2022']);
  const [modelValue, setModelValue] = useState('');
  const [color, setColor] = useState(['Red', 'Blue', 'Green', 'Orange']);
  const [colorValue, setColorValue] = useState('');
  const [bodyType, setBodyType] = useState([
    'Body Type',
    'Hard plastic',
    'steel sheet',
    'Iron',
    'Thin sheet',
  ]);
  const [bodyValue, setBodyValue] = useState('');
  const [trackerCompany, setTrackerCompany] = useState([
    'VGREEN Luxury',
    'NLC Smart Solutions',
    'AskTech (Pvt) Ltd',
    'Crescent tracking pvt ltd',
  ]);
  const [trackerCompanyValue, setTrackerCompanyValue] = useState('');
  const [personalAccidentYes, setPersonalAccidentYes] = useState(true);
  const [personalAccidentNo, setPersonalAccidentNo] = useState(false);
  const [policyStartDate, setPolicyStartDate] = useState(new Date());
  const [policyEndDate, setPolicyEndDate] = useState(new Date());
  const [renderStartDate, setRenderStartDate] = useState(false);
  const [renderEndDate, setRenderEndDate] = useState(false);
  const [openStartDateModal, setOpenStartDateModal] = useState(false);
  const [openEndDateModal, setOpenEndDateModal] = useState(false);
  const [registrationNo, setRegistrationNo] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [chasisNo, setChasisNo] = useState('');
  const [cubicCapacity, setCubicCapacity] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [additionalAccessories, setAdditionalAccessories] = useState('');
  const [additionalAccessoriesValue, setAdditionalAccessoriesValue] =
    useState('');
  const [amountDecutable, setAmountDecutable] = useState('');
  const [insuredEstimatedValue, setInsuredEstimatedValue] = useState('');
  const [contribution, setContribution] = useState('');
  const [monthly, setMonthly] = useState('');
  const [detailTermsAndCondition, setDetailTermsAndCondition] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
              backgroundColor: colors.white,
              borderColor: colors.white,
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
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              height: moderateScale(2),
            }}></View>

          {/* third */}
          <View>
            <View
              style={{
                width: moderateScale(26),
                height: moderateScale(26),
                borderRadius: moderateScale(13),
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.white,
                backgroundColor: colors.white,
                borderWidth: moderateScale(1),
              }}>
              <FontAwesome
                name="check"
                size={moderateScale(16)}
                color={colors.primary}
              />
            </View>
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
              backgroundColor: colors.white,
              borderColor: colors.white,
              borderWidth: moderateScale(1),
            }}>
            <FontAwesome
              name="check"
              size={moderateScale(16)}
              color={colors.primary}
            />
          </View>
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.checkoutHeading}>Payment Options:</Text>
        </View>

        <View style={{width: '100%', flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.textInputAndPickerStyle}>
              <TouchableOpacity style={styles.opacityInnerItems}>
                <Image source={require('../../assests/images/quickPay.png')} />
                <Text style={styles.textInContainer}>QuickPay</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: moderateScale(5)}}></View>

            <View style={styles.textInputAndPickerStyle}>
              <TouchableOpacity style={styles.opacityInnerItems}>
                <Image source={require('../../assests/images/easyPaisa.png')} />
                <Text style={styles.textInContainer}>EasyPaisa</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: moderateScale(5)}}></View>
            <View style={styles.textInputAndPickerStyle}>
              <TouchableOpacity style={styles.opacityInnerItems}>
                <Image source={require('../../assests/images/UBL.png')} />
                <Text style={styles.textInContainer}>UBL</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            width: '100%',
            // marginTop: moderateScale(60),
          }}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="EasyPaisa Account Number"
              placeholderTextColor={colors.grayOpacityHundred}
              value={contribution}
              onChangeText={value => setContribution(value)}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Referral Code"
              placeholderTextColor={colors.grayOpacityHundred}
              value={contribution}
              onChangeText={value => setContribution(value)}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>

          <View
            style={[
              styles.textInputAndPickerStyle,
              //   {marginBottom: moderateScale(120)},
            ]}>
            <Input
              placeholder="Promo Code"
              placeholderTextColor={colors.grayOpacityHundred}
              value={contribution}
              onChangeText={value => setContribution(value)}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <View
            style={{
              width: moderateScale(300),
              //   backgroundColor: 'red',
              height: moderateScale(170),
              flexDirection: 'row',
            }}>
            <CheckBox
              value={detailTermsAndCondition}
              onValueChange={setDetailTermsAndCondition}
              //   style={styles.checkbox}
            />
            <Text style={styles.agreement}>
              I/ We hereby declare that all the information disclosed is true to
              the best of my/our knowledge and belief and it is agreed that I/We
              am/ are not travelling to receive any medical treatment/
              consultation/ diagnosis abroad. I/ We further confirm that I/We
              am/ are medically fit and in good health condition and also I/We
              are/ am not traveling against the advice of legally recognized
              medical practitioner.
            </Text>
          </View>

          <View
            style={{
              width: moderateScale(300),
              //   backgroundColor: 'red',
              height: moderateScale(170),
              flexDirection: 'row',
              marginTop: moderateScale(20),
              marginBottom: moderateScale(80),
            }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              //   style={styles.checkbox}
            />
            <Text style={styles.agreement}>
              I have read the{' '}
              <Text style={{color: colors.primary}}>Terms & Conditions</Text>{' '}
              and <Text style={{color: colors.primary}}>Travel Policy</Text> and
              hereby agree to accept it.
            </Text>
          </View>
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
          text={'PAY NOW'}
          onPress={() => {
            setModalVisible(true);
          }}></CustomButton>
      </View>
      {modalVisible ? (
        <Modal
          animationIn={'fadeIn'}
          isVisible={modalVisible}
          animationInTiming={300}
          onBackButtonPress={() => {
            setModalVisible(false);
          }}
          backdropOpacity={0.8}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            activeOpacity={1}
            style={styles.modalRootView}>
            <View
              style={{
                ...styles.modalInnerViewWithButton,
                backgroundColor: 'white',
              }}>
              <View style={styles.checkButton}>
                <Image
                  source={require('../../assests/Icons/check.png')}
                  style={{
                    width: moderateScale(65),
                    height: moderateScale(65),
                  }}
                  resizeMode="contain"
                />
              </View>

              <Text style={[styles.message, styles.checkoutHeading]}>
                Thank you for choosing EFU Travel Insurance.
              </Text>

              <Text style={[styles.message, styles.accidentViewText]}>
                Your Policy No. is EFU-TI-4183 We will send you policy via
                Email.
              </Text>
              <View style={{width: '100%'}}>
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
                  text={'TERMS & CONDITIONS'}
                  onPress={() => {
                    // PayNowModal();
                  }}></CustomButton>
              </View>
              <View style={{width: '100%'}}>
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
                  text={'TRAVEL POLICY'}
                  onPress={() => {
                    // PayNowModal();
                  }}></CustomButton>
              </View>
              <View style={{width: '100%'}}>
                <CustomButton
                  mystyle={{
                    backgroundColor: colors.white,
                    marginVertical: moderateScale(10),
                    borderRadius: moderateScale(10),
                    width: '90%',
                  }}
                  textStyle={{
                    color: colors.darkGrayFullOpacity,
                    fontFamily: AppStyles.fontName.semi,
                  }}
                  text={'RETURN HOME'}
                  onPress={() => {
                    navigation.navigate('Home');
                  }}></CustomButton>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : null}
    </View>
  );
};

export default FamilyProceedToPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: colors.background,
    backgroundColor: '#EFF1F3',
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
    left: moderateScale(93),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
    textAlign: 'center',
  },
  multiFormTextThree: {
    color: colors.white,
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(190),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
    textAlign: 'center',
  },
  multiFormTextFour: {
    color: colors.white,
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
    // width: '100%',
    paddingHorizontal: moderateScale(10),
    height: moderateScale(56),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: 8,
  },

  accidentView: {
    height: moderateScale(56),
    width: '100%',
    justifyContent: 'center',
    marginVertical: 8,
  },
  accidentViewText: {
    color: colors.grayOpacityHundred,
    fontFamily: AppStyles.fontName.medium,
    fontSize: moderateScale(14),
    textAlign: 'center',
    paddingHorizontal: moderateScale(10),
  },
  textInContainer: {
    marginLeft: moderateScale(10),
    color: colors.grayOpacityHundred,
    fontFamily: AppStyles.fontName.semi,
    fontSize: moderateScale(14),
  },
  opacityInnerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
  },
  agreement: {
    fontFamily: AppStyles.fontName.medium,
    color: colors.grayOpacityHundred,
    fontSize: moderateScale(14),
  },
  modalRootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: moderateScale(20),
  },
  modalInnerView: {
    backgroundColor: AppStyles.color.white,
    width: '100%',
    borderRadius: moderateScale(8),
    height: moderateScale(80),
    padding: moderateScale(10),
    paddingVertical: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInnerViewWithButton: {
    width: '100%',
    borderRadius: moderateScale(8),
    height: moderateScale(425),
    padding: moderateScale(0),
    alignItems: 'center',
    justifyContent: 'center',
  },

  message: {
    fontSize: AppStyles.fontSize.large,
    textAlign: 'center',
    fontFamily: AppStyles.fontName.medium,
    marginTop: moderateScale(20),
  },
  checkButton: {
    marginTop: moderateScale(35),
  },

  modalView: {
    // flex: 1,
  },
});
