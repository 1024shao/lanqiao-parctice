<template>
	<div class="time-node">
		<el-form class="time-node-form">
			<el-form-item
				label="时间"
				:message="timeNode.time.message"
				:value="timeNode.time.value"
			>
				<el-input
					:value="timeNode.time.value"
					@input="changeTimeNode('time', $event.target.value)"
				/>
			</el-form-item>
			<el-form-item
				label="内容"
				:message="timeNode.content.message"
				:value="timeNode.content.value"
			>
				<el-input
					:value="timeNode.content.value"
					@input="changeTimeNode('content', $event.target.value)"
				/>
			</el-form-item>
			<el-form-item label="链接" :value="timeNode.time.value">
				<el-input
					:value="timeNode.url.value"
					@input="changeTimeNode('url', $event.target.value)"
				/>
			</el-form-item>
		</el-form>
		<div class="edit">
			<span @click="$emit('delete')">删除</span>
			<span @click="$emit('move-down')">下移</span>
		</div>
	</div>
</template>

<script>
import ElForm from './ElForm.vue'
import ElInput from './ElInput.vue'
import ElFormItem from './ElFormItem.vue'
export default {
	name: 'TimeNode',
	components: {
		ElForm,
		ElInput,
		ElFormItem,
	},
	props: {
		timeNode: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		changeTimeNode(type, value) {
			this.$emit('change-node', type, value)
		},
	},
}
</script>

<style lang="less" scoped>
.time-node {
	display: flex;
	&-form {
		border: 1px solid #ccc;
	}
	.edit {
		margin-left: 10px;
		display: flex;
		flex-direction: column;
	}
}
</style>
