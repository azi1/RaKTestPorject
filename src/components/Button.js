import React from 'react';
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Button = ({onPressButton, loading, activate}) => {
  const {
    containerStyle,
    loadingPressable,     
    activatePressable,
    deactivatePressable,
    textStyle,
  } = buttonStyle;

  return loading ? (
    <Pressable 
    disabled={loading}
    style={loadingPressable} 
    onPress={onPressButton}>
      <View style={containerStyle}>
        <ActivityIndicator size="small" color="#fff" />
        <Text style={textStyle}> Loading </Text>
      </View>
    </Pressable>
  ) : activate ? (
    <Pressable style={activatePressable} onPress={onPressButton}>
      <View style={containerStyle}>
        <Icon name="check-circle" size={30} color="#fff" />
        <Text style={textStyle}> Activated </Text>
      </View>
    </Pressable>
  ) : (
    <Pressable style={deactivatePressable} onPress={onPressButton}>
      <View style={containerStyle}>
        <Icon name="arrow-up" size={30} color="#fff" />
        <Text style={textStyle}> Acitvate </Text>
      </View>
    </Pressable>
  );
};
const buttonStyle = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  loadingPressable: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 110,
  },
  activatePressable: {
    backgroundColor: 'green',
    borderRadius: 20,
    width: 110,
  },
  deactivatePressable: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 110,
  },
  textStyle: {
    color: '#FFF',
  },
});

export default Button;
