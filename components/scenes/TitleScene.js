import React from 'react';
import {
  Text,
  View,
  VrButton,
  Pano,
  asset
} from 'react-vr';
import TitleLayout from './layouts/TitleLayout';
//Scene
class TitleScene extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('title-background.jpg')}/>
        <TitleLayout text={this.props.text}/>
      </View>
    )
  }
}
module.exports = TitleScene;
