<script>
    export let currentPath = "/";

    const paths = [
        { name: "Projects", path: "/projects", button: false },
        // { name: "Blog", path: "/blog", button: false },
        { name: "About", path: "/about", button: false },
        { name: "Contact", path: "/contact", button: true },
    ];
</script>

<header>
    <nav class="desktop">
        <a href="/" class="no-underline"><h2>Ben Stephens</h2></a>
        <div>
            {#each paths as path}
                <a
                    class={`${currentPath === path.path.split("/")[1] ? "current-page" : ""} ${path.button && "no-underline"}`}
                    href={path.path}
                >
                    {#if path.button}
                        <button>{path.name}</button>
                    {:else}
                        {path.name}
                    {/if}
                </a>
            {/each}
        </div>
    </nav>
    <nav class="mobile">
        <a href="/" class="no-underline"><h2>Ben Stephens</h2></a>
        <input type="checkbox" id="menu-toggle" name="menu-toggle" />
        <button class="toggle">
            <label for="menu-toggle"> Menu </label>
        </button>
        <div class="mobile-menu">
            {#each paths as path}
                <a
                    class={`${currentPath === path.path.split("/")[1] ? "current-page" : ""} ${path.button && "no-underline"}`}
                    href={path.path}
                >
                    {#if path.button}
                        <button>{path.name}</button>
                    {:else}
                        {path.name}
                    {/if}
                </a>
            {/each}
        </div>
    </nav>
</header>

<style lang="scss">
    header {
        width: 100%;
        background-color: rgba(239, 237, 228, 0.5);
        position: sticky;
        top: 0px;
        backdrop-filter: blur(5px);
        z-index: 100;
    }

    nav {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        margin: auto;
        max-width: var(--content-width);
        align-items: center;

        @media (max-width: 650px) {
            padding: 1rem;
        }

        div {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        &.mobile {
            display: none;

            @media (max-width: 650px) {
                display: flex;
            }
        }

        &.desktop {
            @media (max-width: 650px) {
                display: none;
            }
        }
    }

    button {
        color: var(--accent);
        border: 2px solid var(--accent);
    }

    .mobile {
        label {
            padding: 0.5rem 1rem;
            display: block;
            cursor: pointer;
        }

        input {
            display: none;

            &:checked + button {
                background-color: var(--accent);
                color: var(--secondary);
            }
        }

        button.toggle {
            padding: 0px;
        }

        .mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0px;
            overflow: hidden;
            background-color: var(--secondary);
            backdrop-filter: blur(5px);
            transition: 0.3s;
            height: 100vh;
            width: 0px;
            opacity: 0;

            a {
                font-size: 1.4rem;
            }

            a:first-child {
                margin-top: 25vh;
            }
        }

        input:checked ~ .mobile-menu {
            display: flex;
            width: 100%;
            opacity: 1;
        }
    }
</style>
