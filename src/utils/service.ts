import request, { extend } from 'umi-request';
import { message as alertMessage } from 'antd';
import { history } from 'umi';


// 在请求之前做一些事情，比如改变url，或者改变options
// 在请求拦截器里面打开loading
request.interceptors.request.use((url, options) => {
    options.headers = {
      ...options.headers,
      Authorization: localStorage.token || '',
    };
    return {
      url,
      options,
    };
  });

  const ERROR_CODE: { [propName: number | string]: string } = {
    500: '用户没有权限',
    501: '用户当前未登录',
    504: '连接超时',
    777: '用户token过期',
  };
  
  const STATUS_CODE: { [propName: number]: string } = {
    401: '用户未登录',
    403: '没有权限访问该接口',
    404: '当前接口未定义',
  };


  // 在请求回来之后组做一些事情
// 在返回拦截器里面关闭loading
request.interceptors.response.use(async (response, options) => {
    if(response.status === 200){
        // 进行正确处理 {code:'SUCCESS',data:[],message:''}
        const res: { code: string | number; data: any } = await response.json();
        if(res.code===0){
            return res.data;
        }else{
            //错误处理
            if(options.noError){
                //接口处设置，是否需要处理
                return res.data
            }else{
                if(res.code === 777){
                    //跳转到登录界面
                    history.push('/login')
                    //清理旧token
                    localStorage.clear();
                }else{
                    //统一处理
                    const message = ERROR_CODE[res.code] || '默认错误';
                    console.error(message);
                    alertMessage.error(message);
                    // 报错，中断代码执行
                    throw message;

                }
            }
        }
    }else{
        const status = response.status;
    const message = STATUS_CODE[status] || '服务器错误';
    // 也可以在里面判断401等逻辑
    if (status === 401) {
      // 清空local 跳转登录页面
      history.push('/login')
      localStorage.clear();
    }
    console.error(message);
    alertMessage.error(message);
    throw message;
    }
  });


// 定义全局请求都需要的东西，避免重复定义
// extend里面 只应该有静态的不会改变的数据
const http = extend({
    // 超时时间，单位毫秒  1000毫秒 = 1秒
    timeout: 5000,
    // 请求前缀
    prefix: '/api',
    headers: {
      // 'content-type': 'application/json',
    },
  });
  export default http;
