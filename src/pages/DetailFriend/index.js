import React, { useState } from 'react'
import { StyleSheet, Text, Image, View, Modal, TouchableHighlight } from 'react-native'
import { useSelector } from 'react-redux'
import { BottomNav, Header, Gap, Button } from '../../components'
import { Fire } from '../../config'

const DetailFriend = ({ navigation, route}) => {
    const dataFriend = route.params
    const [modalVisible, setModalVisible] = useState(false)
    const user = useSelector(state => state.user)

    const sayYes = () => {
        Fire.database()
         .ref(`myFriends/${user.id}/${dataFriend.id}/`)
         .remove()
         .then(() => {
             navigation.navigate('FriendList')
         })
    }

    const sayNo = () => {
        setModalVisible(false)
    }

    return (
        <>
            <Header title="Detail" onPress={()=> navigation.navigate('FriendList')}/>
            <View style={styles.wrapper}>
                <View>
                    <Image source={{uri : dataFriend.data.friendImage}} style={styles.avatar} />
                    <View style={styles.textWrapper}>
                        <Gap height={42} />
                        <Text style={styles.name}>{dataFriend.data.firstName} {dataFriend.data.lastName}</Text>
                        <Gap height={8} />
                        <Text style={styles.old}>{dataFriend.data.age} Y'o</Text>
                    </View>
                </View>
                <BottomNav 
                 leftOnPress={() => navigation.navigate('UpdateFriend', dataFriend)}
                 rightOnPress={() => setModalVisible(true)}
                 left="edit"
                 right="close"/>
            </View>
            {
                modalVisible && (
                    <View style={styles.modalWrapper}>
                        <View style={styles.modal}>
                            <View style={styles.textDeleteWrapper}>
                                <Text 
                                 style={styles.delete}>
                                     Oh no! are you sure want to delete your friend?
                                </Text>
                            </View>
                            <Gap height={44}/>
                            <View style={styles.buttonWrapper} >
                                <Button title="Yes" onPress={sayYes} width={130} />
                                <Gap width={16}/>
                                <Button title="No" width={130} onPress={sayNo} background={'#FF6584'} />
                            </View>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default DetailFriend

const styles = StyleSheet.create({
    wrapper :{
        alignItems : "center",
        paddingVertical : 42,
        flex : 1,
        justifyContent : "space-between",
        backgroundColor: "#FFF"

    },
    textWrapper : {
        alignItems : "center"
    },
    name : {
        fontFamily : "Quicksand-Bold",
        fontStyle: "normal",
        fontSize: 24,
        lineHeight : 30,
    },
    old : {
        fontFamily : "Quicksand-Bold",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight : 22,
        color : 'rgba(63,61,86,0.44)'
    },
    avatar : {
        width : 150,
        height : 150,
        borderWidth : 10,
        borderRadius: 150 / 2,
        borderColor : "#6C63FF",
    },
    modalWrapper : {
        backgroundColor : 'rgba(0, 0, 0, 0.5)' ,
        position : "absolute",
        flex : 1,
        width : '100%',
        height : '100%',
        justifyContent : "flex-end",
    },
    modal : {
        alignItems : "center",
        backgroundColor : "#FFF",
        height : 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop : 32,
    },
    textDeleteWrapper : {
        width : 200
    },
    delete : {
        fontSize : 24,
        lineHeight : 30,
        fontFamily : "Quicksand-Bold",
        textAlign : "center",
    },
    buttonWrapper : {
        justifyContent : "center",
        flexDirection : "row"
    },

})
