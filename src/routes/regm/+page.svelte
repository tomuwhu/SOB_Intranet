<script lang="ts">
  import { base } from '$app/paths'
  import serverurl from './../serverurl.js'
  import { onMount } from 'svelte'
  var ServerURL: string = serverurl
  var un: string,
    pw: string,
    name: string,
    mail: string,
    web: string,
    git: string,
    accept: boolean = false
  import axios from 'axios'
  import md5 from 'md5'
  interface Appdata {
    un: string
    name: string
    err: unknown
    msg: string
  }
  const appdata: Appdata = { un: '-', name: '...', err: null, msg: '' }
  function send(e: any) {
    axios
      .post(ServerURL + 'update.php', { un, name, mail, web, git })
      .then((res: { data: {} }) => {
        console.log(res.data)

        if (res.data) {
          accept = true
        }
      })
      .catch((e: any) => {})
  }
  onMount(async () => {
    appdata.un = localStorage.getItem('un') || ''
    axios.post(ServerURL + `requ.php`, appdata.un).then((res) => {
      un = res.data.un
      name = res.data.name
      mail = res.data.mail
      web = res.data.web
      git = res.data.git
      pw = ''
    })
  })
</script>

<div class="menu">
  <a href="{base}/">Főoldal</a><a href="{base}/honlapok/">Honlaplista</a><a
    href="{base}/stream/{appdata.name}">Oktatási csatorna</a
  >
</div>
<h1>SOB Intranet felhasználói adatlap</h1>
{#if !accept}
  <form class={un && name && mail && web && git ? 'ok' : ''}>
    <div>{name}</div>
    <div class="sp" />
    <input type="text" placeholder="Email-cím" id="mail" bind:value={mail} />
    <br /><br />
    <input type="text" placeholder="Weboldal" id="web" bind:value={web} />
    <br /><br />
    <input type="text" placeholder="Git" id="git" bind:value={git} />
    <br /><br />
    {#if un && name && web}
      <button on:click={send}>Módosít</button>
    {:else}
      <div class="button">Módosít</div>
    {/if}
  </form>
{:else}
  Sikeres adatmódosítás!
  <br />
  <br />
  <a href="{base}/">vissza a főoldalra</a>
{/if}

<style lang="scss">
  $hover: rgb(143, 162, 175);
  $active: rgb(169, 123, 106);
  $bc: rgb(28, 68, 99);
  button,
  .button,
  a {
    all: unset;
    cursor: pointer;
    border: solid 1px $bc;
    padding: 6px;
    box-shadow: 1px 1px 3px black;
    color: $bc;
    text-shadow: 1px 1px 2px gray;
    background-color: rgb(125, 162, 195);
  }
  .button {
    color: rgb(122, 122, 119);
    cursor: default;
  }
  h1 {
    text-shadow: 1px 1px 3px black;
  }
  div {
    color: rgb(55, 70, 76);
    font-size: 20px;
    text-shadow: 1px 1px 3px gray;
  }
  .menu {
    text-align: right;
    background-color: black;
    a {
      background-color: rgb(54, 30, 30);
      display: inline-block;
      padding: 2px;
      font-size: 13px;
      color: white;
      padding-left: 6px;
      padding-right: 6px;
      margin-right: 10px;
      margin-bottom: 6px;
    }
  }
  button:hover,
  a:hover {
    background-color: $hover;
  }
  button:hover,
  a:active {
    background-color: $active;
  }
  input {
    all: unset;
    text-align: left;
    width: 300px;
    border-bottom: solid 5px rgb(141, 117, 117);
    padding: 4px;
    background-color: rgb(252, 252, 240);
    box-shadow: 1px 1px 3px inset gray;
    color: rgb(71, 28, 40);
  }
  form {
    display: inline-block;
    padding: 20px;
    border: solid;
    border-radius: 20px;
    box-shadow: 1px 1px 3px inset black;
    background-color: rgb(213, 176, 169);
  }
  form.ok {
    background-color: rgb(198, 213, 169);
  }
  div.sp {
    height: 30px;
  }
  @media (max-width: 320px) {
    input {
      width: 250px;
    }
  }
</style>
