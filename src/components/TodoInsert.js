import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
// import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import "./TodoInsert.css";

const handleChildClick = (e) => {
  e.stopPropagation();
};

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onDelete,
  onUpdate,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    // 창 닫기
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}>
        <form
          onClick={handleChildClick}
          onSubmit={
            selectedTodo
              ? () => {
                  onUpdate(selectedTodo.id, value);
                }
              : onSubmit
          }
        >
          <input
            placeholder="Enter new task"
            value={value}
            onChange={onChange}
          ></input>
          {selectedTodo ? (
            <div className="re-write">
              <FiEdit2 onClick={() => onUpdate(selectedTodo.id, value)} />
              <MdOutlineDelete onClick={() => onDelete(selectedTodo.id)} />
            </div>
          ) : (
            <button type="submit">
              <IoMdAddCircle />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default TodoInsert;
