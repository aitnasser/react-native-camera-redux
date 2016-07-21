/**
 * # configureStore.js
 * 
 * A Redux  setup
 * 
 */
'use strict';

/**
 * ## Imports
 * 
 * redux functions
 */
import { createStore, applyMiddleware ,compose} from 'redux';
import devTools from 'remote-redux-devtools';
//import thunk from 'redux-thunk';

/**
* ## Reducer
* The reducer contains the 4 reducers from 
* device, global, auth, profile
*/
import reducer from '../reducers';



//=======Prod Mod=======================

/**
 * ## creatStoreWithMiddleware
 * 
 */ 
// const createStoreWithMiddleware = applyMiddleware(
//   thunk
// )(createStore);

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 * 
 */ 
// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(reducer, initialState);
//   };

//=====dev mode===========
//==with redux devtools=====
export default function configureStore(initialState) {
  // const enhancer = compose(
  //  // applyMiddleware(thunk),
  //   devTools()
  // );
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  return createStore(reducer, initialState,  devTools());
}