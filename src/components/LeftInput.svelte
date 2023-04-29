<script>
  export let selectedDatabase;
  export let leftText;
  export let database;

  export let generateORM;
</script>

<main>
  <div class="left">
    <div class="left-inner">
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        id="left-select"
        bind:value={selectedDatabase}
        on:change={() => {
          window.localStorage.setItem("selectedDatabase", selectedDatabase);
          generateORM();
        }}
        >{#each database as option}
          <option value={option.value}>{option.view}</option>
        {/each}</select
      > <br />
      <textarea
        bind:value={leftText}
        class="top-textarea"
        on:keyup={() => {
          generateORM();
        }}
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
