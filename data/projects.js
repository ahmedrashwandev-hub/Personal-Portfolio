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
    category: 'WordPress',
    categoryLabel: 'WordPress',
    tags: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    year: '2026',
    desc: 'Developed and customized a bilingual WordPress website, fixing layout and responsive issues, improving the Projects and Blog sections, and enhancing the overall user experience across Arabic and English pages.',
    // This project's photos/videos — used for the card thumbnail, the case-study
    // hero image, and the gallery block below. Add/remove items here only.
    images: [
      { type: 'image', src: 'photo/XApps.png', alt: 'XApps homepage' },
      // { type: 'video', src: 'photo/xapps-demo.mp4', poster: 'photo/xapps-poster.jpg' }, // put first to show it first
      { type: 'image', src: 'photo/XApps1.png', alt: 'Blog page' },
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
        { value: '7', label: 'Site areas audited & fixed' },
        { value: '25+', label: 'Bugs & UI issues resolved' },
        { value: 'AR / EN', label: 'Bilingual QA (RTL / LTR)' },
      ],
      content: [
        { type: 'heading', text: 'The brief' },
        { type: 'paragraph', text: 'Client sent a page-by-page QA list of layout bugs and broken features on their bilingual (AR/EN) WordPress site. Task: fix every item, verify in both languages.' },

        { type: 'heading', text: 'Scope of work' },

        { type: 'subheading', text: 'Global' },
        { type: 'list', items: [
          'Cairo font not loading on Arabic mobile — fixed',
        ] },

        { type: 'subheading', text: 'Homepage (AR/EN)' },
        { type: 'list', items: [
          'Squared inconsistent blog thumbnails',
          'Contact form sending no emails — debugged & fixed',
          'Removed broken Google+ icon, re-centered social icons',
          'Fixed footer text alignment',
          'Removed white circles behind client/tech logos',
          '"See more projects" CTA added, linked to Projects page',
        ] },

        { type: 'subheading', text: 'Contact info block' },
        { type: 'list', items: [
          'Reordered Sales/Development/HR block, moved address line',
          'Standardized email format across all departments',
        ] },

        { type: 'subheading', text: 'WordPress dashboard' },
        { type: 'list', items: [
          'Scoped text-color option for editor toolbar',
          'Fixed Projects post type — add/edit was broken',
        ] },

        { type: 'subheading', text: 'Projects page (AR/EN)' },
        { type: 'list', items: [
          'Fixed header nav links (mismatched vs. homepage)',
          'Added RSS icon, linked AR/EN feeds',
          'Related-projects list → responsive grid',
        ] },

        { type: 'subheading', text: 'Blog article page (AR/EN)' },
        { type: 'list', items: [
          'Article H1: white → blue for readability',
          'Redesigned share buttons',
          'Removed boxed borders on tags/categories',
          'Sidebar thumbnails fixed to 300×300px',
          'Added spacing between title and thumbnail',
          'Fixed missing page title on Arabic posts',
        ] },

        { type: 'subheading', text: 'Blog category pages (AR/EN)' },
        { type: 'list', items: [
          'Reduced title font size, fixed line spacing (EN)',
          'Removed boxed borders on tags/categories',
          'Thumbnails fixed to 300×300px',
          'Added spacing between title and thumbnail',
        ] },

        { type: 'heading', text: 'Process' },
        { type: 'steps', items: [
          { title: 'Triage', desc: 'Grouped the client\'s bug list by page and by cause: CSS, template, or backend.' },
          { title: 'Fix front-end', desc: 'Layout, spacing, and image issues — checked on both AR (RTL) and EN (LTR).' },
          { title: 'Fix backend', desc: 'Traced the contact form mail bug; restored the Projects post type.' },
          { title: 'Verify on mobile', desc: 'Re-tested every fix on mobile, where several bugs only appeared.' },
        ] },

        { type: 'heading', text: 'Skills demonstrated' },
        { type: 'list', items: [
          'WordPress theme customization (PHP/HTML/CSS/JS)',
          'Bilingual RTL/LTR front-end debugging',
          'Responsive/mobile CSS fixes',
          'WordPress mail & custom post type debugging',
          'Turning a client QA list into a tracked fix list',
        ] },

        { type: 'heading', text: 'Result' },
        { type: 'paragraph', text: 'All QA items closed and verified in Arabic and English — from a site with visible layout breaks and a dead contact form to a consistent, working experience on desktop and mobile.' },
      ],
    },
  },
  { id:2,  title:'Finlo — Fintech App',    category:'landing',   categoryLabel:'Landing page', tags:['Landing page','Fintech','Alpine.js'], year:'2024', desc:'Marketing site and onboarding flow for a personal finance app targeting young professionals.',                              img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80' },
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
  const firstSrc = p.images && p.images.length ? p.images[0].src : null;
  if (!p.img && firstSrc) p.img = firstSrc;
  if (p.caseStudy && !p.caseStudy.heroImg) p.caseStudy.heroImg = firstSrc || p.img;
});
