import { API } from "../configs/API";

export const NguoiDungService = {
  login: async (email, password) => {
    return await fetch(API.AUTH.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });
  },

  register: async (fullname, email, password, role) => {
    return await fetch(API.AUTH.REGISTER, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        email: email,
        password: password,
        Fullname: fullname,
        TypeAccount: role,
        Blocked: false,
        IsBan: false,
      })
    });
  },

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
  },

  updateAvatar: async (jwt, user, avatar) => {
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
        Avatar: avatar,  
      })
    })
  },

  listUser: async (jwt, query) => {
    if (!jwt) {
      return;
    }
    return await fetch(API.USER.LIST + query, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      }
    });
  },

  manageAccess: async (jwt, user) => {
    if (!jwt || !user) {
      return;
    }
    return await fetch(API.USER.MANAGE_ACCESS(user.id), {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IsBan: !user.IsBan,
      })
    });
  }
}