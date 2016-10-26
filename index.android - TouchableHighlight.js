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
  	Text,
  	View,
  	ScrollView
} from 'react-native';

class PullToRefreshDemo extends Component{
    render(){
        return(
        
              <View style={styles.flex} >
              <TouchableHighlight onPress={this.show.bind(this,'汉语的你好')} underlayColor='#cccccc'>
                    <Text style={styles.list_item} > 你好！</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.show.bind(this,'英语的你好')} underlayColor='#ff0000'>
                    <Text style={styles.list_item} > helleo！</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.show.bind(this,'泰语的你好')} underlayColor='#ffcc00'>
                    <Text style={styles.list_item} > 萨瓦迪卡！</Text>
              </TouchableHighlight>
            </View>
           
        );
    }
    show(txt){
    alert(txt);
}

}


var styles=StyleSheet.create({
    //container的属性
    flex:{
      // backgroundColor:'#CCCCCC',//白色
    	flex:1,
    },
   
  list_item: {
    color: '#f00',

    alignItems:'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  }

});
AppRegistry.registerComponent('PullToRefreshDemo', () => PullToRefreshDemo);
