import { API } from "../configs/API";

export const NguoiDungService = {
  updateInfo: async (jwt, user, fullname) => {
    if (!jwt || !user) {
      return;
    }

    return await fetch(API.USER.UPDATE(user.id), {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        Fullname: fullname,  
      })
    })
  }
}