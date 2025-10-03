import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type MetricProps = {
  label: string;
  value: string;
};

const Metric = ({ label, value }: MetricProps) => {
  return (
    <View style={styles.metric}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

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
  metric: {
    // marginVertical: 10,
    // minWidth: '40%',
  },
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    color: '#bbb7b7ff',
    fontSize: 35,
    fontWeight: '400',
  },
});
