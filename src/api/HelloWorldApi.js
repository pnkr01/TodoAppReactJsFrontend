import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export function retrieveHelloWorldApi() {
    return apiClient.get("/hello-world");
}

export function retrieveHelloWorldBeanApi() {
    return apiClient.get("/hello-world-bean");
}

export const retrieveHelloWorldPathNameApi = (name) => apiClient.get(`/hello-world/path-variable/${name}`);