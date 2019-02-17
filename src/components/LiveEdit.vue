<template>
	<div>
		<template v-if="modelEditable" >
			<textarea v-if="multiline" class="live-edit" type="text" v-model="modelvalue" :placeholder="placeholder" v-on:blur= "modelEditable=false; $emit('update')"
      @keyup.enter = "modelEditable=false; $emit('update')"></textarea>
			<input v-else class="live-edit" type="text" v-model="modelvalue" :placeholder="placeholder" v-on:blur= "modelEditable=false; $emit('update')"
      @keyup.enter = "modelEditable=false; $emit('update')">
		</template>
		<span v-else @dblclick = "modelEditable = true">{{modelvalue || placeholder}}</span>
	</div>
</template>
<script>
	export default{
		name: 'LiveEdit',
		props: {
			value:{
				type: [String, Object],
				required: true,
			},
			editable: {
				type: Boolean,
				required: true,
        default:false
			},
			multiline: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String
			}
		},
		data(){
			return {
				modelvalue: this.value,
				modelEditable: this.editable
			}
		},
		watch: {
			modelvalue: function(val){
				this.$emit('input', val);
			},
			modelEditable: function(val){
				this.$emit('editable', val);
			}
		}

	}
</script>

<style scoped>
	.live-edit{
		font-size: 1em !important;
	}
</style>
