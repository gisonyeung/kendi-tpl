/**
 * 常用类型JSON请求 Fetch 封装函数，支持 timeout 属性
 * Created by gisonyang on 2017/9/11
 */

// import 'whatwg-fetch';
import parseJSON from './parseJSON';

// 参数解释：https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalFetch/fetch
const defaultOpts = {
  method: "GET", // 默认 GET 方法
  headers: {
    "content-type": "application/json;charset=utf-8"
  },
  credentials: 'same-origin' // fetch默认不支持响应set-cookie到浏览器，所以要配置一下
}

/*
 * @param url { String }
 * @param options { Object }
 *   options.method { String } 请求方法，默认为 GET
 *   options.params { Object } url查询参数
 *   option.body    { Object } body参数，一般用于非GET请求
 * @return { Promise }
 */
module.exports = function _fetch(url, options = {}) {

  var abort_fn = null;

  

  if (options.params) {
    url = serializeParams(url, options.params);
  }


  // 传递 res 对象
  var fetch_promise = new Promise((resolve, reject) => {
    var _res = null;

    fetch(
      url,
      Object.assign({}, defaultOpts, options)
    )
    .then((res) => {
      _res = {};
      _res.status = res.status;
      _res.statusText = res.statusText;
      return res;
    })
    .then(res => res.json())
    .then(data => parseJSON(data))
    .then((json) => {
      resolve(json);
    })
    .catch((err) => {
      _res.msg = err;
      reject(_res);
    })

  });
    

  // 原生 fetch 不支持 timeout 字段，利用 Promise.race() 实现
  if (options.timeout) {

    var time_promise = new Promise((resolve, reject) => {
      abort_fn = function() {
        reject('request timeout!');
      };
    });

    var race_promise = Promise.race([
      fetch_promise,
      time_promise
    ])

    setTimeout(() => {
      abort_fn();
    }, options.timeout);

    return race_promise;

  }

  return fetch_promise;
}

function serializeParams(url, params) {
  url = new URL(url);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return url;
}