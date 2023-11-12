import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 500px;
  border: 1px solid black;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(Field)`
  margin-top: 10px;
  width: 200px;
`;

export const FormBtn = styled.button`
  display: block;
  width: 150px;
  border-radius: 5px;
  background-color: lightblue;
  cursor: pointer;
`;
