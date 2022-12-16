import React from "react";
import { BsCircle } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./TodoItem.css";

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;

  return (
    <div className="todoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <BsFillCheckCircleFill
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <BsCircle
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
