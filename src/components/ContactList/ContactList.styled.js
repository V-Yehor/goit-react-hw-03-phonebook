import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  list-style: circle;
  margin-left: 30px;
`;

export const ListItemBtn = styled.button`
  display: inline-block;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;
