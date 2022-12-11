<script>
  // props
  export let selectedOrm;
  export let selectedFieldname;
  export let rightText;
  export let orm;
  export let fieldname;

  function displaySettingModel() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }
</script>

<main>
  <div class="right">
    <div class="right-inner">
      <select id="right-select" bind:value={selectedOrm}
        >{#each orm as option}
          <option value={option.value}>{option.view}</option>
        {/each}</select
      >
      <select id="right-select-fieldname" bind:value={selectedFieldname}
        >{#each fieldname as option}
          <option value={option.value} selected={option.selected}
            >{option.view}</option
          >
        {/each}</select
      >
      <button on:click={displaySettingModel}
        ><i style="font-size:24px" class="fa">&#xf013;</i></button
      >
      <br />
      <textarea readonly class="top-textarea">{rightText}</textarea>
    </div>
  </div>
</main>

<style>
  .right {
    height: 100%;
    display: inline-block;
    width: 50%;
  }

  .right-inner {
    height: 100%;
    margin: 10px;
  }

  .top-textarea {
    height: 500px;
    width: 100%;
  }
</style>
