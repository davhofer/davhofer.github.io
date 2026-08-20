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
        },{id: "post-how-we-evaluate-model-risk",
        
          title: 'How We Evaluate Model Risk <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A framework for measuring the security risk of LLMs by evaluating them as agents against adaptive attackers. Published on the Snyk Labs research blog.",
        section: "Posts",
        handler: () => {
          
            window.open("https://research.snyk.io/blog/model-risk/", "_blank");
          
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
          section: "News",},{id: "news-new-preprint-assessing-automated-prompt-injection-attacks-in-agentic-environments",
          title: 'New preprint: Assessing Automated Prompt Injection Attacks in Agentic Environments',
          description: "",
          section: "News",},{id: "news-new-blog-post-on-the-snyk-labs-research-blog-how-we-evaluate-model-risk",
          title: 'New blog post on the Snyk Labs research blog: How We Evaluate Model...',
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
