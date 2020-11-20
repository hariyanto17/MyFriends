import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Gap, Header, MenuList } from '../../components'
import { Fire } from '../../config'
import { clearData } from '../../utils'

const Menu = ({navigation}) => {

    const user = useSelector(state => state.user)

    const logOut = () => {
        clearData().then(() => {
            Fire.database()
            .ref(`users/${user.id}/`)
            .remove()
            .then(() => {
                Fire.database()
                .ref(`myFriends/${user.id}/`)
                .remove()
                .then(() => {
                    navigation.navigate('GetStarted')
                })
            })
        })
    }

    return (
        <View style={styles.page}>
            <Header title="Menu" onPress={() => navigation.navigate('Dasboard')} />
            <Gap height={8}/>
            <MenuList title="Edit Profile"  onPress={() => navigation.navigate('EditProfile')}/>
            <MenuList title="About"  onPress={() => navigation.navigate('About')}/>
            <MenuList title= "Logout" onPress={logOut}/>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    page : {
        backgroundColor : '#FFF',
        flex : 1
    }
})
