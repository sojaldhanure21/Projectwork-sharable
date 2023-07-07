import React, { FC } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Rating } from 'react-simple-star-rating';
import PercentageBarMobile from "./PercentageBarMobile";


const ReviewCardMobile: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer1}>
                <View>
                    <Text style={styles.OverallText}>Overall rating</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '2vh', }}>
                    <Text style={styles.ratingText}> 4.4</Text>
                    <Text style={{ color: '#5D6771', marginTop: 15, marginRight: 10, marginLeft: 5, fontSize: 18, fontWeight: '400', fontFamily: 'Roboto' }}>/5</Text>
                    <Text style={styles.reviewsText}>(123 reviews)</Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <Rating initialValue={4} size={28} allowFraction={true} readonly={true} emptyColor={'#BFBFBF'} fillColor={'#0B8ABB'} />
                </View>
            </View>
            <View style={styles.SubContainer2}>
                <Text style={styles.FeatureReviewText}>Feature review</Text>

                <View style={{ width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <Text style={styles.ServiceText}>Service</Text>
                    <View style={{ width: '80%', right: 0 }}>
                        <PercentageBarMobile
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'60%'}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.ServiceText}>Cleanness</Text>
                    <View style={{ width: '80%', right: 0 }}>
                        <PercentageBarMobile
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'20%'}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.ServiceText}>Friendlyness</Text>
                    <View style={{ width: '80%', right: 0 }}>
                        <PercentageBarMobile
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'90%'}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.ServiceText}>Support</Text>
                    <View style={{ width: '80%', right: 0 }}>
                        <PercentageBarMobile
                            height={10}
                            backgroundColor={'#DDEFF5'}
                            completedColor={'#0F6F95'}
                            percentage={'11%'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ...Platform.select({
        web: {
            container: {
                flexDirection: 'column',
            },
            subContainer1: {
                marginTop: 15,
                height: "33vh",
                width: "80vw",
                marginLeft: 40,
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: 'white',
                top: 10,
                marginRight: 30,
              
            },
            SubContainer2: {
                height: '45vh',
                width: '90vw',
                borderRadius: 4,
                marginTop: 20,
                marginLeft: 20,
                backgroundColor: 'white',
              
            },
            OverallText: {
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: 20,
                marginTop: '2vh',
            },
            ratingText: {
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: 28,
                marginTop:5,
            },
            reviewsText: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: 18,
                color: "#5D6771",
                marginTop: 15,
            },
            FeatureReviewText: {
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: 18,
                color: '#222222',
                marginTop: 10,
                marginBottom: 10
            },
            ServiceText: {
                marginTop: 10,
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: 14,
                color: "#5D6771",
                width: '20%',
            },
        }
    })
})
export default ReviewCardMobile;