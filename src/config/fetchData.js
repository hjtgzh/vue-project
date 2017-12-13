import axios from 'axios';

const parseData = (resp) => {
    const obj = JSON.parse(resp);
    if (obj.code === 40001) { // 登录已过期
        location.hash = '/login';
        obj.msg = '登录已过期,请重新登录';
    }
    return {
        code: (obj.success || obj.code === 'success') ? 'success' : 'error',
        msg: obj.msg,
        result: obj.data || obj.result
    };
};

const instance = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformResponse: [parseData]
});

export default function post (url, params) {
    // const accessToken = {
    //     access_token: config.User.getAccessToken()
    // };
    // const postParams = params ? Object.assign(params, accessToken) : accessToken;
    const postParams = params;
    return instance.post(`${url}`, JSON.stringify(postParams));
};
