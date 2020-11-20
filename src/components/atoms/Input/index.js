import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({value, onChangeText, placeholder}) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    input : {
        backgroundColor : "#FFF",
        borderWidth : 1,
        borderColor : "#E6E6E6",
        paddingVertical: 10,
        textAlign : "center",
        borderRadius : 8,
        width : 291,
        fontFamily : "Quicksand-Bold",
        fontSize : 18,
        lineHeight : 22
    }
})
