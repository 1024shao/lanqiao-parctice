<template>
	<div class="el-form">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'ElForm',
	data() {
		return {
			fields: [],
		}
	},
	created() {
		this.$bus.$on('add-form-item', (field) => {
			this.fields.push(field)
		})
		this.$bus.$on('remove-form-item', (field) => {
			this.fields = this.fields.filter((item) => item != field)
		})
	},
	methods: {
		validateFields() {
			this.fields.forEach((item) => {
				item.validate()
			})
		},
		resetFields() {
			this.fields.forEach((item) => {
				item.reset()
			})
		},
	},
}
</script>
