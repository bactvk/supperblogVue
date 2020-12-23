import AdminHome from './components/admin/AdminHome'
import CategoryList from './components/admin/category/List.vue'
import CategoryAdd from './components/admin/category/New.vue'
export const routes = [
	{ path: '/home', component: AdminHome},
	{ path: '/category', component: CategoryList},
	{ path: '/category-add', component: CategoryAdd},
]