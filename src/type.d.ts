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
export interface CmdFrontmatter {
    layout?: string;
    title: string;
    description: string;
    image?: Image;
    tags: string[];
    featured: boolean;
    draft: boolean;
    author: string;
    pubDatetime: Date;
    modDatetime: Date;
}

export interface Post {
    frontmatter: Frontmatter;
    // content: string;
}
