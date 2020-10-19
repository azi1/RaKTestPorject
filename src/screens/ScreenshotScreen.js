import React, {useState} from 'react';
import {View, NativeModules, StyleSheet, Platform, Alert} from 'react-native';
import Button from '../components/Button';
import {sendDataToserver} from '../server';


const ScreenshotScreen = () => {
  const {container} = componentStyle;
  const [isAcitvated, setIsActivated] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const ScreenShotStatusChange = async (status) => {
    const {EnableScreenShot, DisableScreenShot} = NativeModules.ScreenShotToggleModule;
    try {
      if(status) {
       await EnableScreenShot();
      } else { 
       await DisableScreenShot();
      } 

      console.log(isAcitvated, "isAcitvated");
      let data = await sendDataToserver(status);
      console.log(data, "data");
      setIsActivated(status);
      setLoading(false);
      
    } catch (e) {
      console.log(e);
      setLoading(false);
      errorAlert('Unable to change enable/disable screenshot');
    }
  };

  const errorAlert = (message) =>
  Alert.alert(
    "Error",
    message,
    [
      { text: "Okay", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

  const toggleSwitch = async () => {
    // let data =  await sendDataToserver(activate);
   setLoading(true);
   let toggledValue = !isAcitvated;
   if(Platform.OS === 'android') {
   ScreenShotStatusChange(toggledValue);
   } else {
    errorAlert('Unable to disable screenshot capture in ios.');
   }
   
  };
console.log(isAcitvated, loading);
  return (
    <View style={container}>
      <Button
        loading={loading}
        activate={isAcitvated}
        onPressButton={toggleSwitch}
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
