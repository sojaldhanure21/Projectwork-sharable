import React, {FC} from 'react';
import {Linking, Platform, StyleSheet, Text, View} from 'react-native';
import {
    EmailIcon,
  LocationIcon,
  NearByLocationIcon,
  PhoneIcon,
  VectorIcon,
  WebsiteIcon,
} from '../../assets/icons/IconsSvg';
// import { LocationIcon, NearByLocationIcon, VectorIcon } from "../assets/icons/IconsSvg";

const NearByCard = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.nearText}>Contact Details</Text>

      <View style={styles.Container}>
        <WebsiteIcon />
        <View style={styles.subContainer}>
          <Text style={{fontFamily: 'roboto', fontSize: 14}}>Website</Text>
          <Text style={styles.KmText}>
            {props?.website == 'NA' ? (
              <Text style={{fontFamily: 'roboto', fontSize: 14}}>NA</Text>
            ) : (
              <Text
                style={{color: '#0B8ABB', fontFamily: 'roboto', fontSize: 14}}
                onPress={() => Linking.openURL(props?.website)}>
                {props?.website}
              </Text>
            )}
          </Text>
        </View>
      </View>

      <View style={styles.Container}>
        <EmailIcon />
        <View style={styles.subContainer}>
          <Text style={{fontFamily: 'roboto', fontSize: 14}}>Emails</Text>
          <Text style={styles.KmText}>{props?.emails}</Text>
        </View>
      </View>

      <View style={styles.Container}>
        <PhoneIcon />
        <View style={styles.subContainer}>
          <Text style={{fontFamily: 'roboto', fontSize: 14}}>Phones</Text>
          <Text style={styles.KmText}>{props?.phone}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      mainContainer: {
        width: '66.5vw',
        height: '25vh',
        shadowColor: '#ccc',
        backgroundColor: '#FFFFFF',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 4,
        marginTop: 20,
        marginRight: '1.7vw',
      },
      Container: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '2vw',
        marginVertical: '1vh',
      },
      subContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        marginLeft: 6,
      },
      NearByText: {
        fontFamily: 'roboto',
        fontWeight: '500',
        fontSize: 18,
        color: '#222222',
      },
      nearText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        marginLeft: '2vw',
        marginTop: 20,
        marginBottom: 10,
      },
      KmText: {
        position: 'absolute',
        right: 0,
        fontFamily: 'roboto',
        fontSize: 14,
      },
    },
  }),
});
export default NearByCard;
