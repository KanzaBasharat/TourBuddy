import React from 'react';
import { View,Text,ScrollView,StyleSheet,Image } from 'react-native';


const Kashmir=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/kk1.jpg')} />   
                     <Text style={styles.text1}>Shounter Lake AJK</Text>
                     <Text style={styles.text}>More Details</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/kk2.jpg')} />   
                     <Text style={styles.text1}>Aurang Kel</Text>
                     <Text style={styles.text}>More Details</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/kk3.jpg')} />   
                     <Text style={styles.text1}>Neelum Valley</Text>
                     <Text style={styles.text}>More Details</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/kk4.jpg')} />   
                     <Text style={styles.text1}>Kel Sector</Text>
                     <Text style={styles.text}>More Details</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/kk5.jpg')} />   
                     <Text style={styles.text1}>Mangla Dam</Text>
                     <Text style={styles.text}>More Details</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/kk6.jpg')} />   
                     <Text style={styles.text1}>Ramkot Fort Mirpur</Text>
                     <Text style={styles.text}>More Details</Text>
                </View>
                
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        // backgroundColor:'grey',
       padding:30,
    //    backgroundColor:'yellow'
    backgroundColor:'pink',
    margin:10
    },
    container:{
        padding:10,
        backgroundColor:'black',
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10
    
    },
    inner:{
        flexDirection:'row',
        padding:10,
        margin:10,
        backgroundColor:'pink',
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:10,
        shadowOpacity:0.26,
        elevation:10,
        borderRadius:35
        
    },
    image:{
        width:100,
        height:100
    },
    text:{
        color:'white',
        textTransform:'bold',
        fontSize:20,
        borderRadius:10,
        width:150,
        padding: 5,
        backgroundColor:'purple',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        shadowColor:'black',
        
        
        
    },
    text1:{
        color:'white',
        textTransform:'bold',
        fontSize:20,
        borderRadius:10,
        width:125,
        padding: 5,
        backgroundColor:'purple',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        shadowColor:'black',
        
        
        
    }
    

} );

export default Kashmir;
