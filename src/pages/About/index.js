import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AboutList, Gap, Header } from '../../components'

const About = ({navigation}) => {
    return (
        <View style={styles.wrapper} >
            <Header title="About" onPress={() => navigation.navigate('Menu')} />
            <Gap height={8}/>
            <AboutList head="App Name" content="Create Your Friend"/>
            <AboutList head="Author" content="Hariyanto"/>
            <AboutList head="Version" content="1.0.0"/>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        backgroundColor : '#FFF'
    },

})