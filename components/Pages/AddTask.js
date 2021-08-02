import * as React from 'react';
import { Subheading } from 'react-native-paper';
import { TextInput, StyleSheet, Text,ScrollView, View, Platform, KeyboardAvoidingView } from 'react-native';
import { addTodo } from '../../redux/task/task.action';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';

const MyComponent = () => {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch()
  return (
    <ScrollView style={styles.container}>
      <Subheading style={styles.subheading}>Title</Subheading>
     

        <TextInput placeholderTextColor="grey"
          style={styles.input} placeholder={'Design team meeting'} onChangeText={text => setText(text)} />

      <Subheading
        style={styles.subheading}
      >Deadline</Subheading>
      <TextInput
        placeholderTextColor="grey"
        placeholder="2021-02-28"
        style={styles.input}
      />
      <View style={{ display: "flex", flexDirection: "row",justifyContent:"space-between" }}   >
        <View style={{ flex:1}}>
          <Subheading
            style={styles.subheading}
          >Start time</Subheading>
          <TextInput
            placeholderTextColor="grey"
            placeholder="11:00 Am"
            style={styles.input}
          />
        </View>
        <View style={{ flex:1}}>
          <Subheading
            style={styles.subheading}
          >End time</Subheading>
          <TextInput
            placeholderTextColor="grey"
            placeholder="14:00 Pm"
            style={styles.input}
          />
        </View>
      </View>
      <Subheading style={styles.subheading}>Remind</Subheading>
      <TextInput
        placeholderTextColor="grey"
        placeholder="10 minutes early"
        style={styles.input}
      />
      <Subheading
        style={styles.subheading}>
        Repeat</Subheading>
      <TextInput
        placeholderTextColor="grey"
        placeholder="Weekly"
        style={styles.input}
      />
      
      <Button
        color="#841584" style={{ margin: 15, backgroundColor: "green" }} onPress={() => dispatch(addTodo(text))} mode="contained" >
        <Text>create a task</Text>
      </Button>
    </ScrollView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderRadius: 5, padding: 15, paddingVertical: 0,//fix visibility
    fontSize: 15, backgroundColor: "#d9d9d9", marginLeft: 20,
    marginRight: 20, marginBottom: 20, height: 30,
  },
  subheading: {
    color: "black", marginLeft: 20,
    fontSize: 15, fontWeight: "bold"
  }

})
