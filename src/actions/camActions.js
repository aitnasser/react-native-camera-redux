/**
 * # camActions.js
 * 
 *  mode  video or photo
 *
 *  status  enabled or disabled 
 * 
 */
'use strict';

/**
 * ## Imports
 * */

  /**
*Load config
*/

import CONFIG from '../config';
 /*
 * The actions supported
 */
const {
  SET_MODE,
  SET_STATUS
} = CONFIG.FRONT_END.CONSTANTS;

/**
 * ## Set the mode  
 *
 */
export function setMode(mode) {
  return {
    type: SET_MODE,
    payload: mode
  };
}
/**
 * ## set the status
 *
 */
export function setStatus(status) {
  return {
    type: SET_STATUS,
    payload: status
  };
}