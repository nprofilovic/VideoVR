import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';
import Title from './elements/Title';
import Button from './elements/Button';
//Layout
class TitleLayout extends React.Component {
  render() {
    return (
      <View style={{
            width: 2,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}]
      }}>
        <Title />
        <Button text={this.props.text} />
      </View>
    )
  }
}
module.exports = TitleLayout;
