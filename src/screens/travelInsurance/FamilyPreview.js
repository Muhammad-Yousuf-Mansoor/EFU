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
import {size, fontFamily} from '../../theme/fonts';
import fontName from '../../theme/AppStyles';
import AlertModal from '../../components/AlertModal';
import Modal from 'react-native-modal';
const FamilyPreview = ({route, navigation}) => {
  const item4 = route.params.user4;
  console.log('Final object in family preview', item4);

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

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Text style={styles.checkoutHeading}>Travel Details</Text>
            <View style={{marginTop: moderateScale(15)}}>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Package Type</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.packageTypeValue}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Package Plan</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.packagePlanValue}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Travel Start Date</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.selectedStartDate}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Travel End Date</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.selectedEndDate}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Travel Tenure</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.selectedTravelTenure}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Sum Tenure</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.sumTenureValue}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>
                  Applicant's Date{'\n'} of Birth (Age)
                </Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.applicantSelectedDOB}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Premium</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.premium}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Text style={styles.checkoutHeading}>Applicant’s Information</Text>
            <View style={{marginTop: moderateScale(15)}}>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>First Name</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.firstName}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Middle Name</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.middleName}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Last Name</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.lastName}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Postal Address</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.postalAddress}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>City</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.city}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>CNIC No.</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.CNIC}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Passport</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.passport}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>NTN</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.NTN}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>CNIC/Passport Issue Date</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.selectedCNICIssueDate}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Mobile No.</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.mobileNo}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Email</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.email}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Text style={styles.checkoutHeading}>Benificiary Information</Text>
            <View style={{marginTop: moderateScale(15)}}>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Benificiary Name</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.beneficiaryName}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Benificiary Address</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.beneficiaryAddress}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Benificiary CNIC No.</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.beneficiaryCNIC}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>CNIC Issue Date</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.selectedCNICIssueDatee}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Relation</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.beneficiaryRelation}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '100%', marginBottom: moderateScale(125)}}>
          <View style={styles.textInputAndPickerStyle}>
            <Text style={styles.checkoutHeading}>Family Information</Text>
            <View style={{marginTop: moderateScale(15)}}>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Total Family Members</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.totalFamilyMembers}
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  height: moderateScale(1),
                  backgroundColor: colors.grayOpacityThirty,
                  marginVertical: moderateScale(15),
                }}></View>
              <View style={{marginBottom: moderateScale(10)}}>
                <Text style={styles.mediumText15}>Spouse Information</Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Spouse Name</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.spouseName}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Spouse Passport</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.spousePassport}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Spouse CNIC No.</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.spouseCNIC}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Date of Birth</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.spouseDOB}
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: moderateScale(1),
                  backgroundColor: colors.grayOpacityThirty,
                  marginVertical: moderateScale(15),
                }}></View>
              <View style={{marginBottom: moderateScale(10)}}>
                <Text style={styles.mediumText15}>1st Child</Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Child Name</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.firstChildName}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Child Passport</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.firstChildPassport}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Date of Birth</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.firstChildDOB}
                </Text>
              </View>
            </View>
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
            // setModalVisible(true);
            navigation.navigate('FamilyProceedToPay');
          }}></CustomButton>
      </View>
      {/* {modalVisible ? (
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
      ) : null} */}
    </View>
  );
};

export default FamilyPreview;

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
  dispalyDataView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(4),
  },
  mediumText: {
    fontSize: size.thirteen,
    fontFamily: fontFamily.medium,
    color: colors.grayOpacityHundred,
  },
  mediumText15: {
    fontSize: size.fiften,
    fontFamily: fontFamily.medium,
    color: colors.primary,
  },
  textInputAndPickerStyle: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: moderateScale(8),
    padding: moderateScale(20),
  },
  checkoutHeading: {
    fontFamily: AppStyles.fontName.bold,
    fontSize: moderateScale(16),
    color: colors.grayOpacityHundred,
  },
});
