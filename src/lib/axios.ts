import axios from "axios";

export const githubUsername = "guispati";
export const githubRepo = "Github-Blog";

export const api = axios.create({
    baseURL: `https://api.github.com`,
});