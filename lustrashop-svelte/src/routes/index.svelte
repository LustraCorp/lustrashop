<script lang="ts">
	import { onMount } from 'svelte';
	import api from '../lib/api';
	import { products, cart } from '../lib/store';

	onMount(async () => {
		const response = await api.get('/products');
		products.set(response.data.products);
	});

	/**
	 * @param {{ id: number, title: string, price: number }} product
	 */
	function addToCart(product: { id: number; title: string; price: number }) {
		cart.update((items: { id: number; title: string; price: number; quantity: number }[]) => {
			const item = items.find((i) => i.id === product.id);
			if (item) {
				item.quantity += 1;
			} else {
				items.push({ ...product, quantity: 1 });
			}
			return items;
		});
	}
</script>

<h1>Products</h1>
<ul>
	{#each $products as product: { id: number, title: string, price: number }}
		<li>
			{product.title} - ${product.price / 100}
			<button on:click={() => addToCart(product)}>Add to Cart</button>
		</li>
	{/each}
</ul>

<h2>Cart</h2>
<ul>
	{#each $cart as item}
		<li>{item.title} - {item.quantity}</li>
	{/each}
</ul>
