<script>
  // 세팅 모달용 props 값
  export let primaryKey;
  export let createdAt;
  export let updatedAt;
  export let deletedAt;
  export let schemaName;

  let primaryKeyKeep;
  let createdAtKeep;
  let updatedAtKeep;
  let deletedAtKeep;
  let schemaNameKeep;

  let primaryKeyDisable = false;
  let createdAtDisable = false;
  let updatedAtDisable = false;
  let deletedAtDisable = false;
  let schemaNameDisable = false;

  function onLoad() {}

  function removeSettingModel() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  function primaryKeyOnChange(value) {
    if (value.target.checked) {
      primaryKey = primaryKeyKeep;
      primaryKeyDisable = false;
    } else {
      primaryKeyKeep = primaryKey;
      primaryKey = null;
      primaryKeyDisable = true;
    }
  }

  function createdAtOnChange(value) {
    if (value.target.checked) {
      createdAt = createdAtKeep;
      createdAtDisable = false;
    } else {
      createdAtKeep = createdAt;
      createdAt = null;
      createdAtDisable = true;
    }
  }

  function updatedAtOnChange(value) {
    if (value.target.checked) {
      updatedAt = updatedAtKeep;
      updatedAtDisable = false;
    } else {
      updatedAtKeep = updatedAt;
      updatedAt = null;
      updatedAtDisable = true;
    }
  }

  function deletedAtOnChange(value) {
    if (value.target.checked) {
      deletedAt = deletedAtKeep;
      deletedAtDisable = false;
    } else {
      deletedAtKeep = deletedAt;
      deletedAt = null;
      deletedAtDisable = true;
    }
  }

  function SchemaOnChange(value) {
    if (value.target.checked) {
      schemaName = schemaNameKeep;
      schemaNameDisable = false;
    } else {
      schemaNameKeep = schemaName;
      schemaName = null;
      schemaNameDisable = true;
    }
  }
</script>

<main on:load={onLoad}>
  <div id="modal" class="modal-overlay">
    <div class="modal-window">
      <div class="title">
        <h2>Setting</h2>
      </div>
      <div class="close-area">
        <button on:click={removeSettingModel}>X</button>
      </div>
      <div class="content">
        <div class="content-item">
          Primary Key

          <span>
            <input
              class="checkbox"
              id="pk-check"
              type="checkbox"
              checked
              on:change={primaryKeyOnChange}
            /><input
              bind:value={primaryKey}
              class="input-text"
              id="pk"
              type="text"
              disabled={primaryKeyDisable}
            /></span
          >
        </div>

        <div class="content-item">
          CreatedAt <span
            ><input
              class="checkbox"
              id="created-at-check"
              type="checkbox"
              checked
              on:change={createdAtOnChange}
            /><input
              bind:value={createdAt}
              class="input-text"
              id="created-at"
              type="text"
              disabled={createdAtDisable}
            /></span
          >
        </div>

        <div class="content-item">
          UpdatedAt <span
            ><input
              class="checkbox"
              id="updated-at-check"
              type="checkbox"
              checked
              on:change={updatedAtOnChange}
            /><input
              bind:value={updatedAt}
              class="input-text"
              id="updated-at"
              type="text"
              disabled={updatedAtDisable}
            /></span
          >
        </div>

        <div class="content-item">
          DeletedAt <span
            ><input
              id="deleted-at-check"
              class="checkbox"
              type="checkbox"
              checked
              on:change={deletedAtOnChange}
            /><input
              bind:value={deletedAt}
              class="input-text"
              id="deleted-at"
              type="text"
              disabled={deletedAtDisable}
            /></span
          >
        </div>

        <div class="content-item">
          Schema <span
            ><input
              class="checkbox"
              id="schema-name-check"
              type="checkbox"
              checked
              on:change={SchemaOnChange}
            /><input
              bind:value={schemaName}
              class="input-text"
              id="schema-name"
              type="text"
              disabled={schemaNameDisable}
            /></span
          >
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  #modal.modal-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  #modal .modal-window {
    background: rgba(100, 139, 197, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 400;
    height: 300px;
    position: relative;
    top: -100px;
    padding: 10px;
  }
  #modal .title {
    padding-left: 10px;
    display: inline;
    text-shadow: 1px 1px 2px gray;
    color: white;
  }
  #modal .title h2 {
    display: inline;
  }
  #modal .close-area {
    display: inline;
    float: right;
    padding-right: 10px;
    cursor: pointer;
  }
  #modal .close-area > button {
    text-shadow: 1px 1px 2px gray;
    color: white;
    background: none;
    border: none;
  }

  #modal .content {
    margin-top: 20px;
    padding: 0px 10px;
    text-shadow: 1px 1px 2px gray;
    color: white;
    vertical-align: middle;
  }

  .content-item {
    display: flex;
    justify-content: space-between;
  }

  .checkbox {
    zoom: 1.5;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 20px;
  }

  .input-text {
    zoom: 0.8;
    vertical-align: middle;
    width: 120px;
  }
</style>
