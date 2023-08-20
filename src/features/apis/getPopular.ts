/* eslint-disable */
import { baseApi } from './baseApi';

export interface ResponseData {
    data: GoodsData[];
    paging: Paging;
}

export interface GoodsData {
    id: number;
    name: string;
    likeCount: number;
    reviewsCount: number;
    price: number;
    discountRate: number;
    isDiscounted: boolean;
    brand: Brand;
    picture: Picture;
    badges: Badge[];
    priceOriginal: number;
    status: string;
    __type__: string;
}

export interface Brand {
    id: number;
    name: string;
    description: string;
    __type__: string;
}

export interface Picture {
    id: string;
    originalWidth: number;
    originalHeight: number;
    __type__: string;
}

export type Badge = 'free_delivery' | 'only_styleshare' | 'new_arrival';

export interface Paging {
    next?: string;
}

export const getPopular = () => {
	return baseApi.get<ResponseData>('/18089356186790c942c75e6dd5f90b90/raw/40517fc4a027233a03c6b220a2b069e1be7c7c39/goods-response-1.json')
}
