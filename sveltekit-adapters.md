# SvelteKit Adapters

SvelteKit adapters are plugins that allow you to deploy your SvelteKit application to various hosting environments. Each adapter is designed to work with a specific platform or deployment target.

## Common SvelteKit Adapters

### @sveltejs/adapter-static
- Generates a static site that can be deployed to any static hosting service.
- Suitable for sites that do not require server-side rendering or dynamic content.

### @sveltejs/adapter-node
- Deploys your SvelteKit app as a Node.js server.
- Suitable for traditional server environments where you have control over the server.

### @sveltejs/adapter-vercel
- Deploys your SvelteKit app to Vercel, a popular platform for serverless functions and static sites.
- Provides seamless integration with Vercel's deployment and hosting services.

### @sveltejs/adapter-netlify
- Deploys your SvelteKit app to Netlify, a platform for static sites and serverless functions.
- Integrates with Netlify's build and deployment processes.

### @sveltejs/adapter-cloudflare
- Deploys your SvelteKit app to Cloudflare Workers, a serverless platform.
- Suitable for high-performance, globally distributed applications.

## How to Use an Adapter

To use an adapter in your SvelteKit project, follow these steps:

1. **Install the adapter**:
   ```bash
   npm install @sveltejs/adapter-static
   ```
   Replace `@sveltejs/adapter-static` with the adapter you want to use.

2. **Configure the adapter in `svelte.config.js`**:
   ```javascript
   // filepath: /workspaces/lustrashop/svelte.config.js
   import adapter from '@sveltejs/adapter-static';

   export default {
     kit: {
       // ...existing code...
       adapter: adapter(),
       // ...existing code...
     }
   };
   ```
