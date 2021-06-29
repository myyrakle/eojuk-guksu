import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		database:[{view:'MySQL', value:'mysql'}, {view:'PostgreSQL', value:'pg'}], 
		orm:[{view:'Sequelize-Typescript', value:'st'}, {view:'TypeORM', value:'ty'}]
	}
});

export default app;