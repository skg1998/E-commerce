import React ,{Component} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';

import Image1 from '../assest/image/slider1.jpg';
import Image2 from '../assest/image/slider2.jpg';
import Image3 from '../assest/image/slider3.jpg';

const slideImages = [Image1,Image2,Image3];
   
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
}

class Banner extends Component {
  render() {
    return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              </div>
            </div>
          </Slide>
        </div>
      )
  }
}

export default Banner;
