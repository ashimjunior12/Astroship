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
import { TiTick } from 'react-icons/ti';
import {
  SiAstro,
  SiTailwindcss,
  SiMdx,
  SiTypescript,
  SiRss,
} from 'react-icons/si';
import { RiSvelteFill } from 'react-icons/ri';

import { IconType } from 'react-icons';
import img1 from '@/public/images/img1.jpeg'
import img2 from '@/public/images/img2.jpeg'
import img3 from '@/public/images/img3.jpeg'
import { StaticImageData } from 'next/image';

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

export interface PricingPlan{
  id: number;
  name: string;
  price: string;
  features: {icon: IconType; text:string}[];
  buttonLabel: string;
}

export const pricingPlan: PricingPlan[] = [
  {
    id: 1,
    name: 'Personal',
    price: 'Free',
    features: [
      { icon: TiTick, text: 'Lifetime Free' },
      { icon: TiTick, text: 'Up to 3 users' },
      { icon: TiTick, text: 'Unlimited Pages' },
      { icon: TiTick, text: 'Astro Sub domain' },
      { icon: TiTick, text: 'Basic Integrations' },
      { icon: TiTick, text: 'Community Support' },
    ],
    buttonLabel: 'Explore',
  },
  {
    id: 2,
    name: 'Startup',
    price: '$19',
    features: [
      { icon: TiTick, text: 'All Free Features' },
      { icon: TiTick, text: 'Up to 20 users' },
      { icon: TiTick, text: '20 Custom domains' },
      { icon: TiTick, text: 'Unlimited Collaborators' },
      { icon: TiTick, text: 'Advanced Integrations' },
      { icon: TiTick, text: 'Priority Support' },
    ],
    buttonLabel: 'Get Started',
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    features: [
      { icon: TiTick, text: 'All Pro Features' },
      { icon: TiTick, text: 'Unlimited Custom domains' },
      { icon: TiTick, text: '99.99% Uptime SLA' },
      { icon: TiTick, text: 'SAML & SSO Integration' },
      { icon: TiTick, text: 'Dedicated Account Manager' },
      { icon: TiTick, text: '24/7 Phone Support' },
    ],
    buttonLabel: 'Contact us',
  },
];


export interface About{
  id: number;
  name: string;
  role: string;
  image: StaticImageData
}

export const aboutData: About[] = [
  {
    id: 1,
    name: 'Robert Palmer',
    role: 'Senior Director',
    image: img1,
  },
  {
    id: 2,
    name: 'Marcell Ziemann',
    role: 'Principal Strategist',
    image: img2,
  },
  {
    id: 3,
    name: 'Janette Lynch',
    role: 'Marketing Engineer',
    image: img3,
  },
];