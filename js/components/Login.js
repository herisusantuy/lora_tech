import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from '../styles/login';
import CustomButton from './common/CustomButton';

const Login = props => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const handleLogin = () => {
    if (username == 'admin' && password == 'admin') {
      props.navigation.navigate('MainTab');
      setUsername(null);
      setPassword(null);
    } else {
      setErrMsg('Oops.Username or Password is not correct!');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.greeting}>Hey,{'\n'}Login now.</Text>
      </View>
      <View style={styles.middleContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={username => {
            setUsername(username);
            setErrMsg(null);
          }}
          placeholder="Username:admin"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={password => {
            setPassword(password);
            setErrMsg(null);
          }}
          placeholder="Password:admin"
          secureTextEntry={true}
        />
      </View>
      {errMsg && <Text style={styles.errMsg}>{errMsg}</Text>}
      <View style={styles.bottomContainer}>
        <CustomButton title="Sign In" onPressButton={() => handleLogin()} />
      </View>
    </View>
  );
};

export default Login;
