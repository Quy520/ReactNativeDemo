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
}from 'react-native';
//只支持ios不支持android
import ScrollableTabView,{ScrollableTabBar }  from'react-native-scrollable-tab-view'


export default class PullToRefreshDemo extends Component{
 render() {
  return (
  <View    style={{flex:1}}>
    <ScrollableTabView
    //初始化
     initialPage={0}
     //在底部
      tabBarPosition='top'
      //字体选中的颜色
     tabBarActiveTextColor='#9B30FF'
      tabBarInactiveTextColor='#7A67EE'
//TabBar的样式，系统提供了两种默认的，分别是DefaultTabBar和ScrollableTabBa
//可滚动一个不可滚动
      renderTabBar={() => <ScrollableTabBar />}
//被选中的tab
      onChangeTab={(obj)=>{
        alert(obj.i)
      }}
//滑动的触发事件
      // onScroll={(postion)=>{
      //   alert(postion)       
      // }}
      >
      <Text tabLabel='Tab1'>hello</Text>
      <Text tabLabel='Tab2'/>
      <Text tabLabel='Tab3'/>
      <Text tabLabel='Tab4'/>
      <Text tabLabel='Tab5'/>
      <Text tabLabel='Tab6'/>
    </ScrollableTabView>
  </View>
  ); 
}
}
AppRegistry.registerComponent('PullToRefreshDemo', () => PullToRefreshDemo);
