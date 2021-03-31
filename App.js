import React, {useEffect} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// Screen
import RootStackScreen from './js/components/RootStack';

const App = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
