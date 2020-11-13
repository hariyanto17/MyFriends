import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Header, MenuList } from '../../components'

const Menu = () => {
    return (
        <View>
            <Header title="Menu" />
            <Gap height={8}/>
            <MenuList title="Edit Profile"/>
            <MenuList title="About"/>
            <MenuList title= "Logout"/>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})
