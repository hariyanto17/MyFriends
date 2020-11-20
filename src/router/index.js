import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { 
    GetStarted,
    OnBoard,
    Dasboard,
    FriendList,
    EditProfile,
    AddFriend,
    DetailFriend,
    Menu,
    About,
    UpdateFriend
 } from "../pages";


const Stack = createStackNavigator();

const Router = () => {

    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name="OnBoard" component={OnBoard} options={{headerShown: false}} />
            <Stack.Screen name="Dasboard" component={Dasboard} options={{headerShown: false}} />
            <Stack.Screen name="FriendList" component={FriendList} options={{headerShown: false}} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
            <Stack.Screen name="AddFriend" component={AddFriend} options={{headerShown: false}} />
            <Stack.Screen name="DetailFriend" component={DetailFriend} options={{headerShown: false}} />
            <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
            <Stack.Screen name="About" component={About} options={{headerShown: false}} />
            <Stack.Screen name="UpdateFriend" component={UpdateFriend} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router