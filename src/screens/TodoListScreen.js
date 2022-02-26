import React, {useState} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import styled from 'styled-components';
import AddInput from '../Components/AddInput';
import TodoList from '../Components/TodoList';
import Empty from '../Components/Empty';
import Header from '../Components/Header';

export default function TodoListScreen() {
  const [data, setData] = useState([]);

  // On add task button handling
  const submitHandler = value => {
    setData(prevTodo => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  // On task delete handling
  const deleteItem = key => {
    setData(prevTodo => {
      return prevTodo.filter(todo => todo.key != key);
    });
  };

  // On task checked complete
  const checkItem = key => {
    let index = data.findIndex(i => i.key === key);
    let newData = [...data];
    if (index > -1) {
      newData[index] = {...newData[index], checked: !newData[index]?.checked};
    }
    setData(newData);
  };

  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
      </View>

      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TodoList
              item={item}
              deleteItem={deleteItem}
              checkItem={checkItem}
            />
          )}
        />
        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  font-family: poppins-regular;
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin-bottom: 20px;
  border-radius: 50px;
`;
