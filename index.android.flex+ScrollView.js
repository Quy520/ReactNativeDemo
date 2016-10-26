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
  	TouchableHighlight,
    ScrollView
} from 'react-native';
//title图片滚动地址
var Imgs = [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];
//四张box的图片
var Icon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];
//底部图片
var Images = [
	'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
	'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var Imgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];
var Slider=React.createClass({
    render:function(){
        return(
            <Swiper style={styles.wrapper} showButtons={false} autoplay={true} height={150} showsPagination={false}>
           <Image style={[styles.slide,]} source={{uri: Imgs[0]}}></Image>
	        <Image style={[styles.slide,]} source={{uri: Imgs[1]}}></Image>
	        <Image style={[styles.slide,]} source={{uri: Imgs[2]}}></Image>
            </Swiper>
        )
    }
});
var MyProject=React.createClass({
    render:function(){
        return(
            <ScrollView> 
           
      <View style={styles.container}>
        <Slider/>
        
        <View style={[styles.sbu_red, styles.sbu_view]}>
        	<TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>

	        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
               
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Text style={[styles.font16]}>酒店</Text> 
	        		</View>
                
	        		<View style={[styles.sub_con_flex]}>
	        			<Image style={[styles.sbu_icon_img]} source={{uri:Icon[0]}}></Image>
	        		</View>

	        	</View>

	        </TouchableHighlight>

        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>海外</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>周边</Text>
        		</View>

        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>团购.特惠</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>客栈.公寓</Text>
        		</View>
        	</View>
        </View>

         <View style={[styles.sbu_yellow, styles.sbu_view,styles.sbu_borderRight]}>

        

	        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
               
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Text style={[styles.font16]}>机票</Text> 
	        		</View>
                
	        		<View style={[styles.sub_con_flex]}>
	        			<Image style={[styles.sbu_icon_img]} source={{uri:Icon[1]}}></Image>
	        		</View>

	        	</View>

	      
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>火车票</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>接收机</Text>
        		</View>

        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>汽车票</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>自驾.专车</Text>
        		</View>
        	</View>
        </View>

         <View style={[styles.sbu_blue, styles.sbu_view,styles.sbu_borderRight]}>

	        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
               
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Text style={[styles.font16]}>旅游</Text> 
	        		</View>
                
	        		<View style={[styles.sub_con_flex]}>
	        			<Image style={[styles.sbu_icon_img]} source={{uri:Icon[2]}}></Image>
	        		</View>

	        	</View>


        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>门票.玩乐</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>出境WIFI</Text>
        		</View>

        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>邮轮</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>签证</Text>
        		</View>
        	</View>
        </View>

         <View style={[styles.sbu_green, styles.sbu_view,styles.sbu_borderRight]}>
        	

	        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
               
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Text style={[styles.font16]}>攻略</Text> 
	        		</View>
                
	        		<View style={[styles.sub_con_flex]}>
	        			<Image style={[styles.sbu_icon_img]} source={{uri:Icon[3]}}></Image>
	        		</View>

	        	</View>

	       

        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>周末游</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>礼品卡</Text>
        		</View>

        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>没事.购物</Text>
        		</View>

        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>更多</Text>
        		</View>
        	</View>
        </View>

        <View style={[styles.img_view]}>
            <View style={[styles.img_flex,{borderRightWidth:0}]}>
             <Image style={[styles.img_wh]} source={{uri:Images[0]}}></Image>
            </View>
            <View style={[styles.img_flex,{borderRightWidth:0}]}>
             <Image style={[styles.img_wh]} source={{uri:Images[1]}}></Image>
            </View>
        
        
        </View>
        </View>
      
        </ScrollView>
        
        );
    }    
    
});

var styles=StyleSheet.create({
    //container的属性
    container:{
       backgroundColor:'#F2F2F2',//白色
    	flex:1,
    },
    //slider的属性
    wrapper:{
        height:100,
    },
    slide:{
        height:80,
        resizeMode:Image.resizeMode.contain,
    },
    //带圆角的box
    sbu_view:{
        height:90,
  		marginLeft: 5,
  		marginRight:5,
  		borderWidth:2,
  		borderRadius:5,
  		marginBottom:5,
  		flexDirection:'row',
    },

    sbu_red:{
  		backgroundColor: '#FA6778',
  		borderColor:'#FA6778',//粉红色
  		marginTop:-70,
  	},

  	sbu_blue:{
  		backgroundColor: '#3D98FF',
  		borderColor:'#3D98FF',//蓝色
  	},

  	sbu_green:{
  		backgroundColor: '#5EBE00',
  		borderColor:'#5EBE00',
  	},

  	sbu_yellow:{
  		backgroundColor: '#FC9720',
  		borderColor:'#FC9720',
  	},

sbu_flex:{
  		flex:1,
  	},
  	sbu_borderRight:{
  		borderColor:'#fff',
  		borderRightWidth: 0.5,//box的边缘线
  	},
  	sbu_icon_img:{
  		height:40,
  		width:40,
  		resizeMode:Image.resizeMode.contain,//:图片拉伸  充满空间
  	},

  	sub_con_flex:{
  		flex:1,
  		justifyContent: 'center',
  		alignItems: 'center',
  	},

  	sub_text:{
  		justifyContent:'center',
  	},

  	font16:{
  		fontSize:17,
  		color:'#FFF',
  		fontWeight:'900',//字体的粗细
  	},

  	sbu_borderBottom:{
  		borderBottomWidth:0.5,
  		borderBottomColor:'#fff',
  	},
      
  	img_view:{
  		height:65,
  		marginLeft:5,
  		marginRight:5,
  		flexDirection: 'row',
        marginBottom:20,
        backgroundColor:'#fff',
  	},
  	img_flex:{
  		flex:1,
          	height:65,
  		borderWidth:1,
  		borderColor:'#ccc',
  	},
      img_wh:{
          height:65,
          borderRightWidth:0,
          resizeMode:Image.resizeMode.contain,
      }

});

AppRegistry.registerComponent('MyProject', () => MyProject);
