export class Project {
    constructor(
        public title: string,
        public date: string,
        public description: string,
        public tech: string,
        public colleagues: string,
        public slug: string,
        public thumbnail: Thumbnail,
        public images: Object[]
    ) {
    }
}

export class Thumbnail {
    constructor(public src: string,
                public alt: string,
                public border: string) {
    }

}
