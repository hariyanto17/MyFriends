import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Button = ({type, title}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6C63FF',
        paddingVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 95
    },
    text : {
        fontSize : 18,
        fontFamily : "Quicksand-Bold",
        textAlign : "center",
        color : "#FFF"
    }
})
