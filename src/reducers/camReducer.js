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
  SET_MODE,
  SET_STATUS
} = CONFIG.FRONT_END.CONSTANTS;


/**
 * ## InitialState
 * 
 * The fields we're concerned with
 */
export const InitialState = Record({
  mode: null,
  status: 'disabled'
});





const initialState = new InitialState;

/**
 * ## camReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function camReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);

  switch (action.type) {

    /**
     * ### set the cam mode (video or photo)
     *
     */
  case SET_MODE:
    const mode = action.payload;
    return state.set('mode', mode);

    /**
     * ### set the cam status (enabled or disabled)
     *
     */
  case SET_STATUS:
    const status = action.payload;
    return state.set('status', status);
  }

  return state;
}
