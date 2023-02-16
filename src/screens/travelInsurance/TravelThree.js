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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TravelThree = ({navigation, route}) => {
  const [CNICIssueDate, setCNICIssueDate] = useState(new Date());
  const [selectedCNICIssueDate, setSelectedCNICIssueDate] = useState('');
  const [renderCNICIssueDate, setRednerCNICIssueDate] = useState(false);
  const [openCNICIssueDateModal, setOpenCNICIssueDateModal] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [relation, setRelation] = useState('');

  const toast = useToast();

  const item3 = route.params.user2;
  console.log('travel three final object', item3);

  const goToProceedToPay = () => {
    if (name.trim() === '') {
      toast.show('Enter Name');
      return;
    } else if (address.trim() == '') {
      toast.show('Enter Address');
      return;
    } else if (CNIC.trim() == '') {
      toast.show('Enter CNIC');
      return;
    } else if (selectedCNICIssueDate == '') {
      toast.show('Select CNIC Issue Date');
      return;
    } else if (relation.trim() == '') {
      toast.show('Enter Relation');
      return;
    } else {
      navigation.navigate('ProceedToPay');
    }
  };

  const showPreview = () => {
    if (name.trim() === '') {
      toast.show('Enter Name');
      return;
    } else if (address.trim() == '') {
      toast.show('Enter Address');
      return;
    } else if (CNIC.trim() == '') {
      toast.show('Enter CNIC');
      return;
    } else if (selectedCNICIssueDate == '') {
      toast.show('Select CNIC Issue Date');
      return;
    } else if (relation.trim() == '') {
      toast.show('Enter Relation');
      return;
    } else {
      let page3Obj = {
        name: name,
        address: address,
        BeneficiaryCNIC: CNIC,
        selectedCNICIssueDate: selectedCNICIssueDate.toDateString(),
        relation: relation,
      };
      navigation.navigate('Preview', {
        user3: {...item3, ...page3Obj},
      });
    }

    // let page3Obj = {
    //   name: name,
    //   address: address,
    //   BeneficiaryCNIC: CNIC,
    //   selectedCNICIssueDate: selectedCNICIssueDate.toDateString(),
    //   relation: relation,
    // };
    // navigation.navigate('Preview', {
    //   user3: {...item3, ...page3Obj},
    // });
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

        <View
          style={{
            ...styles.textInputAndPickerStyle,
          }}>
          <Input
            placeholder="Beneficiary Name"
            placeholderTextColor={colors.grayOpacityHundred}
            value={name}
            onChangeText={value => setName(value)}
            maxLength={40}
          />
        </View>

        <View
          style={{
            ...styles.textInputAndPickerStyle,
          }}>
          <Input
            placeholder="Beneficiary Address"
            placeholderTextColor={colors.grayOpacityHundred}
            value={address}
            onChangeText={value => setAddress(value)}
            maxLength={40}
          />
        </View>

        <View
          style={{
            ...styles.textInputAndPickerStyle,
          }}>
          <Input
            placeholder="Beneficiary CNIC No."
            placeholderTextColor={colors.grayOpacityHundred}
            value={CNIC}
            onChangeText={value => setCNIC(value)}
            keyboardType="numeric"
            maxLength={40}
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
                : `CNIC Issue Date`}
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
                open={openCNICIssueDateModal}
                date={CNICIssueDate}
                mode="date"
                onConfirm={CNICIssueDate => {
                  console.log({CNICIssueDate});
                  setOpenCNICIssueDateModal(false);
                  setCNICIssueDate(CNICIssueDate);
                  setSelectedCNICIssueDate(CNICIssueDate);
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
          style={{
            ...styles.textInputAndPickerStyle,
            marginBottom: moderateScale(120),
          }}>
          <Input
            placeholder="Relation"
            placeholderTextColor={colors.grayOpacityHundred}
            value={relation}
            onChangeText={value => setRelation(value)}
            maxLength={40}
          />
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: moderateScale(90),
          position: 'absolute',
          bottom: 0,
          backgroundColor: colors.white,
          //   elevation: 30,
          shadow: 1,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 20,
          alignItems: 'center',
        }}>
        <View style={{flex: 2}}>
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
            text={'PREVIEW'}
            onPress={() => {
              showPreview();
            }}></CustomButton>
        </View>
        <View style={{flex: 2}}>
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
            text={'PROCEED TO PAY'}
            onPress={() => {
              goToProceedToPay();
            }}></CustomButton>
        </View>
      </View>
    </View>
  );
};

export default TravelThree;

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
    height: moderateScale(56),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: moderateScale(8),
  },
});
