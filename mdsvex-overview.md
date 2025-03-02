# Mdsvex Overview

Mdsvex is an extension for Svelte that allows you to use Markdown in your Svelte components. It combines the simplicity and readability of Markdown with the power and flexibility of Svelte, enabling you to write content-rich components with ease.

## Key Features of Mdsvex

1. **Markdown Syntax**:
   - Write your content using Markdown syntax, which is easy to read and write.
   - Supports all standard Markdown features, such as headings, lists, links, images, and more.

2. **Svelte Components**:
   - Embed Svelte components directly within your Markdown content.
   - Use Svelte's reactivity and component-based architecture alongside Markdown.

3. **Customizable**:
   - Extend and customize the Markdown syntax with plugins and custom components.
   - Configure how Markdown is processed and rendered.

4. **Syntax Highlighting**:
   - Built-in support for syntax highlighting in code blocks.
   - Customize the appearance of code blocks with different themes.

## How to Use Mdsvex

To use Mdsvex in your Svelte project, follow these steps:

1. **Install Mdsvex**:
   ```bash
   npm install @sveltejs/adapter-static @sveltejs/kit mdsvex
   ```

2. **Configure Mdsvex in `svelte.config.js`**:
   - Update your Svelte configuration to use Mdsvex. Here is an example:
     ```javascript
     // filepath: /workspaces/lustrashop/svelte.config.js
     import mdsvex from 'mdsvex';
     import adapter from '@sveltejs/adapter-static';

     export default {
       extensions: ['.svelte', '.svx'],
       preprocess: mdsvex(),
       kit: {
         // ...existing code...
         adapter: adapter(),
         // ...existing code...
       }
     };
     ```

3. **Create a Markdown Component**:
   - Create a new file with the `.svx` extension and write your Markdown content. Here is an example:
     ```markdown
     // filepath: /workspaces/lustrashop/src/routes/index.svx
     # Welcome to Mdsvex

     This is a Markdown file with Svelte components.

     <script>
       let count = 0;
     </script>

     <button on:click={() => count += 1}>
       Count: {count}
     </button>
     