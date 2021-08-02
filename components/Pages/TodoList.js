import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Title,Button } from 'react-native-paper';
import Task from '../Task';
import { useSelector } from 'react-redux';
import { completeTodo, clearTodo } from '../../redux/task/task.action';
import { useDispatch } from 'react-redux';

export default function TodoList({ navigation }) {
  const dispatch = useDispatch()

  const pendingTasks = useSelector(state => state.taskReducer.pendingTasks)
  const completedTasks = useSelector(state => state.taskReducer.completedTasks)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{  flexGrow: 1  }}
        keyboardShouldPersistTaps='handled' >
        { completedTasks.length>0 && <Title style={{ color: "black", marginLeft: "5%" }}>Completed tasks</Title>}
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {
              completedTasks.length>0 && completedTasks.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => dispatch(clearTodo(index))}>
                    <Task completed={true} text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
        {pendingTasks.length>0 &&  <Title style={{ color: "black", marginLeft: "5%" }}>Pending tasks</Title>}

        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {
              pendingTasks.length>0 && pendingTasks.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => dispatch(completeTodo(index))}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
            {pendingTasks.length===0&&<Title style={{ color: "black", marginLeft: "5%" }}>There is nothing to do..</Title>}
      </ScrollView>
      <Button title="Add a task"
        color="#841584" style={{ margin: 15, backgroundColor: "green" }} onPress={() => navigation.navigate('Add task')} mode="contained" >
      <Text>add a task</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    //position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    minHeight: 65,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
