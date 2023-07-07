import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';
import { useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setSearchDestinationText } from '../../../redux/hotelSlice';

const SearchDropDown = (props: any) => {
  const dispatch = useDispatch()
  return (
    <View
      style={{
        height: '26.5vh',
        zIndex: 1,
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 6,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView showsVerticalScrollIndicator={false} pagingEnabled={true}>
        {useAppSelector((state) => state.hotel.autoSuggestResponse?.locations).map((data:any) => {
          return (
            <Text
              onPress={() => {
                dispatch(setSearchDestinationText(data.fullName))
                props.setSearchInputText(data.fullName);
                props.setLocationId(data.id);
                props.sethideSearchDropDown(false);
              }}
              style={{paddingTop: 10,paddingBottom:5,borderBottomColor:'#D9D9D9',borderBottomWidth:1,borderStyle:'solid',paddingHorizontal:'2vw',marginHorizontal:'1vw',fontFamily:'roboto',fontSize:14,fontWeight:'400',color:'#444444'}}>
              {data.fullName}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchDropDown;
