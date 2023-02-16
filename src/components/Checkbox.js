import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import colors from '../theme/colors';

function CheckBox({ label, status, onPress }) {
  return (
  
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox status={status} />
        <Text style={{ fontWeight: 'bold',color:colors.darkGrayFullOpacity }}>{label}</Text>
      </View>
    
  );
}
export default CheckBox