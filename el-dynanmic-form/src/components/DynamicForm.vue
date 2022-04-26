<template>
	<div class="dynamic-form">
		<el-form ref="form">
			<el-form-item
				label="标题"
				:message="formData.title.message"
				:value="formData.title.value"
			>
				<el-input v-model="formData.title.value" />
			</el-form-item>

			<el-form-item
				label="类型"
				:message="formData.axis.message"
				:value="formData.axis.value"
			>
				<el-input v-model="formData.axis.value" type="radio" value="横向" />
				横向
				<el-input v-model="formData.axis.value" type="radio" value="纵向" />
				纵向
			</el-form-item>

			<el-form-item label="时间节点">
				<ul class="time-node-list">
					<time-node
						v-for="(item, index) in formData.timeNodes"
						:key="item"
						:timeNode="item"
						@delete="deleteNode(index)"
						@move-down="moveDownNode(index)"
						@change-node="(type, value) => changeTimeNode(type, value, index)"
					/>
				</ul>
				<div class="add-node" @click="addNode">+ 增加节点</div>
			</el-form-item>

			<el-form-item>
				<button @click="submit">立即创建</button>
				<button @click="resetForm">重置</button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import ElForm from './ElForm.vue'
import ElInput from './ElInput.vue'
import ElFormItem from './ElFormItem.vue'
import TimeNode from './TimeNode.vue'
export default {
	name: 'DynamicForm',
	components: {
		ElForm,
		ElInput,
		ElFormItem,
		TimeNode,
	},
	data() {
		return {
			formData: {
				title: { value: '', message: '不能为空' },
				axis: { value: '', message: '轴向必选' },
				timeNodes: [
					{
						time: { value: '', message: '时间不能为空' },
						content: { value: '', message: '链接必填' },
						url: { value: '' },
					},
				],
			},
		}
	},
	methods: {
		submit() {
			this.$refs.form.validateFields()
		},
		resetForm() {
			this.formData = {
				title: { value: '', message: '不能为空' },
				axis: { value: '', message: '轴向必选' },
				timeNodes: [
					{
						time: { value: '', message: '时间不能为空' },
						content: { value: '', message: '链接必填' },
						url: { value: '' },
					},
				],
			}
			this.$nextTick(() => {
				this.$refs.form.resetFields()
			})
		},
		addNode() {
			this.formData.timeNodes.push({
				time: { value: '', message: '时间不能为空' },
				content: { value: '', message: '链接必填' },
				url: { value: '' },
			})
		},
		deleteNode(index) {
			this.formData.timeNodes.splice(index, 1)
		},
		moveDownNode(index) {
			if (index === this.formData.timeNodes.length - 1) return
			let tempNode = this.formData.timeNodes[index]
			this.deleteNode(index)
			this.formData.timeNodes.splice(index + 1, 0, tempNode)
		},
		changeTimeNode(type, value, index) {
			this.formData.timeNodes[index][type].value = value
		},
	},
}
</script>
