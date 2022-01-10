import { API } from "../configs/API";

export const NguoiDungService = {
  updateInfo: async (jwt, user, fullname) => {
    if (!jwt || !user) {
      return;
    }

    return await fetch(API.USER.MANAGE_ACCESS(user.id), {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        Fullname: fullname,  
      })
    })
  },

  updateAvatar: async (jwt, user, avatar) => {
    if (!jwt || !user) {
      return;
    }

    return await fetch(API.USER.MANAGE_ACCESS(user.id), {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        Avatar: avatar,  
      })
    })
  }
}