
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Rafael Del Grande",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "",
      link: "",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Rafael",
  description: "",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am Rafael",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Excited state forces",
      description: "AA",
      icons: null,
    },
    {
      title: "GW BSE calculations",
      description: "AA",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:rafaeldgrande@gmail.com",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Rafael R. Del Grande",
  description: "",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "Rafael R. Del Grande",
  description: "Condensed Matter Physicist | Computationa Materials Scientist | Scientific Software Developer",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/rafaeldgrande",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/rafaeldelgrande/",
    },
  ]
}