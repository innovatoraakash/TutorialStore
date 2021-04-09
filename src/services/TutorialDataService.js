import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/tutorials");
    }

    get(id) {
        return http.get(`/tutorials/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?${title}`, title);
    }
    login(data) {
        return http.put(`/auth/login/${data.email}`, data);
    }
    signup(data) {
        return http.post(`/auth/signup`, data);
    }
    forgetpass(data) {
        return http.post(`/auth/forgetpass`, data);
    }
}

export default new TutorialDataService();