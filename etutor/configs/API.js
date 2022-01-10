const API_ROOT = "http://localhost:1337/api";

export const API = {
  AUTH: {
    LOGIN: API_ROOT + "/auth/local",
    REGISTER: API_ROOT + '/auth/local/register',
  },
  USER: {
    LIST: API_ROOT + "/users/?",
    MANAGE_ACCESS: (id) => API_ROOT + `/users/${id}`,
  },
  REPORT: {
    LIST: API_ROOT + "/bao-caos/?",
    ADD: API_ROOT + "/bao-caos",
  },
  RATE: {
    ADD: API_ROOT + "/danh-gias",
  },
  TinQuangBa: {
    LIST: API_ROOT + "/tin-quang-bas/findAllInfo",
    MANAGE_ACCESS: (id) => API_ROOT + `/tin-quang-bas/${id}`,
    RANKTUTOR: API_ROOT + `/tin-quang-bas/rankTutor`,
    SEARCH_TUTOR: (name) =>
      API_ROOT + `/tin-quang-bas/searchTutor?name=${name}`,
    UPDATE_INDEX: `/tin-quang-bas/updateIndex`,
    FULLINFO: (id) =>
    API_ROOT + `/tin-quang-bas/fullInfo/${id}`,
    CREATE: API_ROOT + `/tin-quang-bas`,
    GETBYIDTEACHER: (id) =>
    API_ROOT + `/tin-quang-bas/getAdByTeacherId/${id}`,
  },
};
