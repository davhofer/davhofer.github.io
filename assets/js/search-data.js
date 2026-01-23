// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "stuff i&#39;m doing",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "a selection of github repos i&#39;ve worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-graduated-with-a-bsc-in-computer-science-from-eth-zurich",
          title: 'Graduated with a BSc in Computer Science from ETH Zurich',
          description: "",
          section: "News",},{id: "news-published-my-first-paper-a-neural-model-for-regular-grammar-induction-at-icmla-2022",
          title: 'Published my first paper: A Neural Model for Regular Grammar Induction at ICMLA...',
          description: "",
          section: "News",},{id: "news-graduated-with-a-msc-in-computer-science-focus-cyber-security-from-eth-zurich-amp-amp-epf-lausanne",
          title: 'Graduated with a MSc in Computer Science (focus Cyber Security) from ETH Zurich...',
          description: "",
          section: "News",},{id: "news-starting-a-new-position-at-invariant-labs-snyk-working-on-ai-security",
          title: 'Starting a new position at Invariant Labs/Snyk, working on AI security',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%76%68%6F%66%65%72@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/davd.dev", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HRicmM4AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/david-hofer-486118196", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/davidbasc", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
