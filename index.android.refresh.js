/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  TouchableHighLight,
  Alert,
  ScrollView,
  Dimensions,
  InteractionManager
}from 'react-native';
//只支持ios不支持android
import PullRefreshScrollView from'react-native-pullrefresh-scrollview'


export default class PullToRefreshDemo extends Component{
  constructor(props){
    super(props);
    //定义一个数据源
    var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state={
      dataSource:ds.cloneWithRows(['有种你滑我啊', '有种你滑我啊', '有种你滑我啊', 
            '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊',
             '有种你滑我啊', '有种你滑我啊']),
    }
  }
  //刷新操作
  onRefresh(PullRefresh){

    console.log('refresh');
    setTimeout(function(){
      PullRefresh.onRefreshEnd();
    },2000);

  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <ListView
      //指定一个函数，在其中返回一个可以滚动的组件。ListView将会在该组件内部进行渲染
      renderScrollComponent={(props)=>
        <PullRefreshScrollView 
        onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)}{...props}/>}
        dataSource={this.state.dataSource}
        //下面每一行都有一条线，除了最后一行和最上面
        renderSeparator={(sectionID,rowID)=><View key={'${sectionID}-${rowID}'} style={styles.separator}/>}
       //数据源(Data source)中接受一条数据，以及它和它所在section的I进行渲染
        renderRow={(rowData) => <View style={styles.rowItem}><Text style={{fontSize:16}}>{rowData}</Text></View>}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        height:64,
        backgroundColor: '#293447',
    },
    rowItem:{
        flex:1,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
      },
});



AppRegistry.registerComponent('PullToRefreshDemo', () => PullToRefreshDemo);
