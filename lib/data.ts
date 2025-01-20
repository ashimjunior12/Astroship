import {
  FaReact,
  FaHtml5,
  FaSass,
  FaVuejs,
  FaNodeJs,
  FaSearch,
  FaUsers,
  FaAngular
} from 'react-icons/fa';
import {
  SiAstro,
  SiTailwindcss,
  SiMdx,
  SiTypescript,
  SiRss,
} from 'react-icons/si';
import { RiSvelteFill } from 'react-icons/ri';

import { IconType } from 'react-icons';

export interface Feature {
  id: number;
  title: string;
  desc: string;
  icon: IconType; // Use IconType for react-icons
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title: 'Bring Your Own Framework',
    desc: "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
    icon: FaReact, // Use the component reference, not JSX
  },
  {
    id: 2,
    title: '100% Static HTML, No JS',
    desc: 'Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.',
    icon: FaHtml5,
  },
  {
    id: 3,
    title: 'On-Demand Components',
    desc: 'Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.',
    icon: SiAstro,
  },
  {
    id: 4,
    title: 'Broad Integration',
    desc: 'Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.',
    icon: FaSass,
  },
  {
    id: 5,
    title: 'SEO Enabled',
    desc: 'Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication.',
    icon: FaSearch,
  },
  {
    id: 6,
    title: 'Community',
    desc: 'Astro is an open-source project powered by hundreds of contributors making thousands of individual contributions.',
    icon: FaUsers,
  },
  {
    id: 7,
    title: 'TypeScript Support',
    desc: 'Astro supports TypeScript for better developer experience and static type checking.',
    icon: SiTypescript,
  },
  {
    id: 8,
    title: 'Tailwind CSS Ready',
    desc: 'Astro integrates seamlessly with Tailwind CSS for modern, responsive UI design.',
    icon: SiTailwindcss,
  },
  {
    id: 9,
    title: 'Markdown & MDX Support',
    desc: 'Astro allows you to write content in Markdown or MDX for flexibility and ease.',
    icon: SiMdx,
  },
  {
    id: 10,
    title: 'RSS Feed Generation',
    desc: 'Generate RSS feeds easily to syndicate your content across platforms.',
    icon: SiRss,
  },
];

export interface Icons{
 id:number,
 icon: IconType
}

export const ReactIcons:Icons[] = [
  {
    id: 1,
    icon: FaReact,
  },
  {
    id: 2,
    icon: RiSvelteFill,
  },
  {
    id: 3,
    icon: FaAngular,
  },
  {
    id: 4,
    icon: FaVuejs,
  },
  {
    id: 5,
    icon: FaNodeJs,
  },
  {
    id: 6,
    icon: FaHtml5,
  },
];