import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Default } from '../../../assets'

const MyPhoto = ({width, height, border}) => {
    return (
        <Image source={Default} style={styles.avatar(width, height, border)} />
    )
}

export default MyPhoto

const styles = StyleSheet.create({
    avatar : (width, height, border) => ({
        width : width,
        height : height,
        borderWidth : border,
        borderRadius: width / 2,
        borderColor : "#6C63FF",
    })

})
