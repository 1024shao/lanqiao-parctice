<template>
	<li>
		<div
			@click="isFolding = !isFolding"
			@dblclick="$emit('make-item-can-fold', item)"
		>
			{{ item.name }}
			<span v-show="item.children">[{{ isFolding ? '-' : '+' }}]</span>
		</div>
		<ol v-show="isFolding && item.children">
			<three-item
				v-for="(child, index) in item.children"
				:key="index"
				:item="child"
				@add-item="$emit('add-item', $event)"
				@make-item-can-fold="$emit('make-item-can-fold', $event)"
			/>
			<span @click="$emit('add-item', item)">+</span>
		</ol>
	</li>
</template>

<script>
export default {
	name: 'ThreeItem',
	props: {
		item: Object,
	},
	data() {
		return {
			isFolding: false,
		}
	},
}
</script>
