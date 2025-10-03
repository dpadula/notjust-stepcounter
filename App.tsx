import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type MetricProps = {
  label: string;
  value: string;
};

const Metric = ({ label, value }: MetricProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <View style={{ flexDirection: 'row', gap: 20 }}>
        <Metric label='Steps' value='12345' />
        <Metric label='Distance' value='0.75km' />
        {/* <View style={styles.metric}>
          <Text style={styles.label}>Steps</Text>
          <Text style={styles.value}>12345</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>0.75km</Text>
        </View> */}
      </View>

      <Metric label='Flights Climbed' value='0.75km' />
      {/* <View>
        <Text style={styles.label}>Flights Climbed</Text>
        <Text style={styles.value}>0.75km</Text>
      </View> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    padding: 20,
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 2,
  },
  metric: {
    marginRight: 50,
    marginVertical: 10,
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
