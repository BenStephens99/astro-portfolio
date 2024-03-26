<script>
    const array = ['blue', 'red', 'green']
</script>

{#each array as color}
    <div style="background-color: {color}; padding: 20px; margin: 10px;">
        {color}
    </div>
{/each}