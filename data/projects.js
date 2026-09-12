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
  {
    id: 1,
    title: 'XApps — Corporate Website',
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
  // <span class="highlight">functionality</span>
    {
    id: 2,
    title: 'Altuwayjiri — Electronics E-commerce Platform',
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
  { id:3,  title:'Orea — Creative Agency', category:'agency',    categoryLabel:'Agency',       tags:['Agency','Animation'],                year:'2024', desc:'Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor.',                      img:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80' },
  { id:4,  title:'Vesta — Real Estate',    category:'landing',   categoryLabel:'Landing page', tags:['Landing page','Real Estate'],         year:'2024', desc:'Conversion-focused landing page for a proptech startup entering the French market.',                                      img:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80' },
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
