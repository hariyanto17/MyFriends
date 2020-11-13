import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ICAddFriend, ICClose, ICContact, ICHome, ICUserEdit } from '../../../assets'

const BottomNav = ({left, right}) => {
    const LeftIcon = () => {
        if (left === "edit"){
            return <ICUserEdit/>
        }
        return <ICAddFriend/>
    }
    const RightIcon = () => {
        if (right === "home"){
            return <ICHome/>
        }
        if (right === "close"){
            return <ICClose/>
        }
        return <ICContact/>
    }
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.iconWrapper}>
                <LeftIcon/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
                <RightIcon/>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    wrapper : {
        flexDirection : "row",
        height : 75,
        width : 291,
        backgroundColor : "#FFF",
        borderWidth : 1,
        borderColor : "#E5E5E5",
        borderRadius : 75, 
    }, 
    iconWrapper : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    }
})
