/* @flow */
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

module.exports= StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'orange',
      marginTop: 10,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
      borderRadius: 100/2

  },
    title: {
    fontSize: 28,
    textAlign: 'center',
     marginTop: 10,
    marginBottom: 0,
    marginLeft: 50,
    marginRight: 50
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
    padding: 15,
     marginLeft: 10,
    marginRight: 10,
    marginTop:10,
    marginBottom:70
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 25,
     marginLeft: 10,
    marginRight: 10
  },
  captureButton: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },

  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
});