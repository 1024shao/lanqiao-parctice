<template>
	<div id="app">
		<p>(You can double click on an item to turn it into a folder.)</p>
		<three-item
			:item="threeData"
			@add-item="addItem"
			@make-item-can-fold="makeItemCanFold"
		/>
	</div>
</template>

<script>
import ThreeItem from './components/ThreeItem.vue'
export default {
	name: 'App',
	components: {
		ThreeItem,
	},
	data() {
		return {
			threeData: {
				name: 'My Tree',
				children: [
					{ name: 'hello' },
					{ name: 'wat' },
					{
						name: 'child folder',
						children: [
							{
								name: 'child folder',
								children: [{ name: 'hello' }, { name: 'wat' }],
							},
							{ name: 'hello' },
							{ name: 'wat' },
							{
								name: 'child folder',
								children: [{ name: 'hello' }, { name: 'wat' }],
							},
						],
					},
				],
			},
		}
	},
	methods: {
		addItem(item) {
			item.children.push({ name: 'new stuff' })
		},
		makeItemCanFold(item) {
			if (!item.children) {
				this.$set(item, 'children', [{ name: 'new stuff' }])
			}
		},
	},
}
</script>

<style lang="less" scoped>
#app {
	width: 500px;
	margin: 20px auto;
}
</style>
