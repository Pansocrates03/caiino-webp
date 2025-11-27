import fs from "fs";
import path from "path";

// Importing types and data using relative imports
import type { Publication } from "../models/Publication";

// Use dynamic import for data to avoid require-cycle / loader issues

/*
 Script: convertPublication.ts
 - Finds a Publication by id
 - Converts it to NewPublication shape
 - Leaves all image fields as empty string (as requested)
 - Writes resulting output to src/data/publications_converted_from_test.ts
 - Logs the produced object to console
*/

type ContentSection = {
  type: "paragraph" | "heading" | "list" | "quote";
  content: string | string[];
  downloadKey?: string;
};

export type NewPublicationSample = {
  id: string;
  slug: string;
  date: string;
  languages: {
    es?: {
      title: string;
      description: string;
      image: string; // intentionally empty for now
      downloadLink: string;
      content: ContentSection[];
      tags: string[];
    };
    en?: {
      title: string;
      description: string;
      image: string; // intentionally empty for now
      downloadLink: string;
      content: ContentSection[];
      tags: string[];
    };
    pt?: {
      title: string;
      description: string;
      image: string; // intentionally empty for now
      downloadLink: string;
      content: ContentSection[];
      tags: string[];
    };
  };
};

function pickDownloadLink(downloadLink?: string | Record<string, string>, desiredLocale?: string) {
  if (!downloadLink) return "";
  if (typeof downloadLink === "string") return downloadLink;

  // If it's an object, try to choose the key that matches the locale
  if (desiredLocale) {
    const key = Object.keys(downloadLink).find(k => k.toLowerCase().includes(desiredLocale));
    if (key) return downloadLink[key];
  }

  // fallback to the first value
  const keys = Object.keys(downloadLink);
  return keys.length ? downloadLink[keys[0]] : "";
}

function convert(publication: Publication): NewPublicationSample {
  const out: NewPublicationSample = {
    id: publication.id,
    slug: publication.slug,
    date: publication.date,
    languages: {}
  };

  const dl = publication.downloadLink;

  if (publication.multilingual.es) {
    out.languages.es = {
      title: publication.multilingual.es.title,
      description: publication.multilingual.es.description,
      image: "", // as requested leave image fields empty for now
      downloadLink: pickDownloadLink(dl, "spanish") || "",
      content: publication.multilingual.es.content || [],
      tags: publication.multilingual.es.tags || []
    };
  }

  if (publication.multilingual.en) {
    out.languages.en = {
      title: publication.multilingual.en.title,
      description: publication.multilingual.en.description,
      image: "",
      downloadLink: pickDownloadLink(dl, "english") || "",
      content: publication.multilingual.en.content || [],
      tags: publication.multilingual.en.tags || []
    };
  }

  // If there was a portuguese key in download links or multilingual, we could add pt
  const possiblePtKey = typeof dl === "object" && dl ? Object.keys(dl).find(k => k.toLowerCase().includes("portugues") || k.toLowerCase().includes("portugu")) : undefined;
  if (possiblePtKey || (publication.multilingual as any).pt) {
    out.languages.pt = {
      title: (publication as any).multilingual?.pt?.title || "",
      description: (publication as any).multilingual?.pt?.description || "",
      image: "",
      downloadLink: possiblePtKey ? (dl as Record<string, string>)[possiblePtKey] : "",
      content: (publication as any).multilingual?.pt?.content || [],
      tags: (publication as any).multilingual?.pt?.tags || []
    };
  }

  return out;
}

async function main() {
  // Load the publications data dynamically to avoid loader issues
  const mod = await import(path.join(__dirname, '..', 'data', 'publications_test'));
  const pubs: Publication[] = (mod as any).publications || (mod as any).default || [];

  if (!Array.isArray(pubs) || !pubs.length) {
    console.error('No publications found to convert in publications_test.ts');
    process.exit(1);
  }

  const convertedAll = pubs.map(convert);

  // Write to a new file for inspection
  const outPath = path.join(__dirname, "..", "data", "publications_converted_from_test_all.ts");
  const fileContent = `export const convertedPublications = ${JSON.stringify(convertedAll, null, 2)} as const;\n`;

  fs.writeFileSync(outPath, fileContent, { encoding: 'utf-8' });

  // Print summary to console
  console.log(`Converted ${convertedAll.length} publications.`);
  console.log(`Wrote converted array to: ${outPath}`);
}

// Run when executed directly
if (require.main === module) main();
