import React, {FC, useEffect, useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {MinusButton, PlusButton} from '../../../assets/icons/IconsSvg';
import { useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setAdultsCountRedux, setChildrenCountRedux } from '../../../redux/hotelSlice';

const GuestModal = (props:any) => {
  // const [adultsCount, setadultCount] = useState(0);
  // const [childrenCount, setChildrenCount] = useState(0);

  const adultsCount = useAppSelector((state:any) => state.hotel.adultsCount) 
  const childrenCount = useAppSelector((state: any) => state.hotel.childrenCount)
  
  let colorButtonPassive = '';
  let colorButtonActive = ''
  const dispatch = useDispatch()
  dispatch(setChildrenCountRedux)
  useEffect(()=>{
    if(adultsCount === 0){
        
    }

  },[])

  function addAdultCount() {
    if (adultsCount < 10) {
      dispatch(setAdultsCountRedux(adultsCount + 1));
    }
  }

  function lessAdultCount() {
    if (adultsCount !== 0) {
      dispatch(setAdultsCountRedux(adultsCount - 1));
    }
  }

  function addChildernCount() {
    if (childrenCount < 10) {
     dispatch(setChildrenCountRedux(childrenCount + 1));
    }
  }

  function lessChildernCount() {
    if (childrenCount !== 0) {
     dispatch(setChildrenCountRedux(childrenCount - 1));
    }
  }

  return (
    <View style={{display: 'flex', flexDirection: 'row',paddingHorizontal:'10%',paddingVertical:'5%'}}>
      <View style={{width:'50%',alignItems:'center'}}>
        <View>
          <Text style={styles.TypeGuest}>Adults</Text>
        </View>
        <View>
          <Text style={styles.AgeLimit}>18+ year old</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row',paddingTop:8}}>
          <View>
            <Pressable onPress={() => lessAdultCount()}>
              <MinusButton />
            </Pressable>
          </View>
          <View style={styles.CountGuest}>{adultsCount}</View>
          <View>
            <Pressable onPress={() => addAdultCount()}>
              <PlusButton />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{width:'50%',alignItems:'center'}}>
        <View>
          <Text style={styles.TypeGuest}>Children</Text>
        </View>
        <View>
          <Text style={styles.AgeLimit}>0-17 year old</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row',paddingTop:8}}>
          <View>
            <Pressable onPress={() => lessChildernCount()}>
              <MinusButton />
            </Pressable>
          </View>
          <View style={styles.CountGuest}>{childrenCount}</View>
          <View>
            <Pressable onPress={() => addChildernCount()}>
              <PlusButton />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ...Platform.select({
        web:{
            TypeGuest:{
                fontFamily:'roboto',
                fontWeight:'500',
                fontSize:18,
                color:'#222222'
            },
            AgeLimit:{
                fontFamily:'roboto',
                fontWeight:'400',
                fontSize:14,
                color:'#5D6771'
            },
            CountGuest:{
                paddingHorizontal:8,
                fontFamily:'roboto',
                fontSize:24,
                fontWeight:'500',
                color:'#222222'
            }
        }
    })
})

export default GuestModal;
