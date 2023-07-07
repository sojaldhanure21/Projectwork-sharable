import React from 'react';
import {Button, Platform, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import { setStarRating } from '../../../redux/hotelSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';

const StarRatingFilterMobile = () => {
  const dispatch = useDispatch()
  const Stars = useAppSelector((state) => state.hotel.starRating)
  return (
    <>
      <View>
        <Text
          numberOfLines={1}
          style={styles.HotelSearchText}
          dataSet={{media: ids.HotelSearchText}}>
          Hotel Star Rating
        </Text>
        <View style={styles.hairlineOne} dataSet={{media: ids.hairlineOne}} />
        <View
          style={styles.ContainerButton}
          dataSet={{media: ids.ContainerButton}}>
          <View style={styles.RealButton} dataSet={{media: ids.RealButton}}>
            <Button title="3 ☆"  onPress={() => {
                  dispatch(setStarRating(['3']));
                }} />
          </View>
          <View style={styles.RealButton} dataSet={{media: ids.RealButton}}>
            <Button title="4 ☆"  onPress={() => {
                  dispatch(setStarRating(['4']));
                }}/>
          </View>
          <View style={styles.RealButton} dataSet={{media: ids.RealButton}}>
            <Button title="5 ☆"  onPress={() => {
                  dispatch(setStarRating(['5']));
                }}/>
          </View>
        </View>
          <View style={{position:'relative',margin:'auto',marginTop:'5vh'}}>
          <Text style={{fontFamily:'roboto',fontSize:18,color:'#222222',fontWeight:'600'}}>{Stars?.length > 1 ? "" : Stars} {""} {Stars?.length > 1 ? "" : "Stars"}</Text>
          </View>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      HotelSearchText: {
        fontFamily: 'Roboto',
        color: '#5D6771',
        fontSize: 22,
        Align: 'Left',
        textAlignVertical: 'center',
        marginTop: 12,      
        textAlign:'center'
      },   
      hairlineOne: {
        backgroundColor: '#919698',
        width: '90%',
        marginTop: 4,
        height: 1,
        marginHorizontal: 'auto',
      },
      ContainerButton: {   
        flexDirection: 'row',
        paddingTop: 20,
        marginHorizontal:'auto'
      },
      RealButton: {
        fontFamily: 'Inter',
        marginLeft: '4px',
        width: '20vw',
        paddingVertical:'1vh'
      },
    },
  }),
});

export default StarRatingFilterMobile;
