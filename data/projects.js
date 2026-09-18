/**
 * Single source of truth for all project data — used by index.html (grid/cards)
 * and case-study.html (project detail page, driven by ?id=).
 * No server/DB: this is a static array bundled with the site.
      { type: 'paragraph', text: 'Built and customized a Filament-based administration system to manage the platform and its public website from a centralized dashboard.' },
      { type: 'paragraph', text: 'I also developed a separate CMS cluster for managing the website-related content and functionality, keeping CMS responsibilities organized separately from the core marketplace administration.' },
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
  liveUrl: 'https://www.xapps.co/',
  category: 'wordpress',
  categoryLabel: 'WordPress',
  tags: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
  year: '2026',
  desc: 'Worked on an existing bilingual WordPress website, handling customization, troubleshooting, responsive improvements, content management, and frontend enhancements across Arabic and English versions.',

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
  ],

  caseStudy: {
  subtitle: 'A bilingual Arabic/English WordPress website where I worked on customization, troubleshooting, responsive behavior, content management, and frontend improvements.',
  client: 'XApps',
  role: 'WordPress Developer',
  timeline: '2026',
  deliverables: 'WordPress, PHP, HTML/CSS, JavaScript',

  stats: [
    { value: 'AR / EN', label: 'Bilingual Development' },
    { value: 'RTL / LTR', label: 'Localization Support' },
    { value: 'WordPress', label: 'Development & Customization' },
  ],

  content: [
    {
      type: 'heading',
      text: 'Project Overview'
    },
    {
      type: 'paragraph',
      text: '**Worked** on an existing **corporate WordPress website**, improving its **functionality, frontend experience, responsiveness, and content management** across both Arabic and English versions.'
    },

    {
      type: 'heading',
      text: 'What I Worked On'
    },

    {
      type: 'subheading',
      text: 'WordPress Development & Customization'
    },
    {
      type: 'list',
      items: [
        'Customized and maintained an existing **WordPress website**.',
        'Worked with **WordPress themes, templates, and dashboard functionality**.',
        'Improved project and blog content management.',
        'Worked with **custom content structures** and WordPress forms.',
      ]
    },

    {
      type: 'subheading',
      text: 'Frontend Development'
    },
    {
      type: 'list',
      items: [
        'Improved website layouts, spacing, typography, navigation, and interactive elements.',
        'Fixed **responsive and mobile layout** issues across different screen sizes.',
        'Improved image presentation and consistency across website sections.',
        'Used **PHP, HTML, CSS, and JavaScript** to implement website changes.',
      ]
    },

    {
      type: 'subheading',
      text: 'Arabic & English Support'
    },
    {
      type: 'list',
      items: [
        'Worked across both **Arabic and English versions** of the website.',
        'Handled **RTL/LTR layout** differences.',
        'Improved Arabic typography and **Cairo font** implementation.',
        'Ensured consistent layouts and content presentation between both languages.',
      ]
    },

    {
      type: 'subheading',
      text: 'Projects & Blog'
    },
    {
      type: 'list',
      items: [
        'Improved **Projects pages** and project content presentation.',
        'Worked on **Blog articles, categories, tags, and related content** sections.',
        'Improved image handling and content layouts across blog pages.',
        'Improved navigation between projects and articles.',
      ]
    },

    {
      type: 'subheading',
      text: 'WordPress Dashboard & Content Management'
    },
    {
      type: 'list',
      items: [
        'Improved the **WordPress Dashboard** experience for managing website content.',
        'Worked on adding and editing project information.',
        'Improved **content management and editing workflows**.',
      ]
    },

    {
      type: 'subheading',
      text: 'Debugging & Testing'
    },
    {
      type: 'list',
      items: [
        'Investigated and resolved **WordPress functionality and frontend issues**.',
        'Performed **debugging and troubleshooting** across different website sections.',
        'Tested changes across **Arabic and English versions**.',
        'Verified **responsive behavior** across desktop and mobile devices.',
        'Performed **cross-browser and mobile testing**.',
      ]
    },

    {
      type: 'heading',
      text: 'Skills Demonstrated'
    },
    {
      type: 'list',
      items: [
        'WordPress Development & Customization',
        'PHP, HTML, CSS & JavaScript',
        'Responsive & Mobile Development',
        'Arabic RTL / English LTR',
        'WordPress Debugging & Troubleshooting',
        'WordPress Dashboard & Content Management',
        'Forms & Custom Content Structures',
        'Cross-browser & Mobile Testing',
      ]
    },

    {
      type: 'heading',
      text: 'Result'
    },
    {
      type: 'paragraph',
      text: '**Improved** the overall **reliability, responsiveness, and consistency** of the website while making its content and bilingual experience easier to manage and use.'
    },
  ],
  },
  },
  // Altuwayjiri
  {
    id: 2,
    title: 'Altuwayjiri — Electronics E-commerce Platform\n ( More Details )',
    liveUrl: 'https://altuwayjiri.com/',
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
          'Customized the **XStore Theme** to match the client requirements.',
          'Built and edited pages using **WPBakery Page Builder**.',
          'Created a custom **Child Theme** for code changes.',
          'Added custom **PHP** changes to the Child Theme.'
        ] },

        { type: 'subheading', text: 'WooCommerce & Products' },
        { type: 'list', items: [
          'Set up and configured **WooCommerce** for the online store.',
          'Added and managed products with images, descriptions, prices, and details.',
          'Used **BEAR Bulk Editor** to manage product data efficiently.',
          'Configured product and shopping features based on the project needs.'
        ] },

        { type: 'subheading', text: 'Payment & Forms' },
        { type: 'list', items: [
          'Tested the **payment flow** and checkout process.',
          'Set up contact forms using **Contact Form 7**.',
          'Configured **SMTP** for reliable website emails.'
        ] },

        { type: 'subheading', text: 'Arabic & User Experience' },
        { type: 'list', items: [
          'Translated and prepared the website in **Arabic**.',
          'Adjusted the layout for Arabic content and **RTL** direction.',
          'Added direct **WhatsApp** contact for quick communication with the store owner.',
          'Improved the website layout and **user experience** across the main pages.'
        ] },

        { type: 'subheading', text: 'Deployment' },
        { type: 'list', items: [
          'Prepared the website for **production**.',
          'Uploaded and deployed the website on **Hostinger**.',
          'Tested the main website features after deployment.'
        ] },

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
    liveUrl: 'https://aqargate.com/marketplace',
    category: ['wordpress', 'landing'],
    categoryLabel: 'WordPress',
    tags: ['WordPress', 'PHP', 'MySQL', 'REGA API', 'Nafath API'],
    year: '2026',

    desc: 'Enhanced a production Saudi real estate platform by optimizing a critical login issue from ~16s to ~2s, integrating REGA and Nafath APIs, improving property synchronization, and updating the Houzez Parent Theme while maintaining Child Theme compatibility.',

    images: [
      { type: 'video', src: 'photo/aqargate/aqargate.mp4', poster: 'photo/aqargate/aqargate1.png' },
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
          'Investigated a critical login issue causing requests to take around **16 seconds**.',
          '**Debugged the backend and database flow** to identify the root cause of the delay.',
          'Resolved the issue and **reduced response time from 16s to ~2s** — an **8x performance improvement**.',
        ] },

        { type: 'subheading', text: 'REGA Integration & Property Sync' },
        { type: 'list', items: [
          '**Integrated the REGA API** end-to-end using official government documentation.',
          'Implemented and maintained the flow for **retrieving property data via the advertisement license number**.',
          '**Debugged and resolved** issues in property data retrieval and synchronization.',
          'Built and maintained both **individual and bulk property synchronization** to keep listings continuously updated.',
        ] },

        { type: 'subheading', text: 'Nafath Integration' },
        { type: 'list', items: [
          '**Integrated Nafath APIs** for national **identity verification and authentication**.',
          'Handled API requests, responses, and integration issues per official documentation.',
        ] },

        { type: 'subheading', text: 'Houzez Theme Upgrade' },
        { type: 'list', items: [
          '**Upgraded the Houzez Parent Theme** to a newer version on a live production site.',
          'Identified that the existing **Child Theme** — built on an older Houzez version — became **incompatible** after the upgrade.',
          '**Fixed all compatibility issues**, restoring full functionality on the new Parent Theme with zero feature loss.',
        ] },

        { type: 'subheading', text: 'API Logging & Debugging' },
        { type: 'list', items: [
          'Designed and implemented **centralized logging** for REGA and Nafath integrations.',
          'Tracked API requests, responses, and errors to **pinpoint integration failures**.',
          '**Cut API debugging and troubleshooting time significantly** through structured, traceable logs.',
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
    liveUrl: 'https://towntop.sa/',
    category: ['wordpress', 'landing'],
    categoryLabel: 'WordPress',
    tags: ['WordPress', 'PHP', 'MySQL', 'REGA API', 'Nafath API'],
    year: '2026',

    desc: 'Developing a Saudi real estate platform using WordPress, PHP, and a customized RealHomes Child Theme, with Nafath authentication, REGA property integration, individual and bulk synchronization, and detailed API logging.',

    images: [
      { type: 'video', src: 'photo/towntop/towntop.mp4', poster: 'photo/towntop/towntop1.png' },
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
          '**Integrated Nafath** for national **identity verification and authentication**.',
          'Implemented the full integration flow for **user login and new user registration**.',
          'Handled API requests, responses, and **integration error cases**.',
        ] },

        { type: 'subheading', text: 'REGA Property Integration' },
        { type: 'list', items: [
          '**Connected TownTop with the Saudi REGA platform** to retrieve and manage property data.',
          'Implemented **property retrieval and synchronization flows** from scratch.',
          'Supported both **individual and bulk property synchronization**.',
          '**Debugged synchronization issues** and resolved property data update failures.',
        ] },

        { type: 'subheading', text: 'API Logging & Monitoring' },
        { type: 'list', items: [
          'Designed and implemented **detailed logging** for Nafath and REGA API interactions.',
          'Tracked requests, responses, errors, and related operations.',
          'Made it possible to **trace any API operation** and identify exactly where an issue occurred.',
          'Used the logs to **investigate and resolve** issues tied to specific users and synchronization runs.',
        ] },

        { type: 'subheading', text: 'RealHomes Child Theme' },
        { type: 'list', items: [
          '**Developed and customized the Child Theme** using PHP.',
          'Extended the **RealHomes Parent Theme** to support the platform requirements.',
          'Implemented **custom backend functionality** while preserving the existing theme structure.',
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
  // Ahmed Hamdy — Personal Portfolio
  {
  id: 5,
  title: 'Ahmed Hamdy — Personal Portfolio',
  liveUrl: 'https://ahmedhamdy.condpay.com/',
  category: ['wordpress'],
  categoryLabel: 'WordPress',
  tags: ['WordPress', 'Elementor', 'PHP', 'HTML', 'CSS', 'JavaScript'],
  year: '2026',

  desc: 'Customized a personal portfolio website based on the Kyan Theme, adapting its sections and layouts with Elementor to match the client’s requirements and implementing a custom inline contact form.',

  images: [
    { type: 'video', src: 'photo/ahmed-hamdy/AhmedHamdy.mp4', poster: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio1.png' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio1.png', alt: 'Ahmed Hamdy portfolio homepage' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio2.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio3.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio4.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio5.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio6.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio7.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio8.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio9.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio10.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio11.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio12.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio13.png', alt: 'Ahmed Hamdy portfolio' },
    { type: 'image', src: 'photo/ahmed-hamdy/Ahmed Hamdy — Personal Portfolio14.png', alt: 'Ahmed Hamdy portfolio' },


  ],

  caseStudy: {
    subtitle: 'A personalized portfolio website customized from the Kyan Theme to present the client’s work, services, and personal information in a clean and tailored layout.',

    client: 'Ahmed Hamdy',
    role: 'WordPress Developer',
    timeline: '2026',
    deliverables: 'WordPress, Elementor, PHP, HTML/CSS, JavaScript',

    stats: [
      { value: 'Custom', label: 'Theme Customization' },
      { value: 'Elementor', label: 'Page Builder' },
      { value: 'Custom', label: 'Contact Form' },
    ],

    content: [
      { type: 'heading', text: 'Project Overview' },
      { type: 'paragraph', text: 'The project involved customizing and adapting a WordPress website to present the client’s professional work and personal information. project was based on the **Kyan Theme**, which was customized and adapted to match the client’s content, visual requirements, and overall presentation.' },

      { type: 'heading', text: 'What I Worked On' },

      { type: 'subheading', text: 'Kyan Theme Customization' },
      { type: 'list', items: [
        'Customized the existing **Kyan Theme** to fit the client’s requirements.',
        'Reviewed and adapted the existing **theme sections** instead of rebuilding the website from scratch.',
        'Adjusted **section layouts**, content, spacing, and visual elements to match the client’s needs.',
      ] },

      { type: 'subheading', text: 'Elementor Customization' },
      { type: 'list', items: [
        'Used **Elementor** to customize and **restructure** the existing website sections.',
        'Adjusted individual **sections** and **page layouts** based on the client’s requirements.',
        'Customized content and **visual presentation** across the main portfolio sections.',
        'Maintained **consistency** between the different sections of the website.',
      ] },

      { type: 'subheading', text: 'Custom Contact Form' },
      { type: 'list', items: [
        'Implemented a **custom contact form** based on the client’s requirements.',
        'Designed the form as an **inline section** instead of using a standard contact form layout.',
        'Customized the form structure and presentation to fit naturally within the page design.',
      ] },

      { type: 'heading', text: 'Technical Work' },
      { type: 'list', items: [
        'WordPress Theme Customization',
        'Kyan Theme',
        'Elementor Page Builder',
        'PHP Customization',
        'HTML & CSS',
        'JavaScript',
        'Custom Contact Form',
        'Responsive Layout Adjustments',
      ] },

      { type: 'heading', text: 'Result' },
      { type: 'paragraph', text: 'Delivered a personalized portfolio website tailored to the client’s requirements while keeping the structure and visual quality of the original Kyan Theme. The website provides a clear presentation of the client’s professional work with a customized contact experience.' },
    ],
  },
  },
  // Executive
  {
  id: 6,
  title: 'Executive — Office Management Platform',
  liveUrl: 'https://executive3.xbees.net/',
  category: 'saas',
  categoryLabel: 'Laravel',
  tags: ['Laravel', 'Filament', 'PHP', 'MySQL', 'Blade', 'REST APIs'],
  year: '2026',

  desc: 'Developed and enhanced a Laravel-based office management platform with a custom Filament admin panel, dynamic page builder, form builder, office management, and content management features.',

  images: [
    { type: 'video', src: 'photo/executive/executive.mp4', poster: 'photo/executive/executive1.png' },
    { type: 'image', src: 'photo/executive/executive1.png', alt: 'Executive admin dashboard' },
    { type: 'image', src: 'photo/executive/executive2.png', alt: 'Executive Pages resource' },
    { type: 'image', src: 'photo/executive/executive3.png', alt: 'Executive Offices resource' },
    { type: 'image', src: 'photo/executive/executive4.png', alt: 'Executive Forms resource' },
    { type: 'image', src: 'photo/executive/executive5.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive6.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive7.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive8.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive9.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive10.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive11.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive12.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive13.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive14.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive15.png', alt: 'Executive admin panel' },
    { type: 'image', src: 'photo/executive/executive16.png', alt: 'Executive admin panel' },
  ],

  caseStudy: {
    subtitle: 'A Laravel-based office management platform with a custom Filament admin panel that gives administrators full control over website content, pages, forms, offices, events, services, and user submissions.',

    client: 'Executive',
    role: 'Laravel / Filament Developer',
    timeline: '2026',
    status: 'Live',
    deliverables: 'Laravel, PHP, Filament, MySQL, Blade',

    stats: [
      { value: '10+', label: 'Admin Resources' },
      { value: 'Custom', label: 'Page Builder' },
      { value: 'Custom', label: 'Form Builder' },
    ],

    content: [
      { type: 'heading', text: 'Project Overview' },

      { type: 'paragraph', text: 'Executive is a live office management platform designed to manage a network of offices across different locations in Egypt and Saudi Arabia. I worked on the Laravel backend and built and customized the Filament admin panel to give administrators flexible control over the platform and its content.' },

      { type: 'heading', text: 'Custom Page Builder' },

      { type: 'paragraph', text: 'One of the main parts I worked on was building a flexible page management system using Laravel and Filament. Instead of creating every website page directly in code, administrators can build and update pages from the dashboard using reusable content blocks.' },

      { type: 'list', items: [
        'Converted HTML template sections into reusable content blocks.',
        'Built the block structure and fields required for each section.',
        'Allowed administrators to add, remove, and reorder blocks to build pages.',
        'Gave administrators control over page content such as text, images, and section data without changing the code.',
        'Connected the page builder with the frontend so the selected blocks are rendered dynamically.',
      ] },

      { type: 'heading', text: 'Filament Admin Panel' },

      { type: 'paragraph', text: 'Developed and customized multiple Filament Resources to manage the main platform data and content directly from the admin panel.' },

      { type: 'list', items: [
        'Pages — dynamic page creation and block-based content management.',
        'Offices — manage office listings, locations, types, relationships, and contact information.',
        'Events — create and manage events with dates, locations, images, and status.',
        'Services — manage the services displayed across the platform.',
        'Posts, Categories & Tags — manage the platform content and its organization.',
        'Users — manage registered platform users.',
        'Site Settings — manage global website settings and content.',
      ] },

      { type: 'heading', text: 'Custom Form Builder' },

      { type: 'paragraph', text: 'I also worked on a custom form management system that allows administrators to create forms and define their fields from the dashboard instead of relying on fixed forms built into the code.' },

      { type: 'list', items: [
        'Created a flexible resource for managing website forms.',
        'Allowed administrators to define and manage form fields.',
        'Connected forms to the frontend pages through the page management system.',
        'Built a Form Submissions resource to collect and manage messages submitted through the website.',
        'Tracked submission information to identify who submitted each request and where it came from.',
      ] },

      { type: 'heading', text: 'Office Management' },

      { type: 'paragraph', text: 'The platform is built around managing multiple offices across different locations. I worked on the admin functionality that allows the business team to manage these offices and their related information from one place.' },

      { type: 'list', items: [
        'Created and managed office records from the Filament dashboard.',
        'Managed office locations, types, relationships, contact information, and other office data.',
        'Structured the admin resources to make managing a large number of offices easier.',
      ] },

      { type: 'heading', text: 'Content & User Management' },

      { type: 'list', items: [
        'Built structured admin resources for Events, Services, Posts, Categories, and Tags.',
        'Managed registered users and their platform activity through the admin panel.',
        'Centralized website content management inside Filament.',
        'Added search, filtering, status management, and structured data management across resources.',
      ] },

      { type: 'heading', text: 'My Role' },

      { type: 'paragraph', text: 'My work focused on the Laravel backend and Filament admin architecture, including resource development, custom forms, dynamic page building, content management, and connecting the admin-managed data with the website frontend.' },

      { type: 'heading', text: 'Process' },

      { type: 'steps', items: [
        {
          title: 'Analyze',
          desc: 'Reviewed the template, requirements, data structure, and application flow to define the required admin features.'
        },
        {
          title: 'Build',
          desc: 'Converted HTML sections into reusable Filament blocks and built the dynamic Page Builder.'
        },
        {
          title: 'Develop',
          desc: 'Built and customized Filament Resources, Forms, Submissions, Offices, Events, Services, Posts, and Users.'
        },
        {
          title: 'Connect',
          desc: 'Connected the admin-managed content and data with the frontend for dynamic website management.'
        },
        {
          title: 'Test & Deliver',
          desc: 'Tested the main admin and frontend workflows and delivered the live platform to the client.'
        },
      ] 
      },
      { type: 'heading', text: 'Skills Demonstrated' },
      { type: 'list', items: [
        'Laravel Development',
        'Filament Admin Panel',
        'Filament Resources & Forms',
        'Custom Page Builder Architecture',
        'Dynamic Content Management',
        'Custom Form Builder',
        'MySQL & Eloquent ORM',
        'Laravel Blade',
        'Admin Dashboard Development',
        'Business Data Modeling',
        'Backend Debugging & Troubleshooting',
      ] },

      { type: 'heading', text: 'Result' },

      { type: 'paragraph', text: 'Delivered a flexible Laravel and Filament-based management system that allows the business team to manage offices, users, content, forms, submissions, and website pages from a centralized admin panel. The custom page builder also gives administrators the ability to create and modify website pages using reusable blocks without requiring code changes.' },
    ],
  },
  },
  // Eshlf
  {
    id: 7,
    title: 'ESHLF — Logistics & Services Marketplace',
    category: 'saas',
    categoryLabel: 'Laravel',

    tags: [
      'Laravel',
      'Filament',
      'PHP',
      'MySQL',
      'REST APIs',
      'WebSockets',
      'RBAC',
      'Mason',
      'Curator'
    ],

    year: '2026',

    liveButton: {
      label: 'Under Development',
      disabled: true
    },

    desc: 'A Laravel-based logistics and services marketplace connecting companies that need transportation or operational services with companies and service providers that can fulfill them. Worked on the backend, business logic, APIs, permissions, **real-time live chat and location tracking**, **Paymob payment integration**, and a custom **Filament CMS**.',

    images: [
      {
        type: 'image',
        src: 'photo/eshlf/eshlf1.png',
        alt: 'ESHLF admin dashboard'
      },
    ],

    caseStudy: {
      subtitle: 'A logistics and business services marketplace connecting companies with transportation and operational service providers. The mobile application is the main product, while the website provides the public and marketing experience.',

      client: 'ESHLF',
      role: 'Laravel / Filament Developer',
      timeline: '2026',
      status: 'Under Development',
      deliverables: 'Laravel, PHP, Filament, MySQL, REST APIs, WebSockets',

      stats: [
        { value: 'Custom', label: 'RBAC System' },
        { value: 'Real-Time', label: 'Chat & Notifications' },
        { value: 'Custom', label: 'Admin CMS & Page Builder' },
      ],

      content: [

        { type: 'heading', text: 'Project Overview' },

        {
          type: 'paragraph',
          text: 'ESHLF is a logistics and business services marketplace that connects companies looking for transportation and operational services with companies and service providers that can fulfill those needs.'
        },

        {
          type: 'paragraph',
          text: 'I worked on the Laravel backend and Filament administration system, covering business logic, APIs, permissions, company management, **live chat and location**, **push notifications**, **Paymob payment** integration, and a custom **CMS**.'
        },

        { type: 'heading', text: 'What I Worked On' },

        {
          type: 'list',
          items: [
            'Developed and maintained the Laravel backend and business logic.',
            'Built REST APIs to support the mobile application.',
            'Developed company, user, employee, and driver management.',
            'Implemented **Role-Based Access Control (RBAC)** for platform and company users (Authentication and Authorization).',
            'Implemented **OTP-based** verification for user authentication and account verification.',
            'Developed marketplace functionality for service requests, deals, deliveries, and related operations.',
            'Implemented **live chat and location** using WebSockets.',
            'Built **push notification** functionality for important platform activities, with user-level notification permissions.',
            'Worked on wallet, payment, transaction, and revenue distribution features, integrating **Paymob** as the payment gateway.',
            'Developed invitation and onboarding functionality.',
            'Built and customized the **Filament admin panel** for managing the platform.',
            'Developed a custom **CMS and Page Builder** for the public website.',
            'Converted sections from the Babun HTML template into reusable **CMS blocks** using the **Mason plugin**.',
            'Integrated the **Curator plugin** for centralized **media management**.',
            'Managed website pages, services, posts, events, forms, submissions, and **global settings**.'
          ]
        },

        { type: 'heading', text: 'Admin & CMS' },

        { type: 'paragraph', text: 'Built and customized a Filament-based administration system to manage the platform and its public website from a centralized dashboard.' },
        { type: 'paragraph', text: 'I also developed a **separate CMS cluster** for managing the website-related content and functionality, keeping CMS responsibilities organized separately from the core marketplace administration.' },

        {
          type: 'list',
          items: [
            'Users and companies.',
            'Roles and permissions.',
            'Company documents and verification.',
            'Service requests, deals, and deliveries.',
            'Payments and revenue distributions.',
            'Website pages and content.',
            '**Forms and submissions.**',
            '**Global website settings.**',
            'Media management.'
          ]
        },

        { type: 'heading', text: 'My Role' },

        {
          type: 'paragraph',
          text: 'My role focused mainly on Laravel backend development and Filament administration. I worked across the core business logic, REST APIs, RBAC, company management, marketplace operations, real-time chat and location, notifications, financial features, and the custom CMS.'
        },

        { type: 'heading', text: 'Technologies' },

        {
          type: 'list',
          items: [
            'Laravel',
            'PHP',
            'Filament',
            'MySQL',
            'REST APIs',
            'WebSockets',
            'RBAC',
            'Mason plugin',
            'Curator plugin'
          ]
        },

        { type: 'heading', text: 'Result' },

        {
          type: 'paragraph',
          text: 'Developed a complete Laravel backend and administration system supporting the marketplace core operations, mobile application, financial features, real-time communication and location, and public website management.'
        }
      ],
    },
  },
  // { id:8,  title:'Noto — Agency Rebrand',  category:'agency',    categoryLabel:'Agency',       tags:['Agency','Rebrand'],                  year:'2023', desc:'Full rebrand and website for a digital communications agency in Lyon.',                                                img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80' },
  // { id:9,  title:'Kova — E-commerce',      category:'ecommerce', categoryLabel:'E-commerce',   tags:['E-commerce','Figma'],                year:'2023', desc:'Product page redesign and checkout optimisation for a DTC furniture brand. Reduced cart abandonment by 18%.',         img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80' },
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
