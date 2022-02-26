import React, {useState} from 'react';
import styled from 'styled-components';

const AddInput = ({submitHandler}) => {
  const [value, setValue] = useState('');

  const onChangeText = text => {
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input
          placeholder="Add Task..."
          placeholderTextColor="midnightblue"
          value={value}
          onChangeText={onChangeText}
        />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          setValue('');
          submitHandler(value);
        }}>
        <Image source={require('../assets/images/plus.png')} />
      </SubmitButton>
    </ComponentContainer>
  );
};

export default AddInput;

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Image = styled.Image`
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
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
