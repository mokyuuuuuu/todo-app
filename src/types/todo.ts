export type TodoStatus = '未着手' | '進行中' | '完了';

export interface Todo {
  id: string;
  title: string;
  category: string;
  description?: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt: Date;
}

// TODOの作成時に使用する型
export type CreateTodoInput = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;

// TODOの更新時に使用する型
export type UpdateTodoInput = Partial<Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>>; 