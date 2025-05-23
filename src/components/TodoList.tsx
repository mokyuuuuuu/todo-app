'use client';

import { useState } from "react";
import { Todo, TodoStatus } from "@/types/todo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "サンプルTODO",
      category: "仕事",
      description: "これはサンプルのTODOです",
      status: "未着手",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const handleStatusChange = (id: string, newStatus: TodoStatus) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status: newStatus, updatedAt: new Date() } : todo
    ));
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
} 