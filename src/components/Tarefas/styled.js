import styled from "styled-components";

export const TaskWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: #932952;
  border-radius: 16px;
  margin: 10px;
`;

export const Task = styled.div`
  text-align: center;
  margin: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 4px;
`;

export const TaskTitle = styled.li`
  font-size: 1.5rem;
  margin-right: 12px;
`;

export const TaskComplete = styled.button`
height: 28px;
width: 10%;
cursor: pointer;
background: #2bd07b;
border: 0;
border-radius: 5px;
color: #f3f3f3;
margin-right: 4px;
`;

export const TaskRemove = styled.button`
  height: 28px;
  width: 10%;
  cursor: pointer;
  background: #d02b2b;
  border: 0;
  border-radius: 5px;
  color: #f3f3f3;
`;
