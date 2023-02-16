import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
const GetAQuote = ({navigation}) => {
  const [city, setCity] = useState([
    'City',
    'Karachi',
    'Lahore',
    'Islamabad',
    'Sukkhar',
  ]);
  const [cityValue, setCityValue] = useState('');
  const [nationality, setNationality] = useState([
    'Pakistani',
    'Afghani',
    'Chinese',
    'Turkish',
  ]);
  const [nationalityValue, setNationalityValue] = useState('');
  const [gender, setGender] = useState(['Male', 'Female']);
  const [genderValue, setGenderValue] = useState('');
  const [profession, setProfession] = useState([
    'Mobile App developer',
    'Web developer',
    'Backend developer',
    'Quality Assurance',
  ]);
  const [professionValue, setProfessionValue] = useState('');
  const [CNICIssueDate, setCNICIssueDate] = useState(new Date());
  const [renderCNICIssueDate, setRednerCNICIssueDate] = useState(false);
  const [openCNICIssueDateModal, setOpenCNICIssueDateModal] = useState(false);
  const [DOB, setDOB] = useState(new Date());
  const [renderDOB, setRenderDOB] = useState(false);
  const [openDOBModal, setOpenDOBModal] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
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

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollViewContainer}>
        <View style={styles.multiFormStatus}>
          {/* <View> */}

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
              borderWidth: 1,
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
              borderWidth: 1,
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

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Name"
            placeholderTextColor={colors.grayOpacityHundred}
            value={name}
            onChangeText={value => setName(value)}
            maxLength={40}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Address"
            placeholderTextColor={colors.grayOpacityHundred}
            value={address}
            onChangeText={value => setAddress(value)}
            maxLength={40}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={city}
            defaultButtonText="City"
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
            onSelect={(cityValue, cityIndex) => {
              setCityValue(cityValue);
              console.log(cityValue, cityIndex);
            }}
            buttonTextAfterSelection={(cityValue, cityIndex) => {
              return cityValue;
            }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="CNIC"
            placeholderTextColor={colors.grayOpacityHundred}
            value={CNIC}
            onChangeText={value => setCNIC(value)}
            maxLength={40}
            keyboardType="numeric"
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
            onPress={() => setOpenCNICIssueDateModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderCNICIssueDate
                ? CNICIssueDate.toDateString()
                : ' CNIC Issue Date'}
            </Text>
            <View>
              <Ionicons
                name="calendar"
                size={25}
                // onPress={() => setOpenCNICIssueDateModal(true)}
                color={colors.primary}
                style={{marginRight: moderateScale(10)}}
              />
              <DatePicker
                modal
                open={openCNICIssueDateModal}
                date={CNICIssueDate}
                mode="date"
                onConfirm={CNICIssueDate => {
                  console.log({CNICIssueDate});
                  setOpenCNICIssueDateModal(false);
                  setCNICIssueDate(CNICIssueDate);
                  setRednerCNICIssueDate(true);
                }}
                onCancel={() => {
                  setOpenCNICIssueDateModal(false);
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
            onPress={() => setOpenDOBModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderDOB ? DOB.toDateString() : ' Date Of Birth'}
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
                open={openDOBModal}
                date={DOB}
                mode="date"
                onConfirm={DOB => {
                  console.log({DOB});
                  setOpenDOBModal(false);
                  setDOB(DOB);
                  setRenderDOB(true);
                }}
                onCancel={() => {
                  setOpenDOBModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={nationality}
            defaultButtonText="Nationality"
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
            onSelect={(nationalityValue, nationalityIndex) => {
              setNationalityValue(nationalityValue);
              console.log(nationalityValue, nationalityIndex);
            }}
            buttonTextAfterSelection={(nationalityValue, nationalityIndex) => {
              return nationalityValue;
            }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={gender}
            defaultButtonText="Gender"
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
            onSelect={(genderValue, genderIndex) => {
              setGenderValue(genderValue);
              console.log(genderValue, genderIndex);
            }}
            buttonTextAfterSelection={(genderValue, genderIndex) => {
              return genderValue;
            }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={profession}
            defaultButtonText="Profession"
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
            onSelect={(ProfessionValue, ProfessionIndex) => {
              setProfessionValue(ProfessionValue);
              console.log(ProfessionValue, ProfessionIndex);
            }}
            buttonTextAfterSelection={(ProfessionValue, ProfessionIndex) => {
              return ProfessionValue;
            }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Mobile No"
            placeholderTextColor={colors.grayOpacityHundred}
            value={mobileNo}
            onChangeText={value => setMobileNo(value)}
            maxLength={40}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Email"
            placeholderTextColor={colors.grayOpacityHundred}
            value={email}
            onChangeText={value => setEmail(value)}
            maxLength={40}
          />
        </View>

        <View style={{width: '100%'}}>
          <CustomButton
            mystyle={{
              backgroundColor: colors.primary,
              marginVertical: moderateScale(30),
              borderRadius: moderateScale(10),
              width: '100%',
            }}
            textStyle={{
              color: colors.white,
              fontFamily: AppStyles.fontName.semi,
            }}
            text={'Next'}
            onPress={() => {
              navigation.navigate('PageTwo', {
                user: {
                  Name: name,
                  Address: address,
                  City: cityValue,
                  NIC: CNIC,
                  NICIssueDate: CNICIssueDate.toDateString(),
                  dateOfBirth: DOB.toDateString(),
                  Nationality: nationalityValue,
                  Gender: genderValue,
                  Profession: professionValue,
                  MobileNumber: mobileNo,
                  Email: email,
                },
              });
            }}></CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default GetAQuote;

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
    marginTops: moderateScale(18),
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
    marginVertical: 8,
  },
  textInContainer: {
    marginLeft: moderateScale(10),
    color: colors.grayOpacityHundred,
    fontFamily: AppStyles.fontName.medium,
  },
});
