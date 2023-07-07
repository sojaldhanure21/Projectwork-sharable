import React, { FC } from "react";
import { Platform, StyleSheet, Text, View, Animated } from "react-native";
import { Rating } from 'react-simple-star-rating';
import { StarIcon, StarIconGrey } from "../../assets/icons/IconsSvg";
import PercentageBar from "./PercentageBar";

const ReviewCard: FC = () => {

    const onSelectSwitch = index => {
        alert('Selected index: ' + index);
    };

    return (
        <View style={styles.Container}>
        <View style={styles.mainContainer}>
            {/* <View style={styles.Container}> */}
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.OverallText}>Overall rating</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '4vh', }}>
                    <Text style={styles.ratingText}>
                        4.4
                    </Text>
                    <Text style={{ color: '#5D6771', marginTop: 20, marginRight: 10, marginLeft: 5, fontSize: 18, fontWeight: '400', fontFamily: 'Roboto' }}>
                        /5
                    </Text>
                    <Text style={styles.reviewsText}>
                        (123 reviews)
                    </Text>
                </View>
                <View style={{marginTop: 4}}>
                    <Rating initialValue={4} size={28} allowFraction={true} readonly={true} emptyColor={'#BFBFBF'} fillColor={'#0B8ABB'} />
                </View>
                {/* <View style={{display:'flex', flexDirection:'row'}}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIconGrey/>
                    <StarIconGrey/>
                    </View> */}
            </View>
            {/* </View> */}
            <View style={styles.FeatureReview}>
                <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 18, color: '#222222', marginTop: 10,marginBottom:10 }}>Feature review</Text>
               
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ marginTop: 10, fontFamily: "Roboto", fontWeight: "500", fontSize: 14, color: "#5D6771" ,width:'20%'}}>Service</Text>
                    <View style={{ width:'80%',right:0}}>
                        <PercentageBar
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'60%'}
                        />
                    </View>
                </View>
       
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 20, marginTop: 10, fontFamily: "Roboto", fontWeight: "500", fontSize: 14, color: "#5D6771", width:'20%' }}>Cleanness</Text>
                    <View style={{  width:'80%'}}>
                        <PercentageBar
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'20%'}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 10, fontFamily: "Roboto", fontWeight: "500", fontSize: 14, color: "#5D6771",width:'20%'  }}>Friendlyness</Text>
                    <View style={{ width:'80%' }}>
                        <PercentageBar
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'90%'}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 20, fontFamily: "Roboto", marginTop: 10, fontWeight: "500", fontSize: 14, color: "#5D6771",width:'20%' }}>Support</Text>
                    <View style={{  width:'80%' }}>
                        <PercentageBar
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'11%'}
                        />
                    </View>
                </View>
            </View>
            {/* </View> */}
        </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    ...Platform.select({
        web: {
            mainContainer: {
                // marginTop: 20,
                flexDirection: 'row',
            },
            Container: {
                // height: "35vh",
                // width: "25vw",
                // borderRadius: 4,
                // backgroundColor: 'white',
                // justifyContent: "center",
                // marginTop: 20,
            },
            subContainer: {
                marginTop: 15,
                height: "35vh",
                width: "20vw",
                alignItems: "center",
                // left: 35,
                borderRadius: 4,
                backgroundColor: 'white',
                top: 10,
                marginRight: 30,
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            OverallText: {
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: 20,
                marginTop: '4vh',
            },
            reviewsText: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: 18,
                color: "#5D6771",
                marginTop: 15,
            },
            ratingText: {
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: 28,
                marginTop: 10,
                '@media (max-width: 1100px)': {
                    fontSize: 28,
                },
                '@media (max-width: 1000px)': {
                    fontSize: 32,
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
            FeatureReview: {
                height: '45vh',
                width: '38.5vw',
                borderRadius: 4,
                marginTop: 20,
                marginLeft: 40,
                // backgroundColor:'white',
            },
            FeatureReviewText: {
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: 14,
                color: "#5D6771"
            },
        }
    })
})
export default ReviewCard;

function alert(arg0: string) {
    throw new Error("Function not implemented.");
}
