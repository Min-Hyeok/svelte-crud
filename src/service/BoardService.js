import API from '@/api/index.js';
import { RestClient } from 'Service/RestClient.js';

export class BoardService {
  #client;

  constructor() {
    this.#client = new RestClient();
  }

  async list() {
    const response = await this.#client.get(API.BOARD_LIST);

    return response;
  }

  async write(params) {
    const response = await this.#client.post(API.BOARD, params);

    return response;
  }

  async view(idx) {
    const response = await this.#client.get(API.BOARD, `/${idx}`);

    return response;
  }

}
