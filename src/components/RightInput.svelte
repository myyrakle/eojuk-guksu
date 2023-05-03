<script>
  // props
  export let selectedOrm;
  export let selectedFieldname;
  export let rightText;
  export let orm;
  export let fieldname;
  export let generateORM;

  import { SvelteToast, toast } from "@zerodevx/svelte-toast";
  const option = {};

  function displaySettingModel() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }
</script>

<main>
  <div class="right">
    <div class="right-inner">
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        id="right-select"
        bind:value={selectedOrm}
        on:change={() => {
          localStorage.setItem("selectedOrm", selectedOrm);
          generateORM();
        }}
        >{#each orm as option}
          <option value={option.value}>{option.view}</option>
        {/each}</select
      >
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        id="right-select-fieldname"
        bind:value={selectedFieldname}
        on:change={() => {
          localStorage.setItem("selectedFieldname", selectedFieldname);
          generateORM();
        }}
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
      <textarea
        readonly
        class="top-textarea"
        on:click={() => {
          navigator.clipboard.writeText(rightText);
          toast.push("copied!");
        }}>{rightText}</textarea
      >

      <SvelteToast {option} />
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
