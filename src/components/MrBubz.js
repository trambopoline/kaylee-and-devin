import React from 'react';
import YouTube from 'react-youtube';
 
export default class MrBubz extends React.Component {
  render() {
    const opts = {
      height: '1000vh',
      width: '100%',
    };
 
    return (
      <YouTube
        videoId="QQNL83fhWJU"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}