import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Metric from './src/components/Metric';
import RingProgress from './src/components/RingProgress';

export default function App() {
  const [date, setDate] = useState(new Date());
  const changeDate = (numDays: number) => {
    const currentDate = new Date(date); // Create a copy of the current date
    // Update the date by adding/subtracting the number of days
    currentDate.setDate(currentDate.getDate() + numDays);

    setDate(currentDate); // Update the state variable
  };
  return (
    <View style={styles.container}>
      <View style={styles.datePicker}>
        <AntDesign
          onPress={() => changeDate(-1)}
          name='left'
          size={20}
          color='#C3FF53'
        />
        <Text style={styles.date}>{date.toDateString()}</Text>

        <AntDesign
          onPress={() => changeDate(1)}
          name='right'
          size={20}
          color='#C3FF53'
        />
      </View>
      <RingProgress radius={100} strokeWidth={40} progress={0.6} />
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
    marginVertical: 50,
  },
  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 20,
  },
});
