<script>
import { urlFor } from "../utils/image";

export let posts = [];

for (const post of posts) {
    post.image.url = urlFor(post.image).auto('format').height(400).url();
}
</script>

<div class="post-list">
    <ul>
        {#each posts as post}
            <li>
                <a href={`/blog/${post.slug.current}`} class="no-underline post-item">
                    <img src={post.image.url} alt={post.title}  style="view-transition-name:image-{post._id};"/>    
                    
                    <datetime>{new Date(post.publishedAt).toLocaleDateString()}</datetime>
                    <h3>{post.title}</h3>
                    <div>{post.summary}</div>
                </a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, 320px);
        justify-content: center;
        gap: 2rem;
        padding: 0px;

        li {
            list-style: none;
        }
    }

    .post-item {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        h3 {
            margin: 0;
            font-size: 1.4rem;
            font-weight: 500;
        }

        datetime {
            font-size: 0.75rem;
            margin-top: 0.3rem;
        }

        img {
            width: 100%;
            height: 200px;
            aspect-ratio: 10/7;
            object-fit: cover;
        }
    }
</style>