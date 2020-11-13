import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MyPhoto } from '../../atoms'

const FriendsList = () => {
    return (
        <View style={styles.wrapper} >
            <MyPhoto width={60} height={60} border={3}/>
            <View style={styles.nameWrapper}>
                <Text>Indrawan Lisanto</Text>
                <Text>21 Yo</Text>
            </View>
        </View>
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
    }
})
