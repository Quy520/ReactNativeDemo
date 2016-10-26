/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'React';
import {
    AppRegistry,
    StyleSheet,
    PixeRatio,
    TouchableHighlight,
    Picker,
  	Text,
  	View,
  	ScrollView
} from 'react-native';

class PullToRefreshDemo extends Component{
    constructor(props){
        super(props)
        this.state={
            language:null
        };

    }
    render(){
        return(
        
              <View style={[styles.flex,{marginTop:25}]}>
              <Text  style={[styles.list_item,{marginLeft:120}]}>Picker组件</Text>
              <Picker
              selectedValue={this.state.language}
              //箭头函数：ES6，单个参数可以不加括号，选择哪个就会被设置
              onValueChange={lang=>this.setState({language:lang})}
              mode='dialog'
              style={{color:'#f00'}}
              >
              <Picker.Item label="java" value="java"/>
              <Picker.Item label="javaScript" value="js"/>
              <Picker.Item label="c语言" value="c"/>
              <Picker.Item label="PHP开发" value="php"/>
              </Picker>
             
              <Text style={ styles.text} >{this.state.language}</Text>
            </View>
           
        );
    }


}


var styles=StyleSheet.create({
    //container的属
    flex:{
      // backgroundColor:'#CCCCCC',//白色
    	flex:1,
    },
    text:{
         color: '#ccc',
         fontWeight: 'bold',
         textAlign:'center',
        


    },
   
  list_item: {
    color: '#f00',
    justifyContent:'center',
    alignItems:'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  }

});
AppRegistry.registerComponent('PullToRefreshDemo', () => PullToRefreshDemo);
