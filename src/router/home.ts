const Home = () => import('@/pages/home/index.vue');

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			title: '质量控制趋势可视化-主页'
		}
	}
];

export default routes;
