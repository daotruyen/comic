import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const CustomText = ({
  children,
  style = {},
  size = 16,
  numberOfLines = 10,
  ...props
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.defaultStyle, style, {fontSize: size}]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    // fontFamily: fontStyles.regular
  },
});
