import { API } from "../configs/API";

export const DanhGiaService = {
  rateTeacher: async (idStudent, idTeacher, star, comment, jwt) => {
    return await fetch(API.RATE.ADD, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type':'application/json'
      },
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