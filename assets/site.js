/* New Horizon Special School — static concept site, independently authored. */
(() => {
  'use strict';
  const page = document.body.dataset.page || 'index';
  const origin = 'https://www.newhorizonspecialschool.com';
  // School photos are served from New Horizon's current public Wix media library.
  // This management preview links to the originals without redistributing the files.
  // Local illustrations are retained as offline / unavailable-image fallbacks.
  const image = (id) => `https://static.wixstatic.com/media/${id}`;
  // Original New Horizon website photography; externally served for this private review mockup.
  const photos = {
    hero: image('5bec04_15eee682863a44efbf0152eeab8b4f55~mv2.jpg'),
    campus: image('71c89d_9c48f0a85de3484aaf4c72d95887c7a1~mv2.jpg'),
    individual: image('71c89d_7a55393507a54a3596e654b53836248f~mv2.jpeg'),
    community: image('71c89d_683c4cbdea4b4b3e8cc72e7ff2e006b7~mv2.jpeg'),
    academic: image('5bec04_457b8599315e46328af827e7017ffa79~mv2.jpg'),
    vocational: image('5bec04_c989290f0b794536bbb0276196aedfe9~mv2.jpg'),
    art: image('5bec04_10d4ab8628aa4358810b49725c751649~mv2.jpg'),
    pageant: image('5bec04_501f6ecc3bc9468ab2c99795f544dc67~mv2.jpg'),
    mosaic: image('5bec04_6c4a2f8c958542afa89e4a81c681cf60~mv2.jpg'),
  };
  const photoFallbacks = {
    [photos.hero]:'assets/hero-art.svg', [photos.campus]:'assets/campus-art.svg',
    [photos.individual]:'assets/therapy-art.svg', [photos.community]:'assets/community-art.svg',
    [photos.academic]:'assets/academic-art.svg', [photos.vocational]:'assets/vocational-art.svg',
    [photos.art]:'assets/art-art.svg', [photos.pageant]:'assets/pageant-art.svg',
    [photos.mosaic]:'assets/community-art.svg'
  };

  const ico = (name, size=22) => {
    const paths = {
      arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
      external:'<path d="M14 4h6v6M10 14 20 4"/><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6"/>',
      chevron:'<path d="m6 9 6 6 6-6"/>',
      calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
      heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
      graduation:'<path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c4 4 8 4 12 0v-5M22 9v7"/>',
      camera:'<path d="M4 7h4l2-3h4l2 3h4a1 1 0 0 1 1 1v11H3V8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3"/>',
      pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
      phone:'<path d="M22 16.5V20a2 2 0 0 1-2 2C10.6 22 2 13.4 2 4a2 2 0 0 1 2-2h3.5l2 5-2.5 2A17 17 0 0 0 15 17l2-2.5 5 2Z"/>',
      mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
      users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3H3Zm13-14a3 3 0 0 1 0 6m2 2a5 5 0 0 1 3 5v1h-4"/>',
      sparkle:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>',
      menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
      close:'<path d="m5 5 14 14M19 5 5 19"/>',
      search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
      book:'<path d="M12 6c-3-2-6-2-10-1v14c4-1 7-1 10 1 3-2 6-2 10-1V5c-4-1-7-1-10 1Zm0 0v14"/>',
      hand:'<path d="M5 13V8a2 2 0 0 1 4 0v3-5a2 2 0 0 1 4 0v5-4a2 2 0 0 1 4 0v5-2a2 2 0 0 1 4 0v5c0 4-3 7-7 7h-3c-3 0-5-1-7-4l-2-3a2 2 0 0 1 3-2Z"/>',
      file:'<path d="M6 2h8l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 0v6h5M8 13h8M8 17h8"/>',
      plus:'<path d="M12 5v14M5 12h14"/>',
      sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.2 2.2m11.2 11.2 2.2 2.2m0-15.6-2.2 2.2M6.4 17.6l-2.2 2.2"/>',
    };
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
  };
  const routes = [
    {name:'About Us',url:'about.html',items:[['Our Story','about.html#story'],['Our Mission','about.html#mission'],['School Facilities','about.html#facilities']]},
    {name:'Our Programs',url:'programs.html',items:[['Academic Classes','programs.html#academic'],['Vocational School','programs.html#vocational'],['Therapies & Support','programs.html#therapy']]},
    {name:'Admissions',url:'admissions.html',items:[['How to Apply','admissions.html#process'],['Tuition & Fees','admissions.html#fees'],['Frequently Asked Questions','admissions.html#faqs']]},
    {name:'School Life',url:'events.html',items:[['News & Events','events.html'],['Photo Gallery','gallery.html'],['Weekly Activities','events.html#weekly']]},
    {name:'Get Involved',url:'support.html',items:[['Volunteer','support.html#volunteer'],['Sponsor a Child','support.html#sponsor'],['Partnerships','support.html#partners']]},
  ];
  const pageSearch = [
    {title:'Home',snippet:'Welcome, quick links and highlights',url:'index.html'},
    {title:'About New Horizon',snippet:'History, mission, vision and facilities',url:'about.html'},
    {title:'Academic Classes',snippet:'Individual education plans and learning',url:'programs.html#academic'},
    {title:'Vocational Training',snippet:'Life skills, workshops and employment opportunities',url:'programs.html#vocational'},
    {title:'Therapies & Support',snippet:'Physiotherapy, speech and language therapy',url:'programs.html#therapy'},
    {title:'Admissions',snippet:'Requirements, admissions process, interview and enrollment',url:'admissions.html'},
    {title:'Tuition & Fees',snippet:'School fees, electives and registration',url:'admissions.html#fees'},
    {title:'Frequently Asked Questions',snippet:'Information for prospective families',url:'admissions.html#faqs'},
    {title:'School Calendar',snippet:'Open house, social programmes and seasonal activities',url:'events.html'},
    {title:'Photo Gallery',snippet:'School photos, vocational classes and events',url:'gallery.html'},
    {title:'Volunteer & Intern',snippet:'Join our school community',url:'support.html#volunteer'},
    {title:'Sponsor a Child',snippet:'Support a child’s education',url:'support.html#sponsor'},
    {title:'Contact & Directions',snippet:'Phone, email and visiting hours',url:'contact.html'},
  ];
  function brand(light=false) {
    return `<a class="brand ${light?'brand-light':''}" href="index.html" aria-label="New Horizon Special School — Home">
      <img class="brand-logo" src="assets/nhss-logo.png" alt="New Horizon Special School crest" width="68" height="73">
      <span class="brand-text"><span class="brand-name">NEW HORIZON</span><span class="brand-subtitle">SPECIAL SCHOOL <span class="brand-dot">·</span> ACCRA, GHANA</span></span>
    </a>`;
  }
  const header = () => `<header class="header" id="top">
    <div class="utility"><div class="container utility-inner"><span>Heaven's special children. Limitless possibilities.</span><div class="utility-right"><a href="events.html">${ico('calendar',14)} School Calendar</a><a href="contact.html">${ico('pin',14)} Visit Us</a><a href="mailto:nhorizongh@gmail.com">${ico('mail',14)} Email Us</a></div></div></div>
    <div class="masthead container">${brand()}<div class="masthead-actions"><span class="masthead-caption">An extraordinary place<br>for extraordinary learners.</span><a class="top-visit" href="contact.html">Arrange a Visit ${ico('arrow',17)}</a><button class="icon-button search-button" type="button" aria-label="Open site search">${ico('search',23)}</button><button class="icon-button menu-button" type="button" aria-label="Open navigation" aria-controls="immersive-menu" aria-expanded="false">${ico('menu',25)}</button></div></div>
    <nav class="main-nav" aria-label="Main navigation"><div class="container nav-inner"><a class="nav-home ${page==='index'?'active':''}" href="index.html">Home</a>${routes.map(r=>`<div class="nav-group"><a class="nav-link ${r.url===page+'.html'?'active':''}" href="${r.url}">${r.name} ${ico('chevron',14)}</a><div class="dropdown" role="group" aria-label="${r.name}">${r.items.map(([n,u])=>`<a href="${u}">${n} ${ico('arrow',15)}</a>`).join('')}</div></div>`).join('')}<a class="nav-link ${page==='contact'?'active':''}" href="contact.html">Contact</a><button type="button" class="nav-search search-button" aria-label="Open site search">${ico('search',20)}</button></div></nav>
  </header>`;
  const footer = () => `<footer class="site-footer">
    <section class="footer-cta"><div class="container footer-cta-inner"><div><span class="eyebrow eyebrow-light">THE NEXT STEP STARTS HERE</span><h2>Come see what makes<br><em>New Horizon special.</em></h2></div><a href="contact.html" class="button button-white">Schedule a Visit ${ico('arrow',19)}</a></div></section>
    <div class="footer-main container"><div class="footer-brand">${brand(true)}<p>Specialised education in a nurturing environment. Supporting children and adults with special needs through learning, care and opportunity since 1972.</p><a href="mailto:nhorizongh@gmail.com" class="footer-email">nhorizongh@gmail.com ${ico('arrow',17)}</a></div><div class="footer-column"><h3>Explore</h3><a href="about.html">About our school</a><a href="programs.html">Our programs</a><a href="admissions.html">Admissions</a><a href="gallery.html">Photo gallery</a></div><div class="footer-column"><h3>Get involved</h3><a href="support.html#volunteer">Volunteer & intern</a><a href="support.html#sponsor">Sponsor a child</a><a href="support.html#partners">Become a partner</a><a href="events.html">School life & events</a></div><div class="footer-column"><h3>Visit us</h3><p>Osu / Cantonments area<br>Accra, Ghana</p><a href="tel:+233302772878">+233 302 772878</a><a href="tel:+233506230600">+233 50 623 0600</a><p class="footer-hours">School hours: Mon–Fri<br>8:00 AM – 4:00 PM</p></div></div>
    <div class="footer-base container"><span>© ${new Date().getFullYear()} New Horizon Special School.</span><span>Concept website for management review · <a href="${origin}" target="_blank" rel="noopener">Current website ${ico('external',12)}</a></span><a href="#top">Back to top ↑</a></div>
  </footer>`;
  const immersiveMenu = () => `<section class="immersive-menu" id="immersive-menu" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="menu-heading" inert>
    <div class="menu-art" aria-hidden="true"><img src="${photos.vocational}" data-fallback="assets/vocational-art.svg" alt="" loading="eager"><div class="menu-art-caption"><span>NEW HORIZON SPECIAL SCHOOL · ACCRA</span><strong>A place to learn.<br>A place to belong.</strong><small>EST. 1972</small></div></div>
    <div class="menu-right"><div class="menu-topline"><span>YOUR JOURNEY STARTS HERE</span><a href="events.html">${ico('calendar',17)} SCHOOL CALENDAR</a><a href="contact.html">${ico('pin',17)} VISIT US</a><button type="button" class="menu-close" aria-label="Close menu">${ico('close',27)}</button></div>
      <div class="menu-scroll"><h2 id="menu-heading" class="sr-only">Explore our website</h2><nav aria-label="Expanded site navigation" class="menu-nav"><a href="index.html">Home <span>01</span></a>${routes.map((r,i)=>`<details><summary>${r.name}<span class="menu-index">0${i+2}</span>${ico('plus',20)}</summary><div class="menu-children"><a class="menu-feature-link" href="${r.url}">Explore ${r.name} ${ico('arrow',17)}</a>${r.items.map(([n,u])=>`<a href="${u}">${n} ${ico('arrow',15)}</a>`).join('')}</div></details>`).join('')}<a href="gallery.html">Gallery <span>07</span></a><a href="contact.html">Contact <span>08</span></a></nav>
      <div class="menu-bottom"><p>Helping every learner discover their potential.</p><a class="button button-gold" href="admissions.html">Explore Admissions ${ico('arrow',16)}</a></div></div></div>
  </section>`;
  const photo = (src,alt,classes='',attrs='')=>`<img class="${classes}" src="${src}" data-fallback="${photoFallbacks[src] || 'assets/campus-art.svg'}" alt="${alt}" loading="${attrs.includes('loading=') ? 'eager' : 'lazy'}" decoding="async" ${attrs.replace(/loading="(?:lazy|eager)"/g, '')}>`;
  const quicklinks = [
    ['Admissions','Start here','graduation','admissions.html'],
    ['School Calendar','What’s happening','calendar','events.html'],
    ['Tuition & Fees','Family resources','file','admissions.html#fees'],
    ['Photo Gallery','Life at New Horizon','camera','gallery.html'],
    ['Directions','Visit our campus','pin','contact.html'],
  ];
  const cards = [
    {k:'01 / LEARN',title:'Academic Education',desc:'Personalised learning built around the individual needs and abilities of every student.',img:photos.academic,url:'programs.html#academic'},
    {k:'02 / GROW',title:'Vocational Training',desc:'Hands-on learning, practical life skills and opportunities that nurture independence.',img:photos.vocational,url:'programs.html#vocational'},
    {k:'03 / THRIVE',title:'Therapy & Wellbeing',desc:'Holistic support through specialist therapies, care and individual education plans.',img:photos.individual,url:'programs.html#therapy'},
  ];
  const highlights = [
    {kind:'OUR COMMUNITY',title:'Creativity takes centre stage at our art exhibitions',desc:'A joyful celebration of imagination, expression and the talents of New Horizon students.',url:'gallery.html',img:photos.art},
    {kind:'SCHOOL LIFE',title:'African Mosaic: celebrating connection through the arts',desc:'An annual February tradition with Faith Montessori featuring art, music and friendship.',url:'events.html',img:photos.mosaic},
    {kind:'SUPPORT & IMPACT',title:'Small acts of kindness. Lifelong possibilities.',desc:'Discover ways to support individualised learning and care through Sponsor-a-Child.',url:'support.html#sponsor',img:photos.community},
  ];
  function home(){return `
    <main id="main">
    <section class="hero home-hero">
      <div class="hero-media">${photo(photos.hero,'New Horizon Special School community','hero-photo','loading="eager" fetchpriority="high"')}</div>
      <div class="hero-shade"></div><div class="container hero-inner"><span class="hero-kicker"><span class="small-line"></span> WELCOME TO NEW HORIZON SPECIAL SCHOOL</span><h1>Every child.<br><em>Every possibility.</em></h1><p>Heaven’s special children, empowered to learn, grow and thrive in a nurturing environment.</p><div class="hero-buttons"><a href="about.html" class="button button-gold">Discover Our School ${ico('arrow',18)}</a><a href="contact.html" class="button button-outline-light">Arrange a Visit ${ico('arrow',18)}</a></div></div>
      <div class="hero-side">ACCRA, GHANA <span></span> EST. 1972</div>
      <div class="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
    </section>
    <section class="quick-section" aria-label="Quick links"><div class="container quicklinks">${quicklinks.map(([name,sub,icon,url])=>`<a href="${url}" class="quicklink"><span class="quicklink-icon">${ico(icon,26)}</span><span class="quicklink-label"><strong>${name}</strong><small>${sub}</small></span>${ico('arrow',16)}</a>`).join('')}</div></section>
    <section class="intro-section section-space"><div class="container intro-grid"><div><span class="eyebrow">A PLACE TO BELONG</span><h2 class="display-heading">Extraordinary care.<br><em>Every single day.</em></h2></div><div class="intro-copy"><p>Founded in 1972, New Horizon Special School is a purpose-built, non-profit day school in Accra. We believe every child deserves the opportunity to be seen, supported and celebrated.</p><a class="text-link" href="about.html">Our story & philosophy ${ico('arrow',18)}</a></div></div></section>
    <section class="explore-section section-space"><div class="container"><div class="section-heading"><div><span class="eyebrow">WELCOME TO OUR WORLD</span><h2 class="display-heading">Explore <em>New Horizon</em></h2></div><p>Specialised teaching, therapeutic support and vocational learning—all shaped around each individual’s potential.</p></div><div class="feature-grid">${cards.map((c,i)=>`<a href="${c.url}" class="feature-card feature-${i+1}"><div class="feature-photo">${photo(c.img,c.title)}</div><div class="feature-overlay"></div><div class="feature-info"><small>${c.k}</small><h3>${c.title}</h3><p>${c.desc}</p><span class="round-arrow">${ico('arrow',19)}</span></div></a>`).join('')}</div></div></section>
    <section class="statement-section"><div class="container statement-grid"><div class="statement-photo">${photo(photos.campus,'School environment at New Horizon Special School')}<div class="statement-sticker">${ico('sun',27)}<span>LEARNING<br>WITHOUT LIMITS</span></div></div><div class="statement-copy"><span class="eyebrow">OUR APPROACH</span><h2 class="display-heading">A school that sees<br>the <em>whole child.</em></h2><p>Our curriculum centres on Individual Education Plans (IEPs), specialist teaching and therapies. Every milestone matters, and every learner has a different path to success.</p><ul class="checked-list"><li>Individualised learning pathways</li><li>Supportive learning environments</li><li>Academic, vocational and life-skills development</li></ul><a class="button button-dark" href="programs.html">Discover Our Programs ${ico('arrow',18)}</a></div></div></section>
    <section class="highlights-section section-space"><div class="container"><div class="section-heading"><div><span class="eyebrow">STORIES FROM OUR COMMUNITY</span><h2 class="display-heading">New Horizon <em>highlights</em></h2></div><a href="gallery.html" class="text-link">View our gallery ${ico('arrow',18)}</a></div><div class="story-grid">${highlights.map(h=>`<a class="story-card" href="${h.url}"><div class="story-picture">${photo(h.img,h.title)}</div><div class="story-body"><span class="story-category">${h.kind}</span><h3>${h.title}</h3><p>${h.desc}</p><span class="story-read">Explore story ${ico('arrow',17)}</span></div></a>`).join('')}</div></div></section>
    <section class="impact-section"><div class="container impact-grid"><div class="impact-title"><span class="eyebrow eyebrow-light">A LEGACY OF POSSIBILITY</span><h2>More than a school.<br><em>A place to thrive.</em></h2><p>Generations of care, connection and opportunity—built on the conviction that everyone has something extraordinary to offer.</p><a href="about.html" class="subtle-link">Discover our heritage ${ico('arrow',18)}</a></div><div class="impact-stats"><div><strong>1972</strong><span>The year our journey began</span></div><div><strong>3,000<span>+</span></strong><span>Individuals positively impacted*</span></div><div><strong>1</strong><span>Shared belief: every person has potential</span></div><small>*Figure stated on the current school website.</small></div></div></section>
    <section class="calendar-showcase section-space" id="events"><div class="container">
      <div class="section-heading calendar-heading"><div><span class="eyebrow">THE SCHOOL CALENDAR</span><h2 class="display-heading">Upcoming <em>events</em></h2></div><a href="events.html" class="text-link">View full calendar ${ico('arrow',18)}</a></div>
      <div class="calendar-display" id="home-calendar"><div class="calendar-left"><div class="calendar-toolbar"><span class="calendar-window-label"></span><div class="calendar-navigation"><button type="button" data-nav="prev" aria-label="View previous nine days">←</button><button type="button" data-nav="next" aria-label="View next nine days">→</button></div></div><div class="date-grid" role="group" aria-label="Choose an event date"></div></div><div class="calendar-detail" aria-live="polite"></div></div>
      <p class="calendar-footnote">The published open-house schedule is shown on Wednesdays. Other school events have not been assigned unconfirmed dates. <a href="contact.html">Check with the school</a> before visiting.</p>
    </div></section>
    <section class="faq-home section-space"><div class="container faq-layout"><div><span class="eyebrow">HELPFUL INFORMATION</span><h2 class="display-heading">Your questions, <em>answered.</em></h2><p>Find quick answers for families exploring New Horizon.</p><a href="admissions.html#faqs" class="text-link">More admissions FAQs ${ico('arrow',18)}</a></div><div class="faq-list"><details><summary>How do I arrange a school visit? ${ico('plus',19)}</summary><p>You can contact the school to arrange a visit. Open House is listed on Wednesdays from 9 AM to 12 PM; confirm availability before attending.</p></details><details><summary>What programmes are offered? ${ico('plus',19)}</summary><p>New Horizon offers academic learning, vocational training, individual education planning and specialist support.</p></details><details><summary>Can I volunteer or support the school? ${ico('plus',19)}</summary><p>Yes. Explore volunteering, partnerships and the Sponsor-a-Child programme on our Get Involved page.</p></details></div></div></section>
    <section class="support-banner"><div class="container support-inner"><span class="eyebrow eyebrow-light">MAKE A LASTING DIFFERENCE</span><h2>Be part of <em>someone’s story.</em></h2><p>Whether you volunteer, sponsor a child or partner with us, your support helps create opportunities that last a lifetime.</p><a href="support.html" class="button button-white">Ways to Get Involved ${ico('arrow',18)}</a></div></section>
    </main>`}
  function innerHero(kicker,title,desc,photoSrc){return `<section class="inner-hero"><div class="inner-hero-bg">${photo(photoSrc||photos.campus,'','inner-photo')}</div><div class="inner-hero-shade"></div><div class="container inner-hero-content"><div class="breadcrumb"><a href="index.html">Home</a><span>/</span><span>${kicker}</span></div><span class="eyebrow eyebrow-light">${kicker.toUpperCase()}</span><h1>${title}</h1><p>${desc}</p></div></section>`}
  function sectionIntro(kicker,title,desc){return `<div class="section-heading inner-section-heading"><div><span class="eyebrow">${kicker}</span><h2 class="display-heading">${title}</h2></div>${desc?`<p>${desc}</p>`:''}</div>`}
  function about(){return `<main id="main">${innerHero('About Us','Where every child<br><em>is valued.</em>','Our story is one of care, dignity and belief in every person’s potential.',photos.campus)}
    <section class="section-space" id="story"><div class="container two-columns"><div>${sectionIntro('OUR STORY','A legacy of <em>compassion.</em>','')}<p>Founded in 1972, New Horizon Special School is a private, purpose-built, non-profit day school located in the Osu/Cantonments area of Accra, Ghana.</p><p>We offer education, vocational training and opportunities to children and adults with special needs. Our work has grown through decades of commitment from families, staff, volunteers and partners.</p><a href="contact.html" class="text-link">Come and meet our community ${ico('arrow',18)}</a></div><div class="inset-image">${photo(photos.hero,'New Horizon Special School community')}<span>GROWING TOGETHER SINCE 1972</span></div></div></section>
    <section class="cream-section section-space" id="mission"><div class="container">${sectionIntro('WHAT GUIDES US','Rooted in <em>possibility.</em>','Education should recognise each person’s unique strengths and provide the support they need to thrive.')}<div class="value-grid"><article class="value-card"><span>${ico('heart',30)}</span><h3>Dignity & Care</h3><p>Each student is approached as an individual whose needs, capabilities and voice matter.</p></article><article class="value-card"><span>${ico('book',30)}</span><h3>Individual Learning</h3><p>Teaching and therapies are shaped around Individual Education Plans (IEPs).</p></article><article class="value-card"><span>${ico('users',30)}</span><h3>Community & Belonging</h3><p>We build strong relationships with families and an enduring network of supporters.</p></article></div></div></section>
    <section class="section-space" id="facilities"><div class="container two-columns flipped"><div class="inset-image">${photo(photos.individual,'Learning at New Horizon Special School')}<span>MADE FOR EVERY LEARNER</span></div><div>${sectionIntro('OUR ENVIRONMENT','Space to learn,<br><em>grow and explore.</em>','')}<p>Our approach combines specialised classroom teaching with vocational development, practical life skills and therapeutic support.</p><p>Families are welcome to arrange a visit to learn more about the school’s environment and approach.</p><a class="button button-dark" href="contact.html">Arrange a School Visit ${ico('arrow',18)}</a></div></div></section></main>`}
  function programs(){return `<main id="main">${innerHero('Our Programs','Learning without<br><em>limits.</em>','Purposeful pathways that celebrate individual strengths and help every learner move forward.',photos.academic)}
    <section class="section-space" id="academic"><div class="container two-columns"><div>${sectionIntro('01 / ACADEMIC EDUCATION','Growing <em>curiosity</em> and confidence.','')}<p>Our academic classes are designed to meet each learner where they are. Specialised teaching and Individual Education Plans help students develop foundational skills at their own pace.</p><p>Classes on the current school website include Lavender, Daffodil, Lilac, Sunflower, Tulip and Rose, with age groupings tailored to the academic section.</p><a class="text-link" href="${origin}/academic-classes" target="_blank" rel="noopener">Academic classes on the current site ${ico('external',17)}</a></div><div class="inset-image">${photo(photos.academic,'Academic education at New Horizon')}<span>EDUCATION FOR EVERY ABILITY</span></div></div></section>
    <section class="cream-section section-space" id="vocational"><div class="container two-columns flipped"><div class="inset-image">${photo(photos.vocational,'Vocational school activities')}<span>HANDS-ON LEARNING</span></div><div>${sectionIntro('02 / VOCATIONAL TRAINING','Creating <em>independence.</em>','')}<p>New Horizon provides vocational training and meaningful opportunities for adults with special needs. Practical activities support creativity, confidence, life skills and participation in the community.</p><p>Students’ work and creativity are also celebrated through school exhibitions and the school shop.</p><a class="button button-dark" href="gallery.html">Explore Student Work ${ico('arrow',18)}</a></div></div></section>
    <section class="section-space" id="therapy"><div class="container">${sectionIntro('03 / SPECIALIST SUPPORT','Care for the <em>whole person.</em>','The school combines personalised teaching with specialist therapies selected to support individual needs.')}<div class="value-grid"><article class="value-card"><span>${ico('heart',30)}</span><h3>Physiotherapy</h3><p>Physical support is available as an elective, based on the school’s published tuition information.</p></article><article class="value-card"><span>${ico('users',30)}</span><h3>Speech & Language</h3><p>Specialist speech and language therapy is listed as an elective offering.</p></article><article class="value-card"><span>${ico('sparkle',30)}</span><h3>Individual Education Plans</h3><p>IEPs guide supportive teaching and therapeutic choices around each student’s potential.</p></article></div></div></section></main>`}
  function admissions(){return `<main id="main">${innerHero('Admissions','Your journey<br><em>starts here.</em>','Discover whether New Horizon is the right environment for your child or ward.',photos.hero)}
    <section class="section-space" id="process"><div class="container">${sectionIntro('JOIN OUR SCHOOL','A thoughtful <em>admissions process.</em>','New Horizon accepts admissions enquiries throughout the year. Placement depends on whether its programmes can meet each prospective student’s needs.')}<div class="process-grid"><article><span>01</span><h3>Start a conversation</h3><p>Contact the school’s administration to discuss your child or ward’s needs and the programmes available.</p></article><article><span>02</span><h3>Prepare information</h3><p>Gather family contact information, medical or academic referrals, relevant evaluations and other requested documentation.</p></article><article><span>03</span><h3>Meet the admissions team</h3><p>Attend a confidential, in-person interview with your child or ward to discuss support needs and placement.</p></article><article><span>04</span><h3>Next steps</h3><p>After review, the admissions team will contact you about the outcome and any appropriate next steps.</p></article></div><div class="notice-box"><span>${ico('heart',22)}</span><p>New Horizon serves children and adults with special needs, including individuals with Autism, Down’s Syndrome, intellectual disabilities and Cerebral Palsy. The school’s admissions team should confirm suitability for each individual.</p></div></div></section>
    <section class="cream-section section-space" id="fees"><div class="container">${sectionIntro('FAMILY RESOURCES','Tuition & <em>fees.</em>','Indicative figures reproduced from the school’s current admissions page for discussion only. Please confirm current fees with the school before making decisions.')}<div class="fees-layout"><div class="fees-table-wrap"><table class="fees-table"><thead><tr><th>Fee item</th><th>Published amount</th><th>Frequency</th></tr></thead><tbody><tr><td>Registration fee</td><td>GH₵ 2,000</td><td>One-time</td></tr><tr><td>School fees, PEP & PACID</td><td>GH₵ 3,600</td><td>Termly</td></tr><tr><td>Summer school (elective)</td><td>GH₵ 2,000</td><td>Confirm with school</td></tr><tr><td>Physiotherapy (elective)</td><td>GH₵ 200</td><td>Monthly</td></tr><tr><td>Speech & language therapy (elective)</td><td>GH₵ 300</td><td>Monthly</td></tr><tr><td>Lunch (elective)</td><td>GH₵ 25</td><td>Daily</td></tr></tbody></table><small>Source: New Horizon Special School admissions webpage, viewed October 2026. Figures may change.</small></div><aside class="fees-aside"><span>${ico('file',30)}</span><h3>Questions about fees?</h3><p>For admissions, full tuition details and current availability, please contact the school directly.</p><a class="button button-gold" href="mailto:nhorizongh@gmail.com?subject=Admissions%20and%20tuition%20enquiry">Email Admissions ${ico('arrow',17)}</a></aside></div></div></section>
    <section class="section-space" id="faqs"><div class="container faq-layout"><div>${sectionIntro('GOOD TO KNOW','Frequently asked <em>questions.</em>','')}<p>For individual eligibility and support requirements, contact the admissions team for personalised guidance.</p></div><div class="faq-list"><details><summary>Does the school accept enrolments year-round? ${ico('plus',19)}</summary><p>Yes. The school states that enquiries and enrolment are considered throughout the year, subject to suitability and available programmes.</p></details><details><summary>Is an interview required? ${ico('plus',19)}</summary><p>Yes. Prospective students attend a confidential interview with a parent or guardian.</p></details><details><summary>What documentation should we prepare? ${ico('plus',19)}</summary><p>Relevant personal information, educational and medical history, contact details and referrals may be required. The admissions team can give you the current checklist.</p></details><details><summary>Can adults attend vocational programmes? ${ico('plus',19)}</summary><p>Yes. New Horizon’s published information includes vocational training and employment opportunities for adults over 18 years.</p></details></div></div></section></main>`}
  function events(){return `<main id="main">${innerHero('School Life','Every moment<br><em>matters.</em>','Celebrations, creativity, friendship and opportunities to connect with our community.',photos.pageant)}
    <section class="full-calendar-section section-space"><div class="container"><div class="section-heading"><div><span class="eyebrow">EXPLORE THE MONTH</span><h2 class="display-heading">School <em>calendar</em></h2></div><p>Choose any day to view published public activities. Dates without a listed event are shown clearly.</p></div><div class="full-calendar-layout" id="month-calendar"><div class="month-calendar"><div class="month-toolbar"><button type="button" data-month="prev" aria-label="Previous month">${ico('arrow',20)}</button><h3 class="month-heading"></h3><button type="button" data-month="next" aria-label="Next month">${ico('arrow',20)}</button></div><div class="month-weekdays" aria-hidden="true"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div><div class="month-days" role="group" aria-label="Choose a school calendar day"></div></div><div class="month-detail" aria-live="polite"></div></div><p class="calendar-footnote">The open house is published as a recurring Wednesday activity (9:00 AM–12:00 PM). Public social programmes are ongoing weekly, but their dates are not published. School holidays and closures are not shown in this preview.</p></div></section>
    <section class="section-space" id="weekly"><div class="container">${sectionIntro('STAY CONNECTED','Regular <em>school activities.</em>','Recurring activities based on the current school website. Confirm dates and availability before visiting.')}<div class="event-cards"><article class="event-card"><span class="event-tag">EVERY WEDNESDAY</span><span class="event-card-icon">${ico('calendar',26)}</span><h3>Open House</h3><p>Tour our school, meet our team, and discover a supportive learning environment.</p><div>${ico('clock',17)} 9:00 AM – 12:00 PM</div><a class="text-link" href="contact.html">Enquire about visiting ${ico('arrow',17)}</a></article><article class="event-card"><span class="event-tag">ONGOING WEEKLY</span><span class="event-card-icon">${ico('users',26)}</span><h3>Social Programs</h3><p>Ongoing activities encourage creative expression, social connection and school community life.</p><div>${ico('clock',17)} Contact school for schedule</div><a class="text-link" href="contact.html">Ask for details ${ico('arrow',17)}</a></article></div></div></section>
    <section class="cream-section section-space" id="annual"><div class="container">${sectionIntro('THROUGHOUT THE YEAR','Traditions we <em>love.</em>','School activities shared on New Horizon’s current photo gallery.')}<div class="tradition-grid"><article>${photo(photos.mosaic,'African Mosaic event')}<div><small>FEBRUARY · ANNUAL</small><h3>African Mosaic</h3><p>Arts, crafts, drumming and dance alongside Faith Montessori.</p></div></article><article>${photo(photos.art,'Art exhibition activities')}<div><small>CREATIVE SHOWCASE</small><h3>Student Art Exhibition</h3><p>Creative works showcasing imagination and talent.</p></div></article><article>${photo(photos.pageant,'Christmas pageant')}<div><small>DECEMBER · ANNUAL</small><h3>Christmas Pageant</h3><p>A festive celebration with performances and family gatherings.</p></div></article></div><a href="gallery.html" class="text-link">See moments from our school ${ico('arrow',18)}</a></div></section></main>`}
  function gallery(){const images=[
     [photos.hero,'School community','School life'],[photos.academic,'Academic classrooms','Learning'],[photos.vocational,'Vocational programmes','Learning'],[photos.art,'Art exhibition','Celebrations'],[photos.mosaic,'African Mosaic','Celebrations'],[photos.pageant,'Christmas Pageant','Celebrations'],[photos.campus,'Our school grounds','School life'],[photos.individual,'Activities and support','School life'],[photos.community,'School community activities','School life']];
    return `<main id="main">${innerHero('Photo Gallery','Moments of<br><em>possibility.</em>','A glimpse into the creativity, confidence and community of New Horizon.',photos.art)}<section class="section-space"><div class="container">${sectionIntro('OUR PHOTO JOURNAL','Life in <em>pictures.</em>','School photographs are displayed from New Horizon’s existing public website for this review preview.')}<div class="gallery-filters" aria-label="Photo category filters"><button class="is-selected" type="button" data-filter="All" aria-pressed="true">All photos</button><button type="button" data-filter="Learning" aria-pressed="false">Learning</button><button type="button" data-filter="Celebrations" aria-pressed="false">Celebrations</button><button type="button" data-filter="School life" aria-pressed="false">School life</button></div><div class="gallery-grid">${images.map(([src,alt,cat],i)=>`<button class="gallery-tile" data-category="${cat}" data-index="${i}" type="button" aria-label="Expand image: ${alt}">${photo(src,alt)}<span>${alt} ${ico('arrow',17)}</span></button>`).join('')}</div><p class="gallery-note">Please confirm student-photo permissions before public launch or external sharing.</p></div></section><div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" aria-hidden="true"><button class="lightbox-close" type="button" aria-label="Close photo viewer">${ico('close',27)}</button><button class="lightbox-prev" type="button" aria-label="Previous photo">←</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox-next" type="button" aria-label="Next photo">→</button></div></main>`}
  function support(){return `<main id="main">${innerHero('Get Involved','Your kindness<br><em>changes lives.</em>','Every helping hand contributes to new opportunities for children and adults with special needs.',photos.community)}
    <section class="section-space" id="volunteer"><div class="container two-columns"><div>${sectionIntro('GIVE YOUR TIME','Volunteer. <em>Connect.</em> Grow.','')}<p>Volunteers and interns play a meaningful role in New Horizon’s community. You might offer your time in the classroom, support therapy activities, contribute administrative skills or participate in creative programmes.</p><p>The school welcomes expressions of interest from people who would like to make a difference and learn alongside the community.</p><a class="button button-dark" href="mailto:nhorizongh@gmail.com?subject=Volunteering%20at%20New%20Horizon">Enquire About Volunteering ${ico('arrow',18)}</a></div><div class="inset-image">${photo(photos.individual,'Volunteering at New Horizon')}<span>YOUR TIME MAKES A DIFFERENCE</span></div></div></section>
    <section class="cream-section section-space" id="sponsor"><div class="container two-columns flipped"><div class="inset-image">${photo(photos.hero,'New Horizon Special School students')}<span>CREATE LASTING OPPORTUNITY</span></div><div>${sectionIntro('SPONSOR A CHILD','Small support. <em>Big futures.</em>','')}<p>The Sponsor-a-Child programme was started by founder Salome Francois in the 1990s to help families with financial constraints provide schooling for their children.</p><p>Your support can help make education, therapy and care accessible to those who need them.</p><a class="button button-dark" href="mailto:sponsoranhsschild@gmail.com?subject=Sponsor-a-Child%20Enquiry">Ask About Sponsorship ${ico('arrow',18)}</a></div></div></section>
    <section class="section-space" id="partners"><div class="container partner-section"><div>${sectionIntro('PARTNER WITH US','Let’s make an <em>impact together.</em>','Institutions and organisations can contribute expertise, resources or sponsorship to support the school’s mission.')}</div><div><p>Meaningful partnerships strengthen programmes, expand possibilities and support quality education and care. Contact New Horizon to discuss how your organisation can get involved.</p><a class="text-link" href="mailto:nhorizongh@gmail.com?subject=Partnership%20Enquiry">Start a partnership conversation ${ico('arrow',18)}</a></div></div></section></main>`}
  function contact(){return `<main id="main">${innerHero('Contact Us','We’d love to<br><em>meet you.</em>','Reach out, ask a question or arrange a visit to our school in Accra.',photos.campus)}
    <section class="section-space"><div class="container contact-grid"><div><span class="eyebrow">LET’S CONNECT</span><h2 class="display-heading">Our doors are <em>open.</em></h2><p class="contact-lead">If you are exploring an education option, looking to volunteer or simply want to know more, our team would love to hear from you.</p><div class="contact-details"><div><span>${ico('pin',23)}</span><div><strong>Find us</strong><p>Osu / Cantonments area, Accra, Ghana</p><a href="https://www.google.com/maps/search/?api=1&query=New+Horizon+Special+School+Accra" target="_blank" rel="noopener">Get directions ${ico('external',15)}</a></div></div><div><span>${ico('phone',23)}</span><div><strong>Give us a call</strong><a href="tel:+233302772878">+233 302 772878</a><a href="tel:+233506230600">+233 50 623 0600</a></div></div><div><span>${ico('mail',23)}</span><div><strong>Email us</strong><a href="mailto:nhorizongh@gmail.com">nhorizongh@gmail.com</a></div></div><div><span>${ico('clock',23)}</span><div><strong>Opening hours</strong><p>School: Mon – Fri, 8:00 AM – 4:00 PM<br>Visiting: Mon – Fri, 10:30 AM – 12:30 PM</p><p>Open House: Wednesdays, 9:00 AM – 12:00 PM</p></div></div></div></div><div class="contact-panel"><span class="eyebrow">PLAN YOUR VISIT</span><h3>Get in touch</h3><p>For this concept site, enquiries open an email addressed to the school. No personal information is collected or stored here.</p><form id="contact-form"><label for="contact-name">Your name</label><input required maxlength="100" id="contact-name" name="name" autocomplete="name" placeholder="Your full name"><label for="contact-email">Email address</label><input required id="contact-email" name="email" type="email" autocomplete="email" placeholder="you@example.com"><label for="contact-topic">I’m interested in</label><select id="contact-topic" name="topic"><option>Arranging a visit</option><option>Admissions</option><option>Volunteering</option><option>Sponsorship</option><option>Something else</option></select><label for="contact-message">Your message</label><textarea id="contact-message" name="message" rows="5" required maxlength="4000" placeholder="How can we help?"></textarea><button type="submit" class="button button-gold">Open Email Draft ${ico('arrow',18)}</button><p class="form-note">This opens your email app. You must send the message to complete your enquiry.</p></form></div></div></section></main>`}
  const pages = {index:home, about,programs,admissions,events,gallery,support,contact};
  const app = document.getElementById('app');
  app.innerHTML = header() + (pages[page]||home)() + footer() + immersiveMenu() + `<div class="search-layer" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Search New Horizon"><div class="search-backdrop"></div><div class="search-window"><div class="search-top"><span>SEARCH NEW HORIZON</span><button type="button" class="close-search" aria-label="Close search">${ico('close',22)}</button></div><label class="search-field">${ico('search',23)}<input type="search" autocomplete="off" placeholder="What are you looking for?" aria-label="Search pages"></label><div class="search-results" role="status" aria-live="polite"></div><p>Explore our programmes, admissions, calendar and more.</p></div></div>`;
  // Network-unavailable images fall back to bundled original illustrations; never leave broken icons.
  // Capture phase also handles images replaced later by the gallery lightbox.
  document.addEventListener('error', event => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;
    const fallback = img.dataset.fallback;
    if (fallback && !img.dataset.fallbackApplied) {
      img.dataset.fallbackApplied = 'true';
      img.src = fallback;
    } else {
      img.classList.add('image-unavailable');
    }
  }, true);
  // Search overlay: no network requests or search-service dependency.
  const searchLayer = document.querySelector('.search-layer');
  const searchInput = searchLayer.querySelector('input');
  const searchResults = searchLayer.querySelector('.search-results');
  let lastFocus=null;
  function showSearch(){lastFocus=document.activeElement;searchLayer.classList.add('shown');searchLayer.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');searchInput.value='';doSearch();searchInput.focus();}
  function hideSearch(){searchLayer.classList.remove('shown');searchLayer.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll');(lastFocus||document.body).focus();}
  function doSearch(){const val=searchInput.value.toLowerCase().trim();const rs=pageSearch.filter(x=>(x.title+' '+x.snippet).toLowerCase().includes(val));searchResults.innerHTML=rs.length?rs.map(r=>`<a href="${r.url}"><span><strong>${r.title}</strong><small>${r.snippet}</small></span>${ico('arrow',18)}</a>`).join(''):'<div class="no-results">No matches yet. Try “admissions”, “fees” or “volunteer”.</div>';}
  document.querySelectorAll('.search-button').forEach(b=>b.addEventListener('click',showSearch));
  searchLayer.querySelector('.close-search').addEventListener('click',hideSearch);
  searchLayer.querySelector('.search-backdrop').addEventListener('click',hideSearch);
  searchInput.addEventListener('input',doSearch);
  // Animated full-screen navigation, available on desktop and mobile.
  const menuButton=document.querySelector('.menu-button');
  const menuPanel=document.querySelector('.immersive-menu');
  const menuClose=menuPanel.querySelector('.menu-close');
  let menuLastFocus=null;
  function closeMenu(){
    if(!menuPanel.classList.contains('open'))return;
    menuPanel.classList.remove('open');menuPanel.setAttribute('aria-hidden','true');menuPanel.inert=true;
    menuButton.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');
    (menuLastFocus||menuButton).focus();
  }
  function openMenu(){
    menuLastFocus=document.activeElement;
    if(searchLayer.classList.contains('shown'))hideSearch();
    menuPanel.inert=false;menuPanel.classList.add('open');menuPanel.setAttribute('aria-hidden','false');
    menuButton.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');menuClose.focus();
  }
  menuButton.addEventListener('click',()=>menuPanel.classList.contains('open')?closeMenu():openMenu());
  menuClose.addEventListener('click',closeMenu);
  // Keep focus within open modal menu or search, allowing Shift+Tab in both directions.
  document.addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const dialog=menuPanel.classList.contains('open')?menuPanel:searchLayer.classList.contains('shown')?searchLayer:null;
    if(!dialog)return;
    const focusable=[...dialog.querySelectorAll('a[href],button:not([disabled]),summary,input:not([disabled])')].filter(el=>el.getClientRects().length>0);
    if(!focusable.length)return;
    if(e.shiftKey&&document.activeElement===focusable[0]){e.preventDefault();focusable.at(-1).focus();}
    else if(!e.shiftKey&&document.activeElement===focusable.at(-1)){e.preventDefault();focusable[0].focus();}
  });
  // Photo categories + lightbox.
  if(page==='gallery'){
    const filters=document.querySelectorAll('.gallery-filters button');const tiles=[...document.querySelectorAll('.gallery-tile')];
    filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(el=>{el.classList.remove('is-selected');el.setAttribute('aria-pressed','false');});btn.classList.add('is-selected');btn.setAttribute('aria-pressed','true');tiles.forEach(t=>{t.hidden=!(btn.dataset.filter==='All'||t.dataset.category===btn.dataset.filter);});}));
    const lightbox=document.querySelector('.lightbox');const lImg=lightbox.querySelector('img');const lCaption=lightbox.querySelector('figcaption');let active=0;let lastTile=null;
    function showTile(i){active=i;const tile=tiles[active];lImg.dataset.fallback=tile.querySelector('img').dataset.fallback||'assets/campus-art.svg';lImg.dataset.fallbackApplied='';lImg.src=tile.querySelector('img').src;lImg.alt=tile.querySelector('img').alt;lCaption.textContent=lImg.alt;}
    function step(d){const visible=tiles.filter(t=>!t.hidden);let pos=visible.indexOf(tiles[active]);pos=(pos+d+visible.length)%visible.length;showTile(tiles.indexOf(visible[pos]));}
    function close(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll');if(lastTile)lastTile.focus();}
    tiles.forEach((tile,i)=>tile.addEventListener('click',()=>{lastTile=tile;showTile(i);lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');lightbox.querySelector('.lightbox-close').focus();}));
    lightbox.querySelector('.lightbox-close').addEventListener('click',close);
    lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>step(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click',()=>step(1));
    lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
    document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1);});
  }
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(searchLayer.classList.contains('shown'))hideSearch();if(menuPanel.classList.contains('open'))closeMenu();}});
  if(page==='contact'){
    document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const topic=data.get('topic');const subject=encodeURIComponent(`New Horizon enquiry: ${topic}`);const body=encodeURIComponent(`Name: ${data.get('name')}\nReply to: ${data.get('email')}\n\n${data.get('message')}\n`);window.location.href=`mailto:nhorizongh@gmail.com?subject=${subject}&body=${body}`;});
  }
  // Scroll-into-view animations; respect reduced-motion preferences.
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const revealItems=document.querySelectorAll('.section-heading,.display-heading,.story-card,.feature-card,.value-card,.process-grid article,.event-card,.tradition-grid article,.intro-copy,.statement-photo,.calendar-showcase,.faq-list');
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.07,rootMargin:'0px 0px -30px 0px'});
    revealItems.forEach((el,i)=>{el.classList.add('reveal-on-scroll');el.style.setProperty('--reveal-delay',`${(i%3)*65}ms`);observer.observe(el);});
  }
  // Calendar data: New Horizon publicly lists Wednesday Open House, 9 AM–12 PM.
  // No other dated events are invented. Dates follow the viewer's local clock.
  const dateOnly=(date)=>new Date(date.getFullYear(),date.getMonth(),date.getDate(),12);
  const addDays=(d,n)=>{const t=dateOnly(d);t.setDate(t.getDate()+n);return t;};
  const keyDate=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const isWednesday=d=>d.getDay()===3;
  const monthShort=d=>new Intl.DateTimeFormat('en-GB',{month:'short'}).format(d).toUpperCase();
  const dateLong=d=>new Intl.DateTimeFormat('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(d);
  const dateDetail=d=>`<div class="event-detail-top"><span class="eyebrow">${new Intl.DateTimeFormat('en-GB',{weekday:'short',month:'short',day:'numeric'}).format(d).toUpperCase()}</span><span class="event-detail-mark" aria-hidden="true">✺</span></div><h3>${isWednesday(d)?'Open House at New Horizon':'No confirmed public events'}</h3><p>${isWednesday(d)?'Visit the school, meet our team and discover the learning environment. Contact the school to confirm before attending.':'No public event has been confirmed for this date. The school also offers ongoing weekly social programmes; contact the school for the current schedule.'}</p>${isWednesday(d)?`<div class="calendar-time">${ico('clock',20)} 9:00 AM – 12:00 PM</div>`:'<div class="calendar-time muted">Calendar information subject to school confirmation</div>'}<a href="contact.html" class="text-link">${isWednesday(d)?'Enquire about a visit':'Ask about school activities'} ${ico('arrow',17)}</a>`;
  function setupHomeCalendar(){
    const root=document.getElementById('home-calendar');if(!root)return;
    const now=dateOnly(new Date());const ahead=(3-now.getDay()+7)%7;
    let selected=addDays(now,ahead);
    let first=addDays(selected,-2);
    const tiles=root.querySelector('.date-grid'),heading=root.querySelector('.calendar-window-label'),detail=root.querySelector('.calendar-detail');
    const draw=()=>{
      const dates=Array.from({length:9},(_,i)=>addDays(first,i));
      heading.textContent=`${monthShort(dates[0])} ${dates[0].getDate()} — ${monthShort(dates[8])} ${dates[8].getDate()}, ${dates[8].getFullYear()}`;
      tiles.innerHTML=dates.map(d=>`<button class="date-tile ${keyDate(d)===keyDate(selected)?'selected':''}" type="button" aria-label="${dateLong(d)}${isWednesday(d)?', Open House':''}" aria-pressed="${keyDate(d)===keyDate(selected)}" data-date="${keyDate(d)}"><span>${monthShort(d)}</span><strong>${d.getDate()}</strong>${isWednesday(d)?'<i class="day-dot" aria-hidden="true"></i>':''}</button>`).join('');
      detail.innerHTML=dateDetail(selected);
    };
    tiles.addEventListener('click',e=>{const tile=e.target.closest('[data-date]');if(!tile)return;const [y,m,d]=tile.dataset.date.split('-').map(Number);selected=new Date(y,m-1,d,12);draw();tiles.querySelector(`[data-date="${tile.dataset.date}"]`)?.focus();});
    root.querySelectorAll('[data-nav]').forEach(button=>button.addEventListener('click',()=>{first=addDays(first,button.dataset.nav==='next'?9:-9);selected=addDays(first,2);draw();}));
    draw();
  }
  function setupMonthCalendar(){
    const root=document.getElementById('month-calendar');if(!root)return;
    const now=dateOnly(new Date());let visible=new Date(now.getFullYear(),now.getMonth(),1,12);
    let selected=dateOnly(now);
    const days=root.querySelector('.month-days'),heading=root.querySelector('.month-heading'),detail=root.querySelector('.month-detail');
    const draw=()=>{
      heading.textContent=new Intl.DateTimeFormat('en-GB',{month:'long',year:'numeric'}).format(visible);
      const monthFirst=new Date(visible.getFullYear(),visible.getMonth(),1,12);
      const offset=(monthFirst.getDay()+6)%7;const start=addDays(monthFirst,-offset);
      const count=Math.ceil((offset+new Date(visible.getFullYear(),visible.getMonth()+1,0).getDate())/7)*7;
      days.innerHTML=Array.from({length:count},(_,i)=>{const d=addDays(start,i);const inMonth=d.getMonth()===visible.getMonth();const chosen=keyDate(d)===keyDate(selected);return `<button type="button" class="month-day ${inMonth?'':'outside'} ${chosen?'selected':''} ${isWednesday(d)?'has-event':''}" data-date="${keyDate(d)}" aria-label="${dateLong(d)}${isWednesday(d)?', Open House':''}" aria-pressed="${chosen}"><strong>${d.getDate()}</strong>${isWednesday(d)?'<i>OPEN HOUSE</i>':''}</button>`}).join('');
      detail.innerHTML=dateDetail(selected);
    };
    days.addEventListener('click',e=>{const b=e.target.closest('[data-date]');if(!b)return;const [y,m,d]=b.dataset.date.split('-').map(Number);selected=new Date(y,m-1,d,12);if(selected.getMonth()!==visible.getMonth())visible=new Date(y,m-1,1,12);draw();days.querySelector(`[data-date="${b.dataset.date}"]`)?.focus();});
    root.querySelectorAll('[data-month]').forEach(btn=>btn.addEventListener('click',()=>{visible=new Date(visible.getFullYear(),visible.getMonth()+(btn.dataset.month==='next'?1:-1),1,12);selected=new Date(visible.getFullYear(),visible.getMonth(),1,12);draw();}));
    draw();
  }
  setupHomeCalendar();setupMonthCalendar();
  // FAQ allows one open answer per group to keep the page easy to scan.
  document.querySelectorAll('.faq-list').forEach(group=>group.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open){group.querySelectorAll('details').forEach(other=>{if(other!==item)other.open=false;});}})));
  if(location.hash){requestAnimationFrame(()=>{const target=document.getElementById(decodeURIComponent(location.hash.substring(1)));if(target)target.scrollIntoView({behavior:'instant',block:'start'});});}
})();
