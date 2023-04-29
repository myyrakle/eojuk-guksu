<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import LeftInput from "./components/LeftInput.svelte";
  import RightInput from "./components/RightInput.svelte";
  import SettingModal from "./components/SettingModal.svelte";
  import type { SelectOption } from "./types/select-option";

  export let database: SelectOption[];
  export let orm: SelectOption[];
  export let fieldname: SelectOption[];
  export let convert: any;

  let selectedDatabase = null;
  let selectedOrm = null;
  let selectedFieldname = fieldname[0].value;

  if (window.localStorage.getItem("selectedDatabase") !== null) {
    selectedDatabase = window.localStorage.getItem("selectedDatabase");
  }

  if (window.localStorage.getItem("selectedOrm") !== null) {
    selectedOrm = window.localStorage.getItem("selectedOrm");
  }

  if (window.localStorage.getItem("selectedFieldname") !== null) {
    selectedFieldname = window.localStorage.getItem("selectedFieldname");
  }

  let leftText: string = "";
  let rightText: string = "";

  if (window.localStorage.getItem("leftText") !== null) {
    leftText = window.localStorage.getItem("leftText");
  }

  let errorLog: string = "";

  let primaryKey: string = "id";
  let createdAt: string = "created_at";
  let updatedAt: string = "updated_at";
  let deletedAt: string = "deleted_at";
  let schemaName: string = "public";

  function generateORM() {
    window.localStorage.setItem("leftText", leftText);

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
        selectedFieldname,
        primaryKey,
        createdAt,
        updatedAt,
        deletedAt,
        schemaName
      );
      errorLog = "No Problem";
    } catch (error) {
      errorLog = JSON.stringify(error);
    }
  }

  generateORM();

  function onLoad() {}
</script>

<main on:load={onLoad}>
  <hr />
  <div class="top">
    <LeftInput
      bind:database
      bind:selectedDatabase
      bind:leftText
      {generateORM}
    />
    <RightInput
      bind:orm
      bind:selectedOrm
      bind:rightText
      bind:selectedFieldname
      bind:fieldname
      {generateORM}
    />
  </div>
  <div class="bottom">
    Error Log <br />
    <textarea readonly id="error-textarea">{errorLog}</textarea>
  </div>

  <SettingModal
    bind:primaryKey
    bind:createdAt
    bind:updatedAt
    bind:deletedAt
    bind:schemaName
  />

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
