const LOCAL_STORAGE_USER_ITEM = 'user_token';

const saveUser = (token) => {
  localStorage.setItem(LOCAL_STORAGE_USER_ITEM, token);
};

const clearUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_USER_ITEM);
};

const getUserToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_USER_ITEM);
};

export default {
  saveUser,
  clearUser,
  getUserToken,
};
