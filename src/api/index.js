// const baseURL = 'https://mariadb-express-crud.herokuapp.com/api/v1';
const baseURL = 'http://localhost/api/v1';

const URL = {
  SIGN_IN: baseURL + '/member/signin',
  SIGN_UP: baseURL + '/member/signup',
  MEMBER_INFO: baseURL + '/member/getMemberInfo',
  BOARD_LIST: baseURL + '/board/list',
  BOARD: baseURL + '/board',
};

export default URL;
