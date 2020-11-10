import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { GetStarted } from "../pages";


const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router