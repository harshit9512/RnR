import axios from 'axios'

const EMPLOYEES_API_BASE_URL = "http://localhost:8090/api/v1/users";

class UserServices {

    getUserById(userId){
        return axios.get(EMPLOYEES_API_BASE_URL + '/' + userId)
    }

}
let userServices = new UserServices();
export default userServices;