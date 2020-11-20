import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICArrowRight } from '../../../assets'

const MenuLIst = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.wrapper} >
            <Text style={styles.text}>{title}</Text>
            <ICArrowRight/>
        </TouchableOpacity>
    )
}

export default MenuLIst

const styles = StyleSheet.create({
    wrapper : {
        flexDirection : "row",
        paddingLeft : 24,
        paddingRight : 30,
        height : 80

    },
    text : {
        flex : 1,
        justifyContent : "space-between",
        fontFamily : "Quicksand-Bold",
        fontSize : 18,
        lineHeight : 22,
        justifyContent : "center"
    }
})
