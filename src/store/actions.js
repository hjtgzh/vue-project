import { INCREMENT } from './mutationTypes';
import { getNumber } from '../service/getData';

export default {
    increment ({ commit }, data) {
        getNumber(data).then(res => {
            commit(INCREMENT, res);
        });
    }
};
