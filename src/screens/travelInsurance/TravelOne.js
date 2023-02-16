import {StyleSheet, Text, View, ScrollView, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useToast} from 'react-native-toast-notifications';
const TravelOne = ({navigation}) => {
  const [packageType, setPackageType] = useState([
    'Individual',
    'Family',
    'Group',
  ]);
  const [packageTypeValue, setPackageTypeValue] = useState('');

  const [packagePlan, setPackagePlan] = useState([
    'Low',
    'Medium',
    'Moderate',
    'High',
  ]);
  const [packagePlanValue, setPackagePlanValue] = useState('');

  const [travelStartDate, setTravelStartDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [renderTravelStartDate, setRenderTravelStartDate] = useState(false);
  const [travelStartDateModal, setTravelStartDateModal] = useState(false);

  const [travelEndDate, setTravelEndDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [renderTravelEndDate, setRenderTravelEndDate] = useState(false);
  const [travelEndDateModal, setTravelEndDateModal] = useState(false);

  const [travelTenure, setTravelTenure] = useState(new Date());
  const [selectedTravelTenure, setSelectedTravelTenure] = useState('');
  const [renderTravelTenure, setRenderTravelTenure] = useState(false);
  const [travelTenureModal, setTravelTenureModal] = useState(false);

  const [sumTenure, setSumTenure] = useState([
    'sumTenure 1',
    'sumTenure 2',
    'sumTenure 3',
    'sumTenure 4',
  ]);
  const [sumTenureValue, setSumTenureValue] = useState('');

  const [applicantDOB, setApplicantDOB] = useState(new Date());
  const [applicantSelectedDOB, setApplicantSelectedDOB] = useState('');
  const [renderApplicantDOB, setRenderApplicantDOB] = useState(false);
  const [applicantDOBModal, setApplicantDOBModal] = useState(false);
  const [premium, setPremium] = useState(false);

  const toast = useToast();

  const selectedPackageType = () => {
    // navigation.navigate('TravelTwo');
    // navigation.navigate('FamilyApplicantInfo');
    // return;
    if (packageTypeValue === '') {
      toast.show('Select a Package Type');
      return;
    } else if (packagePlanValue == '') {
      toast.show('Select a Package Plan');
      return;
    } else if (selectedStartDate == '') {
      toast.show('Select Travel Start Date');
      return;
    } else if (selectedEndDate == '') {
      toast.show('Select Travel End Date');
      return;
    } else if (selectedTravelTenure == '') {
      toast.show('Select Travel Tensure');
      return;
    } else if (sumTenureValue == '') {
      toast.show('Select Sum Tensure');
      return;
    } else if (applicantSelectedDOB == '') {
      toast.show('Select Date Of Birth');
      return;
    } else if (premium == '') {
      toast.show('Enter Premium');
      return;
    } else if (packageTypeValue == 'Individual') {
      navigation.navigate('TravelTwo', {
        user: {
          packageTypeValue: packageTypeValue,
          packagePlanValue: packagePlanValue,
          selectedStartDate: selectedStartDate.toDateString(),
          selectedEndDate: selectedEndDate.toDateString(),
          selectedTravelTenure: selectedTravelTenure.toDateString(),
          sumTenureValue: sumTenureValue,
          applicantSelectedDOB: applicantSelectedDOB.toDateString(),
          premium: premium,
        },
      });
      return;
    } else if (packageTypeValue == 'Family') {
      navigation.navigate('FamilyApplicantInfo', {
        user: {
          packageTypeValue: packageTypeValue,
          packagePlanValue: packagePlanValue,
          selectedStartDate: selectedStartDate.toDateString(),
          selectedEndDate: selectedEndDate.toDateString(),
          selectedTravelTenure: selectedTravelTenure.toDateString(),
          sumTenureValue: sumTenureValue,
          applicantSelectedDOB: applicantSelectedDOB.toDateString(),
          premium: premium,
        },
      });
      return;
    }
    // else if (packageTypeValue == 'Group') {
    //   navigation.navigate('');
    //   return;
    // }
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
          {/* <View> */}

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
            <Text
              style={{
                color: colors.primary,
                fontFamily: AppStyles.fontName.bold,
                fontSize: moderateScale(14),
              }}>
              1
            </Text>
          </View>

          {/* </View> */}

          <View
            style={{
              width: moderateScale(90),
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
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
              borderColor: colors.grayOpacityTwentyFive,
              borderWidth: moderateScale(1),
            }}>
            <Text
              style={{
                color: colors.grayOpacityTwentyFive,
                fontFamily: AppStyles.fontName.bold,
                fontSize: moderateScale(14),
              }}>
              2
            </Text>
          </View>
          <View
            style={{
              width: moderateScale(90),
              backgroundColor: colors.grayOpacityTwentyFive,
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
              borderColor: colors.grayOpacityTwentyFive,
              borderWidth: moderateScale(1),
            }}>
            <Text
              style={{
                color: colors.grayOpacityTwentyFive,
                fontFamily: AppStyles.fontName.bold,
                fontSize: moderateScale(14),
              }}>
              3
            </Text>
          </View>
        </View>

        {/* <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Address"
            placeholderTextColor={colors.grayOpacityHundred}
            value={address}
            onChangeText={value => setAddress(value)}
            maxLength={40}
          />
        </View> */}

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={packageType}
            defaultButtonText="Package Type"
            buttonStyle={{
              backgroundColor: colors.white,
              width: '100%',
            }}
            buttonTextStyle={{
              fontFamily: AppStyles.fontName.semi,
              color: colors.grayOpacityHundred,
              fontSize: moderateScale(15),
              textAlign: 'left',
            }}
            searchInputStyle={{borderRadius: 20}}
            dropdownStyle={{
              backgroundColor: colors.white,
              borderRadius: 5,
              fontFamily: AppStyles.fontName.medium,
            }}
            renderDropdownIcon={() => {
              return (
                <MaterialIcons
                  name="arrow-drop-down"
                  size={25}
                  color={colors.grayOpacityHundred}
                />
              );
            }}
            dropdownIconPosition={{marginLeft: moderateScale(300)}}
            onSelect={(packageTypeValue, packageTypeIndex) => {
              setPackageTypeValue(packageTypeValue);
              console.log(packageTypeValue, packageTypeIndex);
            }}
            buttonTextAfterSelection={(packageTypeValue, packageTypeIndex) => {
              return packageTypeValue;
            }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={packagePlan}
            defaultButtonText="Package Plan"
            buttonStyle={{
              backgroundColor: colors.white,
              width: '100%',
            }}
            buttonTextStyle={{
              fontFamily: AppStyles.fontName.semi,
              color: colors.grayOpacityHundred,
              fontSize: moderateScale(15),
              textAlign: 'left',
            }}
            searchInputStyle={{borderRadius: 20}}
            dropdownStyle={{
              backgroundColor: colors.white,
              borderRadius: 5,
              fontFamily: AppStyles.fontName.medium,
            }}
            renderDropdownIcon={() => {
              return (
                <MaterialIcons
                  name="arrow-drop-down"
                  size={25}
                  color={colors.grayOpacityHundred}
                />
              );
            }}
            dropdownIconPosition={{marginLeft: moderateScale(300)}}
            onSelect={(packagePlanValue, packagePlanIndex) => {
              setPackagePlanValue(packagePlanValue);
              console.log(packagePlanValue, packagePlanIndex);
            }}
            buttonTextAfterSelection={(packagePlanValue, packagePlanIndex) => {
              return packagePlanValue;
            }}
          />
        </View>

        <View
          style={[
            styles.textInputAndPickerStyle,
            // {
            //   flexDirection: 'row',
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
            // },
          ]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setTravelStartDateModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderTravelStartDate
                ? travelStartDate.toDateString()
                : ' Travel Start Date'}
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
                open={travelStartDateModal}
                date={travelStartDate}
                mode="date"
                onConfirm={travelStartDate => {
                  console.log({travelStartDate});
                  setTravelStartDateModal(false);
                  setTravelStartDate(travelStartDate);
                  setSelectedStartDate(travelStartDate);
                  setRenderTravelStartDate(true);
                }}
                onCancel={() => {
                  setTravelStartDateModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.textInputAndPickerStyle,
            // {
            //   flexDirection: 'row',
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
            // },
          ]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setTravelEndDateModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderTravelEndDate
                ? travelEndDate.toDateString()
                : ' Travel End Date'}
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
                open={travelEndDateModal}
                date={travelEndDate}
                mode="date"
                onConfirm={travelEndDate => {
                  console.log({travelEndDate});
                  setTravelEndDateModal(false);
                  setTravelEndDate(travelEndDate);
                  setSelectedEndDate(travelEndDate);
                  setRenderTravelEndDate(true);
                }}
                onCancel={() => {
                  setTravelEndDateModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.textInputAndPickerStyle,
            // {
            //   flexDirection: 'row',
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
            // },
          ]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setTravelTenureModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderTravelTenure
                ? travelTenure.toDateString()
                : ' Travel Tenure'}
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
                open={travelTenureModal}
                date={travelTenure}
                mode="date"
                onConfirm={travelTenure => {
                  console.log({travelTenure});
                  setTravelTenureModal(false);
                  setTravelTenure(travelTenure);
                  setSelectedTravelTenure(travelTenure);
                  setRenderTravelTenure(true);
                }}
                onCancel={() => {
                  setTravelTenureModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={sumTenure}
            defaultButtonText="Sum Tenure"
            buttonStyle={{
              backgroundColor: colors.white,
              width: '100%',
            }}
            buttonTextStyle={{
              fontFamily: AppStyles.fontName.semi,
              color: colors.grayOpacityHundred,
              fontSize: moderateScale(15),
              textAlign: 'left',
            }}
            dropdownStyle={{
              backgroundColor: colors.white,
              borderRadius: 5,
              fontFamily: AppStyles.fontName.medium,
            }}
            renderDropdownIcon={() => {
              return (
                <MaterialIcons
                  name="arrow-drop-down"
                  size={25}
                  color={colors.grayOpacityHundred}
                />
              );
            }}
            dropdownIconPosition={{marginLeft: moderateScale(300)}}
            onSelect={(sumTenureValue, sumTenureIndex) => {
              setSumTenureValue(sumTenureValue);
              console.log(sumTenureValue, sumTenureIndex);
            }}
            buttonTextAfterSelection={(sumTenureValue, sumTenureIndex) => {
              return sumTenureValue;
            }}
          />
        </View>

        <View
          style={[
            styles.textInputAndPickerStyle,
            // {
            //   flexDirection: 'row',
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
            // },
          ]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setApplicantDOBModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderApplicantDOB
                ? applicantDOB.toDateString()
                : `Applicant's Date of Birth (Age)`}
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
                open={applicantDOBModal}
                date={applicantDOB}
                mode="date"
                onConfirm={applicantDOB => {
                  console.log({applicantDOB});
                  setApplicantDOB(applicantDOB);
                  setApplicantSelectedDOB(applicantDOB);
                  setApplicantDOBModal(false);
                  setRenderApplicantDOB(true);
                }}
                onCancel={() => {
                  setApplicantDOBModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.textInputAndPickerStyle,
            marginBottom: moderateScale(120),
          }}>
          <Input
            placeholder="Premium"
            placeholderTextColor={colors.grayOpacityHundred}
            value={premium}
            onChangeText={value => setPremium(value)}
            maxLength={40}
          />
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: moderateScale(90),
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
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
          //   navigation.navigate('TravelTwo', {
          //     user: {
          //       Name: name,
          //       Address: address,
          //       City: cityValue,
          //       NIC: CNIC,
          //       NICIssueDate: CNICIssueDate.toDateString(),
          //       dateOfBirth: DOB.toDateString(),
          //       Nationality: nationalityValue,
          //       Gender: genderValue,
          //       Profession: professionValue,
          //       MobileNumber: mobileNo,
          //       Email: email,
          //     },
          //   });
          // }}
          onPress={() => {
            selectedPackageType();
          }}></CustomButton>
      </View>
    </View>
  );
};

export default TravelOne;

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
    color: colors.grayOpacityTwentyFive,
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
    height: moderateScale(56),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: moderateScale(8),
  },
});
