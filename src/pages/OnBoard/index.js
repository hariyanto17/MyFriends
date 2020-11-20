import React, {useState} from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { useDispatch } from 'react-redux'
import { Default } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { Fire } from '../../config'
import { storeData } from '../../utils'

const OnBoard = ({navigation}) => {

    const [name, setName] = useState('');
    const [photoForDB, setPhotoForDB] = useState('');
    const [photo, setPhoto] = useState(Default);
    const dispatch = useDispatch()

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

    const onButtonPress = () => {
        const data = {
            username: name,
            photo : photoForDB,
            id : Date.now()
        }
        Fire.database().ref(`users/${data.id}`).set(data);
        storeData('user', data)
        dispatch({ type: 'SET_USER', value : data })
        navigation.navigate('Dasboard')
    }


    return (
        <View style={styles.page}>
            <Text style={styles.text}>Set Your Personalize</Text>
            <Gap height={35} />
            <TouchableOpacity onPress={getImage}>
                <Image source={photo} style={styles.avatar} />
            </TouchableOpacity>
            <Gap height={60} />
            <Input placeholder="Full Name" value={name} onChangeText={value => setName(value)}/>
            <Gap height={24} />
            <Button title="Continue" onPress={onButtonPress}/>
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
    },
    avatar : {
        width : 150,
        height : 150,
        borderWidth : 10,
        borderRadius: 150 / 2,
        borderColor : "#6C63FF",
    }
})
