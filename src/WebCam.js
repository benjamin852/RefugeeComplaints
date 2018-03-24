import React, { Component } from 'react';
import Webcam from 'react-webcam';
import * as shutter from './shutter.mp3';
import Sound from 'react-sound';

export default class WebCam extends Component {
    constructor(props) {
        super(props);
        this.state = {
          elapsed: 3,
          elaspedLoading: 30,
        }
        this.tick = this.tick.bind(this);
      }
      componentWillUnmount = () => {
        clearInterval(this.timer);
      }
      setRef = (webcam) => {
        this.webcam = webcam;
      }
    
      tickOne = () => {
        this.state.elaspedLoading--;
        this.setState({elaspedLoading: this.state.elaspedLoading-- });
        if (this.state.elaspedLoading <= 0) {
          clearInterval(this.timerOne);
          this.setState({
            loading: false,
          })
        }
      }
    
      tick = () => {
        this.state.elapsed--;
        this.setState({elapsed: this.state.elapsed-- });
        if (this.state.elapsed <= 0) {
          clearInterval(this.timer);
          const screenshot = this.webcam.getScreenshot();
          this.setState({ screenshot });
          this.audio.play();
          this.setState({
            loading: true,
          })
          this.timerOne = setInterval(this.tickOne, 50);
        }
      }
     
      capture = () => {
        this.timer = setInterval(this.tick, 500);
      };

      render() {
          return (
            <div>
            <audio ref={(audio) => { this.audio = audio; }}>
              <source src={shutter} type="audio/mpeg" >
              </source>
            </audio>
              { !this.state.screenshot ?
                <div style={{position: 'relative', backgroundColor: '#7AC687'}}>
                  <div>
                    <div> Smile!! </div>
                    <Webcam 
                      audio={false}
                      height={350}
                      ref={this.setRef}
                      screenshotFormat="image/jpeg"
                      width={350}/>
                  </div>
                  <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      color: 'white',
                      fontSize: '30px',
                  }}> {this.state.elapsed} </div>
                  <button onClick={this.capture}>Capture photo</button>
                </div> : null }
              { this.state.screenshot ? <img src={this.state.screenshot} /> : null }
              { this.state.loading ? <div> loading.. </div> : null }
              { this.state.screenshot && !this.state.loading ? <div>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</div> : null }
            </div>
          )
      }
}