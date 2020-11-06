import axios from 'axios'
import { Message } from 'element-ui'

class AxiosHttp {
  BASE_URL = 'http://api-test.yaodouwang.com';
  url = '';
  data = {}
  constructor(url: string, data: any) {
    this.url = url;
    this.data = data
  }

  /**
   * POST请求
   * @param callback 返回的数据
   */
  postRequest(callback: any) {
    axios.post(`${this.BASE_URL}${this.url}`, this.data)
      .then(function (response) {
        return callback(response)
      })
      .catch(function (error) {
        return callback(error)
      });
  }

  /**
   * GET请求
   * @param callback 返回数据
   */
  getRequest(callback: any) {
    axios.get(`${this.BASE_URL}${this.url}`, {
      params: this.data
    })
      .then(function (response) {
        return callback(response)
      })
      .catch(function (error) {
        return callback(error)
      });
  }
}

axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

//响应拦截器
axios.interceptors.response.use(
  function (config) {
    switch (config.data.code) {
      case '404':
        Message({
          message: config.data.msg,
          type: 'error',
          duration: 3 * 1000
        });
        break;
      case '500':
        Message({
          message: config.data.msg,
          type: 'error',
          duration: 3 * 1000
        });
        break;

      default:
        break;
    }
    return config
  }
);

export default AxiosHttp