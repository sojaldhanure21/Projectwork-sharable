import React, { useCallback, useState } from 'react';
import {Platform, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import RangeSlider from 'rn-range-slider';
import Thumb from '../../common/Thumb';
import Rail from '../../common/Rail';
import RailSelected from '../../common/RailSelected';
import Label from '../../common/Label';
import Notch from '../../common/Notch';
import Slider from 'rn-range-slider'
import { useDispatch } from 'react-redux';
import { setHighestPrice, setLowestPrice } from '../../../redux/hotelSlice';
const PriceFilterMobile = () => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(400);
  const renderThumb = useCallback(() => <Thumb name={'high'} />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const dispatch = useDispatch()
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    dispatch(setLowestPrice(low))
    setHigh(high);
    dispatch(setHighestPrice(high))
  }, []);
  
  return (
    <>
      <View>
        <Text
          numberOfLines={1}
          style={styles.HotelSearchText}
          dataSet={{media: ids.HotelSearchText}}>
          Price
        </Text>
        <View style={styles.hairlineOne} dataSet={{media: ids.hairlineOne}} />

        <Slider
          style={styles.slider}
          min={0}
          max={400}
          step={20}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />

        <Text style={styles.Range}>$ {low} to {high}</Text>
        
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
        textAlign: 'center',
      },
      hairlineOne: {
        backgroundColor: '#919698',
        width: '90%',
        marginTop: 4,
        height: 1,
        marginHorizontal: 'auto',
      },
      slider: {
      marginTop:'4vh',
      width:'95vw',
      marginHorizontal:'auto'
      },
      Range:{
        marginHorizontal:'auto',
        marginTop:8,
        fontFamily:'roboto',
        color:'#222222',
        fontSize:20,
        fontWeight:'600'
      }
    },
  }),
});

export default PriceFilterMobile;
