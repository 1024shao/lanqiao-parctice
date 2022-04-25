<template>
	<div id="app">
		<UseDynamicForm />
	</div>
</template>

<script>
import UseDynamicForm from './components/DynamicForm.vue'
export default {
	name: 'App',
	components: {
		UseDynamicForm,
	},
	methods: {
		edit(value, index) {
			console.log('value, index: ', value, index)
		},
	},
}
</script>
