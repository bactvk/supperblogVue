<template>
	<div>
		<section class="content">
		    <div class="container-fluid">
		        <div class="row">
		          	<div class="col-md-6">
			            <div class="card card-primary">
				            <div class="card-header">
				                <h3 class="card-title">Add category</h3>
				            </div>
				            <form role="form" @click.prevent="addCategory()">
				                <div class="card-body">
				                  <div class="form-group">
				                    <label for="exampleInputEmail1">Category name</label>
				                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter category name" v-model="form.cat_name" name="cat_name" :class="{ 'is-invalid':form.errors.has('cat_name')}">
				                    <has-error :form="form" field="cat_name"></has-error>
				                  </div>
				                </div>
				                <div class="card-footer">
				                  <button type="submit" class="btn btn-primary">Save</button>
				                </div>
				            </form>
			            </div>
			            <!-- /.card -->

			          
			        </div>
		        </div>
		    </div>
	    </section>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: "New",
		data(){
			return {
				form: new Form({
					cat_name: '',
				})
			}
		},
		methods: {
			addCategory(){
				this.form.post('/category-add')
						.then(response => {
							this.$router.push('/category');

							Toast.fire({
							  icon: 'success',
							  title: 'Category add successfully'
							})

						})
						.catch(error => {
							console.log(error);
						})
			}
		}
	}
</script>

<style type="text/css">
	
</style>