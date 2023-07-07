import React, { FC } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NearByLocationIcon, VectorIcon } from "../../assets/icons/IconsSvg";


const NearByCardMobile: FC = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.nearText}>
                    What’s near by
                </Text>
            </View>
            <View style={styles.container}>
                <NearByLocationIcon />
                <Text style={styles.mainText}>
                    City Square Mall
                </Text>
                <Text style={styles.KmText}>1 Km <VectorIcon /></Text>
            </View>
            <View style={styles.container}>
                <NearByLocationIcon />
                <Text style={styles.mainText}>Orchard Road </Text>
                <Text style={styles.KmText}>810 m <VectorIcon /></Text>
            </View>
            <View style={styles.container}>
                <NearByLocationIcon />
                <Text style={styles.mainText}>Singapore Management University</Text>
                <Text style={styles.KmText}>2 Km <VectorIcon /></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ...Platform.select({
        web: {
            mainContainer: {
                height: "45vh",
                width: "90vw",
                backgroundColor: "#FFFFFF",
                // backgroundColor: "pink",
                shadowColor: '#ccc',
                borderRadius: 2,
                shadowRadius: 5,
                marginRight: '1vw',
                marginTop: 20,
                marginLeft: '5vw',
            },
            nearText: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 14,
                marginTop: 18,
                marginLeft: 10,
            },
            subContainer: {
                flexDirection: 'row',
            },
            container: {
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 10,
            },
            KmText: {
                marginLeft: "70%",
                flexDirection: 'row'
            },
            mainText: {
                fontFamily: "Roboto",
                color: "#000000",
                fontStyle: "normal",
                fontSize: 14,
                fontWeight: "400",
                marginLeft: 10
            },
        }
    })
})
export default NearByCardMobile;