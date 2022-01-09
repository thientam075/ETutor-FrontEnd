import { API } from "../configs/API";

export const BaoCaoService = {
  reportTeacher: async (idStudent, idTeacher, reason) => {
    return await fetch(API.REPORT.ADD, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        data: {
          IDStudent: idStudent,  
          IDTeacher: idTeacher,
          Reason: reason
          }
        })
      })
  }
}