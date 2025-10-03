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
  const progress = 0.7; // 0 to 1
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
        {/* <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          //   strokeDasharray={[perimeter * (1 - progress), perimeter]}
          //   strokeDasharray={[perimeter * progress, perimeter]}
          //   strokeDashoffset={1 - progress * perimeter}
          //   fill='blue'
          opacity={0.4}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[perimeter * progress, perimeter]}
          strokeLinecap='round'
        /> */}
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap='butt' // 👈 IMPORTANTE
          strokeDasharray={perimeter} // 👈 Igual que el de progreso
          strokeDashoffset={1000}
          opacity={0.4}
        />

        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={perimeter}
          strokeDashoffset={perimeter * (1 - progress)}
          strokeLinecap='round'
        />
      </Svg>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
