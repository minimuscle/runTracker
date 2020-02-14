import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from 'react-native-ui-kitten';
import Dashbaord from './screens/Dashboard';

export default function App() {
  state = {
    theme: lightTheme
  }

  const { theme } = this.state;

handleChangeTheme = () => {
  <Dashboard/>
}

const ApplicationContent = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Image source={require('./assets/icon.png')}></Image>
    <Text>Welcome to UI Kitten</Text>
    <Button onPress={this.handleChangeTheme}>Click to go to Dashboard</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


  switch (theme) {
    case lightTheme:
      return (
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <ApplicationContent />
        </ApplicationProvider>
      );
    case darkTheme:
      return (
        <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <ApplicationContent />
        </ApplicationProvider>
      );
    default:
      return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <ApplicationContent />
      </ApplicationProvider>
      )  
}
 
/* NOTE: 

None of this actually works in achieving a dark theme. This will need to be fixed eventually,
a dark theme may be able to be set later for each section, will work on this section another day, as this is not important
as of the main development, which will be done on light theme

*/

}