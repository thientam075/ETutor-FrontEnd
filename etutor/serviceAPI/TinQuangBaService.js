import { API } from "../configs/API";

export const TinQuangBaService = {
  postAdvertise: async (idTeacher, data) => {
    const { subject, cost, time, profile } = data;
    console.log('idTeacher', idTeacher)
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
};
