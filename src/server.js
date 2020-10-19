
import { getMacAddress, getIpAddress, getModel } from 'react-native-device-info';
import {Platform} from 'react-native';

export const sendDataToserver = async (activate) => {
    try {
    const url = 'https://api.mocki.io/v1/b043df5a';
    const macAddress =  await getMacAddress();
    const ipAddress  = await getIpAddress();
    const model = await getModel();
    const platform = Platform.OS;
    const data = JSON.stringify({macAddress, ipAddress, model, model, activate});
    const response =  await fetch(url, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: data
      })
      console.log(data);
    if(response.status === 200) {
        console.log(await response.json());
        return true;
    }
     return false;
    

    } catch(error) {
        console.log(error);
        return false;
    
    }

};