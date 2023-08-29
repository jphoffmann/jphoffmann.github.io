export type Project = {
    title: string;
    date: string,
    description?: string,
    experience?: string[],
    tech: string[],
    colleagues?: string,
    slug?: string,
    thumbnail: Media,
    images?: Media[],
    videos?: Media[],
    border?: string
}

export type Media = {
    src: string,
    alt: string
    thumb?: string
}
