import React from "react";
import "./Template.css";
import Header from "./Header";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

let nextId = 4;

const Template = ({ todos, setTodos }) => {
  const [insertToggle, setinsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setinsertToggle(!insertToggle);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onDelete = (id) => {
    // 창 닫기
    onInsertToggle();
    // todos 배열 변경
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    // 수정하면 토글이 닫히도록
    onInsertToggle();
    setTodos((todos) => {
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
    });
  };

  return (
    <div className="Template">
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
      <div className="template-container">
        <Header />
        <div className="title">To Do List </div>
        <div className="task-title">TODAY'S TASKS ({todos.length})</div>
        {/* <div>{children}</div> */}
        <div className="btnContainer">
          <div className="add-todo-button" onClick={onInsertToggle}>
            <IoMdAddCircle />
          </div>
        </div>
        <TodoList
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      </div>
    </div>
  );
};

export default Template;
