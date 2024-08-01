import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Diseño6 = () => {    
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
        //flexDirection: 'row',  //Direccionar los elementos
        //justifyContent: 'space-between',  //Justificar el contenido
        //alignItems: 'space-between',  //Alinear los elementos
        //flexWrap: 'wrap'
    },
    box1: {
        height: 900,
        //width: 100,
        padding:20,
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#843eff',
        //alignSelf: 'flex-start' 
    },
    box2: {
        height: 900,
        //width: 100,
        padding:20,
        flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#b2a200',
        //alignSelf: 'center'

    },
    box3: {
        height: 900,
        //width: 100,
        padding:20,
        flex: 4 ,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#00f7ff',
        //alignSelf: 'flex-end' 
    }
})

export default Diseño6
