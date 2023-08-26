export type Project = {
    title: string;
    date: string,
    description?: string,
    experience?: string[],
    tech: string[],
    colleagues?: string,
    slug?: string,
    thumbnail: Image,
    images?: Image[],
    gifs?: Image[],
    border?: string
}

export type Image = {
    src: string,
    alt: string
    thumb?: string
}
