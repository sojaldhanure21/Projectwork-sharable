import React, {useEffect, useState} from 'react';
import {Platform, Text, View, CheckBox} from 'react-native';
import StyleSheet from 'react-native-media-query';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { setFacilityId } from '../../../redux/hotelSlice';
const AccomodationsFilterMobile = () => {
  const [isSelected, setSelection] = useState(false);
  const [isLibrary, setLibrary] = useState(false);
  const [isFitness, setFitness] = useState(false);
  const [isLaundry, setLaundry] = useState(false);
  const [isBar, setBar] = useState(false);
  const [isSClub, setClub] = useState(false);

  const dispatch = useDispatch()
  const facilityRedux =  useAppSelector(state => state.hotel.facilityId)
  var facility :any  = [];
  useEffect(()=>{
   
    console.log(facilityRedux)
  },[])

  return (
    <>
      <View>
        <Text
          numberOfLines={1}
          style={styles.HotelSearchText}
          dataSet={{media: ids.HotelSearchText}}>
          Accomodations
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
            <CheckBox value={isLibrary}
                onValueChange={() => {
                  if (isLibrary) {
                    setLibrary(false);
                    facility.pop('38');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setLibrary(true);
                    facility.push('38');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Library
            </Text>
          </View>

          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox value={isFitness}
                onValueChange={() => {
                  if (isFitness) {
                    setFitness(false);
                    facility.pop('17');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setFitness(true);
                    facility.push('17');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Fitness Facility
            </Text>
          </View>

          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox value={isLaundry}
                onValueChange={() => {
                  if (isLaundry) {
                    setLaundry(false);
                    facility.pop('12');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setLaundry(true);
                    facility.push('12');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Laundry Services
            </Text>
          </View>
        </View>
        <View
          style={{display: 'flex', flexDirection: 'column', marginLeft: '8vw'}}>
          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox value={isBar}
                onValueChange={() => {
                  if (isBar) {
                    setBar(false);
                    facility.pop('8');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setBar(true);
                    facility.push('8');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Bar
            </Text>
          </View>
          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox value={isSClub}
                onValueChange={() => {
                  if (isSClub) {
                    setClub(false);
                    facility.pop('36');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  } else {
                    setClub(true);
                    facility.push('36');
                    dispatch(setFacilityId(facility));
                    console.log(facility)
                  }
                }} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Night Club
            </Text>
          </View>
          <View style={styles.CheckBoxView} dataSet={{media: ids.CheckBoxView}}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text
              numberOfLines={1}
              style={styles.CheckBoxText}
              dataSet={{media: ids.CheckBoxText}}>
              Parking
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

export default AccomodationsFilterMobile;
