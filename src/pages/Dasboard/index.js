import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BottomNav, Gap, MyProfile } from '../../components'


const Dasboard = ({navigation}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const friendList = () => {
        dispatch({ type: 'SET_LOADING', value : true })
        navigation.navigate('FriendList')
    }

    return (
        <View style={styles.wrapper}>
            <View>
                <MyProfile onPress={()=> navigation.navigate('Menu')} user={user} />
                <Gap height={53}/>
                <View style={styles.boxWrapper}>
                    <View style={styles.box("#6C63FF")}></View>
                    <View style={styles.box("#FF6584")}></View>
                    <View style={styles.box("#FFB8B8")}></View>
                </View>
                <View style={styles.boxWrapper}>
                    <View style={styles.box("#FF6584")}></View>
                    <View style={styles.box("#6C63FF")}></View>
                </View>
            </View>
            <View style={styles.bottomNav}>
                <BottomNav 
                 leftOnPress={()=> navigation.navigate('AddFriend')}
                 rightOnPress={friendList}
                /> 
            </View>
        </View>
    )
}

export default Dasboard

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        display : "flex",
        paddingTop : 53,
        paddingBottom : 42,
        justifyContent : "space-between",
        backgroundColor : '#FFF'
    },
    boxWrapper : {
        height : 125,
        flexDirection : "row"
    },
    box : (color) => ({
        flex : 1 / 3,
        height : 125,
        backgroundColor : color
    }),
    bottomNav : {
        alignItems: 'center',
    }
})
