import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
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

const PageTwo = ({route, navigation}) => {
  const item = route.params.user;
  console.log(item);

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
              width: moderateScale(90),
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
              borderWidth: 1,
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
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={vehicleArray}
            defaultButtonText="Product"
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
            onSelect={(vehicleValue, vehicleIndex) => {
              setVehicleValue(vehicleValue);
              console.log(vehicleValue, vehicleIndex);
            }}
            buttonTextAfterSelection={(vehicleValue, vehicleIndex) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return vehicleValue;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>

        <View
          style={[
            styles.textInputAndPickerStyle,
            {flexDirection: 'row', alignItems: 'center'},
          ]}>
          <View style={{flex: 7}}>
            <Input
              placeholder="Applied For Registration"
              placeholderTextColor={colors.grayOpacityHundred}
              editable={false}
            />
          </View>

          <View style={{flex: 1}}>
            <CheckBox
              value={appliedForRegistration}
              onValueChange={newValue => setAppliedForRegistration(newValue)}
            />
          </View>
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Registration No"
            placeholderTextColor={colors.grayOpacityHundred}
            value={registrationNo}
            onChangeText={value => setRegistrationNo(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Engine No"
            placeholderTextColor={colors.grayOpacityHundred}
            value={engineNo}
            onChangeText={value => setEngineNo(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Chassis No"
            placeholderTextColor={colors.grayOpacityHundred}
            value={chasisNo}
            onChangeText={value => setChasisNo(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={vehicleMake}
            defaultButtonText="Vehicle Make"
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
            onSelect={(vehicleMakeValue, vehicleMakeIndex) => {
              setVehicleMakeValue(vehicleMakeValue);

              console.log(vehicleMakeValue, vehicleMakeIndex);
            }}
            buttonTextAfterSelection={(vehicleMakeValue, vehicleMakeIndex) => {
              return vehicleMakeValue;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        {/* <View style={styles.textInputAndPickerStyle}> */}
        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={vehicleSubMake}
            defaultButtonText="Vehicle Sub Make"
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
            onSelect={(vehicleSubMakeValue, vehicleSubMakeIndex) => {
              setVehicleSubMakeValue(vehicleSubMakeValue);

              console.log(vehicleSubMakeValue, vehicleSubMakeIndex);
            }}
            buttonTextAfterSelection={(
              vehicleSubMakeValue,
              vehicleSubMakeIndex,
            ) => {
              return vehicleSubMakeValue;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        {/* </View> */}
        {/* <View style={styles.textInputAndPickerStyle}> */}
        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={model}
            defaultButtonText="Model"
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
            onSelect={(modelValue, modelIndex) => {
              setModelValue(modelValue);
              console.log(modelValue, modelIndex);
            }}
            buttonTextAfterSelection={(modelValue, modelIndex) => {
              return modelValue;
            }}
            // rowTextForSelection={(item, index) => {
            //   return item;
            // }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={color}
            defaultButtonText="Color"
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
            onSelect={(colorValue, colorIndex) => {
              setColorValue(colorValue);
              console.log(colorValue, colorIndex);
            }}
            buttonTextAfterSelection={(colorValue, colorIndex) => {
              return colorValue;
            }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={bodyType}
            defaultButtonText="Body Type"
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
            onSelect={(bodyValue, bodyIndex) => {
              setBodyValue(bodyValue);
              console.log(bodyValue, bodyIndex);
            }}
            buttonTextAfterSelection={(bodyValue, bodyIndex) => {
              return bodyValue;
            }}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Cubic Capacity"
            placeholderTextColor={colors.grayOpacityHundred}
            value={cubicCapacity}
            onChangeText={value => setCubicCapacity(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Seating Capacity"
              placeholderTextColor={colors.grayOpacityHundred}
              value={seatingCapacity}
              onChangeText={value => setSeatingCapacity(value)}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <Text>(For Motor Car Only)</Text>
          </View>
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <SelectDropdown
            data={trackerCompany}
            defaultButtonText="Tracker Company"
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
            onSelect={(trackerCompanyValue, trackerCompanyIndex) => {
              setTrackerCompanyValue(trackerCompanyValue);
              console.log(trackerCompanyValue, trackerCompanyIndex);
            }}
            buttonTextAfterSelection={(
              trackerCompanyValue,
              trackerCompanyIndex,
            ) => {
              return trackerCompanyValue;
            }}
          />
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Additional Accessories"
              placeholderTextColor={colors.grayOpacityHundred}
              value={additionalAccessories}
              onChangeText={value => setAdditionalAccessories(value)}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <Text>(For Motor Car Only)</Text>
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Additional Accessories Value"
              placeholderTextColor={colors.grayOpacityHundred}
              value={additionalAccessoriesValue}
              onChangeText={value => setAdditionalAccessoriesValue(value)}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <Text>(For Motor Car Only)</Text>
          </View>
        </View>

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
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Amount Deductable "
            placeholderTextColor={colors.grayOpacityHundred}
            value={amountDecutable}
            onChangeText={value => setAmountDecutable(value)}
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
            onPress={() => setOpenStartDateModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderStartDate
                ? policyStartDate.toDateString()
                : ' Policy Start Date'}
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
                open={openStartDateModal}
                date={policyStartDate}
                mode="date"
                onConfirm={policyStartDate => {
                  console.log({policyStartDate});
                  setOpenStartDateModal(false);
                  setPolicyStartDate(policyStartDate);
                  setRenderStartDate(true);
                }}
                onCancel={() => {
                  setOpenStartDateModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.textInputAndPickerStyle]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setOpenEndDateModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderEndDate
                ? policyEndDate.toDateString()
                : ' Policy End Date'}
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
                open={openEndDateModal}
                date={policyEndDate}
                mode="date"
                onConfirm={policyEndDate => {
                  console.log({policyEndDate});
                  setOpenEndDateModal(false);
                  setPolicyEndDate(policyEndDate);
                  setRenderEndDate(true);
                }}
                onCancel={() => {
                  setOpenEndDateModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Insured Estimated Value"
            placeholderTextColor={colors.grayOpacityHundred}
            value={insuredEstimatedValue}
            onChangeText={value => setInsuredEstimatedValue(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Contribution (Premium)"
            placeholderTextColor={colors.grayOpacityHundred}
            value={contribution}
            onChangeText={value => setContribution(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Rs. 45,000 /monthly"
            placeholderTextColor={colors.grayOpacityHundred}
            value={monthly}
            onChangeText={value => setMonthly(value)}
            keyboardType="numeric"
            maxLength={10}
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
            text={'CALCULATE'}
            onPress={() => {
              let page2Obj = {
                Product: vehicleValue,
                AppliedForRegistration: appliedForRegistration,
                RegistrationNumber: registrationNo,
                EngineNo: engineNo,
                ChasisNo: chasisNo,
                VehicleMake: vehicleMakeValue,
                vehicleSubMake: vehicleSubMakeValue,
                Model: modelValue,
                Color: colorValue,
                BodyType: bodyValue,
                CubicCapacity: cubicCapacity,
                SeatingCapacity: seatingCapacity,
                TrackerCompany: trackerCompanyValue,
                AdditionalAccessories: additionalAccessories,
                AdditionalAccessoriesValue: additionalAccessoriesValue,
                PersonalAccidentYes: personalAccidentYes,
                PersonalAccidentNo: personalAccidentNo,
                AmountDecutable: amountDecutable,
                PolicyStartDate: policyStartDate.toDateString(),
                PolicyEndDate: policyEndDate.toDateString(),
                InsuredEstimatedValue: insuredEstimatedValue,
                Contribution: contribution,
                Monthly: monthly,
              };
              navigation.navigate('PageThree', {
                user2: {
                  ...item,
                  ...page2Obj,
                },
              });
            }}></CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default PageTwo;

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
    color: colors.white,
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
    fontSize: 15,
  },
  textInContainer: {
    marginLeft: moderateScale(10),
    color: colors.grayOpacityHundred,
    // fontFamily: AppStyles.fontName.medium,
  },
});
