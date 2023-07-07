import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';

const HotelNameSearch = (props: any) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}
        style={{
          position: 'relative',
          width: '19vw',
          height: '20vw',
          marginHorizontal:'auto',
          zIndex: 1,
          backgroundColor: '#ffffff',
        }}>
        {useAppSelector(state => state?.hotel?.HotelNameAutoSuggest).map(
          (data, i) => {
            return <Text onPress={()=> {props.setAuto(false); props.setSuggestion(data)}} numberOfLines={1} style={{fontFamily:'roboto',fontSize:12,paddingBottom:4,paddingTop:2,borderBottomColor:'#cccccc',borderBottomWidth:1,borderStyle:'solid',paddingLeft:6}}>{data}</Text>;
          },
        )}
      </ScrollView>
    </>
  );
};

export default HotelNameSearch;
