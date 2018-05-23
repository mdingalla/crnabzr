import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Linking,
  AsyncStorage,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from './../../constants/Colors';
import homeBottomNavigation from './../navigation/HomeBottomNavigation';

import axios from 'axios'


export default class HomeScreen extends React.Component {
    static navigationOptions = homeBottomNavigation

    constructor(props){
        super(props);

        this.state ={
            items:[]
        }
    }

    componentDidMount(){
        var self = this;

      const ck = 'ck_9314ca05c4c8856c730482cf55c7f3e4014d6f2b'
      const cs = 'cs_467cecde39e4fb59af5644f6729c0813a6508580'
      const url = 'https://baczar.com/wp-json/wc/v2/products'

    //   const oauth = OAuth({
    //     consumer: {
    //         key: ck,
    //         secret: cs
    //     },
    //     signature_method: 'HMAC-SHA1',
    //     hash_function: function(base_string, key) {
    //         return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    //     }
    //   });

    //   const requestData = {
    //     url: url,
    //     method: 'GET'
    // };

        axios.get(
            'https://baczar.com/wp-json/wc/v1/products?consumer_key=ck_9314ca05c4c8856c730482cf55c7f3e4014d6f2b&consumer_secret=cs_467cecde39e4fb59af5644f6729c0813a6508580'
            // requestData.url + '?' + jParam(oauth.authorize(requestData))
            // requestData.url
        ).then(function(response){
            //console.log(response.data)
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
            <View>
              <Text>Home</Text>
              <Text>{items.length}</Text>
            </View>
          ); 
    }
}