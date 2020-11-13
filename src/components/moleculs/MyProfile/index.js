import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MyPhoto } from '../../atoms'

const MyProfile = () => {
    return (
        <View style={styles.wrapper}>
            <View >
                <Text style={styles.text}>Good Everning,</Text>
                <Text style={styles.text}>Serlina Utami</Text>
            </View>
            <MyPhoto width={75} height={75} border={3}/>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    wrapper : {
        paddingHorizontal : 42,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    },
    text : {
        fontFamily : "Quicksand-Bold",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight : 22,
    }
})
