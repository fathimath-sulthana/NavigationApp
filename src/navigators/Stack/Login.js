import { View, Text,Button } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Login</Text>
      <Button
      title='Login'
      onPress={()=> navigation.navigate('Home')}
      >


      </Button>
    </View>
  )
}

export default Login