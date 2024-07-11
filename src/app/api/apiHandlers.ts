import axios, { AxiosResponse } from "axios";
import { API_URL } from "../constants";

export const httpGet = async <TResponse>(
    relativeUrl: string,
): Promise<AxiosResponse<TResponse>> => {
    return axios.get<TResponse>(`${API_URL}${relativeUrl}`)
};

export const httpPost = async <TResponse, TRequest>(
    relativeUrl: string,
    data?: TRequest,
): Promise<AxiosResponse<TResponse>> => {
    return axios.post<TResponse>(`${API_URL}${relativeUrl}`, data);
};

export const httpPut = async <TResponse, TRequest>(
    relativeUrl: string,
    data?: TRequest,
): Promise<AxiosResponse<TResponse>> => {
    return axios.put<TResponse>(`${API_URL}${relativeUrl}`, data);
};