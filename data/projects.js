/**
 * Single source of truth for all project data — used by index.html (grid/cards)
 * and case-study.html (project detail page, driven by ?id=).
 * No server/DB: this is a static array bundled with the site.
 *
 * To add a project: push a new object with a unique `id`.
 * `caseStudy` is optional — if omitted, case-study.html falls back to a
 * simple layout built from title/desc/img/tags.
 *
 * Each project owns its OWN photos/videos in its own `images` array (no
 * shared/external lists). `img` (card thumbnail) and `caseStudy.heroImg` are
 * optional — if left out, they default to `images[0]`. To show all of a
 * project's media as a swipeable gallery, add a `{ type:'gallery' }` block
 * with no `items` — it auto-fills from that project's `images`.
 *
 * caseStudy.content block types:
 *  { type:'heading',    text }
 *  { type:'subheading',  text }
 *  { type:'paragraph',  text }
 *  { type:'quote',      text }
 *  { type:'list',       items: [] }
 *  { type:'image',      src, alt, caption }
 *  { type:'principles', items: [{ title, desc }] }        // 3-col grid
 *  { type:'steps',      items: [{ title, desc }] }        // numbered list
 *  { type:'compare',    before:{src,caption}, after:{src,caption} }
 *  { type:'gallery',    caption?, items? }  // omit `items` to auto-use this project's `images`
 *                                            // items (if given): [{type:'image',src,alt?} | {type:'video',src,poster?}]
 *                                            // arrows + dot indicators + swipe, auto-generated
 *  { type:'divider' }
 */
window.PROJECTS = [
  // XApps
  {
    id: 1,
    title: 'XApps — Corporate Website\n ( More Details )',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    tags: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    year: '2026',
    desc: 'Developed and customized a bilingual WordPress website, fixing layout and responsive issues, improving the Projects and Blog sections, and enhancing the overall user experience across Arabic and English pages.',
    // This project's photos/videos — used for the card thumbnail, the case-study
    // hero image, and the gallery block below. Add/remove items here only.
    images: [
      { type: 'video', src: 'photo/XApps/XApps.mp4', poster: 'photo/XApps/XApps1.png' },
      { type: 'image', src: 'photo/XApps/XApps2.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps3.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps4.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps5.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps6.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps7.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps8.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps9.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps10.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps11.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps12.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps13.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/XApps/XApps14.png', alt: 'Blog page' },

      // { type: 'image', src: 'photo/xapps-3.png', alt: 'Projects page' },
      // ...add up to ~30 items the same way, each pointing to a file in photo/
    ],
    caseStudy: {
      subtitle: 'A bilingual (Arabic/English) corporate WordPress website, rebuilt for consistent layout, responsiveness, and a clearer content experience.',
      client: 'XApps',
      role: 'WordPress Developer',
      timeline: '2026',
      deliverables: 'WordPress, PHP, HTML/CSS, JS',
      stats: [
        { value: '7+', label: 'Website Areas Improved' },
        { value: '25+', label: 'Bugs & UI issues resolved' },
        { value: 'AR / EN', label: 'Bilingual QA (RTL / LTR)' },
      ],
      content: [
        { type: 'heading', text: 'Project Brief' },
        { type: 'paragraph', text: 'The client provided a document with around 30 website issues. I fixed each issue one by one and tested everything on both the Arabic and English versions of the website.' },

        { type: 'heading', text: 'What I worked on' },

        { type: 'subheading', text: 'Global' },
        { type: 'list', items: [
          'Improved the Arabic and English versions of the website.',
          'Fixed general UI, typography, spacing, and alignment issues.',
          'Improved consistency between the Arabic and English versions.',
        ] },

        { type: 'subheading', text: 'Homepage (AR/EN)' },
        { type: 'list', items: [
          'Fixed responsive and mobile layout issues across different screen sizes.',
          'Improved Arabic RTL layout and applied the Cairo font across Arabic pages.',
          'Improved the Projects section, including project images and navigation.',
          'Improved Blog section images and layout.',
          'Improved hover effects and clickable elements.',
        ] },

        { type: 'subheading', text: 'Contact info block' },
        { type: 'list', items: [
          'Improved the contact information layout and alignment.',
          'Fixed the contact/email form functionality.',
          'Improved the presentation of email addresses and social media links.',
        ] },

        { type: 'subheading', text: 'WordPress dashboard' },
        { type: 'list', items: [
          'Improved WordPress Dashboard functionality for managing website content.',
          'Fixed issues with adding and editing projects.',
          'Improved project content management and editing.',
        ] },

        { type: 'subheading', text: 'Projects page (AR/EN)' },
        { type: 'list', items: [
          'Improved the Projects page layout in both languages.',
          'Fixed project image display and sizing issues.',
          'Improved project navigation and links.',
          'Fixed differences between the Arabic and English versions.',
        ] },

        { type: 'subheading', text: 'Blog article page (AR/EN)' },
        { type: 'list', items: [
          'Improved article titles, images, categories, tags, and spacing.',
          'Fixed image sizing to display images correctly without unwanted cropping.',
          'Improved the article layout and readability.',
          'Fixed issues with article titles and page content in the Arabic version.',
        ] },

        { type: 'subheading', text: 'Blog category pages (AR/EN)' },
        { type: 'list', items: [
          'Improved article title sizes and spacing.',
          'Fixed sidebar image sizing and display.',
          'Improved categories, tags, and article layout.',
          'Fixed image spacing and alignment issues.',
          'Improved the overall blog browsing experience in both languages.',
        ] },

        { type: 'heading', text: 'Process' },
        { type: 'steps', items: [
          { title: 'Review', desc: 'Reviewed the client\'s bug list and grouped the issues by website section.' },
          { title: 'Fix', desc: 'Fixed the reported UI, responsive, image, and functionality issues one by one.' },
          { title: 'Backend & WordPress', desc: 'Fixed the contact form and Projects management issues in WordPress.' },
          { title: 'Test', desc: 'Tested every fix on both Arabic (RTL) and English (LTR) versions, including mobile.' },
        ] },

        { type: 'heading', text: 'Skills demonstrated' },
        { type: 'list', items: [
          'WordPress Development & Customization',
          'PHP, HTML, CSS & JavaScript',
          'Responsive & Mobile Design',
          'Arabic RTL / English LTR Support',
          'WordPress Debugging & Troubleshooting',
          'UI, Layout & Image Optimization',
          'WordPress Forms & Custom Post Types',
          'Cross-browser & Mobile Testing',
        ] },

        { type: 'heading', text: 'Result' },
        { type: 'paragraph', text: 'All reported issues were fixed and verified in both Arabic and English. The website now provides a more consistent and reliable experience across desktop and mobile.' },
      ],
    },
  },
  // Altuwayjiri
  {
    id: 2,
    title: 'Altuwayjiri — Electronics E-commerce Platform ( More Details )',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    tags: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    year: '2026',
    desc: 'Built and launched a Saudi e-commerce platform for electronics from start to finish, including theme customization, WooCommerce setup, Arabic localization, product management, payment integration, forms, SMTP, WhatsApp contact, custom PHP changes, and Hostinger deployment.',
    // This project's photos/videos — used for the card thumbnail, the case-study
    // hero image, and the gallery block below. Add/remove items here only.
    images: [
      { type: 'video', src: 'photo/altuwayjiri/altuwayjiri.mp4', poster: 'photo/altuwayjiri/altuwayjiri2.png' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri1.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri2.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri3.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri4.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri5.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri6.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri7.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri8.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri9.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri10.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri11.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri12.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri13.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri14.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri15.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri16.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri17.png', alt: 'Blog page' },
      { type: 'image', src: 'photo/altuwayjiri/altuwayjiri18.png', alt: 'Blog page' },
      // { type: 'image', src: 'photo/xapps-3.png', alt: 'Projects page' },
      // ...add up to ~30 items the same way, each pointing to a file in photo/
    ],
    caseStudy: {
      subtitle: 'A Saudi electronics e-commerce platform built and customized from start to finish using WordPress, WooCommerce, WPBakery, and XStore.',
      client: 'Altuwayjiri',
      role: 'WordPress Developer',
      timeline: '2026',
      deliverables: 'WordPress, WooCommerce, PHP, WPBakery, JavaScript, HTML/CSS',
      stats: [
        { value: '100%', label: 'Built & Managed by Me' },
        { value: 'WooCommerce', label: 'E-commerce Platform' },
        { value: 'AR', label: 'Arabic Localization' },
      ],
      content: [
        { type: 'heading', text: 'Project Brief' },
        { type: 'paragraph', text: 'Built a complete Saudi e-commerce platform for selling electronics. I handled the project from setup and customization to product management, integrations, testing, and final deployment.' },

        { type: 'heading', text: 'What I worked on' },

        { type: 'subheading', text: 'Website Development' },
        { type: 'list', items: [
          'Built and customized the website from start to finish.',
          'Customized the XStore Theme to match the client requirements.',
          'Built and edited pages using WPBakery Page Builder.',
          'Created a custom Child Theme for code changes.',
          'Added custom PHP changes to the Child Theme.'
        ] },

        { type: 'subheading', text: 'WooCommerce & Products' },
        { type: 'list', items: [
          'Set up and configured WooCommerce for the online store.',
          'Added and managed products with images, descriptions, prices, and details.',
          'Used BEAR Bulk Editor to manage product data efficiently.',
          'Configured product and shopping features based on the project needs.'
        ] },

        { type: 'subheading', text: 'Payment & Forms' },
        { type: 'list', items: [
          'Built a custom WooCommerce payment integration.',
          'Tested the payment flow and checkout process.',
          'Set up contact forms using Contact Form 7.',
          'Configured SMTP for reliable website emails.'
        ] },

        { type: 'subheading', text: 'Arabic & User Experience' },
        { type: 'list', items: [
          'Translated and prepared the website in Arabic.',
          'Adjusted the layout for Arabic content and RTL direction.',
          'Added direct WhatsApp contact for quick communication with the store owner.',
          'Improved the website layout and user experience across the main pages.'
        ] },

        { type: 'subheading', text: 'Deployment' },
        { type: 'list', items: [
          'Prepared the website for production.',
          'Uploaded and deployed the website on Hostinger.',
          'Tested the main website features after deployment.'
        ] },

        { type: 'heading', text: 'Process' },
        { type: 'steps', items: [
            {
              title: 'Setup',
              desc: 'Set up WordPress, WooCommerce, the theme, and the required plugins.'
            },
            {
              title: 'Customize',
              desc: 'Customized the theme and built the pages using WPBakery.'
            },
            {
              title: 'Integrate',
              desc: 'Added payment, forms, SMTP, WhatsApp, and custom PHP changes.'
            },
            {
              title: 'Test & Deploy',
              desc: 'Tested the main features and deployed the website on Hostinger.'
            }
          ]
        },

        { type: 'heading', text: 'Skills demonstrated' },
        { type: 'list', items: [
          'WordPress Development',
          'WooCommerce',
          'WPBakery Page Builder',
          'XStore Theme Customization',
          'Child Theme Development',
          'PHP & JavaScript',
          'Payment Integration',
          'Product Management',
          'Arabic RTL Localization',
          'Contact Forms & SMTP',
          'WordPress Deployment',
          'Website Troubleshooting'
        ]
        },

        { type: 'heading', text: 'Result' },
        { type: 'paragraph', text: 'Delivered and deployed a complete Arabic e-commerce platform for the client, covering the website setup, design customization, products, payment, communication tools, and production deployment.' },
      ],
    },
  },
  // AqarGate
  {
    id: 3,
    title: 'AqarGate — Real Estate Platform\n( More Details )',
    category: ['wordpress', 'landing'],
    categoryLabel: 'WordPress',
    tags: ['WordPress', 'PHP', 'MySQL', 'REGA API', 'Nafath API'],
    year: '2026',

    desc: 'Enhanced a production Saudi real estate platform by optimizing a critical login issue from ~16s to ~2s, integrating REGA and Nafath APIs, improving property synchronization, and updating the Houzez Parent Theme while maintaining Child Theme compatibility.',

    images: [
      { type: 'video', src: 'photo/aqargate/AqarGate.mp4', poster: 'photo/aqargate/aqargate1.png' },
      { type: 'image', src: 'photo/aqargate/aqargate1.png', alt: 'AqarGate homepage' },
      { type: 'image', src: 'photo/aqargate/aqargate2.png', alt: 'AqarGate property page' },
      { type: 'image', src: 'photo/aqargate/aqargate3.png', alt: 'AqarGate website' },
      { type: 'image', src: 'photo/aqargate/aqargate4.png', alt: 'AqarGate website' },
      { type: 'image', src: 'photo/aqargate/aqargate5.png', alt: 'AqarGate website' },
      { type: 'image', src: 'photo/aqargate/aqargate6.png', alt: 'AqarGate website' },
      { type: 'image', src: 'photo/aqargate/aqargate7.png', alt: 'AqarGate website' },
      { type: 'image', src: 'photo/aqargate/aqargate8.png', alt: 'AqarGate website' },
      { type: 'image', src: 'photo/aqargate/aqargate9.png', alt: 'AqarGate website' },
    ],

    caseStudy: {
      subtitle: 'Production Saudi real estate platform enhanced with custom PHP development, third-party API integrations, property synchronization, and performance improvements.',

      client: 'AqarGate',
      role: 'WordPress / PHP Developer',
      timeline: '2026',
      deliverables: 'WordPress, PHP, MySQL, REST APIs',

      stats: [
        { value: '16s → 2s', label: 'Login Performance' },
        { value: '2', label: 'API Integrations' },
        { value: 'Production', label: 'Live Platform' },
      ],

      content: [
        { type: 'heading', text: 'Project Overview' },
        { type: 'paragraph', text: 'AqarGate is a Saudi real estate platform built with WordPress, PHP Native, MySQL, and the Houzez Theme. The platform was already developed and running in production, and my work focused on improving existing functionality, solving technical issues, and extending the platform with external services.' },

        { type: 'heading', text: 'Key Improvements' },

        { type: 'subheading', text: 'Performance Optimization' },
        { type: 'list', items: [
          'Investigated a login issue that caused requests to take around 16 seconds.',
          'Debugged the backend and database flow to identify the source of the delay.',
          'Resolved the issue and reduced the response time to around 2 seconds.',
        ] },

        { type: 'subheading', text: 'REGA Integration & Property Sync' },
        { type: 'list', items: [
          'Integrated the REGA API using the provided documentation.',
          'Implemented and maintained the flow for retrieving property data using the advertisement license number.',
          'Debugged and fixed issues in property data retrieval and synchronization.',
          'Worked with both individual and bulk property synchronization to keep property information updated.',
        ] },

        { type: 'subheading', text: 'Nafath Integration' },
        { type: 'list', items: [
          'Integrated Nafath APIs for identity verification and authentication.',
          'Handled API requests, responses, and integration-related issues based on the provided documentation.',
        ] },

        { type: 'subheading', text: 'Houzez Theme Upgrade' },
        { type: 'list', items: [
          'Updated the Houzez Parent Theme to a newer version.',
          'The existing Child Theme was built around an older Houzez version and became incompatible after the update.',
          'Updated the Child Theme customizations and fixed compatibility issues until it worked correctly with the new Parent Theme.',
        ] },

        { type: 'subheading', text: 'API Logging & Debugging' },
        { type: 'list', items: [
          'Implemented centralized logging for REGA and Nafath integrations.',
          'Tracked API requests, responses, and errors to identify where integration problems occurred.',
          'Made API-related debugging and troubleshooting faster and easier.',
        ] },

        { type: 'heading', text: 'Technical Work' },
        { type: 'list', items: [
          'WordPress & PHP Native development',
          'MySQL database investigation and debugging',
          'REST API integration and troubleshooting',
          'Houzez Parent / Child Theme customization',
          'Property data synchronization',
          'Performance optimization',
          'API logging and error tracking',
        ] },

        { type: 'heading', text: 'Result' },
        { type: 'paragraph', text: 'The platform became faster and more reliable, with the login response time reduced from around 16 seconds to 2 seconds. REGA and Nafath integrations were improved, property synchronization issues were resolved, and the custom Child Theme was successfully updated to work with the newer Houzez Parent Theme.' },
      ],
    },
  },
  // TownTop
  {
    id: 4,
    title: 'TownTop — Real Estate Platform',
    category: ['wordpress', 'landing'],
    categoryLabel: 'WordPress',
    tags: ['WordPress', 'PHP', 'MySQL', 'REGA API', 'Nafath API'],
    year: '2026',

    desc: 'Developing a Saudi real estate platform using WordPress, PHP, and a customized RealHomes Child Theme, with Nafath authentication, REGA property integration, individual and bulk synchronization, and detailed API logging.',

    images: [
      { type: 'video', src: 'photo/towntop/TownTop.mp4', poster: 'photo/towntop/towntop1.png' },
      { type: 'image', src: 'photo/towntop/towntop1.png', alt: 'TownTop homepage' },
      { type: 'image', src: 'photo/towntop/towntop2.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop3.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop4.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop5.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop6.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop7.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop8.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop9.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop10.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop11.png', alt: 'TownTop website' },
      { type: 'image', src: 'photo/towntop/towntop12.png', alt: 'TownTop website' },

    ],

    caseStudy: {
      subtitle: 'A Saudi real estate platform **under development**, built with WordPress, PHP, and the RealHomes Theme, with custom authentication, government API integrations, and automated property synchronization.',

      client: 'TownTop',
      role: 'WordPress / PHP Developer',
      timeline: '2026',
      status: 'Under Development',
      deliverables: 'WordPress, PHP, MySQL, REST APIs',

      stats: [
        { value: '2', label: 'API Integrations' },
        { value: '2', label: 'Sync Methods' },
        { value: 'Real-Time Logs', label: 'API Monitoring' },
      ],

      content: [
        { type: 'heading', text: 'Project Overview' },
        { type: 'paragraph', text: 'TownTop is a Saudi real estate platform currently under development. I worked on the backend functionality, custom PHP development, government API integrations, authentication flows, and property synchronization using a customized RealHomes Child Theme.' },

        { type: 'heading', text: 'Key Work' },

        { type: 'subheading', text: 'Nafath Authentication' },
        { type: 'list', items: [
          'Integrated Nafath for identity verification and authentication.',
          'Implemented the integration flow for user login and new user registration.',
          'Handled API requests, responses, and integration errors.',
        ] },

        { type: 'subheading', text: 'REGA Property Integration' },
        { type: 'list', items: [
          'Connected TownTop with the Saudi REGA platform to retrieve and manage property data.',
          'Implemented property retrieval and synchronization flows.',
          'Supported both individual and bulk property synchronization.',
          'Debugged synchronization issues and handled property data updates.',
        ] },

        { type: 'subheading', text: 'API Logging & Monitoring' },
        { type: 'list', items: [
          'Implemented detailed logging for Nafath and REGA API interactions.',
          'Tracked requests, responses, errors, and related operations.',
          'Made it possible to trace an API operation and identify where an issue occurred.',
          'Used the logs to investigate problems related to specific users and synchronization operations.',
        ] },

        { type: 'subheading', text: 'RealHomes Child Theme' },
        { type: 'list', items: [
          'Developed and customized the Child Theme using PHP.',
          'Extended the RealHomes Parent Theme to support the platform requirements.',
          'Implemented custom backend functionality while maintaining the existing theme structure.',
        ] },

        { type: 'heading', text: 'Technical Work' },
        { type: 'list', items: [
          'WordPress & PHP Native development',
          'MySQL database integration',
          'REST API integration',
          'REGA property integration',
          'Nafath authentication',
          'Individual & bulk data synchronization',
          'API logging and troubleshooting',
          'RealHomes Parent / Child Theme customization',
        ] },

        { type: 'heading', text: 'Result' },
        { type: 'paragraph', text: 'Built and improved the core integrations between TownTop, Nafath, and REGA, including authentication, property synchronization, and detailed API monitoring. The logging system provides clear visibility into API operations and makes it easier to trace and troubleshoot issues during development.' },
      ],
    },
  },
  { id:5,  title:'Arkio — SaaS Analytics', category:'saas',      categoryLabel:'SaaS',         tags:['SaaS','Dashboard','Figma'],           year:'2024', desc:'Data visualisation dashboard for a B2B analytics platform. Designed for clarity at high data density.',                img:'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=700&q=80' },
  { id:6,  title:'Bloom — E-commerce',     category:'ecommerce', categoryLabel:'E-commerce',   tags:['E-commerce','Shopify'],               year:'2023', desc:'Custom Shopify theme for a sustainable cosmetics brand. Mobile-first with high emphasis on product imagery.',           img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&q=80' },
  { id:7,  title:'Mira — Health App',      category:'landing',   categoryLabel:'Landing page', tags:['Landing page','Health','Tailwind'],   year:'2023', desc:'App landing page for a mental wellness startup. Warm, accessible design with strong social proof.',                    img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80' },
  { id:8,  title:'Noto — Agency Rebrand',  category:'agency',    categoryLabel:'Agency',       tags:['Agency','Rebrand'],                  year:'2023', desc:'Full rebrand and website for a digital communications agency in Lyon.',                                                img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80' },
  { id:9,  title:'Kova — E-commerce',      category:'ecommerce', categoryLabel:'E-commerce',   tags:['E-commerce','Figma'],                year:'2023', desc:'Product page redesign and checkout optimisation for a DTC furniture brand. Reduced cart abandonment by 18%.',         img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80' },
];

// Fill in `img` (card thumbnail) and `caseStudy.heroImg` from a project's own
// `images` array when they're not set explicitly, so each project only has
// to list its media once, in `images`.
window.PROJECTS.forEach(p => {
  // a video can't be a thumbnail — use its poster, or the first real image
  const first = p.images && p.images.length ? p.images[0] : null;
  const firstSrc = !first ? null
    : first.type === 'video'
      ? (first.poster || (p.images.find(i => i.type !== 'video') || {}).src || null)
      : first.src;
  if (!p.img && firstSrc) p.img = firstSrc;
  if (p.caseStudy && !p.caseStudy.heroImg) p.caseStudy.heroImg = firstSrc || p.img;
});
