<script>
    import { urlFor } from "../utils/image";
    export let projects = [];
    console.log(projects);
</script>

<div class="projects-list">
    {#each projects || [] as project}
        <a
            href={`${project.openInNewTab ? "" : "/projects/"}${project.slug.current}`}
            target={project.openInNewTab ? "_blank" : "_self"}
            class="project no-underline"
        >
            <img
                class="thumbnail"
                src={urlFor(project.thumbnail).height(400).url()}
                alt={project.title}
                style="view-transition-name:{project._id};"
            />
            <div class="project-body">
                {#if project?.technologies?.length}
                    <div class="tech-stack">
                        {#each project.technologies || [] as technology}
                            <img
                                src={urlFor(technology.icon).height(50).url()}
                                alt={technology.name}
                            />
                        {/each}
                    </div>
                {/if}
                <div>
                    <h3>{project.title}</h3>
                    <div class="summary">{project.summary || ""}</div>
                </div>
            </div>
        </a>
    {/each}
</div>

<style lang="scss">
    .projects-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
        gap: 1rem;
        margin-top: 1rem;
    }

    .project {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 1rem;
        border-radius: 1rem;

        &:before {
            height: 80%;
            width: 100%;
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.4);
            display: block !important;
            border-radius: 1rem;
            box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
        }
    
    }

    .project:hover {
        .thumbnail {
            transform: translateY(-5px);
        }
    }

    .thumbnail {
        aspect-ratio: 5/3;
        object-fit: cover;
        width: 100%;
        z-index: 2;
        box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
        transition: 0.3s transform;
    }

    .tech-stack img {
        border-radius: 0px;
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    .tech-stack {
        display: flex;
        gap: 0.5rem;
        padding-top: 0.75rem;
    }

    .project-body {
        z-index: 2;
        padding: 0 0.5rem;
        padding-bottom: 0.5rem;
    }

    h3 {
        font-weight: 600;
        font-size: 1.2rem;
        padding-top: 1rem;
        padding-bottom: 0.5rem;
    }
</style>
