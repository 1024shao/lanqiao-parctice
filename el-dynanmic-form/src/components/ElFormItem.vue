<template>
	<div class="el-form-item">
		<div class="el-form-item-label">
			<span class="icon" v-if="message">*</span> {{ label }}
		</div>
		<div class="el-form-item-body">
			<div class="el-form-item-content">
				<slot></slot>
			</div>
			<div class="warning" v-if="message" v-show="isShowMsg">
				{{ message }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ElFormItem',
	props: {
		label: {
			type: String,
			default: '',
		},
		message: String,
		value: String,
	},
	data() {
		return {
			isShowMsg: false,
		}
	},
	methods: {
		validate() {
			if (this.value === '') {
				this.isShowMsg = true
			} else {
				this.isShowMsg = false
			}
		},
		reset() {
			this.isShowMsg = false
		},
	},
	created() {
		if (this.message) {
			this.$bus.$emit('add-form-item', this)
		}
	},
	beforeDestroy() {
		this.$bus.$emit('remove-form-item', this)
	},
	watch: {
		value() {
			this.validate()
		},
	},
}
</script>

<style lang="less" scoped>
.el-form-item {
	display: flex;
	margin-bottom: 20px;
	&-label {
		min-width: 100px;
		padding-left: 30px;
		margin-right: 25px;
		text-align: right;
		.icon {
			color: red;
		}
	}
	&-body {
		display: flex;
		flex-direction: column;
	}
	.warning {
		font-size: 12px;
		color: red;
	}
}
</style>
