import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
});

export function retrieveTodosApi(username) {
    return apiClient.get(`/users/${username}/todo`);
}

export function deleteTodoApi(username, id) {
    return apiClient.delete(`/users/${username}/todo/${id}`);
}

export function retrieveTodoApi(username, id) {
    return apiClient.get(`/users/${username}/todo/${id}`);
}

export function updateTodoApi(username, id, todo) {
    return apiClient.put(`/users/${username}/update/todo/${id}`, todo);
}

export function createTodoApi(username, todo) {
    return apiClient.post(`/users/${username}/createTodo`, todo);
}