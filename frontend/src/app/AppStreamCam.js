'use client';

import React, { Component } from 'react';

class AppStreamCam extends Component {
  constructor(props) {
    super(props);
    this.streamCamVideo = this.streamCamVideo.bind(this);
  }

  streamCamVideo() {
    var constraints = { audio: true, video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

  render() {
    return (
      <div>
        <div id="container">
          <video autoPlay={true} id="videoElement" controls></video>
        </div>
        <br/>
        <button onClick={this.streamCamVideo}>Start streaming</button>
      </div>
    );
  }
}

export default AppStreamCam;
