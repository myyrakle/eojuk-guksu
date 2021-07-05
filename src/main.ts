import App from "./App.svelte";
import { convert } from "./convert";
import { database } from "./values/databases";
import { orm } from "./values/orm";

const app = new App({
    target: document.body,
    props: {
        name: "world",
        database,
        orm,
        convert,
    },
});

export default app;
