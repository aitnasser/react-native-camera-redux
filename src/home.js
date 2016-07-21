'use strict';

/**
 * ## imports
 *
 */
/**
 * ### React
 *
 */

  import React from 'react';
import  {
  AppRegistry,
  View,
  Text } from 'react-native';

/**
 * ### Router-Flux
 *
 * Necessary components from Router-Flux
 */
import {Router,Scene} from 'react-native-router-flux';

/**
 * ### Redux
 *
 * ```Provider``` will tie the React-Native to the Redux store
 */
import {
  Provider,
  connect } from 'react-redux';

/**
 * ### configureStore
 *
 *  ```configureStore``` will connect the ```reducers```, the
 *
 */
import configureStore from './store';

/**
*Load config
*/

import CONFIG from './config';


/**
 * ### containers
 *
 * All the top level containers
 *
 */
 import camContainer from './containers/camContainer';



/**
 * ## Actions
 *  The necessary actions for dispatching our bootstrap values
 */
//import {setPlatform, setVersion} from './actions/deviceActions';

/**
 * ## States
 * initial state 
 *
 */
import * as deviceReducer  from './reducers/deviceReducer';
import * as camReducer  from './reducers/camReducer';


import {setPlatform, setVersion} from './actions/deviceActions';

//import camUtils from './lib/CamUrils';



/**
 *  The version of the app 
 */
var VERSION=CONFIG.FRONT_END.VERSION;

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in our app
 * @returns {Object} object with 4 keys
 */
function getInitialState() {
  const _initState = {
    device: (new deviceReducer.InitialState).set('isMobile',true),
    cam: (new camReducer.InitialState)
  };
  return _initState;
}



export default function bravlink(platform) {

  let Cam_Redux = React.createClass( {
    render() {
     //THE FIRST STEP IS TO CREATE OUR STORE 
      const store = configureStore(getInitialState());

      

      //Connect a <Router> to Redux
     const RouterWithRedux = connect()(Router);
      
      // configureStore will combine all our reducers
      // it will then create the store based on aggregate state from all reducers
     store.dispatch(setPlatform(platform));
     store.dispatch(setVersion(VERSION));




      
      // setup the router table with App selected as the initial component

      return (
        <Provider store={store}>
	  <RouterWithRedux hideNavBar={true}>
	    <Scene key="root">   

       <Scene key="cam"
                     component={camContainer}
                     title="cam"
                      initial={true}  />
                       </Scene>
	  </RouterWithRedux>
        </Provider>
      );
    }
  });
  /**
   * registerComponent to the AppRegistery 
   */

  AppRegistry.registerComponent('camera_redux', () => Cam_Redux);
}
