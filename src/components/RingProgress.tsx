import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, CircleProps } from 'react-native-svg';

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

const color = '#EE0F55';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress = 0.5,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const perimeter = 2 * Math.PI * innerRadius;

  const percentageFill = useSharedValue(0.6);
  useEffect(() => {
    percentageFill.value = withTiming(progress, { duration: 800 });
  }, [progress]);
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDasharray: [perimeter * percentageFill.value, perimeter],
    };
  });

  const defaultCircleProps: CircleProps = {
    cx: radius,
    cy: radius,
    r: innerRadius,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: 'round',
    fill: 'none',
  };
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
          {...defaultCircleProps}
          strokeWidth={strokeWidth * 0.85}
          strokeOpacity={0.4}
        />
        <AnimatedCircle
          animatedProps={animatedProps}
          {...defaultCircleProps}
          transform={`rotate(${-90}, ${radius}, ${radius})`}
        />
      </Svg>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
