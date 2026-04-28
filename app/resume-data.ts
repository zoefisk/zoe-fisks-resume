export type ProjectLink = {
  label: string;
  href: string;
};

export type SkillCluster = {
  accent: "accent" | "ink" | "sun" | "teal";
  blurb: string;
  items: string[];
  label: string;
  layout: "compact" | "standard" | "wide";
};

export type TechStackItem = {
  accent: "accent" | "ink" | "sun" | "teal";
  category: string;
  endYear: number;
  label: string;
  phase: string;
  startYear: number;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  note: string;
  timeframe: string;
  coursework: string[];
};

export type WorkEntry = {
  employer: string;
  highlights: string[];
  location?: string;
  role: string;
  timeframe: string;
};

export type ProjectImage = {
  alt: string;
  caption: string;
  src: string;
};

export type ProjectBodyItem = string | { bullets: string[] };

export type ProjectSectionBlock = {
  body: ProjectBodyItem[];
  image?: ProjectImage;
  imageSide?: "left" | "right";
  imageSize?: "compact" | "standard" | "wide";
};

export type ProjectSection = {
  title: string;
  blocks: ProjectSectionBlock[];
};

export type ProjectCaseStudy = {
  intro: string;
  summary: string;
  sections: ProjectSection[];
};

export type Project = {
  id: string;
  slug?: string;
  index: string;
  title: string;
  tag: string;
  dateLabel?: string;
  tone: "ember" | "teal" | "ink";
  snapshot?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: ProjectLink[];
  subpage?: ProjectCaseStudy;
};

export const profile = {
  name: "Zoë Fisk",
  title: "FULLSTACK DEVELOPMENT",
  intro:
    "Hey! I’m Zoë. I’ve been programming for most of my life and have experience in full-stack development. I’m seeking software engineering opportunities and am comfortable working in front-end, back-end, or across both.",
};

export const educationHistory: EducationEntry[] = [
  {
    degree: "B.S. in Computer Science",
    institution: "Worcester Polytechnic Institute",
    note:
      "WPI is the core of my technical background, especially the way it combines hands-on software engineering, project work, and systems thinking.",
    timeframe: "Expected 2026",
    coursework: [
      "Intro to CS",
      "Intro to Game Dev",
      "Intro to OOP",
      "Systems Programming",
      "Machine Organization & Assembly",
      "Algorithms",
      "Social Implications",
      "Database Systems I + II",
      "Disrete Math",
      "Software Engineering",
      "Webware",
      "AI For Game Dev",
      "Operating Systems",
      "Data Visualization",
    ],
  },
];

export const workHistory: WorkEntry[] = [
  {
    employer: "MOSAIQ Software",
    highlights: [
      "Collaborated on a 15-20 person engineering team.",
      "Worked in React on frontend implementation.",
      "Applied Agile development practices in team workflows.",
    ],
    role: "Software Engineer (Volunteer)",
    timeframe: "March 2025 - December 2025",
  },
  {
    employer: "Rich Farm Ice Cream",
    highlights: [
      "Worked a customer-facing role in a fast-paced service environment.",
      "Balanced work responsibilities alongside school and technical projects.",
      "Built communication, reliability, and teamwork under pressure.",
    ],
    location: "Bristol, CT",
    role: "Ice Cream Scooper",
    timeframe: "October 2021 - August 2022",
  },
];

export const skills: SkillCluster[] = [
  {
    accent: "sun",
    blurb: "The language mix on the resume spans web work, systems coursework, and data-heavy assignments.",
    items: [
      "Java",
      "C#",
      "C++",
      "Python",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Lua",
      "R",
    ],
    label: "Languages",
    layout: "wide",
  },
  {
    accent: "accent",
    blurb: "The main frontend stack from the PDF, including the libraries behind interface building and validation.",
    items: [
      "React",
      "Next.js",
      "Express.js",
      "Material UI",
      "Mantine",
      "Tailwind CSS",
      "Zod",
    ],
    label: "Frameworks + libraries",
    layout: "wide",
  },
  {
    accent: "teal",
    blurb: "Tools from the resume that shape how projects get shipped, designed, and managed with other people.",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Auth0",
      "NextAuth",
      "Jira",
      "Figma",
      "VS Code",
      "JetBrains IDEs",
      "Notion",
      "Trello",
    ],
    label: "Tools + platforms",
    layout: "wide",
  },
  {
    accent: "ink",
    blurb: "Storage and persistence tools listed on the resume.",
    items: ["MongoDB", "Firebase", "PostgreSQL", "Oracle"],
    label: "Databases",
    layout: "compact",
  },
  {
    accent: "teal",
    blurb: "Visualization-specific tools from the resume that support exploratory and presentation work.",
    items: ["D3.js", "Vega", "Vega-Lite", "Three.js"],
    label: "Data visualization",
    layout: "standard",
  },
  {
    accent: "sun",
    blurb: "The product and collaboration concepts called out directly in the PDF.",
    items: [
      "Agile development",
      "Scrum",
      "UI / UX design",
      "User study implementation",
    ],
    label: "Concepts",
    layout: "standard",
  },
];

export const featuredStack: TechStackItem[] = [
  { accent: "sun", category: "Language", endYear: 2026, label: "Java", phase: "Coursework", startYear: 2019 },
  { accent: "sun", category: "Language", endYear: 2026, label: "C#", phase: "Coursework", startYear: 2016 },
  { accent: "sun", category: "Language", endYear: 2026, label: "C++", phase: "Coursework", startYear: 2022 },
  { accent: "sun", category: "Language", endYear: 2026, label: "Python", phase: "Analysis + tools", startYear: 2018 },
  { accent: "sun", category: "Language", endYear: 2026, label: "TypeScript", phase: "Frontend", startYear: 2024 },
  { accent: "sun", category: "Language", endYear: 2026, label: "JavaScript", phase: "Frontend", startYear: 2015 },
  { accent: "sun", category: "Language", endYear: 2026, label: "HTML/CSS", phase: "Frontend", startYear: 2015 },
  { accent: "sun", category: "Language", endYear: 2024, label: "Lua", phase: "Scripting", startYear: 2015 },
  { accent: "sun", category: "Language", endYear: 2026, label: "R", phase: "Analysis", startYear: 2024 },

  { accent: "accent", category: "Framework", endYear: 2026, label: "React", phase: "Frontend", startYear: 2024 },
  { accent: "accent", category: "Framework", endYear: 2026, label: "Next.js", phase: "Frontend", startYear: 2024 },
  { accent: "accent", category: "Framework", endYear: 2026, label: "Express.js", phase: "Backend", startYear: 2024 },
  { accent: "accent", category: "UI", endYear: 2026, label: "Material UI", phase: "UI systems", startYear: 2024 },
  { accent: "accent", category: "UI", endYear: 2026, label: "Mantine", phase: "UI systems", startYear: 2025 },
  { accent: "accent", category: "Styling", endYear: 2026, label: "Tailwind CSS", phase: "Styling", startYear: 2024 },
  { accent: "accent", category: "Validation", endYear: 2026, label: "Zod", phase: "Validation", startYear: 2026 },

  { accent: "teal", category: "Tool", endYear: 2026, label: "GitHub", phase: "Versioning", startYear: 2018 },
  { accent: "teal", category: "Tool", endYear: 2026, label: "Vercel", phase: "Deployments", startYear: 2024 },
  { accent: "teal", category: "Auth", endYear: 2025, label: "Auth0", phase: "Authentication", startYear: 2024 },
  { accent: "teal", category: "Auth", endYear: 2024, label: "Firebase Auth", phase: "Authentication", startYear: 2022 },
  { accent: "teal", category: "Auth", endYear: 2026, label: "NextAuth", phase: "Authentication", startYear: 2025 },
  { accent: "teal", category: "Tool", endYear: 2025, label: "Jira", phase: "Planning", startYear: 2024 },
  { accent: "teal", category: "Tool", endYear: 2026, label: "Trello", phase: "Planning", startYear: 2018 },
  { accent: "teal", category: "Tool", endYear: 2026, label: "Notion", phase: "Project Management", startYear: 2020 },
  { accent: "teal", category: "Tool", endYear: 2026, label: "Figma", phase: "Design", startYear: 2020 },
  { accent: "teal", category: "Tool", endYear: 2026, label: "VS Code", phase: "Editor", startYear: 2019 },
  { accent: "teal", category: "Tool", endYear: 2026, label: "JetBrains IDEs", phase: "Editor", startYear: 2022 },

  { accent: "teal", category: "Visualization", endYear: 2026, label: "D3.js", phase: "Visualization", startYear: 2025 },
  { accent: "teal", category: "Visualization", endYear: 2026, label: "Vega", phase: "Visualization", startYear: 2025 },
  { accent: "teal", category: "Visualization", endYear: 2026, label: "Three.js", phase: "Visualization", startYear: 2025 },

  { accent: "ink", category: "Database", endYear: 2025, label: "MongoDB", phase: "Data", startYear: 2024 },
  { accent: "ink", category: "Database", endYear: 2026, label: "Firebase", phase: "Data", startYear: 2025 },
  { accent: "ink", category: "Database", endYear: 2024, label: "PostgreSQL", phase: "Data", startYear: 2024 },
  { accent: "ink", category: "Database", endYear: 2024, label: "Oracle", phase: "Data", startYear: 2024 },

  { accent: "sun", category: "Concept", endYear: 2026, label: "Agile development", phase: "Process", startYear: 2024 },
  { accent: "sun", category: "Concept", endYear: 2026, label: "Scrum", phase: "Process", startYear: 2024 },
  { accent: "sun", category: "Concept", endYear: 2026, label: "UI / UX design", phase: "Design thinking", startYear: 2024 },
  { accent: "sun", category: "Concept", endYear: 2026, label: "User study implementation", phase: "Research", startYear: 2024 },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:zoejewelfisk@gmail.com",
    note: "zoejewelfisk@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zjfisk/",
    note: "linkedin.com/in/zjfisk",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/zoefisk",
    note: "github.com/zoefisk",
    external: true,
  },
];

export const projects: Project[] = [
  {
    id: "mqp",
    slug: "master-qualifying-project",
    index: "01",
    title: "Master Qualifying Project",
    tag: "MQP / visualization research",
    dateLabel: "August 2025 - May 2026",
    tone: "ember",
    snapshot:
        "",
    summary:
        "For my Major Qualifying Project, my team designed a domain-specific language for reference range number lines, translated those specifications into Vega and Vega-Lite outputs, and built a website with a live graph editor to make the system easier to explore. We also used the DSL to replicate a prior RRNL study and ran that replication with 123 Prolific participants.",
    highlights: [
      "Broke RRNLs into reusable properties so they could be generated from a small structured specification",
      "Built a web editor that lets users preview graphs, edit JSON, and compare Vega and D3-based outputs",
      "Applied the DSL in a replication of Zikmund-Fisher et al. to test urgency, preference, and behavioral-intention outcomes",
    ],
    stack: ["TypeScript + React", "Vega / Vega-Lite", "D3", "Study replication"],
    links: [
      {
        label: "Visit RRNL site",
        href: "http://rrnl-showcase.com",
      },
    ],
  },
  {
    id: "scouting-app",
    slug: "scouting-app",
    index: "02",
    title: "FRC Scouting App",
    tag: "Experimental / concept build",
    dateLabel: "March 2026 - Present",
    tone: "teal",
    summary:
        "I have been actively developing a scouting application for teams competing in the FIRST Robotics Competition (FRC). As an alumnus of Team Operation PEACCE #3461, I gained firsthand experience with scouting and the challenges associated with it. While the process is valuable, the systems we used, such as paper scouting and Google Forms, were often inefficient and limited in functionality. In response, I set out to design a tool that streamlines the scouting process while expanding its capabilities, providing teams with a more reliable and effective way to collect and analyze competition data.",
    highlights: [
      "Offline capabilities for use in environments with limited connectivity",
      "Scouting forms generate QR codes and CSV exports for easy data collection and sharing, but can also go straight to the cloud",
      "Match and team analysis based on the scouting data and live API data from The Blue Alliance",
    ],
    stack: ["Prototype", "Visual system", "Interaction design", "Concept development"],
    subpage: {
      intro:
          "I have been actively developing a scouting application for teams competing in the FIRST Robotics Competition (FRC). As an alumnus of Team Operation PEACCE #3461, I saw firsthand both the value of scouting and the limitations of the systems we used, such as paper workflows and Google Forms. In response, I set out to design a tool that streamlines the process while expanding its capabilities, giving teams a more reliable and effective way to collect and analyze competition data.",
      summary:
          "One of the biggest challenges was offline capability. I wanted the application to be accessible to students without requiring them to download an app, which created a difficult technical constraint. Learning how to use service workers and IndexedDB was a major part of making that possible.",
      sections: [
        {
          title: "Overall Design",
          blocks: [
            {
              body: [
                "I built a system that lets mentors create scouting projects with key configuration details, including the project name, competition year, and event key, which is integrated with The Blue Alliance for search and validation. Projects can also include participating teams, which supports collaboration across multiple teams, something that is common in FRC, along with customizable questions for the scouting questionnaires. I am still expanding the available project properties to improve flexibility.",
                "Once a project is created, the owner can choose a default questionnaire or create a custom form. Right now, custom forms are built through a JSON editor, supported by documentation that explains the available field types, including number inputs, text responses, selectable options, and rating scales.",
              ],
              image: {
                alt: "Creation form for new scouting project",
                caption: "Project creation flow for setting up a new scouting project.",
                src: "/projects/scouting-app/create-new-project.png",
              },
              imageSide: "right",
              imageSize: "standard",
            },
            {
              body: [
                  "As shown in the image to the left, I also enforced the rule that a questionnaire builder cannot be edited once scouting data has already been submitted. At the moment, there is no option to delete all scouting data from a project, though I may add that later to allow for more flexibility. This was an important design decision for data integrity, since allowing edits after collection begins could create inconsistencies and confusion in the recorded responses.",
              ],
              image: {
                alt: "Questionnaire builder with editing restrictions after data submission",
                caption: "Questionnaire builder once submissions exist, showing the locked-editing constraint.",
                src: "/projects/scouting-app/questionnaire-builder-1.png",
              },
              imageSide: "left",
              imageSize: "standard",
            },
            {
              body: [
                "The image to the right shows the questionnaire builder, which is currently a JSON editor. I may build a more user-friendly interface for creating custom forms in the future, but I wanted to get the functionality working first. The JSON editor is supported by documentation that explains the available field types and how to structure the form, though I know this is not the ideal experience for every user. A future version would likely include drag-and-drop components and a live preview so people can create and customize scouting forms without working directly in JSON.",
              ],
              image: {
                alt: "JSON-based questionnaire builder for custom scouting forms",
                caption: "Current JSON-based questionnaire builder for creating custom forms.",
                src: "/projects/scouting-app/questionnaire-builder-2.png",
              },
              imageSide: "right",
              imageSize: "wide",
            },
            {
              body: [
                "I also included documentation that users can reference while editing the questionnaire JSON. The image to the left shows part of that field-type documentation, though there is more than what is visible here. I spent a lot of time trying to make this as straightforward as possible.",
              ],
              image: {
                alt: "Portion of the documentation for the JSON-based questionnaire builder",
                caption: "Part of the field-type documentation that supports the JSON builder.",
                src: "/projects/scouting-app/questionnaire-builder-3.png",
              },
              imageSide: "left",
              imageSize: "standard",
            },
          ],
        },
        {
          title: "Scouting Schedule",
          blocks: [
            {
              body: [
                "In previous scouting workflows, creating a schedule meant building a spreadsheet that listed every match and all six scouting positions per match, then manually assigning each scouter to a slot. While manageable, the process was repetitive and time-consuming. My application automates that entire step. Users can enter a list of scouters, requiring at least six but ideally more, and the system generates a complete schedule. With only six scouters, assignments stay consistent across matches, but when additional members are included, the system groups matches into batches, defaulting to five but configurable, and distributes assignments as evenly as possible so scouters can rotate and take breaks. Project owners or admins can also manually edit any assignment to handle last-minute changes. One future enhancement I would like to add is a Slack bot that notifies students in real time before each batch of matches, indicating who should report for scouting.",
              ],
              image: {
                alt: "Scouting schedule and coverage planning interface",
                caption: "Schedule view for assigning scouters and checking match coverage at a glance.",
                src: "/projects/scouting-app/scouting-schedule.png",
              },
              imageSide: "left",
              imageSize: "wide",
            },
            {
              body: [
                "One way I would like to extend this feature is by allowing users to specify which team each scouter belongs to, especially when a project includes multiple teams. That would make it easier to define team-based scouting rules, such as assigning Team 123 to scout only the blue alliance and Team 456 to scout only the red alliance.",
                "Another key feature is interactive schedule cells. Each cell can be opened either to access a pre-filled scouting form with the match and position already populated or, if data has already been submitted, to view the recorded responses directly. The system also includes a visual warning indicator when a match has passed without submitted data. In addition to being fully usable within the app, the scouting schedule can be exported as a CSV file for external use.",
              ],
              image: {
                alt: "Modal view for a single scouting assignment, showing the submitted data",
                caption: "Modal for a single scouting assignment, including the submitted data view.",
                src: "/projects/scouting-app/scouting-schedule-modal.png",
              },
              imageSide: "right",
              imageSize: "compact",
            },
          ],
        },
        {
          title: "Match & Team Analysis",
          blocks: [
            {
              body: [
                "One of the analysis subpages is `/analysis/teams/[team_number]`. It combines data pulled directly from The Blue Alliance with match and pit scouting data. In the image to the left, you can see match performance across an entire competition for a given team. This view uses TBA data to show alliance scores for every match the team participated in, along with whether they won, lost, or tied. Users can also click directly on a node to open the related `/analysis/matches/[match_number]` page.",
              ],
              image: {
                alt: "Example of match performance for a team on the analysis page",
                caption: "Team analysis view showing match-by-match performance across an event.",
                src: "/projects/scouting-app/team-match-performance.png",
              },
              imageSide: "left",
              imageSize: "wide",
            },
          ],
        },
        {
          title: "Alliance Selector",
          blocks: [
            {
              body: [
                "Within each project, there is an alliance selector that can be configured to restrict editing to project owners, admins, or designated student leaders. This feature is especially useful when preparing for alliance selection, such as when a team expects to serve as an alliance captain or a high draft pick. All teams at the event are automatically populated and ranked using data from The Blue Alliance. Users can reorder teams by dragging them with the handle or by using controls to move a team to the top or bottom of the list. Teams can also be removed if they are not relevant for selection, such as the user’s own team. An additional feature allows users to click an icon to open a modal with key analytics aggregated from both scouting data and TBA, helping them evaluate each team’s strengths and weaknesses more efficiently.",
                "Future enhancements include adding a notes panel for recording observations during the selection process, as well as a standalone version of the alliance selector that would let users choose an event and build a list without creating a full scouting project. Final selections could also be exported as a CSV or PDF for easier sharing and reference."
              ],
              image: {
                alt: "Alliance selector view",
                caption: "Alliance selector view used to rank and compare potential picks.",
                src: "/projects/scouting-app/alliance-selector.png",
              },
              imageSide: "right",
              imageSize: "standard",
            },
          ],
        },
        {
          title: "Offline Capability",
          blocks: [
            {
              body: [
                "The workflow I developed centers around scouting projects that can be created by mentors or student leaders, who can then invite students to join with either a code or an invite link, with optional Google sign-in. Once inside a project, users can cache event data from The Blue Alliance along with general project information directly in their browser. This is supported by service workers and IndexedDB, which provide offline access and persistent local storage. As a result, users can continue scouting without an internet connection, with data stored locally and synchronized later.",
                  "Users also have the option to enable auto-refresh, which periodically checks for updates from TBA when an internet connection is available. This helps ensure that changes to match schedules, team lists, and other relevant event data are reflected in the app and kept in sync with the cached data.",
                  "This system is the most complex part of the application and will require thorough testing before release. Ensuring that caching and synchronization are reliable is critical, as is making it clear to users whether they are viewing cached or live data. Conflicts between local and remote data also need to be handled carefully, with clear and intuitive options for resolving discrepancies. It works in the testing I have done so far, but I have not yet done long-term testing or used it in a real event environment, which will be the true test of its reliability and usability.",
              ],
              image: {
                alt: "Offline Caching Page",
                caption: "Offline caching settings and sync controls within a project.",
                src: "/projects/scouting-app/offline-caching.png",
              },
              imageSide: "left",
              imageSize: "standard",
            },
          ],
        },
        {
          title: "Scan QR / Import CSV",
          blocks: [
            {
              body: [
                "Project owners or admins can scan QR codes or import CSV files to quickly add scouting data from users who were not connected to the internet. This data can either be uploaded immediately or stored locally and synced later when a connection becomes available. The system includes an import queue that allows multiple entries to be staged at once before submission. After uploading, the application checks for conflicts with existing data and prompts the user to resolve any discrepancies. This feature supports flexible data-collection workflows and ensures that information can be integrated reliably even when users are offline or working independently.",
                  "A planned enhancement is the ability to export all staged data in the queue as a CSV file. That would provide a fallback if uploads fail or the user remains offline, helping ensure that no data is lost. I also plan to support full data exports from the project settings so teams can download all collected scouting data for backup or further analysis.",
              ],
              image: {
                alt: "QR scan and CSV import workflow for scouting data",
                caption: "QR scanning and CSV import flow for bringing offline data back into a project.",
                src: "/projects/scouting-app/import-questionnaire-data.png",
              },
              imageSide: "left",
              imageSize: "wide",
            },
          ],
        },
        {
          title: "Timeline and future plans",
          blocks: [
            {
              body: [
                "This project is still a work in progress. I hope to have it finished by the end of 2026 so it can be tested in real competitions during the 2027 season. My team typically does not attend Week 1 events, usually starting in Week 2 or later, so I am hoping to attend a Week 1 event and test the app in a real environment, with a particular focus on the offline capabilities.",
              ],
            },
          ],
        },
        {
          title: "Tech stack",
          blocks: [
            {
              body: [
                "This project was built with Next.js and uses Firebase for authentication and storage.",
                {
                  bullets: [
                    "Next.js for the main application framework and routing",
                    "Firebase Authentication for sign-in and user access",
                    "Firebase Firestore / storage services for project and scouting data",
                    "Service workers and IndexedDB for offline support",
                    "The Blue Alliance API for event and match data integration",
                  ],
                },
                "I also shaped the stack around the reality that students may need to use the app in noisy venues with inconsistent connectivity, which influenced many of the technical decisions.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "iqp",
    // slug: "iqp",
    index: "01",
    title: "Interactive Qualifying Project",
    tag: "Research / public-facing project",
    dateLabel: "August 2024 - December 2024",
    tone: "ink",
    summary:
        "For my Interactive Qualifying Project (IQP), I spent a term in Nantucket, MA working with Sustainable Nantucket. Preparation began in August through background research and regular meetings with our project sponsor. From October to December, I worked on-site with a team of four students to support the organization in preparing for the Community & Agriculture Resilience Audit Tool (CARAT), a county-level assessment designed to evaluate and strengthen local food system sustainability.",
    highlights: [
      "Interdisciplinary, social science–focused research",
      "Conducted 20+ stakeholder interviews across the island",
      "Collaborated closely within a team of four students",
    ],
    stack: ["Content architecture", "Responsive UI", "Research framing", "Frontend build"],
    links: [
      {
        label: "Open project page",
        href: "https://wp.wpi.edu/nantucket/projects/2024-projects/carat/",
      },
    ],
  },
  {
    id: "resume-site",
    // slug: "resume-site",
    index: "03",
    title: "This Resume Site",
    tag: "Personal / portfolio hybrid",
    dateLabel: "April 2026",
    tone: "ink",
    // snapshot:
    //   "This website is a showcase of my resume and portfolio, but also a project in itself. ",
    summary:
      "This website is a showcase of my resume and portfolio, but also a project in itself. I wanted to make something stylish but also simple for the viewer. I also wanted it to be easy to update and expand over time as I add projects and gain experience. Also, although I personally prefer the look of the dark mode, I also added a light mode to make it more accessible and welcoming to different preferences.",
    highlights: [
      "First time building a site without using a component library",
      "A single-page layout that blends contact info and project detail",
      "All copy grouped in one data file for fast future edits",
    ],
    stack: ["Next.js App Router", "React", "Tailwind + CSS", "Content structure"],
    subpage: {
      intro:
        "This slug page can document how the resume site itself evolved: what changed as the layout got more interactive, how the styling shifted, and which parts were designed to stay easy to update.",
      summary:
        "It is useful to keep a page like this because it shows how you think about turning static information into a navigable experience. It also gives you a home for writing about design revisions, code structure, and future additions.",
      sections: [
        {
          title: "Why make a resume site",
          blocks: [
            {
              body: [
                "Use this section to explain what a website lets you show that a PDF cannot, especially around interaction, hierarchy, and richer project storytelling.",
                "You can also write about the tension between simplicity and personality here.",
              ],
              image: {
                alt: "Placeholder subpage image for the resume site hero view",
                caption: "Hero placeholder for the resume site subpage.",
                src: "/projects/resume-site-hero.svg",
              },
              imageSide: "right",
              imageSize: "wide",
            },
          ],
        },
        {
          title: "Design system choices",
          blocks: [
            {
              body: [
                "This is a good place to describe the futuristic palette, typography, and the browse-detail split used for the projects area.",
                "Because the site is yours, you can also be more reflective about what worked and what you would still change.",
              ],
              image: {
                alt: "Placeholder subpage image for the resume site detail view",
                caption: "Secondary placeholder for a component, section, or layout detail.",
                src: "/projects/resume-site-detail.svg",
              },
              imageSide: "left",
              imageSize: "standard",
            },
          ],
        },
        {
          title: "Where it goes next",
          blocks: [
            {
              body: [
                "This page can grow into a changelog of the site itself: real project imagery, better case studies, and more intentional copy.",
                "If you want a writing space attached to the portfolio, this page can explain that direction too.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "todolist",
    index: "04",
    title: "To-do List App",
    tag: "Webware Coursework",
    dateLabel: "February 2025",
    tone: "teal",
    summary:
      "This was a simple to-do list application I built as part of the Webware course with Professor Wilson Wong at WPI. Users can create, edit, and delete tasks, as well as mark them completed. They can also set due dates.",
    highlights: [
      "Users can search for and select any image from Unsplash to use as a background, making the app more personalized and enjoyable to use",
      "Users can log in or sign up using GitHub or Google",
      "Useful as a lightweight live-demo entry alongside longer-form project writeups",
    ],
    stack: ["Vercel deployment", "MongoDB storage", "Course project", "REACT", "User Authentication", "Mantine UI", "Unsplash API"],
    links: [
      {
        label: "Visit site",
        href: "https://a4-zoe-fisk.vercel.app/",
      },
      // {
      //   label: "GitHub Repository",
      //   href: "    ",
      // },
    ],
  },
  {
    id: "turing-machine-simulator",
    index: "05",
    title: "Turing Machine Simulator",
    tag: "Foundations of CS Coursework",
    dateLabel: "May 2026",
    tone: "teal",
    summary:
        "I made this application to simulate a turing machine as it goes through and adds two binary numbers. " +
        "This was a simple to-do list application I built as part of the Webware course with Professor Wilson Wong at WPI. Users can create, edit, and delete tasks, as well as mark them completed. They can also set due dates.",
    highlights: [
      "Users can search for and select any image from Unsplash to use as a background, making the app more personalized and enjoyable to use",
      "Users can log in or sign up using GitHub or Google",
      "Useful as a lightweight live-demo entry alongside longer-form project writeups",
    ],
    stack: ["Vercel deployment", "MongoDB storage", "Course project", "REACT", "User Authentication", "Mantine UI", "Unsplash API"],
    links: [
      {
        label: "Visit site",
        href: "https://turingmachinesimulator.zoefisk.com/",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug && project.subpage);
}
