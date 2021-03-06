import React, { useEffect } from 'react';
import {Container, LoadingIcon } from './styles';
import {Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import BarberLogo from'../../assets/barber.svg';
import { useNavigation } from '@react-navigation/native';
export default () => {

    const navigation = useNavigation();

    useEffect(() =>{
      const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
          //validar token

        } else{
            navigation.navigate('SignIn');
        }
      }
      checkToken();
    }, []);
    return (
        <Container>
           <BarberLogo width ="100%" height ='160' />
          <LoadingIcon size ='large' color="#FFFFFF" />
        </Container>

    );
}