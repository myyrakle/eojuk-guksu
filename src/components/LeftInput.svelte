<script>
  export let selectedDatabase;
  export let leftText;
  export let database;

  export let onTextChange;
</script>

<main>
  <div class="left">
    <div class="left-inner">
      <select id="left-select" bind:value={selectedDatabase}
        >{#each database as option}
          <option value={option.value}>{option.view}</option>
        {/each}</select
      > <br />
      <textarea
        bind:value={leftText}
        class="top-textarea"
        on:keyup={onTextChange}
      />
    </div>
  </div>
</main>

<style>
  .left {
    height: 100%;
    float: left;
    width: 50%;
  }

  .left-inner {
    height: 100%;
    margin: 10px;
  }

  .top-textarea {
    height: 500px;
    width: 100%;
  }
</style>
