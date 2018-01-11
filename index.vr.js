import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import TitleScene from './components/scenes/TitleScene';

export default class VideoApp extends React.Component {
  render() {
    return (
      <View>
        <TitleScene text={"Watch a Video"} />
      </View>
    );
  }
};

AppRegistry.registerComponent('VideoApp', () => VideoApp);
