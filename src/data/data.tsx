import {AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jake Ruth Portfolio',
  description: 'Jake Ruth Portfolio',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
const yearsExperience = new Date().getFullYear() - 2018;

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Jake Ruth`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> with a passion for finding
        elegant solutions to complex problems. I have over {yearsExperience} years of experience working to create
        enterprise level modern applications using the latest technologies.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

function calculateAge() {
  const birthday = new Date('1996-11-30');
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return String(age);
}

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a passionate software engineer who loves building thoughtful, high-quality applications. 
  I've worked extensively with technologies like React, React Native, TypeScript, Node.js, GraphQL, Next.js, Postgres, MongoDB, and many more. 
  I take pride in crafting software that’s not just functional, but truly impactful.`,
  aboutItems: [
    {label: 'Location', text: 'Annapolis, MD', Icon: MapIcon},
    {label: 'Age', text: calculateAge(), Icon: CalendarIcon},
    {label: 'Interests', text: 'Music, Skateboarding, Surfing', Icon: SparklesIcon},
    {label: 'Education', text: 'UMBC', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'CSS Frameworks/Libraries',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 4,
      },
      {
        name: 'GraphQL',
        level: 5,
      },
      {
        name: 'Relational Databases (Postgres, MySQL, etc)',
        level: 5,
      },
      {
        name: 'NoSQL Databases (Mongo, Redis, etc)',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Expo',
        level: 9,
      },
      {
        name: 'Swift',
        level: 4,
      },
      {
        name: 'Kotlin',
        level: 3,
      },
      {
        name: 'Java',
        level: 3,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Conversational Spanish',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Neurofret',
    description: `A cross-platform mobile application for ear training on the guitar using React Native, Expo, Typescript,
        Swift, Kotlin, and many more technologies. As the app has grown, more teammates have been added and I have taken
        on the lead software engineer role, managing the team and growth of the application.`,
    url: 'https://neurofret.com',
    image: porfolioImage1,
    imageUrl: 'neurofret.png',
  },
  {
    title: 'Dtect',
    description: `Dtect is web and mobile application for market research project managers used to automate market research projects, allow
    for very large-scale projects using multiple suppliers, and is also designed to place many security checks in a project to reduce fraudulent
    activity.`,
    url: 'https://dtect.io',
    image: porfolioImage2,
    imageUrl: 'dtect.png',
  },
  {
    title: 'Daily Movement Snacks',
    description: `Daily Movement Snacks is an iOS and Android app that helps develop a healthy craving for movement throughout the day. As
    a software engineer, I saw the need to bring more movement into our day, and I partnered with multiple health and fitness influencers to create
    the app.  In the app app, we offer a library of movements, challenges, and goals that you can use in quick movement snack breaks throughout the day 
    to bring movement back into your life.`,
    url: 'https://dailymovementsnacks.com',
    image: porfolioImage2,
    imageUrl: 'dms.png',
  },
  {
    title: 'Practice Perfect',
    description: `Practice Perfect is an app that allows musicians to create customized practice routines to suit their own goals and needs. 
    Create a practice routine with a list of customizable practice items, set timers for each practice item, press play, and go! 
    Practice Perfect will help you stay on track during your practice session.`,
    url: 'https://apps.apple.com/us/app/practice-perfect-mobile/id1500441469',
    image: porfolioImage2,
    imageUrl: 'neurofret.png',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2018',
    location: 'University of Maryland, Baltimore County',
    title: 'Bachelors of Science - Information Systems',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'Neurofret, LLC',
    title: 'Lead Software Engineer',
    content: (
      <p>
        Created cross-platform mobile application for ear training on the guitar using React Native, Expo, Typescript,
        Swift, Kotlin, and many more technologies. As the app has grown, more teammates have been added and I have taken
        on the lead software engineer role, managing the team and growth of the application.
      </p>
    ),
  },
  {
    date: '2023-2025',
    location: 'Acuity, Inc',
    title: 'Senior Full-Stack Engineer',
    content: (
      <p>
        Developed full-stack solutions for federal government contracts. Used React, Spring Boot, Node.js, GraphQL,
        Postgres, and Elasticsearch. Collaborated across departments to design and implement scalable systems.
      </p>
    ),
  },
  {
    date: '2021-2023',
    location: 'Quest Mindshare',
    title: 'Senior Full-Stack Engineer',
    content: (
      <p>
        Led efforts to build a SaaS platform for market research, including mobile, web, and backend systems.
        Spearheaded critical technical initiatives as an early team member. Contributed across the stack in a fast-paced
        product development environment.
      </p>
    ),
  },
  {
    date: '2018-2021',
    location: 'Anne Arundel County',
    title: 'Full-Stack Engineer',
    content: (
      <p>
        Created internal tools and mobile apps for county employees using React, React Native, Node.js, GraphQL, and SQL
        Server. Led the development of one of the county’s first cross-platform mobile applications.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: `I'm always open to new opportunities, collaborations, or conversations—please feel free to get in touch if you'd like to discuss a project, explore potential partnerships, or simply connect about software development and technology.`,
  items: [
    {
      type: ContactType.Email,
      text: 'jacobruth14@gmail.com',
      href: 'mailto:jacobruth14@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Annapolis MD, USA',
      href: '',
    },
    {
      type: ContactType.Github,
      text: 'jake-ruth',
      href: 'https://github.com/jake-ruth',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jake-ruth'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jake-ruth-8350b2157/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jakeruthmusic/?hl=en'},
];
