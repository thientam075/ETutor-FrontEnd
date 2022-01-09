const API_ROOT = 'http://localhost:1337/api';

export const API = {
  USER: {
    REGISTER: API_ROOT+ '/nguoi-dungs/?',
    LIST: API_ROOT + '/nguoi-dungs/?',
    MANAGE_ACCESS: (id) => API_ROOT + `/nguoi-dungs/${id}`,
  },
  REPORT: {
    LIST: API_ROOT + '/bao-caos/?',
  }
}