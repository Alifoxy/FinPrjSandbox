import {environment} from "../../environments/environment";

const {API} = environment;

const auth = `${API}/auth`
const students = `${API}/orders`
const users = `${API}/users`

const urls = {
  auth: {
    auth: auth,
    refresh:`${auth}/refresh`,
    register: users,
    login: `${auth}/login`
  },
  students: {
    full: students,
    byId: (id: number): string => `${students}/${id}`
  }
}


export {
  urls
}
