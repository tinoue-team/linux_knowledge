export interface Image {
    url: string;
    alt: string;
}

export interface Frontmatter {
    layout?: string;
    title: string;
    pubDate: string;
    description: string;
    author: string;
    image?: Image;
    tags: string[];
}

export interface Post {
    frontmatter: Frontmatter;
    // content: string;
}
