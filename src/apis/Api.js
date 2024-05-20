import axios from "axios";
  //creating an instance of axios

  const Api = axios.create({
    baseURL : "http://localhost:8000",
    withCredentials : true,
    headers : {
        "content-Type" : "application/json"
    }

  });

export const testApi = () => Api.get('/test')

//creating register api


export const registerUserApi = (data) => Api.post('/api/user/create',data)


//creating login api
export const loginUserApi = (data) => Api.post('api/user/login',data)
