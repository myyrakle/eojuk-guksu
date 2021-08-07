import App from "./App.svelte";
import { convert } from "./convert";
import { database } from "./values/databases";
import { orm } from "./values/orm";
import { fieldname } from "./values/fieldname";

const app = new App({
    target: document.body,
    props: {
        name: "world",
        database,
        orm,
        fieldname,
        convert,
    },
});

export default app;
