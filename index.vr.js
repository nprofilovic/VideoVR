import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import TitleScene from './components/scenes/TitleScene';
import Dashboard from './components/scenes/Dashboard';

export default class VideoApp extends React.Component {
  render() {
    return (
      <View >

        <Dashboard showButton={false} text={"Select Environment"} />
      </View>
    );
  }
};

AppRegistry.registerComponent('VideoApp', () => VideoApp);
