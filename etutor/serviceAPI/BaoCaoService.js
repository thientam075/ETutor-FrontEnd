import { API } from "../configs/API";

export const BaoCaoService = {
  reportTeacher: async (idStudent, idTeacher, reason, jwt) => {
    return await fetch(API.REPORT.ADD, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        data: {
          IDStudent: idStudent,  
          IDTeacher: idTeacher,
          Reason: reason
          }
        })
      })
  },
  listReport: async (jwt, query) => {
    if (!jwt) {
      return;
    }
    return await fetch(API.REPORT.LIST + query, {
      method: 'GET',
      headers: { 
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
}