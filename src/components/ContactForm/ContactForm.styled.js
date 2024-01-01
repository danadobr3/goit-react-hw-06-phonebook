import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
//   align-items: flex-start;
  border: 1px solid #e4e9f0;
  padding: 20px;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
`;

export const Text = styled.p`
  margin: 0;
//   display: flex;
//   justify-content: center;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: red;
`;

export const Input = styled(Field)`
  font-size: 20px;
  border-radius: 60px;
  border: 1px solid #e4e9f0;
  padding: 10px 15px;
    margin-bottom: 20px;
    width: 250px;
`;

export const Button = styled.button`
    width: 100px;
    background-color: #f3f6f9;
    border: none;
    border-radius: 20px;
    color: grey;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    transition: all 0.8s;
    margin: 0 auto 0;

    &:hover,
    &:focus {
    background-color: black;
    color: white;
  }
`;