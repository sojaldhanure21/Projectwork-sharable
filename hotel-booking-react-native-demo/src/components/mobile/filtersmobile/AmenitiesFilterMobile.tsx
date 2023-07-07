import React, {useEffect, useState} from 'react';
import {Platform, Text, View, CheckBox} from 'react-native';
import StyleSheet from 'react-native-media-query';
import { useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setFacilityId } from '../../../redux/hotelSlice';
const AmenitiesFilterMobile = () => {
  const [isSelected, setSelection] = useState(false);
  const [isPool, setPool] = useState(false);
  const [isSpa, setSpa] = useState(false);
  const [isWifi, setWifi] = useState(false);
  const [isAC, setAC] = useState(false);
  const [isResto, setResto] = useState(false);

  const dispatch = useDispatch()
  const facilityRedux =  useAppSelector(state => state.hotel.facilityId)
  var facility :any  = [];
  useEffect(()=>{
   
    console.log(facilityRedux)
  },[isPool])



  return (
    <>
      <View>
        <Text
          numberOfLines={1}
          style={styles.HotelSearchText}
          dataSet={{media: ids.HotelSearchText}}>
          Amenities
        </Text>
        <View style={styles.hairlineOne} dataSet={{media: ids.hairlineOne}} />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 'auto',
          marginTop: '2vh',
        }}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox value={isPool}
                onValueChange={() => {
                  if (isPool) {
                    setPool(false);
                    facility.pop('13');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setPool(true);
                    facility.push('13');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Pool
            </Text>
          </View>

          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox  value={isSpa}
                onValueChange={() => {
                  if (isSpa) {
                    setSpa(false);
                    facility.pop('9');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setSpa(true);
                    facility.push('9');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }}  />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Spa
            </Text>
          </View>

          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox  value={isWifi}
                onValueChange={() => {
                  if (isWifi) {
                    setWifi(false);
                    facility.pop('16');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setWifi(true);
                    facility.push('16');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }}  />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Wifi
            </Text>
          </View>
        </View>
        <View
          style={{display: 'flex', flexDirection: 'column', marginLeft: '8vw'}}>
          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox  value={isAC}
                onValueChange={() => {
                  if (isAC) {
                    setAC(false);
                    facility.pop('11');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setAC(true);
                    facility.push('11');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }}  />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Television
            </Text>
          </View>
          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox  value={isResto}
                onValueChange={() => {
                  if (isResto) {
                    setResto(false);
                    facility.pop('14');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setResto(true);
                    facility.push('14');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }}  />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Restaurant
            </Text>
          </View>
          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Appartments
            </Text>
          </View>
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
        textAlign: 'center',
      },
      hairlineOne: {
        backgroundColor: '#919698',
        width: '90%',
        marginTop: 4,
        height: 1,
        marginHorizontal: 'auto',
      },
      CheckBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
      },
      CheckBoxText: {
        paddingLeft: 14,
        fontFamily: 'Roboto',
        color: '#475054',
        fontSize: 14,
      },
    },
  }),
});

export default AmenitiesFilterMobile;
