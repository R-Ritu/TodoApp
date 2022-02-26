import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components';

const TodoList = ({item, deleteItem, checkItem}) => {
  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          {item?.checked ? (
            <Image source={require('../assets/images/checkmarkTick.png')} />
          ) : (
            <Image source={require('../assets/images/checkmark.png')} />
          )}
        </CirlceContainer>
        <TouchableOpacity onPress={() => checkItem(item.key)}>
          <TextItem checked={item.checked}>{item.value}</TextItem>
        </TouchableOpacity>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <Image source={require('../assets/images/delete.png')} />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
};

export default TodoList;

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
  ${props =>
    props.checked &&
    css`
      text-decoration-line: line-through;
      text-decoration-style: solid;
      text-decoration-color: midnightblue;
    `}
`;

const TextDate = styled.Text`
  color: goldenrod;
  font-size: 15px;
  margin-right: 20px;
  border-radius: 10px;
  width: 40px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 5px;
  height: 40px;
  border-radius: 10px;
`;

const Image = styled.Image`
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;
