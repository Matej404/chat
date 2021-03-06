import React from 'react';
import './style.css';
import Messages from "./Components/Messages";
import Input from "./Components/Input"
import logo from './Img/logo.png';

function randomName() {
  const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
  const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}


function randomColor() {
  const backgroundColors = [
    "red", "green", "blue", "maroon", "navy", "blueviolet", "brown", "cadetblue", "darkblue", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "forestgreen", "mediumblue", "goldenrod", "indianred", "indigo", "lightcoral", "lightsalmon", "lightseagreen", "lightslategray", "lightsteelblue", "limegreen", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumturquoise", "mediumvioletred", "moccasin", "olive", "orchid", "palegreen", "palevioletred", "peru", "plum", "royalblue", "salmon"
  ]

  const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return randomColor;
}


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      member: {
        username: randomName(),
        color: randomColor()
      }
    }
    this.drone = new window.Scaledrone("agavMsSzoIOcx6MN", {
      data: this.state.member
    });
  }

  componentDidMount() {

    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });

    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
}
    

  onSendMessage = (message) => {
    
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="img" src={logo} alt="logo" />
        <h1>CHAT ROOM</h1>
      </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
        onSendMessage={this.onSendMessage}
      />
      </div>
    );
  }
}
