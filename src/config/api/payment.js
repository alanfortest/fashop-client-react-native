import { env } from '../index';

const ROOT_URL = `${env.domain}/server/`;
export const PaymentApi = {
    list: {
        url: `${ROOT_URL}payment/list`,
        method: 'GET'
    },
}
