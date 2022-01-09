const API_ROOT = "http://localhost:1337/api";

export const API = {
  AUTH: {
    LOGIN: API_ROOT + "/auth/local",
  },
  USER: {
    REGISTER: API_ROOT + "/nguoi-dungs/?",
    LIST: API_ROOT + "/nguoi-dungs/?",
    MANAGE_ACCESS: (id) => API_ROOT + `/nguoi-dungs/${id}`,
  },
  REPORT: {
    LIST: API_ROOT + "/bao-caos/?",
    ADD: API_ROOT + "/bao-caos",
  },
  RATE: {
    ADD: API_ROOT + "/danh-gias",
  },
  TinQuangBa: {
    LIST: API_ROOT + "/tin-quang-bas",
    MANAGE_ACCESS: (id) => API_ROOT + `/tin-quang-bas/${id}`,
    RANKTUTOR: API_ROOT + `/tin-quang-bas/rankTutor`,
    SEARCH_TUTOR: (name) =>
      API_ROOT + `/tin-quang-bas/searchTutor?name=${name}`,
    FULLINFO: (id) =>
    API_ROOT + `/tin-quang-bas/fullInfo/${id}`,
  },
};
