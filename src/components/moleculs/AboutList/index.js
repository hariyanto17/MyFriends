import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutList = ({head, content}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.head} >{head}</Text>
            <Text style={styles.content} >{content}</Text>
        </View>
    )
}

export default AboutList

const styles = StyleSheet.create({
    wrapper : {
        height : 80,
        paddingVertical : 15,
        justifyContent : "space-between",
        paddingLeft : 24

    },
    head : {
        fontFamily : "Quicksand-Medium",
        fontSize : 14,
        lineHeight : 17,
        color : "#3D3F56"

    },
    content : {
        fontFamily : "Quicksand-Bold",
        fontSize : 18,
        lineHeight : 22,
        color : "#3D3F56"
    }
})
