import React, { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const Home = () => {
  const [title , setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos);

  
  //등록
  const AddTodo = (event) =>{
    const newTodoList = {
      id: shortid.generate(),
      title,
      body: content,
      isDone: false,
    }
    dispatch(addTodo(newTodoList));
    console.log(newTodoList);
    console.log("todos :" , todos);
  }
  return <>
    <Header>
      Header
    </Header>
    <Main>
      <Input>
        <label>제목 : </label>
        <input onChange={event=>setTitle(event.target.value)} value={title} />
        <label>내용 : </label>
        <input  onChange={event=>setContent(event.target.value)} value={content} />
        <button type="submit" onClick={event=>AddTodo(event.target.value)}>추가</button>
      </Input>
    </Main>
    <TodoList>
      <p>TodoList</p>
      <p>제목 :{todos.title}</p>
      <p>내용 : {todos.body}</p>
      <p>완료여부 : {todos.isDone}</p>
    </TodoList>
    <DoneList>
    <p>DoneList</p>
     <p>제목 :{todos.title}</p>
      <p>내용 : {todos.body}</p>
      <p>완료여부 : {todos.isDone}</p>
    </DoneList>
  </>
};

export default Home;

const Header = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 50px;
`
const Main = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 50px;
`
const Input = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 50px;
`
const TodoList = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 200px;
`
const DoneList = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 200px;
`