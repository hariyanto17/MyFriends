import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICBack } from '../../../assets'

const Header = ({title}) => {
    return (
        <View>
            <ICBack style={styles.icon}/>
            <View style={styles.wrapper}>
            <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
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
