import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { Default } from '../../../assets'

const FriendsList = ({list, onPress}) => {
    const [photo, setPhoto] = useState(Default)
    
    useEffect(() => {
        setPhoto({uri : list.data.friendImage})
    }, [])

    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress} >
            <Image source={photo} style={styles.avatar} />
            <View style={styles.nameWrapper}>
            <Text>{list.data.firstName} {list.data.lastName}</Text>
            <Text>{list.data.age}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FriendsList

const styles = StyleSheet.create({
    wrapper : {
        flexDirection : "row",
        paddingLeft: 24,
        paddingVertical : 10,
        alignItems : "center"
    },
    nameWrapper : {
        marginLeft : 16,
        flex : 1,
    },
    avatar : {
        width : 60,
        height : 60,
        borderWidth : 3,
        borderRadius: 60 / 2,
        borderColor : "#6C63FF",
    }
})
