import React, {FC} from 'react';
import {Platform, Text, View, TextInput} from 'react-native';
import {ProfileIcon} from '../../assets/icons/IconsSvg';
import DateTimePickerWeb from './DateTimePickerWeb';
import StyleSheet from 'react-native-media-query';

const AvilabilityContainer = () => {
  return (
    <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
      <View style={styles.StartingForm} dataSet={{media: ids.StartingForm}}>
        <Text style={styles.Price} dataSet={{media: ids.Price}}>
          $26.54
        </Text>
        <View>
          <Text style={styles.StartingText} dataSet={{media: ids.StartingText}}>
            Starting from
          </Text>
        </View>
      </View>
      <View
        style={styles.CheckInOutContainer}
        dataSet={{media: ids.CheckInOutContainer}}>
        <View style={styles.CheckInOutContainerOne} dataSet={{media: ids.CheckInOutContainerOne}}>
          <View>
            <Text style={styles.CheckInOut} dataSet={{media: ids.CheckInOut}}>
              Check-in | Check-out
            </Text>
          </View>
          <View style={styles.DatePicker} dataSet={{media: ids.DatePicker}}>
            <DateTimePickerWeb />
          </View>
        </View>
        <View style={styles.CheckInOutContainerOne} dataSet={{media: ids.CheckInOutContainerOne}}>
          <View
            style={styles.GuestsContainer}
            dataSet={{media: ids.GuestsContainer}}>
            <Text style={styles.GuestsText} dataSet={{media: ids.GuestsText}}>
              Guests
            </Text>
          </View>
          <View
            style={styles.TextInputContainer}
            dataSet={{media: ids.TextInputContainer}}>
            <Text>
              <ProfileIcon />
            </Text>
            <Text style={styles.textInput} dataSet={{media: ids.textInput}}>
              2 Adults, 0 Child
            </Text>
          </View>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.TextInputContainerSecond}
          dataSet={{media: ids.TextInputContainerSecond}}
          placeholder="Check Availability"
          placeholderTextColor="White"
        />
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        height: '56vh',
        width: '21vw',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#BFBFBF',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginLeft: '-22vw',
        '@media (max-width: 1000px)': {
          width: '90vw',       
          marginTop: 20,
          marginLeft: 0,
        },
      },
      StartingForm: {
        borderBottomWidth: 1,
        borderColor: '#BFBFBF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        '@media (max-width: 1000px)': {
          marginHorizontal: 'auto',
          borderBottomWidth: 2,
          paddingHorizontal: '20vw',
        },
      },
      StartingText: {
        color: '#91A2A9',
        fontSize: 14,
        fontStyle: 'italic',
        fontFamily: 'roboto',
        fontWeight: '400',
        top: '330px',
        marginLeft: 10,
      },
      CheckInOutContainerOne:{
        display:'flex',
        flexDirection:'column',
        '@media (max-width: 1000px)': {
          flexDirection:'row',
          marginHorizontal:'auto',
          marginBottom:'4vh'
        },

      },
      Price: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: 'black',
        fontSize: 32,
        '@media (max-width: 1100px)': {
          fontSize: 28,
        },
        '@media (max-width: 1000px)': {
          fontSize: 32,
        },
      },
      CheckInOutContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
      },
      CheckInOut: {
        color: '#91A2A9',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Roboto',        
        '@media (max-width: 1000px)': {
          marginVertical:'auto',
          marginRight: '2vw',
          fontSize:18
        },
      },
      DatePicker: {
        width: '16.5vw',
        height: '7vh',
        marginTop: 10,
        '@media (max-width: 1000px)': {
          width: '30vw',
        },
      },
      GuestsContainer: {
        marginTop: 15,
      },
      GuestsText: {
        color: '#91A2A9',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Roboto',
        '@media (max-width: 1000px)': {
          marginVertical:'auto',
          marginRight: '2vw',
          fontSize:18
        },
      },
      TextInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#91A2A9',
        borderWidth: 2,
        width: '17.5vw',
        marginTop: 10,
        height: '7vh',
        paddingHorizontal: 10,
        paddingVertical: 5,
        '@media (max-width: 1000px)': {
          width: '30vw',
        },
      },
      textInput: {
        backgroundColor: '#FFFFFF',
        color: '#475054',
        marginLeft: 27,
        fontFamily: 'Roboto',
        fontWeight: '500',
        paddingTop: 8,
        '@media (max-width: 1120px)': {
          marginLeft: 18,
        },
        '@media (max-width: 1060px)': {
         marginHorizontal:'auto'
        },
       
        
      },
      TextInputContainerSecond: {
        backgroundColor: '#222222',
        marginTop: 0,
        marginHorizontal: 'auto',
        height: '6.5vh',
        width: '17.5vw',
        borderRadius: 5,
        fontFamily: 'Roboto',
        textAlign: 'center',
      },
    },
  }),
});

export default AvilabilityContainer;
