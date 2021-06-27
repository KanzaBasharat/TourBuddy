import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const header=props=>{
    return(
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{props.title}</Text>
                    <Text style={styles.headerTitle}>{props.user}</Text>

                </View>

    );
};

const styles=StyleSheet.create({
    header:{
        
        flexDirection:'row',
        width:'100%',
        height:90,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:"space-around",
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:30,
        
        
    },
    headerTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        borderRadius:10,
        
        padding: 5,
        backgroundColor:'purple',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        shadowColor:'black',
        
        
        
    }

});

export default header;