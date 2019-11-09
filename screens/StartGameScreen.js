import React from 'react';
import {View, Text,StyleSheet,TextInput,Button} from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <TextInput/>
                    <View style={styles.buttonContainer} >
                        <Button title="Confirm" onPress={()=>{}} />
                        <Button title="Reset" onPress={()=>{}} />
                    </View>
                </View>
            </Card>
        </View>
    ) 
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        maxWidth:'80%',
        width:300,
        alignItems:'center'
    }
    
});

export default StartGameScreen;