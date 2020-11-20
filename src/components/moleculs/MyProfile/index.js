import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { getData, getTime } from '../../../utils';
import { Default } from '../../../assets';
import { useSelector } from 'react-redux';

const MyProfile = ({onPress, user}) => {

    const [Times, setTimes] = useState('')
    console.log('user props', user)
    
    useEffect(() => {
        const today = new Date();
        const getTimes = getTime(today)
        setTimes(getTimes)
    }, [])

    return (
        <TouchableOpacity style={styles.wrapper}onPress={onPress}>
            <View >
                <Text style={styles.text}>{Times},</Text>
                <Text style={styles.text}>{user.username}</Text>
            </View>
            <Image source={{ uri : user.photo}} style={styles.avatar} />
        </TouchableOpacity>
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
    },
    avatar : {
        width : 75,
        height : 75,
        borderWidth : 3,
        borderRadius: 75 / 2,
        borderColor : "#6C63FF",
    }
})
