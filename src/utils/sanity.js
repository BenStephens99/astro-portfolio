import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "p4zme5fk",
    dataset: "production",
    apiVersion: "2024-03-25",
    useCdn: false,
});

export async function getPosts() {
    const posts = await sanityClient.fetch('*[_type == "blog"]')
    return posts
  }

export async function getPost(slug) {
    const post = await sanityClient.fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug })
    return post
  }

export async function getHomeSections() {
    const homeSections = await sanityClient.fetch('*[_type == "homeSection"] | order(_updatedAt desc)')
    return homeSections
  }

