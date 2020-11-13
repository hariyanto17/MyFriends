import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AboutList, Gap, Header } from '../../components'

const About = () => {
    return (
        <View>
            <Header title="About" />
            <Gap height={8}/>
            <AboutList head="App Name" content="Create Your Friend"/>
            <AboutList head="Author" content="Hariyanto"/>
            <AboutList head="Version" content="1.0.0"/>
        </View>
    )
}

export default About
