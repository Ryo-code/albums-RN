import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
//NOTE: With the children (destructured so it's not props.children)
//...you can actually totally reuse this button, because
// there's no reference to AlbumDetail in here at all,
// and the "Buy Now" text is in AlbumDetail

const Button = ({ whenPressed, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity 
      onPress={whenPressed}
      style={buttonStyle}
    >
      <Text style={textStyle}> 
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  }
}

export default Button;