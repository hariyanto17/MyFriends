import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { useSelector } from 'react-redux';
import { Button, Gap, Header, Input } from '../../components'
import { Fire } from '../../config';
import { useForm } from '../../utils';

const UpdateFriends = ({navigation, route}) => {
    const data = route.params;

    const [photoForDB, setPhotoForDB] = useState(data.data.friendImage);
    const [photo, setPhoto] = useState({uri : data.data.friendImage});
    const [form, setForm] = useForm({
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        age : data.data.age
    })

    const user = useSelector(state => state.user.id)

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

    const onButtonUpdate = () => {
        const dataForUpdate = {
            firstName : form.firstName,
            lastName : form.lastName,
            age : form.age,
            friendImage : photoForDB
        };
        console.log('data', data.id)        
        Fire.database()
         .ref(`myFriends/${user}/${data.id}`)
         .update(dataForUpdate)
         .then(() => {
             navigation.navigate('FriendList')
         })
    }

    return (
        <>
            <Header 
             title="Update"
             styles={styles.header}
             onPress={() => navigation.navigate('FriendList')}/>
            <Gap height={42}/>
            <View style={styles.page}>
                <TouchableOpacity onPress={getImage}>
                    <Image source={photo} style={styles.avatar}/>
                </TouchableOpacity>
                <Gap height={42}/>
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
                <Button title="Update" onPress={onButtonUpdate}/>
            </View>
        </>
    )
}

export default UpdateFriends

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
    },
    avatar : {
        width : 150,
        height : 150,
        borderWidth : 10,
        borderRadius: 150 / 2,
        borderColor : "#6C63FF",
    }
})
