import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';

const PercentageBar = ({
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
//   const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            
            width: '100%',
            height: 10,
            marginVertical: 10,
            borderRadius: 5,
            borderColor: getBackgroundColor,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: 10,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:20,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: 10,
            bottom:10,
            marginTop: 10,
          }}>
          <Text style={{textAlign: 'right'}}>{getPercentage}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ...Platform.select({
        web: {

        }
    })
})
export default PercentageBar;