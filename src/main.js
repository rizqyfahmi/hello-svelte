import App from './App.svelte';

const app = new App({
	target: document.body, // It means that all code we write would be injected to <body>...</body>
});

export default app;