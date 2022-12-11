<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import LeftInput from "./components/LeftInput.svelte";
  import RightInput from "./components/RightInput.svelte";
  import type { SelectOption } from "./types/select-option";

  export let database: SelectOption[];
  export let orm: SelectOption[];
  export let fieldname: SelectOption[];
  export let convert: any;

  let selectedDatabase = null;
  let selectedOrm = null;
  let selectedFieldname = fieldname[0].value;

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
      rightText = convert(
        leftText,
        selectedDatabase,
        selectedOrm,
        selectedFieldname
      );
    } catch (error) {
      alert("오류 발생");
      errorLog = JSON.stringify(error);
    }
  }
</script>

<main>
  <hr />
  <div class="top">
    <LeftInput bind:database bind:selectedDatabase bind:leftText />
    <RightInput
      bind:orm
      bind:selectedOrm
      bind:rightText
      bind:selectedFieldname
      bind:fieldname
    />
  </div>
  <div class="bottom">
    <button on:click={onButtonClicked}>변환</button> <br /><br />

    Error Log <br />
    <textarea readonly id="error-textarea">{errorLog}</textarea>
  </div>

  <Footer />
</main>

<style>
  .top {
    height: 60%;
    width: 100%;
  }

  .bottom {
    width: 100%;
    text-align: center;
  }

  #error-textarea {
    height: 100px;
    width: 50%;
  }
</style>
