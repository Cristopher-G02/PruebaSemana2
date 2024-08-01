import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Diseño3 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: 400,
        marginTop: 50,
        backgroundColor: '#0042ff',
        //flexDirection: 'flex-start',  //Direccionar los elementos
        justifyContent: 'center',  //Justificar el contenido
        //alignItems: '',  //Alinear los elementos
        //flexWrap: 'wrap'
    },
    box1: {
        height: 100,
        width: 100,
        //flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#843eff',
        alignSelf: 'flex-end' 
    },
    box2: {
        height: 100,
        width: 100,
        //flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#b2a200',
        //alignSelf: ''

    },
    box3: {
        height: 100,
        width: 100,
        //flex: 3 ,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#00f7ff',
        alignSelf: 'center' 
    }
})

export default Diseño3
