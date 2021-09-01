export interface TODO {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const todoDefaultValue: TODO = {
  id: 0,
  userId: 0,
  title: '',
  completed: false,
}