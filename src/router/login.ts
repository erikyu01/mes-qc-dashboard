const Login = () => import('@/pages/login/index.vue');

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: '质量控制趋势大屏-登录页'
		}
	}
];

export default routes;
