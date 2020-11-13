import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap } from "../../components";
import { ILGetStarted } from "../../assets";

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
        <View style={styles.textWrapper} >
          <Text style={styles.text}>Create Your Virtual Friend</Text>
        </View>
        <Gap height={42} />
        <ILGetStarted/>
        <Gap height={52} />
        <Button title="Get Started" onPress={()=> navigation.navigate('OnBoard')} />
      </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    wrapper : {
      backgroundColor : '#E5E5E5',
      display : "flex",
      flex : 1,
      alignItems:"center",
      justifyContent: "center"
    },
    textWrapper : {
      width: 210,
    },
    text : {
      fontFamily : "Quicksand-Bold",
      fontStyle: "normal",
      fontSize: 32,
      lineHeight : 40,
      textAlign : "center",
    },
  })