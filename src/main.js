import App from './App.svelte';

const app = new App({
	target: document.body, // It means that all code we write would be injected to <body>...</body>
	props: { // The way we set props for "App" component
		name: 'world'
	}
});

export default app;