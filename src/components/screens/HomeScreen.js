import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Linking,
  AsyncStorage,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from './../../constants/Colors';
import homeBottomNavigation from './../navigation/HomeBottomNavigation';
import { Container, Content, H1, H2, H3,Text, Button } from 'native-base';

import axios from 'axios'


export default class HomeScreen extends React.Component {
    static navigationOptions = homeBottomNavigation

    constructor(props){
        super(props);

        this.state ={
            items:[]
        }
    }

    _keyExtractor = (item, index) => item.id.toString();

    _renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        <Image source={{uri: item.images[0].src}}
       style={{width: 200, height: 200}} />
            </View>
      );

    componentDidMount(){
        var self = this;

      const ck = 'ck_9314ca05c4c8856c730482cf55c7f3e4014d6f2b'
      const cs = 'cs_467cecde39e4fb59af5644f6729c0813a6508580'
      const url = 'https://baczar.com/wp-json/wc/v2/products'

        axios.get(
            'https://baczar.com/wp-json/wc/v1/products?consumer_key=ck_9314ca05c4c8856c730482cf55c7f3e4014d6f2b&consumer_secret=cs_467cecde39e4fb59af5644f6729c0813a6508580'
            // requestData.url + '?' + jParam(oauth.authorize(requestData))
            // requestData.url
        ).then(function(response){
            console.log(response.data)
            self.setState({
                items:response.data
            });
            // console.log('success')
        }, function(error){
            console.log(error)
        })

        function jParam(a){
          let murl = Object.keys(a).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(a[k])
          }).join('&');

          return murl;
        }
    }

    render(){

        const {items} = this.state;
        return (
            <Container>
             <Content>
                <Text>Home</Text>
                
                {/* <FlatList
                    data={items}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                /> */}
                 </Content>
            </Container>
          ); 
    }
}