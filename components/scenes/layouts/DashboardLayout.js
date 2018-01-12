import React from 'react';

import {
	View
} from 'react-vr';

import MenuButtons from './elements/MenuButtons';
import TileButtons from './elements/TileButtons';
import ProgressCircles from './elements/ProgressCircles';
import Button from './elements/Button.js';
//layout

class DashboardLayout extends React.Component {
	render(){
		return(
            <View>
                <View style={{
                    width:5,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    layoutOrigin: [0.5, 0.5 ],
                    transform: [{translate: [0, 0, -3]}]
                }}>
                 <MenuButtons />
                 <TileButtons />
                 <ProgressCircles />
                </View>

                <View style={{
                    width: 5,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -3]}]
                }}>
                   
                  <Button text={this.props.text} />
                </View>
            </View>
		);
	}
}

module.exports = DashboardLayout;