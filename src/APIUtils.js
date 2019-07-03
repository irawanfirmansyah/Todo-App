import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export function addTodo(todo) {
    return axios.post(BASE_URL + '/todos', todo);
}

export function deleteTodo(todo) {
    return axios.delete(BASE_URL + '/todos/' + todo.id);
}

export function editTodo(todo) {
    return axios.put(BASE_URL + '/todos/' + todo.id, todo);
}

export function getAllTodo() {
    return axios.get(BASE_URL + '/todos');
}