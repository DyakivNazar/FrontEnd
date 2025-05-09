import axios from 'axios';
import {ICars} from "../models/ICars.ts";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'},
});

axiosInstance.interceptors.request.use((request) => {
    return request;
});

export const getAllCars = async (): Promise<ICars[]> => {
    const {data} = await axiosInstance.get<ICars[]>('/cars');
    return data
}

export const addCar = async (car: ICars)=> {
    await axiosInstance.post<ICars>('/cars', car);
}