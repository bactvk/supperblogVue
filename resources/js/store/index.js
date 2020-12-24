export default {
	state: {
		category: "This is category",
	},
	getters:{
		getCategory(state){
			return state.category;
		},
		abc(){}
	},
	actions:{
		allCategory(state,payload){
			axios.get('/category')
					.then(response => {
						console.log(response)
					})
					.catch(erros => {
						console.log(error)
					});
		}
	},
	mutations:{

	}
}