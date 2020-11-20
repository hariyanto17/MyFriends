import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICBack } from '../../../assets'

const Header = ({title, onPress, background}) => {
    return (
        <View style={styles.headerWrapper(background)}>
            <TouchableOpacity style={styles.icon} onPress={onPress}>
                <ICBack />
            </TouchableOpacity>
            <View style={styles.wrapper}>
            <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerWrapper : (modal) => ({
        backgroundColor: modal ? 'rgba(0, 0, 0, 0.5)' : "#FFF"
    }),
    wrapper : {
        height : 64,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
    },
    text : {
        fontFamily : "Quicksand-Bold",
        fontSize : 18,
        lineHeight : 22
    },
    icon : {
        marginTop : 19,
        position : "absolute",
        marginLeft : 24
    },
    
})
