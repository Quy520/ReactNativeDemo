/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Swiper from 'react-native-swiper';

import {
    AppRegistry,
    StyleSheet,
  	Text,
  	View,
  	Image,
} from 'react-native';
 var PullToRefreshDemo=React.createClass({
    render:function(){
        return(
           <Swiper style={styles.wrapper} 
			showButtons={true} 
			loop={true}
			autoplay={false} 		
			showsPagination={true}>           
             <View style={styles.slide}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>And simple</Text>
        </View>
            </Swiper>
        )
    }
});
var styles=StyleSheet.create({
    //container的属性
    container:{
       backgroundColor:'#CCCCCC',//白色
    	flex:1,
    },
    //slider的属性
    wrapper:{
         flex:1,
    },
    slide:{
        flex:1,
         justifyContent: 'center',
    alignItems:'center',
        resizeMode:Image.resizeMode.contain,
    },
  text: {
    color: '#CCC',
    fontSize: 30,
  
    fontWeight: 'bold',
  }

});
AppRegistry.registerComponent('PullToRefreshDemo', () => PullToRefreshDemo);
