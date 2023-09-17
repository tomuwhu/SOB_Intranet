<script>
// @ts-nocheck
    import axios from 'axios'
    import { onMount } from 'svelte'
    var dt = {}, selected = '', o = {v: []}
    onMount(() => {
        axios.get('https://api.apis.guru/v2/list.json').then(v => {
            dt = v.data
            selected =Object.entries(dt)[0][0]
        })
        
    })
</script>
<div>
    <select bind:value={selected}>
    {#each Object.entries(dt) as [id, row], i}
        {#if i==0}
            <option selected value={id}>{id}</option>
        {:else}
            <option value={id}>{id}</option>
        {/if}
    {/each}
    </select>
</div>
{#if selected}
<h1>
    {selected}
</h1>
<div>
    {#each  Object.entries(dt[selected].versions) as [v, vq]}
        {@html vq.info.description}
        {vq.info.title}
        <hr>
        <a href={vq.swaggerUrl}>{vq.swaggerUrl}</a>
    {/each}
</div>
{/if}
<style>
    h1, div {
        text-align: center;
    }
</style>