
import axios from 'axios'

export const getFetchUsers =() => {
    return axios.get('http://localhost:4000/employees');
}

export const postEmployeeData =(employee) => {
    return axios.post('http://localhost:4000/employees',employee)
}