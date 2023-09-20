import React, { useState } from "react";
import "./TodoList.css";

interface TodoItem {
  id: number;
  text: string;
  isEdit: boolean;
}

const TodoList: React.FC = () => {
  const [idTodo, setIdTodo] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([
        ...todoList,
        {
          id: idTodo,
          text: newTodo,
          isEdit: false,
        },
      ]);
      setNewTodo("");
      let setID = idTodo + 1;
      setIdTodo(setID);
    }
  };

  const handleEditTodo = (item: TodoItem) => {
    let edit = todoList.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, isEdit: !todo.isEdit };
      }
      return todo;
    });
    setTodoList(edit);
  };

  const handleChangeUpdate = (id: number, newText: string) => {
    let updateTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });

    setTodoList(updateTodoList);
  };

  const handleDelete = (item: TodoItem) => {
    let deletedList = todoList.filter((todo) => {
      return todo.id !== item.id;
    });
    setTodoList(deletedList);
  };

  return (
    <>
      <div className="content">
        <div className="box shadow-lg">
          <header>
            <h4>Hello Todo List</h4>
          </header>
          <section>
            <div className="add-todolist">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
              />
              <button className="btn btn-success" onClick={handleAddTodo}>
                Add
              </button>
            </div>
            <div className="todolist mt-3">
              <ul>
                {todoList.map((item: TodoItem, index: number) => {
                  return (
                    <li key={index} className="list-item mb-2">
                      <div className="list-item-text">
                        {item.isEdit ? (
                          <input
                            className="form-control"
                            defaultValue={item.text}
                            onChange={(e) => handleChangeUpdate(item.id, e.target.value)}
                            id={`todoList${item.id}`}
                          />
                        ) : (
                          <p>{item.text}</p>
                        )}
                      </div>
                      <div className="list-item-btn">
                        {item.isEdit ? (
                          <button className="btn" onClick={() => handleEditTodo(item)}>
                            <i className="bi bi-save-fill"></i>
                          </button>
                        ) : (
                          <button className="btn" onClick={() => handleEditTodo(item)}>
                            <i className="bi bi-pencil-square"></i>
                          </button>
                        )}
                        <button className="btn" onClick={() => handleDelete(item)}>
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TodoList;
