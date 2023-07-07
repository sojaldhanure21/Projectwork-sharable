import React, {FC} from 'react';
import {Platform, Text, View} from 'react-native';
import { FacebookIcon, InstaIcon, LinkedInIcon, SideBarIcon, SmarterTravelSmall, TwitterIcon } from '../../assets/icons/IconsSvg';
import StyleSheet from 'react-native-media-query';
const Footer: FC = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.SubContainerOne}>
        <View style={styles.HotelContainer}>
          <Text style={styles.Headers} dataSet={{media: ids.Headers}}>Hotels</Text>
          <View style={styles.hairline} />
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Search Hotels</Text>
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Review/Cancel Hotel Reservation</Text>
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Customer Support</Text>
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Careers</Text>
        </View>
        <View style={styles.SmarterContainer}>
          <Text style={styles.Headers} dataSet={{media: ids.Headers}}>SmarterTravel</Text>
          <View style={styles.hairline} />
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>About Us</Text>
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Press & Media</Text>
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Privacy Policy</Text>
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Terms and Conditions</Text>
          <Text style={styles.Fields} dataSet={{media: ids.Fields}}>Careers</Text>
        </View>
        <View style={styles.FindUsContainer} dataSet={{media:ids.FindUsContainer}}>
          <Text style={styles.Headers} dataSet={{media: ids.Headers}}>Find Us On Social Media</Text>
          <View style={styles.hairlineOne} />
          <View style={styles.FindUsContainerInner} dataSet={{media: ids.FindUsContainerInner}}>
            <Text style={styles.FieldsFindUsFirst} dataSet={{media: ids.FieldsFindUsFirst}}>
             <SideBarIcon/>
            </Text>
            <Text style={styles.FieldsFindUs} dataSet={{media: ids.FieldsFindUs}}>
              <InstaIcon/>
            </Text>
            <Text style={styles.FieldsFindUs} dataSet={{media: ids.FieldsFindUs}}>
             <FacebookIcon/>
            </Text>
            <Text style={styles.FieldsFindUs} dataSet={{media: ids.FieldsFindUs}}>
              <LinkedInIcon/>
            </Text>
            <Text style={styles.FieldsFindUs} dataSet={{media: ids.FieldsFindUs}}>
              <TwitterIcon/>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.SubContainerTwo}>
        <View style={styles.SubContainerTwoInner} dataSet={{media: ids.SubContainerTwoInner}}>
          <Text>
            <SmarterTravelSmall/>
          </Text>
          <Text style={styles.Copyrights}>
            2023 hotels.techspian.com All right reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

const {ids,styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '100vw',
        // marginTop:'10vh'
      },
      SubContainerOne: {
        width: '100vw',
        backgroundColor: '#5D6771',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: '6%',
        paddingVertical: '2%',
      },
      HotelContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 4,
        '@media (max-width: 1000px)': {

        },
        '@media (max-width: 700px)': {

        },
        '@media (max-width: 430px)': {

        },
      },
      SmarterContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 6,
      },
      FindUsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
        '@media (max-width: 1000px)': {
          transform:[{translate:'-10vw'}]
        },
      },
      FindUsContainerInner: {
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 500px)': {
          flexDirection: 'column'
        },
      },
      Headers: {
        fontFamily: 'roboto',
        fontWeight: '500',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: '0.5vh',
        '@media (max-width: 1000px)': {
          fontSize: 22,
        },
        '@media (max-width: 550px)': {
          fontSize: 18,
        },
        
      },
      Fields: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: '3vh',
        '@media (max-width: 700px)': {
          fontSize: 14,
        },
        '@media (max-width: 430px)': {
          fontSize: 12,
        },
      },
      FieldsFindUsFirst: {
        fontFamily: 'roboto',
        '@media (max-width: 500px)': {
          display:'none'
        },
      },
      FieldsFindUs: {
        // fontFamily: 'roboto',
        // fontSize: 22,
        // color: '#FFFFFF',
        // marginLeft: '1vw',
        // borderColor: '#FFFFFF',
        // borderStyle: 'solid',
        // borderWidth: 1,
        // paddingHorizontal: 3,
        // borderRadius: 6,
        marginLeft:16,
        '@media (max-width: 700px)': {
          transform:[{scale:0.8}],
          marginLeft:6,
        },

      },
      hairline: {
        backgroundColor: '#FFFFFF',
        width: '30%',
        marginTop: '13px',
        height: 1,
        marginVertical: '2.5vh',
        opacity: 0.6,
      },
      hairlineOne: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: '13px',
        height: 1,
        marginVertical: '2.5vh',
        opacity: 0.6,
      },

      SubContainerTwo: {
        paddingVertical: 6,
        width: '100vw',
        backgroundColor: '#FFFFFF',
      },
      SubContainerTwoInner: {
        marginHorizontal: 'auto',
        '@media (max-width: 550px)': {
          transform:[{scale:0.8}]
        },
      },
      SmarterContent: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: '#5D6771',
        letterSpacing: 1,
      },
      TravelContent: {
        fontFamily: 'sans-serif',
        marginLeft: 1,
        fontSize: 20,
        color: '#0B8ABB',
        letterSpacing: 1,
      },
      Copyrights: {
        fontFamily: 'roboto',
        fontSize: 12,
        color: '#91A2A9',
        transform: [{translateX: -24}],
      },
    },
  }),
});

export default Footer;
