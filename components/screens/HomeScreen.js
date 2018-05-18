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
import OAuth  from 'oauth-1.0a'
import CryptoJS from 'crypto-js'


export default class HomeScreen extends React.Component {
    static navigationOptions = homeBottomNavigation

    componentDidMount(){
      const ck = 'ck_9314ca05c4c8856c730482cf55c7f3e4014d6f2b'
      const cs = 'cs_467cecde39e4fb59af5644f6729c0813a6508580'
      // const ck = 'ck_30fd10d2f74a76e52a80d821acbf347540a14231'
      // const cs = 'cs_31344ecbcda3b2f491ef629ca99e00d50c7eb27e'
      const url = 'https://www.baczar.com/wp-json/wc/v1/products'

      const oauth = OAuth({
        consumer: {
            key: ck,
            secret: cs
        },
        signature_method: 'HMAC-SHA1',
        hash_function: function(base_string, key) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
        }
      });

      const requestData = {
        url: url,
        method: 'GET'
    };

        axios.get(
            requestData.url + '?' + jParam(oauth.authorize(requestData))
            // requestData.url
        ).then(function(response){
            console.log(response.data)
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
        return (
            <View>
              <Text>Home</Text>
            </View>
          ); 
    }
}