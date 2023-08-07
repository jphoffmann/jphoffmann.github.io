export type Project = {
    title: string;
    date: string,
    description?: string,
    tech: string[],
    colleagues?: string,
    slug?: string,
    thumbnail: Thumbnail,
    images?: Image[],
    gif?: GIF[]
}

export type Thumbnail = {
    src: string,
    alt: string,
    border?: string
}

export type Image = {
    src: string,
    alt: string
}

export type GIF = {
    src: string,
    alt: string,
    thumb: string
}
