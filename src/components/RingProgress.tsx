import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
};

const color = '#EE0F55';

const RingProgress = ({
  radius = 100,
  strokeWidth = 20,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const perimeter = 2 * Math.PI * innerRadius;
  const progress = 0.995; // 0 to 1
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        // backgroundColor: 'yellow',
        alignSelf: 'center',
      }}
    >
      <Svg>
        <Circle
          //   cx='50'
          //   cy='50'
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          //   fill='blue'
          opacity={0.2}
        />
        <Circle
          //   cx='50'
          //   cy='50'
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[perimeter * progress, perimeter]}
          //   fill='blue'
        />
      </Svg>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
