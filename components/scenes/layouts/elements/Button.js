import React from 'react';
import {
  Text,
  View,
  VrButton,
  Animated
} from 'react-vr';
import { Easing } from 'react-native';

//Element
class Button extends React.Component {
  constructor(props){
    super(props);

    this.state = { slideLeft: new Animated.Value(1), fadeIn: new Animated.Value(0)};
  }

  render() {
    return (
      <Animated.View style={{ margin: 0.1, height: 0.3, backgroundColor: '#A482DF', borderRadius: 0.1}}>
        <VrButton>
          <Text style={{fontSize: 0.2, textAlign: 'center', color: "#FFFFFF"}}>
          {this.props.text}
          </Text>
        </VrButton>
      </Animated.View>
    )
  }
}
module.exports = Button;
