import axios from 'axios';

const apiUrl = 'https://simobile.singapoly.com/api/trpl/customer-service';

export const getRecords = () => axios.get(`${apiUrl}/1315051069`);

export const deleteRecord = (id_customer_service: number) => axios.delete(`${apiUrl}/${id_customer_service}`);

export const updateRecord = (id_customer_service: number, data: any) => axios.put(`${apiUrl}/${id_customer_service}`, data);