import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, MyPhoto } from '../../components'

const EditProfile = ({navigation}) => {
    return (
        <>
            <Header title="Profile"/>
            <View style={styles.page}>
                <MyPhoto width={150} height={150} border={10}/>
                <Gap height={60} />
                <Input placeholder="Full Name"/>
                <Gap height={24} />
                <Button title="Update" onPress={()=> navigation.navigate('Profile')}/>
            </View>
        </>
    )
}

export default EditProfile

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
