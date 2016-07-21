/**
 * # deviceReducer.js
 *
 * The reducer for all the actions from the various log states
 */
'use strict';
/**
 * ## Imports
 */

/**
*Load config
*/

import CONFIG from '../config';

const {Record} = require('immutable');


/**
 * Device actions to test
 */
const {
  SET_PLATFORM,
  SET_VERSION
} = CONFIG.FRONT_END.CONSTANTS;


/**
 * ## InitialState
 * 
 * The fields we're concerned with
 */
export const InitialState = Record({
  isMobile: false,
  platform: '',
  version: null
});





const initialState = new InitialState;

/**
 * ## deviceReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function deviceReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);

  switch (action.type) {

    /**
     * ### set the platform in the state
     *
     */
  case SET_PLATFORM:
    const platform = action.payload;
    return state.set('platform', platform);

    /**
     * ### set the version in the state
     *
     */
  case SET_VERSION:
    const version = action.payload;
    return state.set('version', version);
  }

  return state;
}
