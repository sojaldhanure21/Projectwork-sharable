import React from 'react';
import {Platform, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query'

const FooterMobile = () => {
  return (
    <>
      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
};

const {ids , styles} = StyleSheet.create({
    ...Platform.select({
        web:{
            
        }
    })
})

export default FooterMobile;
