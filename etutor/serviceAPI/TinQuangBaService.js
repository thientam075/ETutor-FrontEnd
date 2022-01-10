import { API } from "../configs/API";

export const TinQuangBaService = {
  postAdvertise: async (idTeacher, data) => {
    const { subject, cost, time, profile } = data;

    return await fetch(API.TinQuangBa.CREATE, {
      method: "POST",
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
};
