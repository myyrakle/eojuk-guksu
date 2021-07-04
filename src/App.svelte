<script lang="ts">
    import type { SelectOption } from "./types/select-option";

    export let database: SelectOption[];
    export let orm: SelectOption[];
    export let convert: any;

    let selectedDatabase = null;
    let selectedOrm = null;

    let leftText = "";
    let rightText = "";

    let errorLog = "";

    function onButtonClicked() {
        if (selectedDatabase === null) {
            alert("데이터베이스를 선택해주세요.");
            return;
        }

        if (selectedOrm === null) {
            alert("ORM을 선택해주세요.");
            return;
        }

        try {
            rightText = convert(leftText, selectedDatabase, selectedOrm);
        } catch (error) {
            alert("오류 발생");
            errorLog = JSON.stringify(error);
        }
    }
</script>

<main>
    <hr />
    <div class="top">
        <div class="left">
            <div class="left-inner">
                <select id="left-select" bind:value={selectedDatabase}
                    >{#each database as option}
                        <option value={option.value}>{option.view}</option>
                    {/each}</select
                > <br />
                <textarea bind:value={leftText} class="top-textarea" />
            </div>
        </div>
        <div class="right">
            <div class="right-inner">
                <select id="right-select" bind:value={selectedOrm}
                    >{#each orm as option}
                        <option value={option.value}>{option.view}</option>
                    {/each}</select
                ><br />
                <textarea readonly class="top-textarea">{rightText}</textarea>
            </div>
        </div>
    </div>
    <div class="bottom">
        <button on:click={onButtonClicked}>변환</button> <br /><br />

        Error Log <br />
        <textarea readonly id="error-textarea">{errorLog}</textarea>
    </div>
</main>

<style>
    .left {
        height: 100%;
        float: left;
        width: 50%;
    }

    .right {
        height: 100%;
        display: inline-block;
        width: 50%;
    }

    .left-inner {
        height: 100%;
        margin: 10px;
    }

    .right-inner {
        height: 100%;
        margin: 10px;
    }

    .top {
        height: 60%;
        width: 100%;
    }

    .bottom {
        width: 100%;
        text-align: center;
    }

    .top-textarea {
        height: 500px;
        width: 100%;
    }

    #error-textarea {
        height: 100px;
        width: 50%;
    }
</style>
