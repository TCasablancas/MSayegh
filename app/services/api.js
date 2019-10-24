import { create } from 'apisauce';

const api = create({
    baseURL: 'https://www.sayeghtv.com.br/_api',
});

api.addResponseTransform(response => {
    if (!response.ok) throw response;
});

export default api;