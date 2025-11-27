// Publication.tsx (updated model)

type PublicationMedia = {
    type: 'image' | 'video' | 'youtube';
    url: string;
    alt?: string;
}

type DownloadLinks = {
    [key: string]: string;
}

type ContentSection = {
    type: 'paragraph' | 'heading' | 'list' | 'quote';
    content: string | string[];
    downloadKey?: string;
}

// New multilingual content structure
type MultilingualContent = {
    es: {
        title: string;
        description: string;
        content: ContentSection[];
        tags?: string[];
        authors?: string[];
    };
    en: {
        title: string;
        description: string;
        content: ContentSection[];
        tags?: string[];
        authors?: string[];
    };
}
  
export type PublicationProps = {
    title: string;
    date: string;
    description: string;
    media?: PublicationMedia[];
    content: ContentSection[];
    downloadLink?: string | DownloadLinks;
    tags?: string[];
    // Add language prop for component
    language?: 'es' | 'en';
}

export type Publication = {
    id: string;
    slug: string;
    date: string;
    media?: PublicationMedia[];
    downloadLink?: string | DownloadLinks;
    // Replace single language content with multilingual
    multilingual: MultilingualContent;
}

export type NewPublication = {
    id: string;
    slug: string;
    date: string;
    languages: {
        es?: {
            title: string;
            description: string;
            image: string;
            downloadLink: string;
            tags: string[];
            youtubeId?: string;
            otherLinks? : { label: string; url: string }[];
        };
        en?: {
            title: string;
            description: string;
            image: string;
            downloadLink: string;
            tags: string[];
            youtubeId?: string;
            otherLinks? : { label: string; url: string }[];
        };
        pt?: {
            title: string;
            description: string;
            image: string;
            downloadLink: string;
            tags: string[];
            youtubeId?: string;
            otherLinks? : { label: string; url: string }[];
        };
    }
}