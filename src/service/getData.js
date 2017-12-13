import post from '../config/fetchData';
import config from '../config/config';

const server = config.BackendServer;

/**
 * 获取table列表
 */
export const getTableData = async(options) => {
    const url = `${server}/home/list`;
    let _resp;
    try {
        _resp = (await post(url, options)).data.result;
    } catch (e) {
        // dispatch(backendError('加载行情K线数据失败'));
    }
    // if (_resp.code === config.successState) {
    //     dispatch(createAction('GET_KCHART_SEARCH_DATA')({
    //         kLineChart: _resp.result[0].kLineChart,
    //     }));
    // } else {
    //     dispatch(backendError('加载行情K线数据失败'));
    // }
    return _resp;
};

/**
 * 获取测试number
 */
export const getNumber = async(options) => {
    const url = `${server}/number`;
    let _resp;
    try {
        _resp = (await post(url, options)).data.result.number;
    } catch (e) {
        // dispatch(backendError('加载行情K线数据失败'));
    }
    // if (_resp.code === config.successState) {
    //     dispatch(createAction('GET_KCHART_SEARCH_DATA')({
    //         kLineChart: _resp.result[0].kLineChart,
    //     }));
    // } else {
    //     dispatch(backendError('加载行情K线数据失败'));
    // }
    return _resp;
};
