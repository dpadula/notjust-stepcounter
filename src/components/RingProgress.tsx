import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

type RingProgressProps = {
  radius?: number;
};

const color = '#EE0F55';

const RingProgress = ({ radius = 100 }: RingProgressProps) => {
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        backgroundColor: color,
        alignSelf: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>RingProgress</Text>
      <Svg height='50%' width='50%' viewBox='0 0 100 100'>
        <Circle
          cx='50'
          cy='50'
          r='45'
          stroke='blue'
          strokeWidth='2.5'
          fill='green'
        />
        <Rect
          x='15'
          y='15'
          width='70'
          height='70'
          stroke='red'
          strokeWidth='2'
          fill='yellow'
        />
      </Svg>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
