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

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    color: '#bbb7b7ff',
    fontSize: 35,
    fontWeight: '400',
  },
  metric: {
    // marginVertical: 10,
    // minWidth: '40%',
  },
});

export default Metric;
