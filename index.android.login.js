/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    DeviceEventEmitter,
    BackAndroid,
    Keyboard
} from 'react-native';
import Swiper from 'react-native-swiper';
//测试用的

export default class PullToRefreshDemo extends Component{
 constructor(props){
   super(props);
   this.state={
     isLogin:true,
     isKeyboardDisplay:false,
     paddingTopValue:41
   }
 }
//渲染完成后调用一次
   componentDidMouut(){
     BackAndroid.addEventListener('hardwareBackPress',this._onPressBack.bind(this));
     Keyboard.addListener('keyboardDidHide',this.onKeyboardDidHide.bind(this));
   }
   //组件移除前调用
   componentWillUnMount(){
     BackAndroid.removeEventListener('hardwareBackPress');
     Keyboard.addListener('keyboardDidHide', this._onKeyboardDidHide.bind(this)).remove();
   }
   render(){
     return(
       <View style={[styles.container, {padding:this.state.paddingTopValue}]}>
          <View style={styles.top}>
            <Image 
                style={{width:170,height:100,justifyContent: 'center'}}
                source={require('./imgs/zt_logo.png')}/>
          </View>
          <Swiper ref='swiper' showsButtons={false} height={240} showsPagination={false} index={0} onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}>
          <View style={{ flex: 1 }}>
              <View style={{ marginTop: 80 }}>
                  <TextInput
                      style={{ fontSize: 18, color: '#ccc', width: 320, height: 44, borderColor: 'gray', borderWidth: 1 }}
                      placeholder='手机号或邮箱'
                      onFocus={this._onFocus.bind(this) }
                      onLayout={null}
                      onSubmitEditing={null}
                      />
                  <TextInput
                      style={{ fontSize: 18, color: '#ccc', width: 320, height: 44, borderColor: 'gray', borderWidth: 1 }}
                      placeholder='密码'
                      onFocus={this._onFocus.bind(this) }
                      onChangeText={null}
                      />
              </View>
          </View>

          <View style={{ flex: 1 }}>
              <View style={{ marginTop: 35 }}>
                  <TextInput
                      style={{ fontSize: 18, color: '#ccc', width: 320, height: 44, borderColor: 'gray', borderWidth: 1 }}
                      placeholder='手机号（中国大陆号码）'
                      onFocus={this._onFocus.bind(this) }
                      onLayout={null}
                      onSubmitEditing={null}
                      />
                  <TextInput
                      style={{ fontSize: 18, color: '#ccc', width: 320, height: 44, borderColor: 'gray', borderWidth: 1 }}
                      placeholder='密码'
                      onFocus={this._onFocus.bind(this) }
                      onChangeText={null}
                      />
                  <TextInput
                      style={{ fontSize: 18, color: '#ccc', width: 320, height: 44, borderColor: 'gray', borderWidth: 1 }}
                      placeholder='姓名'
                      onFocus={this._onFocus.bind(this) }
                      onChangeText={null}
                      />
              </View>
          </View>
        </Swiper>

          <View style={{marginTop:-75}}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={this._onPressLogin.bind(this)}>
              <Text style={styles.loginText}>
              {
                this.state.isLogin ? '登录' :'注册'
              }
              </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={this._onPressLoginOrRegister.bind(this)}>
               <Text style={{ justifyContent: 'center', color: '#4A90E2', textAlign: 'center', marginTop: 28 }}>
                { 
                    this.state.isLogin ? (this.state.isKeyboardDisplay ? '无法登录?' : '没有知乎帐号?  去注册') : 
                        '已有知乎帐号?  去登录'         
                }
                </Text>
            </TouchableOpacity>
          </View>
          {
            this.state.isLogin ? 
             <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
                            <Text style={{ color: '#ccccdd', textAlign: 'center' }}>
                                ———————— 社交账号登录 ————————
                            </Text>
                            <View
                                style={{
                                    marginTop: 15,
                                    marginBottom: 15,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Image source={require('./imgs/ic_wechat_login.png') } style={{ width: 50, height: 50 }} />
                                <Image source={require('./imgs/ic_sina_login.png') } style={{ width: 50, height: 50, marginLeft: 55 }} />
                                <Image source={require('./imgs/ic_qq_login.png') } style={{ width: 50, height: 50, marginLeft: 55 }} />
                            </View>
                        </View> : null

          }

        </View>
     );
   }

//按返回键的时候监听
   _onPressBack(){
     const{navigator}=this.props;
     if(navigator){
       navigator.pop();
       return ture;
     }
     return false;
     }
    //

   
//方法函数对TextInput进行监听
_onFocus(){
    if(this.state.isKeyboardDisplay !=ture){
      this.setState({
        isKeyboardDisplay:true,
        paddingTopValue:-30
      })
    }
}
//软键盘的监听
_onKeyboardDidHide(){
  if(this.state.isKeyboardDisplay){
    this.setState({
      isKeyboardDisplay:false,
      paddingTopValue:41
    })
  }

}
//登录或注册按钮的监听
_onPressLogin(){
  const{navigator,actions}=this.props;
  actions.doLogin('admin','123456',()=>{
    navigator.pop();
    actions.showToast('登录成功',5000);
  });
}

_onMomentumScrollEnd(e,state,context){
  console.log(state,context.state)
  //切换
  this.setState({
    isLogin:!state.index,
  })
}
_onPressLoginOrRegister(){
  if(this.state.isLogin&&
  this.state.isKeyboardDisplay){

  }else{
    if(this.state.isLogin){
      this.refs.swiper.scrollBy(+1);
    }else{
      this.refs.swiper.scrollBy(-1);
    }
    this.setState({
      isLogin:!this.state.isLogin,
    })
  }

}


 
}
const {width, height} = Dimensions.get('window');
const styles=StyleSheet.create({

   container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    top: {
        height: 80,
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontWeight: 'bold',
        width: 30,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        marginTop: 20,
        height: 50,
        width: 320,
        backgroundColor: '#3281DD',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

});
AppRegistry.registerComponent('PullToRefreshDemo', () => PullToRefreshDemo);
