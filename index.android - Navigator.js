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
    Navigator,
  	Text,
  	View,
  	ScrollView
} from 'react-native';

class PullToRefreshDemo extends Component{
    render(){
        let defaultName='List';
        let defaultComponent=List;
        return(
            <Navigator 
            initialRoute={{ name: defaultName, component: defaultComponent }} 
             configureScene={
              (route) => { 
                 return Navigator.SceneConfigs.VerticalDownSwipeJump; 
               }	
             }
            renderScene={
                (route, navigator) => {
                let Component = route.component;
             return (
                 //遍历所有的参数作为主界面
                 <Component {...route.params} navigator={navigator} />
            );
                }
             } />

        );
    }

}

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            //传递内容的定义
            id:1,
            user:'Zero',
            time:null
        }
    }

   
    render(){
        if(this.state.time){
            return(
                <View>
                <Text style={styles.list_item}>用户信息：{JSON.stringify(this.state.time)}</Text>
                </View>
            );
        }else{
             return(
            <ScrollView style={styles.flex} >
            <Text style={styles.list_item} onPress={this._pressButton.bind(this)}> 你好！</Text>
            <Text style={styles.list_item} onPress={this._pressButton.bind(this)}> helleo！</Text>
            <Text style={styles.list_item} onPress={this._pressButton.bind(this)}> 萨瓦迪卡！</Text>
            </ScrollView>

        );

        }
       
    }
     _pressButton(){
       const {navigator} =this.props;
       //为了变量的生命周期
       const self=this;      
       if(navigator){
           navigator.push({
               name:'Detail',
               component:Detail,
               //把传递的内容放入其中
               params:{
                   user:this.state.user,                   
                   id:this.state.id,
                   //从详情页获取他的时间
                   getTime:function(time){
                       self.setState({
                           time:time
                       })
                   }

               }
           })

       }
    
    }

}

const USER_MODELS={
    1:{name:'qsd',age:'24'},
    2:{name:'wzy',age:'20'},
}

class Detail extends Component{
     constructor(props){
        super(props);
        this.state={
            id:null
        };
    }
  
    render(){
        return(
            <ScrollView>
             <Text style={styles.list_item} >用户id：{this.state.id}</Text>
            <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>作者是：{this.state.user}</Text>
            
            </ScrollView>
        );
    }
      componentDidMount(){
        this.setState({
            id:this.props.id,
            user:this.props.user,
        });
    }

    _pressButton(){
       const {navigator} =this.props;
       if(this.props.getTime){
           let time=USER_MODELS[this.props.id];
           this.props.getTime(time);
       }
       if(navigator){
           //这里就是把当前页面pop掉，返回上一层list上
           navigator.pop();
       }

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
