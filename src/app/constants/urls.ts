import {environment} from "../../environments/environment";

const {API} = environment;

const auth = `${API}/auth`
const students = `${API}/orders`
const users = `${API}/users`

const urls = {
  auth: {
    login: `${auth}/login`,
    refresh:`${auth}/refresh`,
    register: users,
    auth: `${auth}/login/orders`
  },
  students: {
    full: students,
    byId: (id: number): string => `${students}/${id}`
  }
}


export {
  urls
}
