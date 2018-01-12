import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';
import DashboardLayout from './layouts/DashboardLayout';


//Scene
class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('fort-night.jpg')}/>
        <DashboardLayout text={this.props.text} />
     </View>
    )
  }
}
module.exports = Dashboard;