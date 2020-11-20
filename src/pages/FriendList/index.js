import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { BottomNav, FriendsList, Header } from '../../components'
import { Fire } from '../../config'
import { getData } from '../../utils'

const FriendList = ({navigation}) => {

    const dispatch = useDispatch()
    const [friendList, setFriendList] = useState([]);
    useEffect(() => {
        getData('user').then(res=>{
            Fire.database()
                .ref(`/myFriends/${res.id}`)
                .on('value', snapshot => {
                    if (snapshot.val()) {
                        dispatch({ type: 'SET_LOADING', value : false })
                        const data = [];
                        Object.keys(snapshot.val()).map(key =>{
                            data.push({
                                id : key,
                                data : snapshot.val()[key]
                            })
                        })
                        setFriendList(data)
                    }
            })
        })
    }, [])

    return (
        <View style={styles.wrapper} >
            <View>
                <Header title="Frind List" onPress={()=> navigation.navigate('Dasboard')}/>
                {
                    friendList.length > 0 
                    ? friendList.map(list => {
                        return <FriendsList 
                         key={list.id}
                         list={list}
                         onPress={()=> navigation.navigate('DetailFriend', list)}
                         />
                    })
                    : null
                }
            </View>
            <View style={styles.bottomNav} >
                <BottomNav
                 right="home"
                 leftOnPress={()=> navigation.navigate('AddFriend')}
                 rightOnPress={()=> navigation.navigate('Dasboard')}
                /> 
            </View>
        </View>
    )
}

export default FriendList

const styles = StyleSheet.create({
    wrapper : {
        display : "flex",
        marginBottom : 42,
        flex : 1,
        justifyContent : "space-between",
        backgroundColor : '#FFF'

    },
    bottomNav : {
        alignItems : "center"
    }
})
