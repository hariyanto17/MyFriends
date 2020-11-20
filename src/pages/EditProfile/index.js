import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { Default } from '../../assets'
import { Fire } from '../../config'
import { Button, Gap, Header, Input } from '../../components'
import { getData, storeData } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'

const EditProfile = ({navigation}) => {

    const [profile, setprofile] = useState({Default})
    const [photoForDB, setPhotoForDB] = useState({Default})
    const [username, setusername] = useState('')
    const [id, setId] = useState('')
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        setprofile({uri : user.photo})
        setusername(user.username)
        setId(user.id)
    }, [])

    const getImage = () => {
        ImagePicker.launchImageLibrary(
            {quality: 0.5, maxWidth: 200, maxHeight: 200},
            response => {
              if (response.didCancel || response.error) {
                // show popUp if user cancell imagePicker
              } else {
                const source = {uri: response.uri};
                setPhotoForDB(`data:${response.type};base64, ${response.data}`);
                setprofile(source);
              }
            },
          );
    }

    const Update = () => {
        const data = {
            username : username,
            photo : photoForDB,
            id:id
        }
        dispatch({ type: 'SET_USER', value : data })
        Fire.database()
        .ref(`users/${id}/`)
        .update(data)
        .then(() => {
            storeData('user', data)
            .then(() => {
                navigation.navigate('Dasboard');
              })
         })
         .catch(e => {
            // pop up error
         })
    }

    return (
        <>
            <Header title="Profile" onPress={() => navigation.navigate('Menu')}/>
            <View style={styles.page}>
                <TouchableOpacity onPress={getImage}>
                    <Image source={profile} style={styles.avatar} />  
                </TouchableOpacity>
                <Gap height={60} />
                <Input value={username} onChangeText={v => setusername(v)} placeholder="Full Name"/>
                <Gap height={24} />
                <Button title="Update" onPress={Update}/>
                {/* <Button title="Update" onPress={()=> navigation.navigate('Profile')}/> */}
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
        backgroundColor : '#FFF'
    },
    text : {
        fontFamily : "Quicksand-Bold",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight : 22,
        textAlign : "center",
    },
    avatar : {
        width : 150,
        height : 150,
        borderWidth : 10,
        borderRadius: 150 / 2,
        borderColor : "#6C63FF",
    }
})
