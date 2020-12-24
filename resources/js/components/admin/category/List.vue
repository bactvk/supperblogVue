<template>
	<div>
		<section class="content">
		    <div class="row">
		        <div class="col-12">
			        <div class="card">
			            <div class="card-header">
			              <h3 class="card-title">DataTable with minimal features & hover style</h3>
			              <div class="card-tools">
			              	<button class="btn btn-primary">
				              	<router-link to="/category-add" style="color:#fff">Add category</router-link>
				            </button>
			              </div>
			            </div>
			            <!-- /.card-header -->
			            <div class="card-body">
				            <table id="example2" class="table table-bordered table-hover">
				                <thead>
				                <tr>
				                  <th>STT</th>
				                  <th>Category Name</th>
				                  <th>Actions</th>
				                </tr>
				                </thead>
				                <tbody>
					                <tr>
					                  <td>Trident</td>
					                  <td>{{getAllCategory}}</td>
					                  <td>
					                  	<a class="btn btn-warning" href="">Edit</a>
					                  	<a class="btn btn-danger" href="">Delete</a>
					                  </td>
					                </tr>
				                </tbody>
				            </table>
			            </div>
			            <!-- /.card-body -->
			        </div>
			    </div>
			</div>
		</section>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: "List",
		mounted(){
			this.$store.dispatch("allCategory")
		},	
		computed:{
			getAllCategory(){
				return this.$store.getters.getCategory
				// this.$store.dispatch("allCategory")
			}
		},
		methods:{

		}
	}
</script>

<style type="text/css">
	
</style>