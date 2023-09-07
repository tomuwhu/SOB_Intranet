<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data: { name?: string }
  import { base } from '$app/paths'
  import serverurl from './../../serverurl.js'
  import { onMount } from 'svelte'
  import Md from 'markdown-it'
  import mathjax3 from 'markdown-it-mathjax3'
  import mhl from 'markdown-it-highlightjs'
  import axios from 'axios'
  var dragging: { key?: any; text?: any } = {}
  var last4: string = ''
  var tzoffset = new Date().getTimezoneOffset() * 60000
  var localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1)
  var most = localISOTime.split('.')[0].replace('T', ' ')
  var lastrefresh = most
  $: ma = most.split(' ')[0]
  const md = new Md()
  md.use(mathjax3)
  md.use(mhl, { auto: true })
  var mydata: any = { hl: [] }
  var ServerURL: string = serverurl
  setInterval(() => {
    tzoffset = new Date().getTimezoneOffset() * 60000
    localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1)
    most = localISOTime.split('.')[0].replace('T', ' ')
  }, 1000)
  onMount(() => {
    mydata.un = localStorage.getItem('un') || ''
    try {
      /*
      var eventSource = new EventSource(ServerURL + 'try.php')
      eventSource.onmessage = (es) => {
        lastrefresh = most
        mydata.hl = JSON.parse(es.data)
        mydata.hl.forEach((v) => {
          if (mydata.un == v.un) {
            mydata.name = v.user
            if (data.name != mydata.name) data.name = `<i>${mydata.name}</i>`
          }
        })
      }
      */
      axios.get(ServerURL + 'reqa.php').then((res: { data: {} }) => {
        mydata.hl = res.data
      })
    } catch (e: unknown) {}
  })
  const rest: { insert(e: Event): any; update(id: number, text: any): any } = {
    insert(e: Event): any {
      var tosend = { key: mydata.key, name: mydata.name, text: mydata.text, un: mydata.un }
      tosend.text = tosend.text && tosend.text.split(/\\/).join('㍕')
      if (!tosend.name) tosend.name = data.name
      axios
        .post(ServerURL + 'insert.php', tosend)
        .then((res: { data: {} }) => {
          if (res.data) {
            if (!mydata.key) {
              mydata.hl.unshift({
                key: -1,
                un: mydata.un,
                name: mydata.name,
                user: mydata.name,
                id: most,
                msg: mydata.text
              })
            } else {
              mydata.hl.filter((v: any) => v.key == mydata.key)[0].msg = mydata.text
            }
            mydata.text = ''
            mydata.key = 0
          }
        })
        .catch((e: any) => {})
    },
    update(id: number, text: any): any {
      mydata.text = text.split('㍕').join('\\')
      mydata.key = id
    }
  }
  function repl(e: any) {
    if (last4.length > 3) last4 = last4.slice(1)
    last4 += e.key
    if (/^\dx\dt/.test(last4)) {
      mydata.text = mydata.text?.slice(0, -4)
      var x = Number(last4[0])
      var y = Number(last4[2])
      var s = `\r\n|`
      Array(x)
        .fill(0)
        .forEach(() => (s += `  |`))
      s += `\r\n|`
      Array(x)
        .fill(0)
        .forEach(() => (s += `---|`))
      Array(y)
        .fill(0)
        .forEach(() => {
          s += `\r\n|`
          Array(x)
            .fill(0)
            .forEach(() => (s += `  |`))
        })
      mydata.text += s
    }
  }
</script>

<div class="menu">
  <span>{lastrefresh.split(' ')[1]}</span><a href="{base}/">Főoldal</a><a href="{base}/regm/"
    >Adatlap</a
  ><a href="{base}/honlapok/">Honlaplista</a>
</div>
<h2>Oktatási csatorna</h2>
<div class="code zz mx">
  <textarea
    on:dragover={(e) => {
      e.preventDefault()
    }}
    on:drop={() => {
      mydata.text = dragging.text.split('㍕').join('\\')
      mydata.key = dragging.key
      dragging = {}
    }}
    bind:value={mydata.text}
    on:keyup={repl}
    cols="30"
    rows="10"
  />
  <div class="ci">
    {#if mydata.text}
      <button class="bk" on:click={rest.insert}>Beküld</button>
    {/if}
    <span class="bk">&nbsp;</span>
    <span class="user">{@html data.name}</span>
    <span class="ip">{most.split(' ')[1]}</span>
  </div>
  {#if mydata.text}
    <div class="cc">
      <code>{@html md.render(mydata.text || '&nbsp;')}</code>
    </div>
  {:else}
    <div class="bottom" />
  {/if}
</div>
<br />
{#each mydata.hl as row}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="code {mydata.name == row.name ? 'mc' : 'nmc'}"
    draggable="true"
    on:dragstart={(e) => {
      dragging.key = row.key
      dragging.text = row.msg
    }}
  >
    <div class="ci">
      <span class="user">{row.user}</span>
      <span class="ip"
        >{@html row.id.split(' ')[0] == ma ? row.id.split(' ')[1] : `<b>${row.id}</b`}</span
      >
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class={mydata.key == row.key && mydata.name == row.name ? 'cc cix' : 'cc cei'}
      on:click={() => {
        if (mydata.key == row.key && mydata.name == row.name) mydata.key = 0
      }}
    >
      <code class="db"
        >{@html md.render((row.msg && row.msg.split('㍕').join('\\')) || 'Empty post')}</code
      >
    </div>
  </div>
{/each}

<style lang="scss">
  $hover: rgb(143, 162, 175);
  $active: rgb(169, 123, 106);
  $bc: rgb(16, 49, 75);
  a {
    all: unset;
    cursor: pointer;
    border: solid 1px $bc;
    font-size: 11px;
    padding: 2px;
    box-shadow: 1px 1px 2px rgb(37, 36, 36);
    color: $bc;
    text-shadow: 1px 1px 2px gray;
    border-radius: 4px;
  }
  h2 {
    margin: 17px;
    text-shadow: 1px 1px 3px rgb(91, 98, 103);
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
    span {
      font-size: 10px;
      color: rgb(61, 95, 94);
      user-select: none;
      text-shadow: none;
      width: 100px;
      text-align: left;
      display: inline-block;
    }
  }
  a:hover {
    background-color: $hover;
  }
  a:active {
    background-color: $active;
  }
  div.code {
    margin: 6px;
    box-shadow: 1px 1px 4px black;
    border: solid 1px $bc;
    display: inline-block;
    width: 800px;
    color: rgb(211, 212, 194);
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: left;
    div {
      font-size: 11px;
      background-color: $bc;
      .user {
        padding-right: 8px;
        padding-top: 5px;
        color: rgb(226, 186, 186);
        display: inline-block;
        width: 630px;
        text-align: right;
      }
      .ip {
        font-size: 10px;
        color: rgb(223, 223, 164);
        display: inline-block;
        text-align: right;
        width: 90px;
        margin-right: 5px;
        padding-right: 5px;
        background-color: rgb(34, 72, 93);
        border-radius: 4px;
        border: solid 0.3px yellow;
      }
    }
  }
  div.cc {
    background-color: $bc;
    padding: 4px;
    code {
      color: rgb(242, 242, 196);
      font-size: 10px;
      font-family: Courier;
      border: solid 5px $bc;
      display: inline-block;
      width: 774px;
      padding-left: 15px;
      box-shadow: 1px 1px 3px inset black;
      border: solid 2px rgb(32, 78, 110);
      border-radius: 11px;
    }
  }
  :global(div.cix) {
    code {
      background-color: rgb(82, 147, 149);
      cursor: pointer;
    }
  }
  :global(div.cei) {
    code {
      background-color: rgb(44, 86, 104);
    }
  }
  textarea {
    all: unset;
    margin: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    font-family: monospace;
    color: rgb(10, 75, 10);
    width: 786px;
    height: 70px;
  }
  div.zz {
    background-color: antiquewhite;
  }
  div.ci {
    text-align: right;
  }
  button {
    all: unset;
    box-shadow: 1px 1px 3px inset rgb(255, 255, 255);
    cursor: pointer;
    color: rgb(219, 190, 190);
    border: solid 0.5px rgb(180, 119, 119);
    padding-left: 6px;
    padding-right: 6px;
    background-color: rgb(123, 0, 0);
    border-radius: 4px;
  }
  button:hover {
    background-color: rgb(177, 43, 43);
  }
  button:active {
    background-color: rgb(226, 2, 2);
  }
  span.bk {
    display: inline-block;
    width: 2px;
  }
  div.bottom {
    background-color: $bc;
    height: 4px;
  }
  div.zz code {
    background-color: rgb(20, 131, 127);
  }
  @media (max-width: 400px) {
    div.code {
      width: 302px;
    }
    div.cc {
      code {
        font-size: 8px;
        padding-left: 10px;
        width: 280px;
        overflow-y: auto;
      }
    }
    textarea {
      all: unset;
      margin: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 12px;
      font-family: monospace;
      color: rgb(10, 75, 10);
      width: 266px;
      height: 70px;
    }
    div.code {
      span.user {
        width: 118px;
      }
    }
    div.zz {
      display: none;
    }
  }
  code.db {
    cursor: grab;
  }
  code.db:active {
    cursor: grabbing;
  }
  div.mc {
    border: solid 5px rgb(42, 81, 100);
    box-shadow: 1px 1px 6px rgb(99, 99, 99);
    border-radius: 5px;
  }
  div.nmc {
    border: solid 5px rgb(0, 0, 0);
    box-shadow: 1px 1px 6px rgb(11, 11, 11);
    border-radius: 5px;
  }
  div.mx {
    border: solid 5px rgb(148, 192, 225);
    box-shadow: 1px 1px 6px rgb(98, 98, 98);
    border-radius: 5px;
  }
  :global(a) {
    text-decoration: none;
    text-shadow: 0px 0px 1px white;
    color: rgb(137, 200, 255);
  }
  :global(a:hover) {
    text-decoration: none;
    text-shadow: 1px 1px 3px white;
    color: rgb(241, 251, 163);
  }
  :global(a:active) {
    text-decoration: none;
    text-shadow: 1px 1px 3px white;
    color: rgb(251, 163, 163);
  }
</style>
