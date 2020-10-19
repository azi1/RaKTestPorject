import React, {useState} from 'react';
import {View, NativeModules, StyleSheet} from 'react-native';
import Button from '../components/Button';

const disableScreenShot = async () => {
  try {
    const result = await NativeModules.ScreenShotToggleModule.DisableScreenShot();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const enableScreenShot = async () => {
  try {
    const result = await NativeModules.ScreenShotToggleModule.EnableScreenShot();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const ScreenshotScreen = () => {
  const {container} = componentStyle;
  const [activate, setIsActivated] = useState(false);
  const toggleSwitch = () => setIsActivated((previousState) => !previousState);
  return (
    <View style={container}>
      <Button
        loading={false}
        activate={false}
        onPressButton={() => {
          console.log('yeeyey');
        }}
      />
    </View>
  );
};

const componentStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenshotScreen;
