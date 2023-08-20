/* eslint-disable */
import axios from 'axios';

export const baseApi = axios.create({
	baseURL: 'https://gist.githubusercontent.com/styleshare-frontend',
	headers: {
		'Content-Type': 'text/plain',
	},
});
