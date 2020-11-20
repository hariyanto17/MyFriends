import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Button = ({title, onPress, width, background}) => {
    return (
        <TouchableOpacity style={styles.container(width, background)} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (width, background) => ({
        backgroundColor: background ? background : '#6C63FF',
        paddingVertical: 10,
        borderRadius: 8,
        width : width ? width : 291
    }),
    text : {
        fontSize : 18,
        fontFamily : "Quicksand-Bold",
        textAlign : "center",
        color : "#FFF"
    }
})
