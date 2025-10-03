import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
