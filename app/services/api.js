import { create } from 'apisauce';

const api = create({
    baseURL: 'https://msayegh-30d8d.firebaseio.com',
});

api.addResponseTransform(response => {
    if (!response.ok) throw response;
});

export default api;