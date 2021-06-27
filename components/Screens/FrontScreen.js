
import React from 'react';
import { StyleSheet, View,Text,Image, ScrollView} from 'react-native';
import Header from '../Header';

import Footer from '../footer';

const Frontscreen=({navigation})=> {
  return (
    <View style={styles.Screen}>
      <Header  title= 'Welcome to Tour Buddy' />
      <ScrollView>
      <View style={styles.main}>
        
        <View style={styles.container}>
        
          <View style={styles.inner} onClick={() => navigation.navigate('Punjab')}>
          
                <Image style={styles.image} source={require('../../assets/lah.jpg')} />
                 <Text style={styles.text1}>Punjab</Text>
                 <Text style={styles.text}>Click here for details</Text>
             

          </View>
          <View style={styles.inner} onClick={() => navigation.navigate('Sindh')}>
                 <Image style={styles.image} source={require('../../assets/Sindh.jpg')} />
                    <Text style={styles.text1}>Sindh</Text>
                 <Text style={styles.text}>Click here for details</Text>

              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('KPK')} >
                 <Image style={styles.image} source={require('../../assets/kpk.jpg')} />
                    <Text style={styles.text1}>KPK</Text>
                 <Text style={styles.text}>Click here for details</Text>

              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('Balochistan')}>
                 <Image style={styles.image} source={require('../../assets/bal.jpg')} />
                    <Text style={styles.text1}>Balochistan</Text>
                 <Text style={styles.text}>Click here for details</Text>
                 
              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('Kashmir')}>
                 <Image style={styles.image} source={require('../../assets/kash.jpg')} />
                    <Text style={styles.text1}>Kashmir</Text>
                 <Text style={styles.text}>Click here for details</Text>
                 
              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('GB')}>
                 <Image style={styles.image} source={require('../../assets/gb.jpg')} />
                    <Text style={styles.text1}>Gilgit Baltistan</Text>
                 <Text style={styles.text}>Click here for details</Text>
                 
              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('ICT')}>
                 <Image style={styles.image} source={require('../../assets/ict.jpg')} />
                    <Text style={styles.text1}>Islamabad</Text>
                 <Text style={styles.text}>Click here for details</Text>
                 
              </View>
              
        </View>
        </View>
        </ScrollView>
      <Footer />
    </View>
  );
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

  
});


export default Frontscreen;