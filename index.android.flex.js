/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//先把要用到的属性定义好，后面调用
var BoxStyles = StyleSheet.create({
    "height50": {
        height : 80,//宽度
    },

    "height400": {
        height : 340,//长度
    },

    "width400" : {
        width : 340,
    },

    "bgred" : {
        backgroundColor : "#6AC5AC",//背景色淡绿色
    },

    "box" : {
        flexDirection : "column",
        flex: 1,
        position : "relative",
    },

    "centerView" : {
        flexDirection: "row",
        flex : 1,
        justifyContent : "space-between",
    },

    "label" : {
        top: 0,
        left: 150,
        paddingTop : 0,
        paddingRight: 2,
        paddingBottom : 2,
        position : "absolute",
        alignItems:"center",
        backgroundColor : "#FDC72F",//小图标黄色
    },

    "top" : {
        justifyContent : "center",
        alignItems : "center",
    },

    "bottom" : {
        justifyContent: "center",
        alignItems : "center",
    },

    "right" : {
        justifyContent:"space-around",
        width : 50,
        alignItems : "center",
    },

    "left" : {
        justifyContent: "space-around",
        width: 50,
        alignItems: "center",
    },

    "margginBox" : {//在整个页面的位置分布
        "position" : "absolute",
        "top" : 50,
        "paddingLeft" : 10,
        "paddingRight" : 10,

    },
})

var Box = React.createClass({
    render:function(){
        return(
        <View style = {[BoxStyles.box,BoxStyles[this.props.width],BoxStyles[this.props.height]]}>

            <View style = {[BoxStyles.top,BoxStyles.height50,BoxStyles[this.props.classBg]]}>
                <Text>top</Text>
            </View>

        <View style={[BoxStyles[this.props.childName]]}>
            <View style={[BoxStyles.left,BoxStyles[this.props.classBg]]}>
                <Text>left</Text>
            </View>
            <View style={[BoxStyles.right,BoxStyles[this.props.classBg]]}>
                <Text>right</Text>
            </View>
        </View>

        <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles[this.props.classBg]]}>
            <Text>bottom</Text>
        </View>

        <View style={[BoxStyles.label]}>
            <Text>{this.props.boxName}</Text>
        </View>
   </View>
    )
  }

})
var MargginBox = React.createClass({
    render : function(){
        return (
        <View style={[BoxStyles.margginBox]}>
            <Box childName="centerView" height="height400" width="width400" boxName="作者小德" classBg="bgred">
                {this.props.children}
            </Box>
        </View>
        )
    }

})

var MyProject = React.createClass({
  render: function() {
    return (
        <MargginBox></MargginBox>
    )}
})



AppRegistry.registerComponent('MyProject', () => MyProject);
