import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, MyPhoto } from '../../components'

const EditProfile = ({navigation}) => {
    return (
        <>
            <Header title="Your Friends" style={styles.header}/>
            <Gap height={42} /> 
            <View style={styles.page}>
                <MyPhoto width={150} height={150} border={10}/>
                <Gap height={42} />
                <Input placeholder="First Name"/>
                <Gap height={24} />
                <Input placeholder="Last Name"/>
                <Gap height={24} />
                <Input placeholder="Age"/>
                <Gap height={42} />
                <Button title="Save" onPress={()=> navigation.navigate('Profile')}/>
            </View>
        </>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    page : {
        display : "flex",
        flex : 1,
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
