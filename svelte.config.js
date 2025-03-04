import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    typescript: true,
    // ...other preprocessors...
  }),
  // ...other configuration options...
};
