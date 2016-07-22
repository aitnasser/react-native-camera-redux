/**
 * # LoginForm.js
 */
'use strict';
/**
 * ## Imports
 * /

 /*
*Load config
*/

import CONFIG from '../../config';

/*
* component styles
*/
import styles from './styles';


/**
 * Router actions
 */
import { Actions } from 'react-native-router-flux';

/**
 * the Camera
 */
import Camera from 'react-native-camera';

/**
 * The FormButton 
 */
//import FormButton from '../FormButton';



/**
 * The necessary React components
 */

 import React,{Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Modal,
  StatusBar
}
from 'react-native';





import Dimensions from 'Dimensions';
var {height, width} = Dimensions.get('window'); // Screen dimensions in current orientation

/**
 * The states were interested in
 */
const {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
} = CONFIG.FRONT_END.CONSTANTS;





class Cam extends Component {
    constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
    };

    this.takePicture = this.takePicture.bind(this);
    this.switchType = this.switchType.bind(this);
    this.switchFlash = this.switchFlash.bind(this);
  }




  takePicture() {
    if (this.camera) {
      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
  }

  switchType() {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      icon = require('../../themes/icons/ic_camera_rear_white.png');
    } else if (this.state.camera.type === front) {
      icon = require('../../themes/icons/ic_camera_front_white.png');
    }

    return icon;
  }

  switchFlash() {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }

  get flashIcon() {
    let icon;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      icon = require('../../themes/icons/ic_flash_auto_white.png');
    } else if (this.state.camera.flashMode === on) {
      icon = require('../../themes/icons/ic_flash_on_white.png');
    } else if (this.state.camera.flashMode === off) {
      icon = require('../../themes/icons/ic_flash_off_white.png');
    }

    return icon;
  }
  

  render() {

   

     return(
         <View style={styles.container}>
         <View>
           <Text style={styles.title}>
         Camera inside a custom component
        </Text>
         </View>
       
        <StatusBar
          animated
          hidden
        />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          defaultTouchToFocus
        />
         
        <View style={[styles.overlay, styles.topOverlay]}>
          <TouchableOpacity
            style={styles.typeButton}
            onPress={this.switchType}
          >
            <Image
              source={this.typeIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flashButton}
            onPress={this.switchFlash}
          >
            <Image
              source={this.flashIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.overlay, styles.bottomOverlay]}>
          <TouchableOpacity
            style={styles.captureButton}
            onPress={this.takePicture}
          >
            <Image
              source={require('../../themes/icons/ic_photo_camera_36pt.png')}
            />
          </TouchableOpacity>
        </View>
        
      </View>
      );
  }
}
export default Cam;

