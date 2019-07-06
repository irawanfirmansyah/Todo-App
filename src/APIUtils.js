import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const addTodo = (todo) => {
    return axios.post(BASE_URL + '/todos', todo);
}

export const deleteTodo = (todo) => {
    return axios.delete(BASE_URL + '/todos/' + todo.id);
}

export const editTodo = (todo) => {
    return axios.put(BASE_URL + '/todos/' + todo.id, todo);
}

export const getAllTodo = () => {
    return axios.get(BASE_URL + '/todos');
}