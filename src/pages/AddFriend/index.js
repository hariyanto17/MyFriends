import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Header, Input, MyPhoto } from '../../components'
import ImagePicker from 'react-native-image-picker'
import { Default } from '../../assets'
import { Fire } from '../../config'
import { getData, useForm } from '../../utils'

const EditProfile = ({navigation}) => {

    const [myId, setMyId] = useState('')
    const [photoForDB, setPhotoForDB] = useState('');
    const [photo, setPhoto] = useState(Default);
    const [form, setForm] = useForm({
        firstName:'',
        lastName:'',
        age:''
    })
    
    useEffect(() => {
        getData('user').then(res=>{
            setMyId(res.id)
        })
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
                setPhoto(source);
              }
            },
          );
    }

    const onButtonSave = () => {
        const data = {
            firstName : form.firstName,
            lastName : form.lastName,
            age : form.age,
            friendImage : photoForDB
        };
        Fire.database().ref(`myFriends/${myId}`).push(data);
        navigation.navigate('FriendList')
    }

    return (
        <>
            <Header
             title="Your Friends"
             style={styles.header}
             onPress={() => navigation.navigate('Dasboard')}/>
            <View style={styles.page}>
            <Gap height={42} /> 
                <TouchableOpacity onPress={getImage}>
                    <Image source={photo} style={styles.avatar} />
                </TouchableOpacity>
                <Gap height={42} />
                <Input 
                 value={form.firstName}
                 onChangeText={(v) => setForm('firstName', v)}
                 placeholder="First Name"/>
                <Gap height={24} />
                <Input
                 value={form.lastName}
                 onChangeText={(v) => setForm('lastName', v)}
                 placeholder="Last Name"/>
                <Gap height={24} />
                <Input 
                 value={form.age}
                 onChangeText={(v) => setForm('age', v)}
                 placeholder="Age"/>
                <Gap height={42} />
                <Button title="Save" onPress={onButtonSave}/>
            </View>
        </>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    page : {
        backgroundColor : '#FFF',
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
    },
    avatar : {
        width : 150,
        height : 150,
        borderWidth : 10,
        borderRadius: 150 / 2,
        borderColor : "#6C63FF",
    }
})
