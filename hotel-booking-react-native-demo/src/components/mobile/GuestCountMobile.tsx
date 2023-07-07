import React, {useEffect, useState} from 'react';
import {Platform, Pressable, Text, View} from 'react-native';
import {
  BacktoSearchIconMobile,
  MinusButton,
  PlusButton,
} from '../../assets/icons/IconsSvg';
import StyleSheet from 'react-native-media-query';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {
  setAdultsCountRedux,
  setChildrenCountRedux,
} from '../../redux/hotelSlice';
const GuestCountMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adultsCount, setadultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  useEffect(() => {
    if (adultsCount === 0) {
    }
  }, []);

  function addAdultCount() {
    if (adultsCount < 10) {
      setadultCount(adultsCount + 1);
    }
  }

  function lessAdultCount() {
    if (adultsCount !== 0) {
      setadultCount(adultsCount - 1);
    }
  }

  function addChildernCount() {
    if (childrenCount < 10) {
      setChildrenCount(childrenCount + 1);
    }
  }

  function lessChildernCount() {
    if (childrenCount !== 0) {
      setChildrenCount(childrenCount - 1);
    }
  }
  function backToSearch() {
    if (adultsCount != 0) {
      dispatch(setAdultsCountRedux(adultsCount));
      dispatch(setChildrenCountRedux(childrenCount));
    }
    navigate('/');
  }
  return (
    <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
      <View
        style={styles.BackToContainer}
        dataSet={{media: ids.BackToContainer}}>
        <Pressable onPress={() => backToSearch()}>
          <BacktoSearchIconMobile />
        </Pressable>
        <Text style={styles.EnterLocation} dataSet={{media: ids.EnterLocation}}>
          Guest
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          position: 'relative',
          marginHorizontal: 'auto',
          marginTop: 30,
        }}>
        <View>
          <Text style={styles.TypeGuest}>Adults</Text>
        </View>
        <View>
          <Text style={styles.AgeLimit}>18+ year old</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            right: 0,
          }}>
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
      <View
        style={{
          width: '90%',
          position: 'relative',
          marginHorizontal: 'auto',
          marginTop: 30,
        }}>
        <View>
          <Text style={styles.TypeGuest}>Children</Text>
        </View>
        <View>
          <Text style={styles.AgeLimit}>0-17 year old</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            right: 0,
          }}>
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

      <Pressable
        onPress={() => backToSearch()}
        style={styles.DoneButton}
        dataSet={{media: ids.DoneButton}}>
        Done
      </Pressable>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '100vw',
      },
      BackToContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2vh',
        paddingLeft: '2vh',
      },
      EnterLocation: {
        fontSize: 18,
        fontFamily: 'roboto',
        fontWeight: '600',
        marginLeft: '36vw',
      },
      TypeGuest: {
        fontFamily: 'roboto',
        fontWeight: '500',
        fontSize: 18,
        color: '#222222',
      },
      AgeLimit: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontSize: 14,
        color: '#5D6771',
      },
      CountGuest: {
        paddingHorizontal: 8,
        fontFamily: 'roboto',
        fontSize: 24,
        fontWeight: '500',
        color: '#222222',
      },
      DoneButton: {
        marginTop: '8vh',
        fontFamily: 'roboto',
        fontSize: 20,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#0B8ABB',
        color: '#FFFFFF',
        width: '20vw',
        textAlign: 'center',
        marginLeft: '75vw',
        borderRadius: 10,
      },
    },
  }),
});

export default GuestCountMobile;
