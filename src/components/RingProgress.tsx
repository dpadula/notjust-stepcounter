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
  strokeWidth = 35,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const perimeter = 2 * Math.PI * innerRadius;
  const progress = 0.2; // 0 to 1
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
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth * 0.9}
          strokeOpacity={0.4}
          strokeLinecap='square'
          //   strokeDasharray={[perimeter * (1 - progress), perimeter]}
          //   opacity={0.4}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[perimeter * progress, perimeter]}
          strokeLinecap='round'
          fill='none'
          transform={`rotate(${-90}, ${radius}, ${radius})`}
        />
      </Svg>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
