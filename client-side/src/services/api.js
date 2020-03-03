import axios from "axios";
/*
axios.defaults.baseURL = "http://localhost:58776/api/";

const dCandidate = {
    fetchAll: () => axios.get("DCandidate/"),
    fetchById: (id) => axios.get("DCandidate/" + id),
    create: (newOne) => axios.post("DCandidate/", newOne),
    edit: (id, newOne) => axios.put("DCandidate/" + id, newOne),
    delete: (id) => axios.delete("DCandidate/" + id)
};

export default {
    dCandidate
};
*/

const baseUrl = "http://localhost:58776/api/"



export default {

    dCandidate(url = baseUrl + 'dcandidate/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}