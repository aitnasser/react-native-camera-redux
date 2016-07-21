/**
 * # deviceActions.js
 * 
 *  platform  ```ios``` or ```android```
 *
 *  version 
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
  SET_PLATFORM,
  SET_VERSION
} = CONFIG.FRONT_END.CONSTANTS;

/**
 * ## Set the platformState 
 *
 */
export function setPlatform(platform) {
  return {
    type: SET_PLATFORM,
    payload: platform
  };
}
/**
 * ## set the version
 *
 */
export function setVersion(version) {
  return {
    type: SET_VERSION,
    payload: version
  };
}