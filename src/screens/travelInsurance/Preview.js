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
import {fontFamily, size} from '../../theme/fonts';

const Preview = ({route, navigation}) => {
  const item4 = route.params.user3;
  console.log('this is the preview page with complete data', item4);

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
          <Text style={styles.multiFormTextOne}>Travel Details</Text>
          <Text style={styles.multiFormTextTwo}>Applicant's Info</Text>
          <Text style={styles.multiFormTextThree}>Beneficiary Info</Text>
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
                  {item4.mobileNumber}
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

        <View style={{width: '100%', marginBottom: moderateScale(125)}}>
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
                  {item4.name}
                </Text>
              </View>
              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Benificiary Address</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.address}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Benificiary CNIC No.</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.BeneficiaryCNIC}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>CNIC Issue Date</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.selectedCNICIssueDate}
                </Text>
              </View>

              <View style={styles.dispalyDataView}>
                <Text style={styles.mediumText}>Relation</Text>
                <Text
                  style={[
                    styles.mediumText,
                    {color: colors.grayOpacityFourty},
                  ]}>
                  {item4.relation}
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
            navigation.navigate('ProceedToPay');
          }}></CustomButton>
      </View>
    </View>
  );
};

export default Preview;

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
    color: colors.grayOpacityTwentyFive,
    position: 'absolute',
    bottom: moderateScale(20),
    left: moderateScale(12),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
  },
  multiFormTextTwo: {
    color: colors.grayOpacityTwentyFive,
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
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: moderateScale(8),
    padding: moderateScale(20),
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
    fontSize: 15,
  },
  textInContainer: {
    marginLeft: moderateScale(10),
    color: colors.grayOpacityHundred,
    fontFamily: AppStyles.fontName.semi,
    fontSize: 14,
  },
  opacityInnerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
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
});
