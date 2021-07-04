import App from './App.svelte';
import { database } from './values/databases';
import { orm } from './values/orm';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		database, 
		orm,
	}
});

export default app;