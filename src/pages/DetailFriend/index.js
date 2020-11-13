import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomNav, MyPhoto, Header, Gap } from '../../components'

const DetailFriend = () => {
    return (
        <>
            <Header title="Detail" style={styles.header}/>
            <View style={styles.wrapper}>
                <View>
                    <MyPhoto width={150} height={150} border={10}/>
                    <View style={styles.textWrapper}>
                        <Gap height={42} />
                        <Text style={styles.name}>Indrawan Lisanto</Text>
                        <Gap height={8} />
                        <Text style={styles.old}>21 Y'o</Text>
                    </View>
                </View>
                <BottomNav left="edit" right="close"/>
            </View>
        </>
    )
}

export default DetailFriend

const styles = StyleSheet.create({
    wrapper : {
        alignItems : "center",
        paddingVertical : 42,
        flex : 1,
        justifyContent : "space-between",

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
    }
})
