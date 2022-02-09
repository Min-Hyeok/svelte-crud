export class RestClient {
  #timeout;

  constructor() {
    this.#timeout = 5000;
  }

  async get(url, params = '') {
    const response = await Promise.race([
      fetch(`${url}${params}`, {
        type: 'GET',
        credentials: 'include'
      }),
      new Promise((resolve) => setTimeout(() => resolve(false), this.#timeout))
    ]);

    if (response === false) {
      throw new Error('시간 초과');
    }

    const contentType = response.headers.get('content-type').includes('json') ? 'json' : 'text';

    return response[contentType]();
  }

  async sendFetchData(url, params, method) {
    const response = await Promise.race([
      fetch(url, {
        method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(params),
      }),
      new Promise((resolve) => setTimeout(() => resolve(false), this.#timeout))
    ]);

    if (response === false) {
      throw new Error('시간 초과');
    }

    const contentType = response.headers.get('content-type').includes('json') ? 'json' : 'text';

    return response[contentType]();
  }

  async post(url, params) {
    return await this.sendFetchData(url, params, 'POST');
  }

  async put(url, params) {
    return await this.sendFetchData(url, params, 'PUT');
  }

  async delete(url, params) {
    return await this.sendFetchData(url, params, 'DELETE');
  }

}
