import styled from "styled-components";

export const TodoListContainer = styled.div`
  width: 500px;
  max-width: calc(100% - 80px);
  min-width: calc(100% - 80%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
`;

export const Title = styled.h1`
  height: 150px;
  padding: 2rem;
  font-size: 0;
  text-align: center;
  background-color: #9dffb0;
  margin: 0;
  border-radius: 20px 20px 0 0;

  & img {
    width: 80%;
    height: 100%;
  }
`;

export const InputArea = styled.div`
  display: flex;
  padding: 1rem;
`;

export const Input = styled.input`
  width: calc(100% - 70px);
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #81f1f7;
`;

export const Button = styled.button`
  width: 70px;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background: #81f1f7;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #3bc9db;
  }
`;

export const List = styled.ul`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  -webkit-user-select: none;
  user-select: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow: auto;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  -webkit-user-select: none;
  user-select: none;
  padding: 1rem;
  border-top: 1px solid #f1f3f5;

  &:hover {
    background-color: #e3fafc;
  }

  &:first-child {
    border-top: 1px solid #9dffb0;
  }
`;

export const RemoveButton = styled.button`
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  background: none;
  border: none;
  font-size: 1.2rem;
  padding: 0;
  cursor: pointer;
`;

export const ListText = styled.p`
  margin: 0;
`;

export const CheckButton = styled.button`
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #81f1f7;
  font-weight: 800;
  margin-left: auto;
  background: none;
  border: none;
`;

export const DoneImage = styled.img`
  position: absolute;
  right: 0;
  width: 60px;
  height: 80px;
`;
