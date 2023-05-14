import React, { useState, useEffect } from "react";
import { TodoListContainer, Title, InputArea, Input, Button, List, ListItem, RemoveButton, ListText, CheckButton, } from "../TodoList.styles";
import { CheckedVisible } from "./CheckedVisible";
import TodoLogoImage from "../assets/todo.png";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const storedTodos = (localStorage.getItem("todos"));
    if(storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    setIsLoading(false);
  }, []);

  useEffect(()=>{
    if(!isLoading) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoading]);


  const handleAddTodo = () => {
    if (!newTodo) {
      return;
    }
    const newId = todos.length + 1;
    const newTodoItem = {
      id: newId,
      text: newTodo,
      done: false
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo=> {
      if(todo.id === id) {
        return {...todo, done: !todo.done};
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter(todo=>todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <TodoListContainer>
      <Title>
        모두해요 할 일의 늪
        <img src={TodoLogoImage} alt="todo-logo"/>
      </Title>
      <InputArea>
        <Input 
          type="text"
          value={newTodo}
          onChange={(e:any)=>setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleAddTodo}>추가</Button>
      </InputArea>
      {isLoading ? 
        (<p>Loading...</p>) : 
        (<List>
          {todos.map(todo=>(
            <ListItem
              key={todo.id}
              onClick={()=>handleToggleTodo(todo.id)}
            >
              <RemoveButton onClick={(e:any)=>{
                e.stopPropagation();
                handleDeleteTodo(todo.id)
                }}>x</RemoveButton>
              <ListText style={{textDecoration: todo.done ? "line-through" : "none", color: todo.done ? "#adb5bd" : "#2d2d2d"}}>{todo.text}</ListText>
              {todo.done ? 
              <CheckButton>
                ✓
              </CheckButton>
              : ""
              }
              {todo.done ? 
              <CheckedVisible delay={1500} />
              : null  
              }
            </ListItem>
          ))}
        </List>)
      }
    </TodoListContainer>
  );
};