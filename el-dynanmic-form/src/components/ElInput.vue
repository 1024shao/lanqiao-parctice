<template>
	<div class="el-input__wrapper">
		<input
			class="el-input"
			:name="name"
			:type="type"
			:value="value"
			v-bind="$attrs"
			v-model="inputValue"
			v-on="$listeners"
		/>
	</div>
</template>

<script>
export default {
	name: 'ElInput',
	inheritAttrs: false,
	model: {
		prop: 'modelValue',
		event: 'changeModelValue',
	},
	data() {
		return {
			inputValue: '',
		}
	},
	props: {
		modelValue: {
			type: [String, Number, Boolean],
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		name: {
			type: String,
			default: '',
		},
		value: {
			type: [String, Number, Boolean],
			default: '',
		},
	},
	created() {
		this.inputValue = this.modelValue
	},
	watch: {
		inputValue(val) {
			this.$emit('changeModelValue', val)
		},
		modelValue(val) {
			this.inputValue = val
		},
	},
}
</script>

<style lang="less" scoped>
.el-input__wrapper {
	display: inline-block;
	.el-input {
		border: 1px solid #ddd;
		margin-right: 10px;
		border-radius: 5px;
		height: 20px;
	}
}
</style>
