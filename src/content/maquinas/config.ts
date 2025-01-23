import { defineCollection, z } from "astro:content";
// z zod schema 

const maquinas = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
        links: z.record(z.string().url()),
    })
})

export const collections = { maquinas }