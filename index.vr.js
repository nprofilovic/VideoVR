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
import VideoPlayer from './components/scenes/VideoPlayer';
import axios from 'react-native-axios';

export default class VideoApp extends React.Component {
  constructor(){
    super();

    this.state = {
      scene: 1,
      previews: "",
      IDs: "",
      selectedStreamID: "",
      selectedEnv: "",
      environments: ["fort-night.jpg", "background2.jpg", "Arizona.jpg", "Hawaii.jpg", "New Hampshire.jpg", "Texas.jpg"],
    };
  }
  // <TitleScene showButton={true} text={"Watch a Video"}/>
  // <VideoPlayer streamID={this.state.selectedStreamID} env={this.state.selectedEnv} showButton={true} text={"Back to Dashboard"} />

  componentWillMount() {
    axios.get('https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=jmwrryktl4oio2rwrejy7xp3d20nr3')
      .then(response => {
        console.log(response);
        this.gatherPreviews(response);
        this.gatherStreamIDs(response);
      })
      .catch(e => {
        console.log(error);
      });
  }
  gatherPreviews(response) {
    const previews = response.data.featured.map(function(feat) {
      return feat.stream.preview.large;
    });
    this.setState({previews: previews});
  }
  gatherStreamIDs(response) {
    const IDs = response.data.featured.map(function(feat) {
      return feat.stream._id;
    });
    this.setState({IDs: IDs});
  }

  captureSelection(stage, value) {
  switch (stage) {
    case 1:
      console.log(this.state.IDs[value-1]);
      this.setState({selectedStreamID: this.state.IDs[value-1]});
      break;
    case 2:
      console.log(this.state.environments[value-1]);
      this.setState({selectedEnv: this.state.environments[value-1]});
      break;
  }
}

  changeScenes(nextScene, selectionIndex) {
    switch (nextScene) {
      case 1:
        this.setState({scene: 1});
        break;
      case 2:
        this.setState({scene: 2});
        break;
      case 3:
        this.captureSelection(2, selectionIndex);
        this.setState({scene: 3});
        break;
    }
  }

  render() {
    const scene = this.state.scene;
    return (
      <View>
        {scene === 1 ? (
          <TitleScene
            showButton={true}
            text={"Watch a Video"}
            changeScenes={this.changeScenes.bind(this)}
            scene={this.state.scene}/>
        ) : (
          scene === 2 ? (
            <Dashboard
              captureSelection={this.captureSelection.bind(this)}
              previews={this.state.previews}
              environments={this.state.environments}
              showButton={false}
              text={"Select Environment"}
              changeScenes={this.changeScenes.bind(this)}
              scene={this.state.scene}
            />
          ) : (
            <VideoPlayer
              streamID={this.state.selectedStreamID}
              env={this.state.selectedEnv}
              showButton={true} text={"Back to Dashboard"}
              changeScenes={this.changeScenes.bind(this)}
              scene={this.state.scene}/>
          )
        )}
      </View>
    );
  }
};

AppRegistry.registerComponent('VideoApp', () => VideoApp);
