export type Project = {
    title: string;
    date: string,
    description?: string,
    tech: [],
    colleagues?: string,
    slug?: string,
    thumbnail?: Thumbnail,
    images?: Object[]
}

export type Thumbnail = {
    src: string,
    alt: string,
    border?: string
}
