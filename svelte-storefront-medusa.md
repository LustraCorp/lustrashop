# Creating a Svelte Storefront from Scratch Using Medusa

Follow these steps to create a Svelte storefront from scratch using Medusa:

## Step-by-Step Guide

### Prerequisites
- Ensure you have Node.js (version 22.10.0 or higher) and PostgreSQL installed.

### 1. Set Up Medusa Backend
- Create a new Medusa project:
  ```bash
  npx create-medusa-app@latest medusa-backend
  cd medusa-backend
  npm install
  ```
- Set up environment variables in a `.env` file:
  ```env
  DATABASE_URL=postgres://user:password@localhost:5432/mydb
  ```
- Run database migrations and seed data:
  ```bash
  medusa migrations run
  medusa seed -f ./data/seed.json
  ```
- Start the Medusa server:
  ```bash
  npm run start
  ```

### 2. Create Svelte Frontend
- Create a new Svelte project:
  ```bash
  npx degit sveltejs/template lustrashop-svelte
  cd lustrashop-svelte
  npm install
  ```

### 3. Install Dependencies
- Install necessary dependencies for making API requests and managing state:
  ```bash
  npm install axios svelte-store
  ```

### 4. Set Up API Client
- Create an API client to interact with the Medusa backend:
  ```javascript
  // filepath: /c:/Business/projects/lustrashop/lustrashop-svelte/src/lib/api.ts
  import axios from 'axios';

  const api = axios.create({
    baseURL: 'http://localhost:9000/store',
  });

  export default api;
  ```

### 5. Create Store for Managing State
- Create a store to manage the application state:
  ```javascript
  // filepath: /c:/Business/projects/lustrashop/lustrashop-svelte/src/lib/store.ts
  import { writable } from 'svelte/store';

  export const products = writable([]);
  export const cart = writable([]);
  ```

### 6. Fetch Products from Medusa
- Fetch products from the Medusa backend and update the store:
  ```javascript
  // filepath: /c:/Business/projects/lustrashop/lustrashop-svelte/src/routes/index.svelte
  <script>
    import { onMount } from 'svelte';
    import api from '../lib/api';
    import { products } from '../lib/store';

    onMount(async () => {
      const response = await api.get('/products');
      products.set(response.data.products);
    });
  </script>

  <h1>Products</h1>
  <ul>
    {#each $products as product}
      <li>{product.title} - ${product.price / 100}</li>
    {/each}
  </ul>
  ```

### 7. Create Cart Functionality
- Add functionality to manage the shopping cart:
  ```javascript
  // filepath: /c:/Business/projects/lustrashop/lustrashop-svelte/src/routes/index.svelte
  <script>
    import { cart } from '../lib/store';

    function addToCart(product) {
      cart.update(items => {
        const item = items.find(i => i.id === product.id);
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
    {#each $products as product}
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
  ```
