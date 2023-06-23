import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;


export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
  width: 45%;
  font-size: 15px;
  font-weight: bold
`;

export const Button = styled.button`
  height: 42px;
  width: 30%;
  margin: 8px 0 8px 0;
  border-radius: 8px;
  border: none;
  background: #932952;
  font-size: 15px;
  font-weight: bold;
  color: #f5f5f5;
  cursor: pointer;
`;


export const Pending = styled.p`
  font-size: 1.3rem;
`;
