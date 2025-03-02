# Drizzle Overview

Drizzle is a lightweight, reactive state management library for JavaScript applications. It is designed to work seamlessly with modern front-end frameworks like React, Vue, and Svelte. Drizzle provides a simple and efficient way to manage application state, making it easier to build and maintain complex applications.

## Key Features of Drizzle

1. **Reactive State Management**:
   - Drizzle uses reactive programming principles to ensure that your application state is always up-to-date.
   - Changes to the state automatically trigger updates to the UI, ensuring a consistent and responsive user experience.

2. **Lightweight and Fast**:
   - Drizzle is designed to be lightweight and fast, with a small footprint and minimal overhead.
   - It provides only the essential features needed for state management, avoiding unnecessary complexity.

3. **Framework Agnostic**:
   - Drizzle can be used with any front-end framework, including React, Vue, and Svelte.
   - It provides a consistent API across different frameworks, making it easy to switch between them.

4. **Simple API**:
   - Drizzle offers a simple and intuitive API for managing state.
   - It provides a set of core functions for creating and updating state, as well as utilities for working with reactive data.

## How to Use Drizzle

To use Drizzle in your project, follow these steps:

1. **Install Drizzle**:
   ```bash
   npm install drizzle
   ```

2. **Create a Store**:
   - Create a store to manage your application state. Here is an example in a Svelte project:
     ```javascript
     // filepath: /workspaces/lustrashop/src/store.js
     import { writable } from 'drizzle';

     export const count = writable(0);
     ```

3. **Use the Store in Your Components**:
   - Import the store and use it in your components. Here is an example in a Svelte component:
     ```svelte
     // filepath: /workspaces/lustrashop/src/App.svelte
     <script>
       import { count } from './store.js';

       function increment() {
         count.update(n => n + 1);
       }
     </script>

     <button on:click={increment}>
       Count: {$count}
     </button>
     ```
