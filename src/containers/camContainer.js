'use strict';
/**
 * ## Imports
 * */
/*
*Load config
*/

import CONFIG from '../config';
 /*
 * Redux 
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



/**
 * Immutable
 */ 
import {Map} from 'immutable';

/**
 *   LoginForm
 */
import Cam from '../components/Cam';

/**
 * The necessary React 
 */
import React from 'react';


/**
 * The actions we need
 */
import * as camActions from '../actions/camActions';

// const {
//   LOGIN, 
//   REGISTER,
//   FORGOT_PASSWORD
// } =CONFIG.FRONT_END.CONSTANTS;


/**
 * ## Redux boilerplate
 */
const actions = [
  camActions
];

function mapStateToProps(state) {
  return {
      ...state
  };
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
          .merge(...actions)
          .filter(value => typeof value === 'function')
          .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

// function buttonPressHandler(login,  email, password) {
//   login (email, password);
// }

let camContainer = React.createClass({
  /**
   * See if there's a sessionToken from a previous login
   * 
   */
  // componentDidMount() {
  //   this.props.actions.getSessionToken();
  // },

  render() {

  
    // let onSubmitLogin = buttonPressHandler.bind(null,
				// 	        this.props.actions.login,
    //               this.props.auth.form.fields.email,
				// 	        this.props.auth.form.fields.password,
    //               this.props.notifications.oneSignalPlayerId
		  //                              );
    
/*

 onSubmitLogin={ onSubmitLogin }  
          leftMessageType={ FORGOT_PASSWORD }
          rightMessageType={ REGISTER }
          auth={ this.props.auth }
          global={ this.props.global }
           form={this.props.auth.form}
           actions={this.props.actions}
 */


    return(     
 <Cam></Cam>
    );
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(camContainer);
