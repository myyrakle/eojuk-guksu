<script lang="ts">
    import type { SelectOption } from "./types/select-option";

    export let name: string;
    export let database: SelectOption[];
    export let orm: SelectOption[];

    let selectedDatabase = "";
    let selectedOrm = "";

    function onButtonClicked() {}
</script>

<main>
    <hr />
    <div class="left">
        <select bind:value={selectedDatabase}
            >{#each database as option}
                <option value={option.value}>{option.view}</option>
            {/each}</select
        > <br />
        <textarea id="left-input" />
    </div>
    <div class="right">
        <select bind:value={selectedOrm}
            >{#each orm as option}
                <option value={option.value}>{option.view}</option>
            {/each}</select
        ><br />
        <textarea readonly id="right-input" />
    </div>
    <button on:click={onButtonClicked}>변환</button>
</main>

<style>
    .left {
        float: left;
        margin: 10px;
        max-width: 40%;
    }

    .right {
        display: inline-block;
        margin: 10px;
        max-width: 40%;
    }

    textarea {
        height: 300px;
        widows: 300px;
    }
</style>
