import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomNav, FriendsList, Header } from '../../components'

const FriendList = () => {
    return (
        <View style={styles.wrapper} >
            <View>
                <Header title="Frind List"/>
                <FriendsList/>
                <FriendsList/>
                <FriendsList/>
            </View>
            <View style={styles.bottomNav} >
                <BottomNav right="home"/> 
            </View>
        </View>
    )
}

export default FriendList

const styles = StyleSheet.create({
    wrapper : {
        display : "flex",
        marginBottom : 42,
        flex : 1,
        justifyContent : "space-between"

    },
    bottomNav : {
        alignItems : "center"
    }
})
