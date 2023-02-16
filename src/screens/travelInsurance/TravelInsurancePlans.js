import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../../theme/AppStyles';
import colors from '../../theme/colors';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../components/Input';
import CustomButton from '../../components/CustumButton';
import MyHeader from '../../components/MyHeader';
import {size, fontFamily} from '../../theme/fonts';
import {useToast} from 'react-native-toast-notifications';
const TravelInsurancePlans = ({navigation}) => {
  const [internationalTravel, setInternationalTravel] = useState(false);
  const [domesticTravel, setDomesticTravel] = useState(false);
  const [studentTravel, setStudentTravel] = useState(false);

  const toast = useToast();
  const handleSelectedCheckBox = () => {
    if (internationalTravel) {
      navigation.navigate('TravelOne');
      return;
    } else if (domesticTravel) {
      toast.show('Domestic Travel');
      return;
    } else if (studentTravel) {
      toast.show('Student Travel');
      return;
    } else {
      toast.show('First Select a Travel Plan');
    }
  };

  return (
    <View style={styles.container}>
      <MyHeader title="Travel Insurance" />
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
            // backgroundColor: 'white',
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
      <View style={{width: '90%', marginTop: moderateScale(20)}}>
        <Text style={styles.semiBoldText}>Travel Insurance Plans</Text>
        <Text style={styles.mediumText}>Select An Insurance Plan</Text>
      </View>
      <View style={styles.travelTypesMainView}>
        <View style={styles.internationalStyle}>
          <Text style={[styles.semiBoldText, {fontSize: size.fifteen}]}>
            INTERNATIONAL TRAVEL
          </Text>
          <CheckBox
            disabled={false}
            value={internationalTravel}
            onValueChange={value => {
              setInternationalTravel(value);
              setDomesticTravel(false);
              setStudentTravel(false);
            }}
          />
        </View>

        <View style={styles.internationalStyle}>
          <Text style={[styles.semiBoldText, {fontSize: size.fifteen}]}>
            DOMESTIC TRAVEL INSURANCE
          </Text>
          <CheckBox
            disabled={false}
            value={domesticTravel}
            onValueChange={value => {
              setDomesticTravel(value);
              setInternationalTravel(false);
              setStudentTravel(false);
            }}
          />
        </View>

        <View style={styles.internationalStyle}>
          <Text style={[styles.semiBoldText, {fontSize: size.fifteen}]}>
            STUDENT TRAVEL INSURANCE
          </Text>
          <CheckBox
            disabled={false}
            value={studentTravel}
            onValueChange={value => {
              setStudentTravel(value);
              setDomesticTravel(false);
              setInternationalTravel(false);
            }}
          />
        </View>
      </View>

      {/* <View style={styles.bottomMainConatiner}></View> */}
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
          onPress={() => {
            handleSelectedCheckBox();
          }}></CustomButton>
      </View>
    </View>
  );
};

export default TravelInsurancePlans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  multiFormStatus: {
    backgroundColor: colors.primary,
    width: '90%',
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
    color: colors.grayOpacityTwentyFive,
    position: 'absolute',
    bottom: moderateScale(20),
    left: moderateScale(242),
    fontFamily: AppStyles.fontName.semi,
    fontSize: AppStyles.fontSize.xsSmall,
  },
  semiBoldText: {
    color: colors.grayOpacityHundred,
    fontSize: size.eighteen,
    fontFamily: fontFamily.semiBold,
  },
  mediumText: {
    color: colors.primary,
    fontSize: size.fourteen,
    fontFamily: fontFamily.medium,
  },
  travelTypesMainView: {
    width: '90%',
    marginTop: moderateScale(10),
  },
  internationalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    height: moderateScale(52),
    marginTop: 10,
  },
  bottomMainConatiner: {
    backgroundColor: 'orange',
    height: moderateScale(92),
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
