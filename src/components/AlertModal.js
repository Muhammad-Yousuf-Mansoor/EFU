import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Modal from 'react-native-modal';
import Text from './Text';
import AppStyles from '../theme/AppStyles';
const AlertModal = ({
  action,
  message,
  visible,
  onBack
}) => {
  const background =  '#ffffff';
  const text =  '#272727';
  return (
    <View style={styles.modalView}>
      <Modal
        animationIn={'fadeIn'}
        isVisible={visible}
        animationInTiming={300}
        onBackButtonPress={onBack}
        backdropOpacity={0.8}>
        <TouchableOpacity onPress={onBack} activeOpacity={1} style={styles.modalRootView}>
          {action === 'success' ? (
            <View
              style={{
                ...styles.modalInnerViewWithButton,
                backgroundColor: background,
              }}>
              <View style={styles.topIconWithButton}>
                <Image source={require('../assests/Icons/check.png')} style={{ width:moderateScale(65), height:moderateScale(65)}} resizeMode='contain' />
              </View>

              {message ? (
                <Text style={{ ...styles.message, color: "rgba(41, 38, 42, 0.4)" }}>{message}</Text>
              ) : null}
              

              
            </View>
          ) : null}
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
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
    height: moderateScale(220),
    padding: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  message: {
    fontSize: AppStyles.fontSize.large,
    textAlign: 'center',
    fontFamily: AppStyles.fontName.medium,
    marginTop:moderateScale(20)
  },

  modalView: {
    // flex: 1,
  },
  
});
