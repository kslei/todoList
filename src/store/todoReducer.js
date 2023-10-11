 const defaultState = {
  todos: [
    { id: 0, title: 'Покупки', description: 'Купити молоко', status: false },
    { id: 1, title: 'Зустріч', description: 'Зустрітись з Андрієм', status: false },
    { id: 2, title: 'Уроки', description: 'Перевірити у доньки математику', status: true }
  ],
}

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.payload.id), action.payload].sort((a, b) => a.id - b.id) }
    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
    default:
      return state
  }
}