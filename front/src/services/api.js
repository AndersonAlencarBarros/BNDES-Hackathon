import axios from "axios"; 

const AXIOS_BASE_URL = "http://127.0.0.1:8000/api/test",

const API = axios.create({
	baseURL: AXIOS_BASE_URL,
});
 
export const getUsers = () => {
    return API.get(URL)
};

// Custom Hook

const getData = async () => {
    const { data } = await getUsers();
    return data;
  };

export const useGetUsers = () => {
    return useQuery(["get-users"], () => getData());
}


export default API;
