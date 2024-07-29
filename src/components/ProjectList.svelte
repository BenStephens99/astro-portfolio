<script>
    import { urlFor } from "../utils/image";
    export let projects = [];
    export let featured = false;
    export let listIndex = 0;
</script>

<div class:featured={featured} class="projects-list">
    {#each projects || [] as project, i}
        {@const aboveFold = listIndex <= 1 && i <= 2}
        <a
            href={`${project.openInNewTab ? "" : "/projects/"}${project.slug?.current}`}
            target={project.openInNewTab ? "_blank" : "_self"}
            class="project no-underline"
        >
            <img
                class="thumbnail"
                src={urlFor(project.thumbnail).auto("format").height(featured ? 1000 : 500).url()}
                alt={project.title}
                style="view-transition-name:image-{project._id};"
                loading={aboveFold ? "lazy" : "eager"}
            />
            <div class="project-body">
                {#if project?.technologies?.length}
                    <div class="tech-stack">
                        {#each project.technologies || [] as technology}
                            <img
                                src={urlFor(technology.icon)
                                    .auto("format")
                                    .height(50)
                                    .url()}
                                alt={technology.name}
                                title={technology.name}
                            />
                        {/each}
                    </div>
                {/if}
                <div>
                    <div class="project-title">
                        <h3>{project.title}</h3>
                        {#if project.openInNewTab}
                            <svg
                                fill="#3D3928"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                ><g id="SVGRepo_bgCarrier" stroke-width="0"
                                ></g><g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g><g id="SVGRepo_iconCarrier"
                                    ><path
                                        d="M14.21 1.5H10v1.25h3.08L7.9 7.21l.82 1 5.53-4.77V7h1.25V2.79a1.29 1.29 0 0 0-1.29-1.29z"
                                    ></path><path
                                        d="M12.25 13.25H1.75v-8.5H7.5V3.5h-6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h-1.25z"
                                    ></path></g
                                ></svg
                            >
                        {/if}
                    </div>
                    <div class="summary">{project.summary || ""}</div>
                </div>
            </div>
        </a>
    {/each}
</div>

<style lang="scss">
    .projects-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(2, 1fr);
        }

        &.featured {
            grid-template-columns: repeat(2, 1fr);
 
            @media screen and (max-width: 650px) {
                grid-template-columns: 1fr;
            }
        }   

        @media screen and (max-width: 650px) {
            grid-template-columns: 1fr;
        }
    }

    .project {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 1rem;
        border-radius: 1rem;
        width: 100%;

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

    .project-title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    .thumbnail {
        aspect-ratio: 16/9;
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
