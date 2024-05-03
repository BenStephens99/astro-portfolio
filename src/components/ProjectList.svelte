<script>
    import { urlFor } from "../utils/image";
    export let projects = [];
    console.log(projects);
</script>

<div class="projects-list">
    <div class="project">
        {#each projects as project}
            <h3>{project.title}</h3>
            <div class="tech-stack">
                {#each project.technologies as technology}
                <img src={urlFor(technology.icon).height(50).url()} alt={technology.name} />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .projects-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .project {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.5);
    }
    
    img {
        border-radius: 0px;
        width: 30px;
        height: 30px;
        object-fit: contain;
    }

    .tech-stack {
        display: flex;
        gap: 0.5rem;
    }
</style>