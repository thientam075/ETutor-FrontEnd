import { API } from "../configs/API";

export const DanhGiaService = {
  rateTeacher: async (idStudent, idTeacher, star, comment) => {
    return await fetch(API.REPORT.ADD, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        data: {
          IDStudent: idStudent,  
          IDTeacher: idTeacher,
          Star: star,
          Comment: comment
          }
        })
      })
  }
}