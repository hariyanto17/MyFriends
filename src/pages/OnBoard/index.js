import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input, MyPhoto } from '../../components'

const OnBoard = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Text style={styles.text}>Set Your Personalize</Text>
            <Gap height={35} />
            <MyPhoto width={150} height={150} border={10}/>
            <Gap height={60} />
            <Input placeholder="Full Name"/>
            <Gap height={24} />
            <Button title="Continue" onPress={()=> navigation.navigate('Profile')}/>
        </View>
    )
}

export default OnBoard

const styles = StyleSheet.create({
    page : {
        display : "flex",
        flex : 1,
        justifyContent : "center",
        alignItems :"center",
    },
    text : {
        fontFamily : "Quicksand-Bold",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight : 22,
        textAlign : "center",
    }
})
