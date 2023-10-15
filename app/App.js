import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Touchable } from 'react-native';
import MainContainer from './navigation/MainContainer';
import AuthContainer from './navigation/AuthContainer';
import React, { useState } from 'react';
import CameraScreen from './navigation/screens/CameraScreen';

const AuthContext = React.createContext();

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={[user, setUser]}>
    <NavigationContainer>
     {user == null ? <AuthContainer/> : <CameraScreen/>}
    </NavigationContainer>
    </AuthContext.Provider>
  );
};
export {AuthContext}