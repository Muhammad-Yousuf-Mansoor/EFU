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
const FamilyBeneficiaryInfo = ({navigation, route}) => {
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [beneficiaryAddress, setBeneficiaryAddress] = useState('');
  const [beneficiaryCNIC, setBeneficiaryCNIC] = useState('');

  const [CNICIssueDate, setCNICIssueDate] = useState(new Date());
  const [selectedCNICIssueDate, setSelectedCNICIssueDate] = useState('');
  const [renderCNICIssueDate, setRenderCNICIssueDate] = useState(false);
  const [CNICModal, setCNICModal] = useState(false);

  const [beneficiaryRelation, setBeneficiaryRelation] = useState('');

  const item3 = route.params.user3;
  console.log('BeneficiaryInfo page', item3);

  const toast = useToast();

  const goToProceedToPay = () => {
    if (beneficiaryName.trim() === '') {
      toast.show('Enter Name');
      return;
    } else if (beneficiaryAddress.trim() == '') {
      toast.show('Enter Address');
      return;
    } else if (beneficiaryCNIC.trim() == '') {
      toast.show('Enter CNIC');
      return;
    } else if (selectedCNICIssueDate == '') {
      toast.show('Select CNIC Issue Date');
      return;
    } else if (beneficiaryRelation.trim() == '') {
      toast.show('Enter Your Relation');
      return;
    } else {
      navigation.navigate('FamilyProceedToPay');
    }
  };
  const goToPreview = () => {
    if (beneficiaryName.trim() === '') {
      toast.show('Enter Name');
      return;
    } else if (beneficiaryAddress.trim() == '') {
      toast.show('Enter Address');
      return;
    } else if (beneficiaryCNIC.trim() == '') {
      toast.show('Enter CNIC');
      return;
    } else if (selectedCNICIssueDate == '') {
      toast.show('Select CNIC Issue Date');
      return;
    } else if (beneficiaryRelation.trim() == '') {
      toast.show('Enter Your Relation');
      return;
    } else {
      let familyBeneficiaryInfoObject = {
        beneficiaryName: beneficiaryName,
        beneficiaryAddress: beneficiaryAddress,
        beneficiaryCNIC: beneficiaryCNIC,
        selectedCNICIssueDatee: selectedCNICIssueDate.toDateString(),
        beneficiaryRelation: beneficiaryRelation,
      };
      navigation.navigate('FamilyPreview', {
        user4: {...item3, ...familyBeneficiaryInfoObject},
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
            <Text
              style={{
                color: colors.primary,
                fontFamily: AppStyles.fontName.bold,
                fontSize: moderateScale(14),
              }}>
              4
            </Text>
          </View>
        </View>

        <View style={styles.HeadingScrollView}>
          <Text style={styles.checkoutHeading}>Beneficiary Information</Text>
        </View>

        <View
          style={{
            ...styles.textInputAndPickerStyle,
          }}>
          <Input
            placeholder="Beneficiary Name"
            placeholderTextColor={colors.grayOpacityHundred}
            value={beneficiaryName}
            onChangeText={value => setBeneficiaryName(value)}
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
            value={beneficiaryAddress}
            onChangeText={value => setBeneficiaryAddress(value)}
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
            value={beneficiaryCNIC}
            onChangeText={value => setBeneficiaryCNIC(value)}
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
            onPress={() => setCNICModal(true)}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                color: colors.grayOpacityHundred,
                fontFamily: AppStyles.fontName.semi,
              }}>
              {renderCNICIssueDate
                ? CNICIssueDate.toDateString()
                : 'CNIC Issue Date'}
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
                open={CNICModal}
                date={CNICIssueDate}
                mode="date"
                onConfirm={CNICIssueDate => {
                  console.log({CNICIssueDate});
                  setCNICModal(false);
                  setCNICIssueDate(CNICIssueDate);
                  setSelectedCNICIssueDate(CNICIssueDate);
                  setRenderCNICIssueDate(true);
                }}
                onCancel={() => {
                  setCNICModal(false);
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
            value={beneficiaryRelation}
            onChangeText={value => setBeneficiaryRelation(value)}
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
              goToPreview();
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

export default FamilyBeneficiaryInfo;

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
    width: '100%',
    height: moderateScale(56),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: moderateScale(8),
  },
  HeadingScrollView: {
    marginVertical: moderateScale(10),
    width: '100%',
  },
});
