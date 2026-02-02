export const BASE_URL = 'http://127.0.0.1';

const BASE_URL_S = 'http://127.0.0.1:8000'; // server
const BASE_URL_H = 'http://127.0.0.1:4000';

export const API = {
  LOGIN: `${BASE_URL_S}/users/user/login`,
  KAKAO: `${BASE_URL_S}/users/user/login/kakao`,
  MAIN: `${BASE_URL_H}/hotels`,
};

export { BASE_URL_H, BASE_URL_S };
