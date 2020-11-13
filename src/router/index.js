import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { 
    GetStarted,
    OnBoard,
    Profile,
    FriendList,
    EditProfile,
    AddFriend,
    DetailFriend,
    Menu,About
 } from "../pages";


const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="About">
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name="OnBoard" component={OnBoard} options={{headerShown: false}} />
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            <Stack.Screen name="FriendList" component={FriendList} options={{headerShown: false}} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
            <Stack.Screen name="AddFriend" component={AddFriend} options={{headerShown: false}} />
            <Stack.Screen name="DetailFriend" component={DetailFriend} options={{headerShown: false}} />
            <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
            <Stack.Screen name="About" component={About} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router