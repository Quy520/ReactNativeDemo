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
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ListView
} from 'react-native';
let WIDTH = Dimensions.get('window').width;
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

export default class PullToRefreshDemo extends Component {

  searchUser(){
    console.log(this.state.text);
    if (this.state.text !== '') {
     alert("ok")
     
    }else{
      alert("no")
    }
  }

    constructor(props) {
      super(props);
      this.state = {
        text: '',
        dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    loaded: false,
      };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({        
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();

  }

 
  render() {
    //  if (!this.state.loaded) {
    //   return this.renderLoadingView();
    // }
    return (
      <View style={styles.container}>
        <View style={styles.inputViewStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="请输入搜索条件"
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity onPress={this.searchUser.bind(this)}>
            <Text style={{fontSize:30, marginLeft:10}}>🔍</Text>
          </TouchableOpacity>         
        </View>
         <ListView
            initiaListSize={5}
            onEndReachedThreshold={10}
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.listView}
        />
       
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

    renderMovie(movie) {
    return (
      <View style={styles.listContainer}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail} />       
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title} tag1</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }





}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
  listContainer:{
     flex: 1,
     marginTop:20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

 rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
   title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  inputViewStyle:{
    marginTop: 30,
    width: WIDTH,
    height: 32,
    flexDirection: 'row',
  },

   listView: {
      backgroundColor: '#F5FCFF',
      paddingTop:10
    },

  inputStyle: {
    marginLeft: 20,
    marginTop: 1,
    width: WIDTH-80,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
 
});


AppRegistry.registerComponent('PullToRefreshDemo', () => PullToRefreshDemo);
