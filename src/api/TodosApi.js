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