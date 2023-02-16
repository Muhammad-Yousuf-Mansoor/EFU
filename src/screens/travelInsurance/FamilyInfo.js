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
import {Colors} from 'react-native-paper';
import {fontFamily, size} from '../../theme/fonts';

const FamilyInfo = ({route, navigation}) => {
  const item2 = route.params.user2;
  console.log('family Info page', item2);

  const [totalFamilyMembers, setTotalFamilyMembers] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [spousePassport, setSpousePassport] = useState('');
  const [spouseCNIC, setSpouseCNIC] = useState('');
  const [spouseDOB, setSpouseDOB] = useState(new Date());
  const [renderSpouseDOB, setRenderSpouseDOB] = useState(false);
  const [spouseModal, setSpouseModal] = useState(false);

  const [firstChildName, setFirstChildName] = useState('');
  const [firstChildPassport, setFirstChildPassport] = useState('');
  const [firstChildDOB, setFirstChildDOB] = useState(new Date());
  const [renderFirstChildDOB, setRenderFirstChildDOB] = useState(false);
  const [firstChildModal, setFirstChildModal] = useState(false);

  const [secondChildName, setSecondChildName] = useState('');
  const [secondChildPassport, setSecondChildPassport] = useState('');
  const [secondChildDOB, setSecondChildDOB] = useState(new Date());
  const [renderSecondChildDOB, setRenderSecondChildDOB] = useState(false);
  const [secondChildModal, setSecondChildModal] = useState(false);

  const [thirdChildName, setThirdChildName] = useState('');
  const [thirdChildPassport, setThirdChildPassport] = useState('');
  const [thirdChildDOB, setThirdChildDOB] = useState(new Date());
  const [renderthirdChildDOB, setRenderThirdChildDOB] = useState(false);
  const [thirdChildModal, setThirdChildModal] = useState(false);

  const [fourthChildName, setFourthChildName] = useState('');
  const [fourthChildPassport, setFourthChildPassport] = useState('');
  const [fourthChildDOB, setFourthChildDOB] = useState(new Date());
  const [renderfourthChildDOB, setRenderFourthChildDOB] = useState(false);
  const [fourthChildModal, setFourthChildModal] = useState(false);

  const goToBeneficiaryInfo = () => {
    let familInfoObject = {
      totalFamilyMembers: totalFamilyMembers,
      spouseName: spouseName,
      spousePassport: spousePassport,
      spouseCNIC: spouseCNIC,
      spouseDOB: spouseDOB.toDateString(),
      firstChildName: firstChildName,
      firstChildPassport: firstChildPassport,
      firstChildDOB: firstChildDOB.toDateString(),
    };
    navigation.navigate('FamilyBeneficiaryInfo', {
      user3: {...item2, ...familInfoObject},
    });
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

          <View
            style={{
              width: moderateScale(26),
              height: moderateScale(26),
              borderRadius: moderateScale(13),
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: Colors.white,
              backgroundColor: colors.white,
              borderWidth: moderateScale(1),
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
          <Text style={styles.checkoutHeading}>Family Information</Text>
        </View>
        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Total Family Members"
            placeholderTextColor={colors.grayOpacityHundred}
            value={totalFamilyMembers}
            onChangeText={value => setTotalFamilyMembers(value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.medumText}>Spouse Information</Text>
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Spouse Name"
            placeholderTextColor={colors.grayOpacityHundred}
            value={spouseName}
            onChangeText={value => setSpouseName(value)}
            maxLength={50}
          />
        </View>

        <View style={styles.textInputAndPickerStyle}>
          <Input
            placeholder="Spouse Passport"
            placeholderTextColor={colors.grayOpacityHundred}
            value={spousePassport}
            onChangeText={value => setSpousePassport(value)}
            maxLength={50}
          />
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Spouse CNIC No."
              placeholderTextColor={colors.grayOpacityHundred}
              value={spouseCNIC}
              onChangeText={value => setSpouseCNIC(value)}
              keyboardType="numeric"
              maxLength={13}
            />
          </View>
        </View>

        <View style={[styles.textInputAndPickerStyle]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setSpouseModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderSpouseDOB ? spouseDOB.toDateString() : ' Date of Birth'}
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
                open={spouseModal}
                date={spouseDOB}
                mode="date"
                onConfirm={spouseDOB => {
                  console.log({spouseDOB});
                  setSpouseModal(false);
                  setSpouseDOB(spouseDOB);
                  setRenderSpouseDOB(true);
                }}
                onCancel={() => {
                  setRenderSpouseDOB(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.checkoutHeading}>Children Information</Text>
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.medumText}>1st Child</Text>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Name"
              placeholderTextColor={colors.grayOpacityHundred}
              value={firstChildName}
              onChangeText={value => setFirstChildName(value)}
              maxLength={50}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Passport"
              placeholderTextColor={colors.grayOpacityHundred}
              value={firstChildPassport}
              onChangeText={value => setFirstChildPassport(value)}
              maxLength={50}
            />
          </View>
        </View>

        <View style={[styles.textInputAndPickerStyle]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setFirstChildModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderFirstChildDOB
                ? firstChildDOB.toDateString()
                : ' Date of Birth'}
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
                open={firstChildModal}
                date={firstChildDOB}
                mode="date"
                onConfirm={firstChildDOB => {
                  console.log({firstChildDOB});
                  setFirstChildModal(false);
                  setFirstChildDOB(firstChildDOB);
                  setRenderFirstChildDOB(true);
                }}
                onCancel={() => {
                  setFirstChildModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.medumText}>2nd Child</Text>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Name"
              placeholderTextColor={colors.grayOpacityHundred}
              value={secondChildName}
              onChangeText={value => setSecondChildDOB(value)}
              maxLength={50}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Passport"
              placeholderTextColor={colors.grayOpacityHundred}
              value={secondChildPassport}
              onChangeText={value => setSecondChildPassport(value)}
              maxLength={50}
            />
          </View>
        </View>

        <View style={[styles.textInputAndPickerStyle]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setSecondChildModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderSecondChildDOB
                ? secondChildDOB.toDateString()
                : ' Date of Birth'}
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
                open={secondChildModal}
                date={secondChildDOB}
                mode="date"
                onConfirm={secondChildDOB => {
                  console.log({secondChildDOB});
                  setSecondChildModal(false);
                  setSecondChildDOB(secondChildDOB);
                  setRenderSecondChildDOB(true);
                }}
                onCancel={() => {
                  setSecondChildModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.medumText}>3rd Child</Text>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Name"
              placeholderTextColor={colors.grayOpacityHundred}
              value={thirdChildName}
              onChangeText={value => setThirdChildName(value)}
              maxLength={10}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Passport"
              placeholderTextColor={colors.grayOpacityHundred}
              value={thirdChildPassport}
              onChangeText={value => setThirdChildPassport(value)}
            />
          </View>
        </View>

        <View style={[styles.textInputAndPickerStyle]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setThirdChildModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderthirdChildDOB
                ? thirdChildDOB.toDateString()
                : ' Date of Birth'}
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
                open={thirdChildModal}
                date={thirdChildDOB}
                mode="date"
                onConfirm={thirdChildDOB => {
                  console.log({thirdChildDOB});
                  setThirdChildModal(false);
                  setThirdChildDOB(thirdChildDOB);
                  setRenderThirdChildDOB(true);
                }}
                onCancel={() => {
                  setThirdChildModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.medumText}>4th Child</Text>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Name"
              placeholderTextColor={colors.grayOpacityHundred}
              value={fourthChildName}
              onChangeText={value => setFourthChildName(value)}
              maxLength={10}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.textInputAndPickerStyle}>
            <Input
              placeholder="Child Passport"
              placeholderTextColor={colors.grayOpacityHundred}
              value={fourthChildPassport}
              onChangeText={value => setFourthChildPassport(value)}
            />
          </View>
        </View>

        <View
          style={[
            styles.textInputAndPickerStyle,
            {marginBottom: moderateScale(120)},
          ]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setFourthChildModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderfourthChildDOB
                ? fourthChildDOB.toDateString()
                : ' Date of Birth'}
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
                open={fourthChildModal}
                date={fourthChildDOB}
                mode="date"
                onConfirm={fourthChildDOB => {
                  console.log({fourthChildDOB});
                  setFourthChildModal(false);
                  setFourthChildDOB(fourthChildDOB);
                  setRenderFourthChildDOB(true);
                }}
                onCancel={() => {
                  setFourthChildModal(false);
                }}
              />
            </View>
          </TouchableOpacity>
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
          onPress={() => {
            goToBeneficiaryInfo();
          }}></CustomButton>
      </View>
    </View>
  );
};

export default FamilyInfo;

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
    color: colors.white,
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
  medumText: {
    fontSize: size.sixteen,
    fontFamily: fontFamily.medium,
    color: colors.primary,
  },
});
