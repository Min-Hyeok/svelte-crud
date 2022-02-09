import API from '@/api/index.js';
import { RestClient } from 'Service/RestClient.js';

export class MemberService {
  #client;

  constructor() {
    this.#client = new RestClient();
  }

  async signin(params) {
    const response = await this.#client.post(API.SIGN_IN, params);

    return response;
  }

  async signup(params) {
    const response = await this.#client.post(API.SIGN_UP, params);

    return response;
  }

  async getUserInfo() {
    const response = await this.#client.get(API.MEMBER_INFO);

    return response;
  }
}
