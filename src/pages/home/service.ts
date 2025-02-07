import { GET } from '@/service/api';

export const getOptions = () => {
	console.log('Options data');
	console.log(GET('/home/getOptions'));
	return GET('/home/getOptions');
};

export const getInit = () => {
	// console.log("Init data");
	// console.log(GET('/home/getInitData'));
	return GET('/home/getInitData');
};

export const getGithubData = (params: { page: number; page_size: number }) => {
	return GET('/home/getGithubData', params);
};

export const getProjectData = (params: { type: string; project_id: number }) => {
	return GET('/home/getProjectData', params);
};
