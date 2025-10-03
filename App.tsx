import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Metric from './src/components/Metric';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.metricContainer}>
        <Metric label='Steps' value='12345' />
        <Metric label='Distance' value='0.75km' />
        <Metric label='Flights Climbed' value='12' />
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    padding: 12,
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 2,
  },
  metricContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 55,
  },
});
