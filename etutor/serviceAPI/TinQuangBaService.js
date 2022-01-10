import { API } from "../configs/API";

export const TinQuangBaService = {
  postAdvertise: async (idTeacher, data, jwt) => {
    const { subject, cost, time, profile } = data;

    return await fetch(API.TinQuangBa.CREATE, {
      method: "POST",
      headers: { 'Authorization': `Bearer ${jwt}`,
      'Content-Type':'application/json' },
      body: JSON.stringify({
        data: {
          IDTeacher: idTeacher,
          subjects: subject,
          Cost: cost,
          Time: time,
          Profile: profile,
        },
      }),
    });
  },
  getAdvertise: async (userID, jwt) => {
    return await fetch(API.TinQuangBa.FULLINFO(userID), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
  },
  updateAdvertise: async (idTeacher, data) => {
    const { subject, cost, time, profile } = data;

    return await fetch(API.TinQuangBa.CREATE, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          IDTeacher: idTeacher,
          subjects: subject,
          Cost: cost,
          Time: time,
          Profile: profile,
        },
      }),
    });
  },
  searchTutor: async (name, jwt) => {
    return await fetch(API.TinQuangBa.SEARCH_TUTOR(name), {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
  },
  rankTutor: async (jwt) => {
    return await fetch(API.TinQuangBa.RANKTUTOR, {
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
  },
  fullInfo: async (id) => {
    return await fetch(API.TinQuangBa.FULLINFO(id), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  AllTutor: async () => {
    return await fetch(API.TinQuangBa.LIST);
  },
  updateIndex: async () => {
    return await fetch(API.TinQuangBa.UPDATE_INDEX);
  },
  getAdByIdTeaher: async (jwt, id) => {
    return await fetch(API.TinQuangBa.GETBYIDTEACHER(id), {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
  },
};
