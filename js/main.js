(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const app = $("#app");
  const page = document.body.dataset.page || "home";
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/></svg>';
  const brand = `<a class="brand" href="index.html"><span class="brand-mark">${icon}</span><span>NOVALAB</span></a>`;
  const directionToggle = () => `<button type="button" class="dir-toggle direction-btn" data-action="rtl" aria-label="Switch to right-to-left layout">RTL</button>`;
  const categories = ["Complete Blood Count", "Blood Sugar", "Thyroid Profile", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "Vitamin Profile", "Iron Studies"];
  const serviceData = [
    ["Blood Testing", "Thoughtfully selected laboratory testing for everyday health questions.", "⌁"],
    ["Complete Health Checkups", "Sample wellness panels with a convenient, simple booking experience.", "＋"],
    ["Diabetes Screening", "Explore common screening tests for blood glucose.", "◉"],
    ["Thyroid Testing", "A range of tests focused on thyroid-related markers.", "◈"],
    ["Liver Function Testing", "Selected measurements in a convenient laboratory panel.", "⌂"],
    ["Kidney Function Testing", "Common laboratory measurements related to kidney health.", "◇"],
    ["Lipid Profile Testing", "A sample panel covering common lipid measurements.", "≈"],
    ["Vitamin Testing", "Explore selected vitamin level tests.", "✳"],
    ["Preventive Health Screening", "Build a routine checkup around your personal needs.", "✓"],
    ["Home Sample Collection", "Arrange a sample collection visit at your address.", "⌖"]
  ];
  const articles = [
    ["Blood Health", "Understanding the parts of a routine blood test", "A friendly guide to common sections you may see on a laboratory report.", "5 min read", "photo-1576091160399-112ba8d25d1d"],
    ["Preventive Healthcare", "Making preventive checkups part of your routine", "A practical overview of discussing screening plans with your care team.", "4 min read", "photo-1579684385127-1ef15d508118"],
    ["Diabetes Awareness", "What to know before a glucose test", "Preparation can differ by test. Here are useful questions to ask your provider.", "6 min read", "photo-1505751172876-fa1923c5c528"],
    ["Thyroid Health", "A closer look at thyroid profile testing", "Learn what the test names mean and how to discuss results with a clinician.", "4 min read", "photo-1559757175-0eb30cd8c063"],
    ["Nutrition", "Small habits that support everyday wellbeing", "General wellness ideas to explore alongside advice from your healthcare team.", "3 min read", "photo-1490645935967-10de6ba17061"],
    ["Laboratory Testing", "How a sample becomes a laboratory report", "A simple look at the sample journey, from collection through reporting.", "5 min read", "photo-1582719478250-c89cae4dc85b"]
  ];
  const packages = [
    { name: "Basic Health Checkup", price: "₹999", count: "18 tests", tests: ["Complete blood count", "Fasting blood sugar", "Lipid profile", "Liver markers"] },
    { name: "Comprehensive Health Checkup", price: "₹1,999", count: "42 tests", tests: ["Basic package inclusions", "Thyroid profile", "Kidney markers", "Vitamin D"] },
    { name: "Premium Health Checkup", price: "₹3,499", count: "68 tests", tests: ["Comprehensive package inclusions", "Iron studies", "Additional wellness markers", "Digital report access"] }
  ];
  const pageTitle = {
    about: ["A little more care in every result.", "About NOVALAB", "Our approach is built around thoughtful service, clear information and convenient access to diagnostic testing."],
    services: ["Diagnostics, made easier to navigate.", "Our Services", "Explore sample diagnostic services. Availability and details should be confirmed with your laboratory."],
    "service-details": ["Complete Blood Count", "Service Details", "An example service overview. Confirm test availability, preparation and turnaround with your laboratory."],
    tests: ["Find the right test for you.", "Tests & Packages", "Browse demonstration test listings. This catalogue is sample data and is not medical advice."],
    blog: ["Better informed, one article at a time.", "Health Insights", "General educational information to support conversations with your healthcare professional."],
    "home-collection": ["Healthcare at your doorstep.", "Home Sample Collection", "Schedule a convenient sample collection request. This frontend demo does not confirm a real appointment."],
    contact: ["We’re here to help.", "Contact NOVALAB", "Send a message to our team. Contact details below are demonstration placeholders."],
    pricing: ["Clear options for your next checkup.", "Sample Package Pricing", "All prices and package inclusions shown here are sample data and must be verified before use."]
  };
  const btn = (label, href, cls = "") => `<a class="btn ${cls}" href="${href}">${label}</a>`;
  const pageHero = (title, label, description) => `<section class="page-hero"><div class="container"><div class="breadcrumbs"><a href="index.html">Home</a> / ${label}</div><span class="eyebrow">${label}</span><h1>${title}</h1><p>${description}</p></div></section>`;
  const marquee = () => `<div class="marquee" role="region" aria-label="NOVALAB announcements"><div class="marquee-track"><span>THOUGHTFUL TESTING&nbsp; • &nbsp;HOME SAMPLE COLLECTION&nbsp; • &nbsp;DEMONSTRATION REPORTS&nbsp; • &nbsp;SAMPLE HEALTH PACKAGES&nbsp; • &nbsp;PATIENT-FIRST DIAGNOSTICS&nbsp; • &nbsp;</span><span aria-hidden="true">THOUGHTFUL TESTING&nbsp; • &nbsp;HOME SAMPLE COLLECTION&nbsp; • &nbsp;DEMONSTRATION REPORTS&nbsp; • &nbsp;SAMPLE HEALTH PACKAGES&nbsp; • &nbsp;PATIENT-FIRST DIAGNOSTICS&nbsp; • &nbsp;</span></div></div>`;
  const header = () => `<div class="topbar"><div class="container topbar-inner"><span>Thoughtful diagnostics, closer to home</span><span>Questions? <a href="contact.html">Get in touch</a></span></div></div><header class="site-header"><div class="container nav-wrap">${brand}<nav class="nav-links" id="main-nav" aria-label="Main navigation"><a href="index.html" ${page === "home" ? 'class="active"' : ""}>Home</a><a href="home-premium.html">Home 2</a><a href="about.html">About</a><a href="services.html">Services</a><a href="tests.html">Tests & Packages</a><a href="home-collection.html">Home Collection</a><a href="blog.html">Blog</a><a href="contact.html">Contact</a><a href="dashboard.html">Dashboard</a><span class="mobile-nav-actions">${btn("Book a Test", "tests.html", "small")}${btn("Patient Login", "login.html", "outline small")}</span></nav><div class="nav-actions"><div class="theme-rtl"><button class="icon-btn" data-action="theme" aria-label="Toggle dark mode">◐</button><button class="icon-btn" data-action="rtl" aria-label="Switch text direction">⇄</button></div>${btn("Book a Test", "tests.html", "small")}${btn("Patient Login", "login.html", "outline small")}</div><button class="menu-toggle" data-action="menu" aria-label="Toggle navigation" aria-expanded="false">☰</button></div></header>`;
  const footer = () => `<footer class="footer"><div class="container"><div class="footer-grid"><div>${brand}<p style="margin-top:18px">Better Testing. Better Understanding. Better Health.<br>Sample website content for demonstration only.</p></div><div><h3>Explore</h3><div class="footer-links"><a href="about.html">About us</a><a href="services.html">Our services</a><a href="tests.html">Tests & packages</a><a href="blog.html">Health insights</a></div></div><div><h3>Patient resources</h3><div class="footer-links"><a href="home-collection.html">Home collection</a><a href="report-download.html">Report access</a><a href="dashboard.html">Patient dashboard</a><a href="pricing.html">Pricing</a></div></div><div><h3>Get in touch</h3><div class="footer-links"><span>Address: Add verified laboratory address</span><a href="tel:+910000000000">Phone: +91 00000 00000</a><a href="mailto:hello@example.com">Email: hello@example.com</a><a href="contact.html">Contact team</a></div></div></div><div class="footer-bottom"><span>© 2026 NOVALAB Demo. All rights reserved.</span><span>Demonstration website — no real bookings, results or clinical services.</span></div></div></footer>`;
  const shell = content => `${header()}${content}${footer()}`;
  const sectionHead = (eyebrow, title, copy) => `<div class="section-head reveal"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2><p>${copy}</p></div>`;
  const statStrip = () => `<section class="container stats" aria-label="Illustrative demonstration statistics"><div class="stat"><strong data-count="120" data-suffix="+">0</strong><span>Illustrative test listings</span></div><div class="stat"><strong data-count="8">0</strong><span>Sample categories</span></div><div class="stat"><strong data-count="7" data-suffix=" days">0</strong><span>Sample availability window</span></div><div class="stat"><strong data-count="1">0</strong><span>Demonstration report access</span></div></section>`;
  const testCard = (test, i) => `<article class="card test-card reveal" data-category="${test[1]}" data-price="${test[5]}" data-name="${test[0].toLowerCase()}"><div class="card-icon">${["◉","⌁","◈","≈","⌂","◇","✳","＋"][i % 8]}</div><span class="eyebrow">${test[1]}</span><h3>${test[0]}</h3><p>${test[2]}</p><div class="card-meta"><span>${test[3]} sample</span><span>Est. ${test[4]}</span></div><div class="card-actions"><span class="price">₹${test[5]} <small>sample</small></span><button class="text-link" data-action="test-detail" data-index="${i}">View details ↗</button></div><div style="margin-top:14px">${btn("Book this test", "home-collection.html", "small")}</div></article>`;
  const serviceCards = list => `<div class="cards">${list.map((item, i) => `<article class="card reveal"><div class="card-icon">${item[2]}</div><h3>${item[0]}</h3><p>${item[1]}</p><ul class="check-list"><li>Service information to discuss with your care team</li><li>Convenient sample booking option</li></ul><div class="card-actions"><a class="text-link" href="service-details.html">View details ↗</a>${btn("Book now", "home-collection.html", "small outline")}</div></article>`).join("")}</div>`;
  const packagesCards = () => `<div class="cards">${packages.map((item, i) => `<article class="card package-card ${i === 1 ? "featured" : ""} reveal">${i === 1 ? '<span class="popular">MOST POPULAR</span>' : ""}<span class="eyebrow">${item.count} · Sample package</span><h3>${item.name}</h3><div class="price" style="font-size:2rem;margin:16px 0">${item.price} <small>sample price</small></div><ul class="check-list">${item.tests.map(t => `<li>${t}</li>`).join("")}</ul><p>Package contents and prices are demonstration data pending laboratory verification.</p>${btn("Choose package", "home-collection.html", `small ${i === 1 ? "" : "outline"}`)}</article>`).join("")}</div>`;
  const homePage = premium => premium ? `${marquee()}<section class="premium-hero"><div class="premium-visual" aria-hidden="true"></div><div class="container"><span class="eyebrow" style="color:#9ed8d9">A more considered health experience</span><h1>Advanced Diagnostics.<br>A Healthier Tomorrow.</h1><p>Discover a smarter diagnostic experience with comprehensive health checkups, convenient sample collection and secure digital reports.</p><div class="hero-actions">${btn("Explore Diagnostics", "services.html", "light")}${btn("Schedule Home Collection", "home-collection.html", "outline")}</div></div></section>${statStrip()}<section class="section soft"><div class="container">${sectionHead("Explore diagnostics", "Your health checkup, made simpler", "Browse sample services and find helpful information before you book.")}<div class="test-track-wrap"><div class="test-track" data-test-track>${categories.concat(categories).map((name, i) => `<article class="test-chip" ${i >= categories.length ? 'aria-hidden="true" tabindex="-1"' : 'tabindex="0"'}><span class="card-icon">${["◉","⌁","◈","≈","⌂","◇","✳","＋"][i % categories.length]}</span><strong>${name}</strong><p>Explore this test category</p></article>`).join("")}</div></div><div class="slider-controls"><button data-action="slide-left" aria-label="Scroll tests left">←</button><button data-action="slide-right" aria-label="Scroll tests right">→</button></div></div></section><section class="section"><div class="container">${sectionHead("Popular packages", "Wellness options for every stage", "Sample health checkup packages. Confirm details and suitability with your healthcare provider.")}${packagesCards()}</div></section><section class="section soft"><div class="container grid-2"><div class="photo-frame reveal"><img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85" alt="Laboratory professional working with diagnostic equipment"></div><div class="reveal"><span class="eyebrow">Technology with a human touch</span><h2>Modern tools, thoughtful care.</h2><p>Our sample experience brings together convenient booking, clear information and digital report access. Real laboratory operations and capabilities must be verified locally.</p><ul class="check-list"><li>Designed around clear patient information</li><li>Convenient booking and collection flows</li><li>Sample report access demonstration</li></ul>${btn("About our approach", "about.html", "outline")}</div></div></section><section class="section"><div class="container">${sectionHead("How it works", "A few simple steps", "A clear flow from choosing a test to accessing your report.")}<div class="process"><div class="process-item"><h3>Choose a test</h3><p>Browse categories and sample packages.</p></div><div class="process-item"><h3>Book a visit</h3><p>Request a collection time that suits you.</p></div><div class="process-item"><h3>Provide a sample</h3><p>Confirm preparation details with the laboratory.</p></div><div class="process-item"><h3>Access your report</h3><p>Use secure, verified laboratory channels.</p></div></div></div></section><section class="section soft"><div class="container">${sectionHead("Your convenience", "Collection from home", "Request a demonstration collection visit in just a few steps.")}<div class="cta"><div><h2>Healthcare at your doorstep.</h2><p>Choose your tests and preferred collection time.</p></div>${btn("Request collection", "home-collection.html", "light")}</div></div></section><section class="section"><div class="container">${sectionHead("Patient stories", "Care that feels a little easier", "Sample testimonials for design demonstration; not verified patient reviews.")}<div class="testimonial"><div class="stars">★★★★★</div><p class="quote" data-quote>“The booking experience felt clear and straightforward from start to finish.”</p><strong data-quote-name>Sample patient · A.</strong><div class="carousel-controls"><button data-action="quote-prev" aria-label="Previous testimonial">←</button><span data-quote-index>1 / 3</span><button data-action="quote-next" aria-label="Next testimonial">→</button><button data-action="quote-pause" aria-label="Pause testimonials">Ⅱ</button></div></div></div></section><section class="section soft"><div class="container">${sectionHead("Health insights", "Helpful reading for your next visit", "Educational sample articles, not a substitute for professional medical advice.")}<div class="cards">${articleCards(articles.slice(0,3))}</div></div></section><section class="section"><div class="container"><div class="cta"><div><h2>Ready to take the next step?</h2><p>Explore sample tests or request home collection.</p></div>${btn("Browse tests", "tests.html", "light")}</div></div></section>` :
    `${marquee()}<section class="hero"><div class="container hero-grid"><div class="hero-copy"><span class="eyebrow">Diagnostics that put people first</span><h1>Your Health Deserves Thoughtful Testing & Better Care.</h1><p>Explore diagnostic testing options, convenient home sample collection and digital report access with our modern laboratory services.</p><div class="hero-actions">${btn("Book a Test", "tests.html")}${btn("Explore Health Packages", "pricing.html", "outline")}</div><div class="hero-trust"><div class="avatar-stack"><i>NL</i><i>+</i><i>✓</i></div><span>Thoughtful care at every step<br><strong>Clear information. Convenient access.</strong></span></div></div><div class="hero-visual"><div class="hero-photo" role="img" aria-label="Healthcare professional in a clinical laboratory"></div><div class="float-card one"><div class="badge-icon">✓</div><strong>Patient-first care</strong><span>Designed around you</span></div><div class="float-card two"><strong>Digital report access</strong><span>Private demo experience</span></div></div></div></section>${statStrip()}<section class="section soft"><div class="container grid-2"><div class="photo-frame reveal"><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85" alt="Medical professional in a modern care setting"></div><div class="reveal"><span class="eyebrow">Welcome to NOVALAB</span><h2>Clarity and care, at every step.</h2><p>We believe diagnostic services should feel understandable and convenient. NOVALAB is a sample brand experience for a modern laboratory website.</p><ul class="check-list"><li>Simple access to test information</li><li>Flexible sample collection request flow</li><li>Secure report access concept</li></ul><a href="about.html" class="text-link">Get to know us →</a></div></div></section><section class="section"><div class="container">${sectionHead("Popular tests", "Explore commonly requested tests", "Demonstration catalogue only. Test suitability and preparation should be confirmed with a qualified professional.")}<div class="cards">${window.NovaTests.tests.slice(0,3).map(testCard).join("")}</div><div style="text-align:center;margin-top:30px">${btn("View all tests", "tests.html", "outline")}</div></div></section><section class="section soft"><div class="container">${sectionHead("Health checkups", "Packages for a clearer health overview", "Sample packages and prices shown for interface demonstration.")}${packagesCards()}</div></section><section class="section"><div class="container">${sectionHead("What we offer", "Diagnostic services for your needs", "Explore common testing categories and convenient ways to access them.")}${serviceCards(serviceData.slice(0,6))}<div style="text-align:center;margin-top:30px">${btn("Explore services", "services.html", "outline")}</div></div></section><section class="section soft"><div class="container">${sectionHead("Why NOVALAB", "A more considered testing experience", "Designed to make common steps feel clearer and more convenient.")}<div class="cards"><article class="card"><div class="card-icon">⌖</div><h3>Convenient access</h3><p>Find services and make a home collection request online.</p></article><article class="card"><div class="card-icon">▤</div><h3>Clear information</h3><p>Browse service details and know what to ask before testing.</p></article><article class="card"><div class="card-icon">◉</div><h3>Digital-first tools</h3><p>Explore a demonstration dashboard and sample report flow.</p></article></div></div></section><section class="section"><div class="container">${sectionHead("How it works", "Simple from start to finish", "Four clear steps to guide your sample booking experience.")}<div class="process"><div class="process-item"><h3>Choose a test</h3><p>Search the catalogue and compare sample listings.</p></div><div class="process-item"><h3>Book a time</h3><p>Share your preferred collection details.</p></div><div class="process-item"><h3>Give a sample</h3><p>Follow laboratory-confirmed instructions.</p></div><div class="process-item"><h3>View your report</h3><p>Access reports using verified private channels.</p></div></div></div></section><section class="section soft"><div class="container grid-2"><div><span class="eyebrow">At-home convenience</span><h2>Sample collection, on your schedule.</h2><p>Request an at-home visit through the demonstration booking flow. A submitted form is not a confirmed appointment.</p>${btn("Schedule collection", "home-collection.html")}</div><div class="photo-frame"><img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85" alt="Healthcare professional preparing a home visit"></div></div></section><section class="section"><div class="container">${sectionHead("Latest insights", "Small reads, useful conversations", "Educational content to help you prepare questions for your healthcare provider.")}<div class="cards">${articleCards(articles.slice(0,3))}</div></div></section><section class="section soft"><div class="container">${sectionHead("Patient experiences", "Kind words, thoughtfully shared", "Fictional sample testimonials for demonstration; not verified reviews.")}<div class="testimonial"><div class="stars">★★★★★</div><p class="quote" data-quote>“The booking experience felt clear and straightforward from start to finish.”</p><strong data-quote-name>Sample patient · A.</strong><div class="carousel-controls"><button data-action="quote-prev" aria-label="Previous testimonial">←</button><span data-quote-index>1 / 3</span><button data-action="quote-next" aria-label="Next testimonial">→</button><button data-action="quote-pause" aria-label="Pause testimonials">Ⅱ</button></div></div></div></section><section class="section"><div class="container">${sectionHead("Questions", "Frequently asked questions", "If you need medical guidance, please speak with a qualified healthcare professional.")}<div class="faq-list">${faqItems()}</div></div></section><section class="section soft"><div class="container"><div class="cta"><div><h2>Make your next health checkup simpler.</h2><p>Explore tests and sample packages in the NOVALAB demo.</p></div>${btn("Book a Test", "tests.html", "light")}</div></div></section>`;
  function articleCards(list) {
    return list.map((a, i) => `<article class="card article-card reveal"><img src="https://images.unsplash.com/${a[4]}?auto=format&fit=crop&w=800&q=80" alt="" loading="lazy"><div class="article-content"><div class="article-meta">${a[0]} · ${a[3]}</div><h3>${a[1]}</h3><p>${a[2]}</p><a class="text-link" href="blog-details.html">Read article →</a></div></article>`).join("");
  }
  function faqItems() {
    return [["Do I need to prepare before a test?", "Preparation depends on the specific test. Please confirm current instructions with the laboratory or your healthcare professional."], ["When will my report be ready?", "Turnaround estimates vary by test and laboratory. Confirm the expected timing when booking."], ["Can I request home sample collection?", "This demonstration includes a request form. It does not schedule a real visit."], ["Can I use the sample patient dashboard for my results?", "No real patient data is stored or accessed. The dashboard and reports are fictional demonstrations."]].map((x, i) => `<div class="faq ${i === 0 ? "open" : ""}"><button data-action="faq" aria-expanded="${i === 0}">${x[0]}<span>＋</span></button><p>${x[1]}</p></div>`).join("");
  }
  function collectionForm() {
    return `<section class="section"><div class="container grid-2"><div><span class="eyebrow">Book a collection</span><h2>Request a visit that works for you.</h2><p>Complete this demonstration request form. It does not confirm a real appointment or transmit your information. Do not enter sensitive medical details.</p><div class="progress-steps"><span class="done">1. Tests</span><span>2. Details</span><span>3. Address</span><span>4. Review</span></div><div class="notice">Sample prices, availability and time slots are for display only.</div></div><form class="form-card" data-form="collection"><h2 style="font-size:1.45rem">Collection request</h2><div class="form-grid"><div class="field"><label for="patient-name">Patient name</label><input id="patient-name" name="name" required autocomplete="name"></div><div class="field"><label for="phone">Mobile number</label><input id="phone" name="phone" required inputmode="tel" autocomplete="tel"></div><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required autocomplete="email"></div><div class="field"><label for="pincode">Pincode</label><input id="pincode" name="pincode" inputmode="numeric" pattern="[0-9]{6}" required></div><div class="field full"><label for="address">Collection address</label><textarea id="address" name="address" required autocomplete="street-address"></textarea></div><div class="field full"><label for="selected-tests">Select tests (hold Ctrl/Cmd to choose more than one)</label><select id="selected-tests" name="tests" multiple size="4" required>${window.NovaTests.tests.map(t => `<option>${t[0]}</option>`).join("")}</select></div><div class="field"><label for="date">Preferred date</label><input id="date" name="date" type="date" required></div><div class="field"><label for="time">Preferred time</label><select id="time" name="time" required><option value="">Choose a time</option><option>8:00–10:00 AM</option><option>10:00 AM–12:00 PM</option><option>12:00–2:00 PM</option><option>2:00–4:00 PM</option></select></div><div class="field full"><label for="instructions">Special instructions (optional)</label><textarea id="instructions" name="instructions" placeholder="Please avoid sharing sensitive medical information."></textarea></div><div class="field full"><button class="btn" type="submit">Review request</button></div></div><p class="form-message" aria-live="polite"></p></form></div></section>`;
  }
  function pricing() { return `${pageHero(...pageTitle.pricing)}<section class="section"><div class="container">${packagesCards()}<p class="notice" style="margin-top:25px">All package details, inclusions and prices are sample data. Please verify with your laboratory before publishing.</p></div></section>`; }
  function genericServices() { return `${pageHero(...pageTitle.services)}<section class="section"><div class="container">${serviceCards(serviceData)}<div class="notice" style="margin-top:24px">Service descriptions are illustrative only. Confirm availability and clinically appropriate details with the laboratory.</div></div></section>`; }
  function renderAbout() {
    return `${pageHero(...pageTitle.about)}<section class="section"><div class="container grid-2"><div class="photo-frame"><img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85" alt="Laboratory team working with testing equipment"></div><div><span class="eyebrow">Our story</span><h2>Built around care, clarity and convenience.</h2><p>NOVALAB is a demonstration brand concept for a modern diagnostic laboratory. Our sample story reflects a commitment to accessible information and thoughtful service.</p><p>Any actual history, service scope, facilities and clinical capabilities should be supplied and verified by the operating laboratory before publication.</p></div></div></section><section class="section soft"><div class="container">${sectionHead("What guides us", "Our mission, vision and values", "A clear set of principles for how this sample brand hopes to serve its community.")}<div class="cards"><article class="card"><div class="card-icon">◎</div><h3>Our mission</h3><p>Make diagnostic service information easier to understand and access.</p></article><article class="card"><div class="card-icon">↗</div><h3>Our vision</h3><p>A simpler, more considerate experience around routine testing.</p></article><article class="card"><div class="card-icon">♡</div><h3>Our values</h3><p>Respect, clarity, privacy and a commitment to verified information.</p></article></div></div></section><section class="section"><div class="container grid-2"><div><span class="eyebrow">Facilities & team</span><h2>People and processes matter.</h2><p>Showcase your laboratory, equipment and team using verified information and approved imagery. The demonstration site does not claim specific accreditations, certifications or clinical performance.</p><ul class="check-list"><li>Use verified equipment and facility details</li><li>Include team credentials only with approval</li><li>Publish quality and safety practices accurately</li></ul></div><div class="photo-frame"><img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85" alt="Clinical laboratory interior"></div></div></section><section class="section soft"><div class="container">${sectionHead("Why NOVALAB", "A straightforward experience", "A consistent and patient-friendly digital experience.")}${serviceCards(serviceData.slice(0,3))}</div></section>`;
  }
  function renderTests() {
    const categories = ["All", ...new Set(window.NovaTests.tests.map(t => t[1]))];
    return `${pageHero(...pageTitle.tests)}<section class="section"><div class="container"><div class="filter-row"><input class="search-input" type="search" placeholder="Search tests…" aria-label="Search tests" data-test-search><select class="search-input" data-test-sort aria-label="Sort tests"><option value="name">Sort: name</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div><div class="filter-row" data-test-filters>${categories.map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-category-filter="${c}">${c}</button>`).join("")}</div><div class="cards" data-test-grid>${window.NovaTests.tests.map(testCard).join("")}</div><div class="notice" style="margin-top:24px">Sample data only. Prices, preparation and report timing must be verified. No diagnosis or treatment advice is provided.</div></div></section>`;
  }
  function renderServiceDetails() {
    return `${pageHero(...pageTitle["service-details"])}<section class="section"><div class="container grid-2"><div><span class="eyebrow">Sample service information</span><h2>What this test is for</h2><p>A complete blood count is a common laboratory test. The exact test components, purpose and interpretation depend on the laboratory and clinical context.</p><h3>Test details</h3><ul class="check-list"><li>Sample type: Blood (confirm locally)</li><li>Preparation: Ask your laboratory or clinician</li><li>Report timing: Confirm at booking</li><li>Sample price: ₹450 (illustrative)</li></ul>${btn("Book this test", "home-collection.html")}</div><div class="photo-frame"><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85" alt="Healthcare professional reviewing a laboratory sample"></div></div></section><section class="section soft"><div class="container">${sectionHead("Before you book", "Helpful questions to ask", "Preparation instructions and test interpretation should come from qualified laboratory or clinical staff.")}<div class="cards"><article class="card"><h3>Tests included</h3><p>Confirm the exact panel and components included in your order.</p></article><article class="card"><h3>Sample preparation</h3><p>Ask whether fasting or any other preparation is needed for your test.</p></article><article class="card"><h3>Results & next steps</h3><p>Discuss test results with a qualified healthcare professional.</p></article></div></div></section><section class="section"><div class="container">${sectionHead("Common questions", "Frequently asked questions", "")}<div class="faq-list">${faqItems()}</div></div></section>`;
  }
  function renderBlog() {
    return `${pageHero(...pageTitle.blog)}<section class="section"><div class="container"><div class="card" style="display:grid;grid-template-columns:1fr 1fr;gap:25px;align-items:center;margin-bottom:32px;padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80" alt="" style="height:280px;width:100%;object-fit:cover"><div style="padding:20px"><span class="eyebrow">Featured · Blood Health</span><h2 style="font-size:1.8rem">Understanding the parts of a routine blood test</h2><p>A friendly guide to common sections you may see on a laboratory report.</p>${btn("Read the feature", "blog-details.html", "small")}</div></div><div class="filter-row"><input class="search-input" data-blog-search type="search" placeholder="Search articles…" aria-label="Search articles"></div><div class="filter-row" data-blog-filters>${window.NovaBlog.categories.map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-blog-category="${c}">${c}</button>`).join("")}</div><div class="cards" data-blog-grid>${articleCards(articles)}</div><div class="slider-controls"><button data-action="blog-prev">←</button><span data-blog-page>Page 1 of 2</span><button data-action="blog-next">→</button></div><p class="notice" style="margin-top:20px">Educational demonstration content only; it is not medical advice or a substitute for consultation with a qualified professional.</p></div></section>`;
  }
  function renderBlogDetails() {
    return `${pageHero("Understanding the parts of a routine blood test", "Blood Health", "A practical guide to discussing your report with a healthcare professional.")}<section class="section"><div class="container"><div class="article-body"><div class="article-meta">NOVALAB Editorial · November 12, 2026 · 5 min read</div><img class="article-cover" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85" alt="Healthcare professional discussing health information"><h2>What can a blood test tell you?</h2><p>Blood tests are one way healthcare professionals gather information about your health. The right test depends on your symptoms, history and the questions your care team is working to answer.</p><h2>Reading your report</h2><p>A laboratory report may list measured values, units and reference intervals. Reference intervals can vary by laboratory and individual circumstances. A value outside a listed interval does not by itself establish a diagnosis.</p><h2>Questions worth asking</h2><p>Ask what the test measures, whether any preparation is needed, when results will be ready and who can help explain them. Share your report with a qualified healthcare professional rather than relying on an online interpretation.</p><h2>Keep your information private</h2><p>Use only secure, verified channels to access patient reports. This website is a demonstration and does not provide real report access.</p><div class="notice">This article is general education and not medical advice. For personal guidance, contact a qualified healthcare professional.</div><div style="display:flex;gap:10px;margin-top:25px"><button class="btn small outline" data-action="share">Share article</button>${btn("Back to insights", "blog.html", "small")}</div></div></div></section>`;
  }
  function renderContact() {
    return `${pageHero(...pageTitle.contact)}<section class="section"><div class="container grid-2"><form class="form-card" data-form="contact"><h2 style="font-size:1.6rem">Send us a message</h2><div class="form-grid"><div class="field"><label for="c-name">Patient name</label><input id="c-name" name="name" required></div><div class="field"><label for="c-email">Email</label><input id="c-email" name="email" type="email" required></div><div class="field"><label for="c-phone">Phone number</label><input id="c-phone" name="phone" type="tel" required></div><div class="field"><label for="c-subject">Subject</label><input id="c-subject" name="subject" required></div><div class="field full"><label for="c-message">Message</label><textarea id="c-message" name="message" required></textarea></div><div class="field full"><button class="btn">Send message</button><p class="form-message" aria-live="polite"></p></div></div></form><div><span class="eyebrow">Contact details</span><h2>How can we help?</h2><p>Replace these placeholders with verified contact details before publishing.</p><ul class="check-list"><li>Address: Add verified laboratory address</li><li>Phone: +91 00000 00000</li><li>Email: hello@example.com</li><li>Hours: Monday–Saturday, 8:00 AM–6:00 PM (sample)</li></ul><div class="photo-frame" style="min-height:220px;display:grid;place-items:center"><div style="text-align:center;padding:25px"><div class="card-icon" style="margin:auto auto 12px">⌖</div><strong>Map location placeholder</strong><p>Embed a verified map location here.</p></div></div></div></div></section>`;
  }
  function renderLogin(register = false) {
    return `<main class="auth-page"><div class="auth-tools"><button class="icon-btn" data-action="theme" aria-label="Toggle dark mode">◐</button><button class="icon-btn" data-action="rtl" aria-label="Switch text direction">⇄</button></div><form class="auth-card" data-form="${register ? "register" : "login"}">${brand}<span class="eyebrow">Patient portal demonstration</span><h1>${register ? "Create your account" : "Welcome back"}</h1><p>${register ? "Create a sample profile to explore the patient experience." : "Sign in to explore the sample patient dashboard."}</p>${register ? `<div class="field"><label for="full-name">Full name</label><input id="full-name" name="name" required autocomplete="name"></div><div class="field"><label for="reg-email">Email address</label><input id="reg-email" name="email" type="email" required autocomplete="email"></div><div class="field"><label for="reg-phone">Mobile number</label><input id="reg-phone" name="phone" type="tel" required autocomplete="tel"></div><div class="field"><label for="dob">Date of birth</label><input id="dob" name="dob" type="date" required></div>` : `<div class="field"><label for="login-email">Email or mobile number</label><input id="login-email" name="identity" required autocomplete="username"></div>`}<div class="field"><label for="${register ? "reg-pass" : "login-pass"}">Password</label><div class="password-wrap"><input id="${register ? "reg-pass" : "login-pass"}" name="password" type="password" required minlength="8" autocomplete="${register ? "new-password" : "current-password"}"><button class="password-toggle" data-action="password" type="button" aria-label="Show password">◉</button></div></div>${register ? `<div class="field"><label for="confirm-pass">Confirm password</label><div class="password-wrap"><input id="confirm-pass" name="confirm" type="password" required minlength="8" autocomplete="new-password"><button class="password-toggle" data-action="password" type="button" aria-label="Show password">◉</button></div></div><div class="auth-inline"><label><input type="checkbox" name="terms" required> I agree to the <a class="text-link" href="contact.html">terms</a></label></div>` : `<div class="auth-inline"><label><input type="checkbox" name="remember"> Remember me</label><a href="#" data-action="forgot" class="text-link">Forgot password?</a></div>`}<button class="btn" type="submit">${register ? "Create demo account" : "Sign in to demo"}</button><p class="form-message" aria-live="polite"></p><div class="auth-divider">or continue with</div><div class="social-row"><button type="button" class="social-btn" data-action="social">G &nbsp; Google</button><button type="button" class="social-btn" data-action="social">● &nbsp; Apple</button></div><p class="demo-label">Social sign-in is not connected. Frontend demonstration only.</p><p style="text-align:center;margin:20px 0 0">${register ? "Already registered?" : "New to NOVALAB?"} <a class="text-link" href="${register ? "login.html" : "register.html"}">${register ? "Sign in" : "Create an account"}</a></p></form></main>`;
  }
  const dashboardPanels = {
    "My Profile": `<div class="dash-panel"><h2>Profile information</h2><form data-form="profile" class="form-grid"><div class="field"><label>Full name</label><input name="name" value="Alex Morgan"></div><div class="field"><label>Email</label><input name="email" value="alex@example.test" type="email"></div><div class="field"><label>Mobile</label><input name="phone" value="+91 90000 00000"></div><div class="field"><label>Date of birth</label><input type="date" value="1990-01-01"></div><div class="field full"><button class="btn small">Save demo profile</button><p class="form-message"></p></div></form></div>`,
    "Book a Test": `<div class="dash-panel"><h2>Browse tests</h2><p>Sample test data only. No real appointment is created.</p><div class="cards">${window.NovaTests.tests.slice(0,3).map(testCard).join("")}</div></div>`,
    "Home Collection": `<div class="dash-panel"><h2>Home collection</h2><p>Request a convenient sample visit using the demonstration form.</p>${btn("Start a request", "home-collection.html")}</div>`,
    "My Appointments": `<div class="dash-panel"><h2>My appointments</h2><div class="table-wrap"><table><thead><tr><th>Reference</th><th>Collection date</th><th>Tests</th><th>Status</th><th>Action</th></tr></thead><tbody data-appointment-rows></tbody></table></div></div>`,
    "My Test Orders": `<div class="dash-panel"><h2>Recent test orders</h2><div class="table-wrap"><table><thead><tr><th>Test name</th><th>Booking date</th><th>Status</th><th>Reference</th></tr></thead><tbody><tr><td>Complete Blood Count</td><td>12 Nov 2026</td><td><span class="status">Processing</span></td><td>NL-DEMO-104</td></tr><tr><td>Fasting Blood Sugar</td><td>03 Nov 2026</td><td><span class="status">Completed</span></td><td>NL-DEMO-098</td></tr></tbody></table></div></div>`,
    "Report Download": `<div class="dash-panel"><h2>Reports</h2><p>Only completed fictional demonstration reports can be downloaded.</p><div class="table-wrap"><table><thead><tr><th>Test name</th><th>Booking date</th><th>Status</th><th>Report ID</th><th>Download</th></tr></thead><tbody><tr><td>Complete Blood Count</td><td>05 Nov 2026</td><td><span class="status">Completed</span></td><td>RPT-DEMO-001</td><td><button class="table-action" data-action="download-report">Download PDF</button></td></tr><tr><td>Thyroid Profile</td><td>09 Nov 2026</td><td><span class="status">Processing</span></td><td>—</td><td>Not available</td></tr><tr><td>Lipid Profile</td><td>12 Nov 2026</td><td><span class="status">Pending</span></td><td>—</td><td>Not available</td></tr></tbody></table></div><p style="margin-top:16px">${btn("Open report verification", "report-download.html", "small outline")}</p></div>`,
    "Payment History": `<div class="dash-panel"><h2>Payment history</h2><div class="table-wrap"><table><thead><tr><th>Transaction</th><th>Test</th><th>Date</th><th>Amount</th><th>Status</th><th>Invoice</th></tr></thead><tbody><tr><td>PAY-DEMO-008</td><td>Health package</td><td>05 Nov 2026</td><td>₹1,999</td><td>Sample paid</td><td><button class="table-action" data-action="invoice">Download</button></td></tr></tbody></table></div></div>`,
    "Notifications": `<div class="dash-panel"><h2>Notifications</h2><article class="card"><span class="status">Sample update</span><h3>Your report is ready</h3><p>A fictional sample report is available in this demonstration.</p></article></div>`,
    "Settings": `<div class="dash-panel"><h2>Preferences</h2><p>Use the LTR | RTL control in the dashboard header to change text direction.</p><button class="btn small" data-action="theme">Toggle dark mode</button></div>`
  };
  function renderDashboard(admin = false) {
    const nav = admin ? ["Overview", "Patients", "Tests and Packages", "Test Categories", "Bookings", "Home Collection", "Reports", "Payments", "Blog Management", "Messages", "Staff Management", "Analytics", "Settings"] : ["Overview", ...Object.keys(dashboardPanels)];
    const sidebar = `<aside class="side-nav ${admin ? "admin-nav" : ""}" data-sidebar>${brand}<nav aria-label="${admin ? "Admin" : "Patient"} navigation">${nav.map((n, i) => `<button class="${i === 0 ? "active" : ""}" data-dash-nav="${n}">${["◫","◎","＋","⌖","▤","⌂","▧","◈","♧","✉","♙","▥","⚙"][i % 13]} &nbsp; ${n}</button>`).join("")}</nav><div class="side-bottom"><button class="btn small outline" data-action="theme">◐ &nbsp; Change appearance</button><button class="btn small outline" data-action="logout">↪ &nbsp; Log out</button></div></aside><div class="sidebar-backdrop" data-sidebar-backdrop></div>`;
    const panelOverview = `<div class="dash-section active" data-dash-panel="Overview"><div class="dash-metrics">${(admin ? [["Total Patients","1,284"],["Total Bookings","348"],["Pending Tests","26"],["Completed Tests","1,092"],["Home Collection Requests","38"],["Reports Generated","286"],["Total Revenue","₹4.2L"]] : [["Tests Booked","8"],["Upcoming Appointments","1"],["Reports Available","4"],["Pending Reports","1"]]).map(m => `<div class="metric"><span>${m[0]}</span><strong>${m[1]}</strong><small>Demonstration data</small></div>`).join("")}</div><div class="dash-content"><div><div class="dash-panel"><h2>${admin ? "Booking activity" : "Recent test bookings"}</h2><div class="chart-bars" role="img" aria-label="Illustrative booking activity chart">${[45,66,54,84,63,92,72,100].map(h => `<i style="height:${h}%"></i>`).join("")}</div><p style="font-size:.8rem;margin-top:10px">Illustrative sample chart, not connected to operational data.</p></div><div class="dash-panel"><h2>${admin ? "Recent bookings" : "Recent bookings"}</h2><div class="table-wrap"><table><thead><tr><th>${admin ? "Booking" : "Test"}</th><th>Date</th><th>Status</th></tr></thead><tbody><tr><td>Complete Blood Count</td><td>12 Nov 2026</td><td><span class="status">Processing</span></td></tr><tr><td>Health Checkup Package</td><td>05 Nov 2026</td><td><span class="status">Completed</span></td></tr></tbody></table></div></div></div><div><div class="dash-panel"><h2>Quick actions</h2><p>Explore the sample patient tools.</p>${btn("Book a test", "tests.html", "small")}<div style="height:10px"></div>${btn("Access a report", "report-download.html", "small outline")}</div><div class="dash-panel"><h2>Helpful reminder</h2><p>Preparation and report interpretation should be discussed with a qualified healthcare professional.</p></div></div></div></div>`;
    const extras = admin ? ["Patients", "Tests and Packages", "Test Categories", "Bookings", "Home Collection", "Reports", "Payments", "Blog Management", "Messages", "Staff Management", "Analytics", "Settings"].map(n => `<div class="dash-section" data-dash-panel="${n}"><div class="dash-panel"><h2>${n}</h2><div class="filter-row"><input class="search-input" type="search" placeholder="Search ${n.toLowerCase()}…" data-admin-search><button class="btn small" data-action="admin-add">+ Add item</button></div><div class="table-wrap"><table><thead><tr><th>Name / Reference</th><th>Details</th><th>Status</th><th>Actions</th></tr></thead><tbody data-admin-rows><tr><td>${n === "Patients" ? "Alex Morgan" : n === "Bookings" ? "NL-DEMO-104" : "Sample " + n.replace(/s$/, "")}</td><td>Demonstration data</td><td><span class="status">Active</span></td><td><div class="admin-edit"><button class="table-action" data-action="admin-edit">Edit</button><button class="table-action" data-action="admin-delete">Delete</button></div></td></tr><tr><td>${n === "Patients" ? "Taylor Lee" : "NL-DEMO-098"}</td><td>Demonstration data</td><td><span class="status">Pending</span></td><td><div class="admin-edit"><button class="table-action" data-action="admin-edit">Edit</button><button class="table-action" data-action="admin-delete">Delete</button></div></td></tr></tbody></table></div><p class="notice" style="margin-top:16px">This is a non-operational admin interface with fictional data. No patient data or real reports are present.</p></div></div>`).join("") : Object.entries(dashboardPanels).map(([name, body]) => `<div class="dash-section" data-dash-panel="${name}">${body}</div>`).join("");
    return `<div class="dashboard-layout">${sidebar}<main class="dash-main"><header class="dash-top"><div style="display:flex;align-items:center;gap:12px"><button class="icon-btn admin-mobile-menu" data-action="sidebar" aria-label="Open menu">☰</button><div><span class="eyebrow">${admin ? "NOVALAB ADMIN · DEMO" : "PATIENT PORTAL · DEMO"}</span><h1 data-dash-title>Good morning, ${admin ? "Admin" : "Alex"}.</h1></div></div><div class="dash-user"><button class="icon-btn" data-action="theme" aria-label="Toggle dark mode">◐</button><button class="icon-btn" data-action="rtl" aria-label="Switch text direction">⇄</button><button class="dash-avatar" data-action="profile-menu" aria-label="Open profile">A</button><span>${admin ? "Demo Admin" : "Alex Morgan"}</span></div></header><div class="notice" style="margin-bottom:20px">Demonstration interface only. Do not enter real patient information; no real authentication, bookings, payments or report storage are connected.</div>${panelOverview}${extras}<div class="footer-bottom"><span>© NOVALAB demonstration</span><a href="index.html">Return to website</a></div></main></div>`;
  }
  function renderReport() {
    return `${pageHero("Access your report", "Report Download", "Verify a fictional demonstration booking to preview a sample report.")}<section class="section"><div class="container"><form class="form-card" style="max-width:620px;margin:auto" data-form="report"><h2 style="font-size:1.5rem">Verify sample details</h2><div class="field"><label for="ref">Patient ID or booking reference</label><input id="ref" name="ref" placeholder="e.g. NL-DEMO-104" required></div><div class="field" style="margin-top:14px"><label for="report-mobile">Registered mobile number</label><input id="report-mobile" name="phone" type="tel" required></div><div class="field" style="margin-top:14px"><label for="report-id">Report ID</label><input id="report-id" name="report" placeholder="e.g. RPT-DEMO-001" required></div><button class="btn" style="margin-top:20px">Verify details</button><p class="form-message" aria-live="polite"></p><p class="demo-label">Use any non-empty values to see the sample report. No patient information is checked or stored.</p></form><div data-report-result></div></div></section>`;
  }
  function renderNotFound() {
    return `<main class="auth-page"><div class="auth-card" style="text-align:center">${brand}<div style="font-size:5rem;margin:35px 0 10px;color:var(--teal)">404</div><span class="eyebrow">We couldn't find that page</span><h1>Oops! Page Not Found.</h1><p>The page may have moved or the address may be incorrect.</p>${btn("Return Home", "index.html")} <button class="btn outline" data-action="back">Go back</button></div></main>`;
  }
  function renderComingSoon() {
    return `<main class="auth-page"><div class="auth-card" style="text-align:center">${brand}<div style="font-size:4rem;margin:30px 0;color:var(--teal)">✳</div><span class="eyebrow">A healthier experience is on its way</span><h1>Coming soon.</h1><p>We’re preparing something thoughtful. Please check back soon or get in touch with our team.</p><div class="stats" style="padding:15px 0"><div class="stat"><strong data-time="days">12</strong><span>Days</span></div><div class="stat"><strong data-time="hours">00</strong><span>Hours</span></div><div class="stat"><strong data-time="minutes">00</strong><span>Minutes</span></div><div class="stat"><strong data-time="seconds">00</strong><span>Seconds</span></div></div>${btn("Contact us", "contact.html", "small")} ${btn("Return Home", "index.html", "small outline")}</div></main>`;
  }
  const renderMap = {
    home: () => shell(homePage(false)),
    premium: () => shell(homePage(true)),
    about: () => shell(renderAbout()),
    services: () => shell(genericServices()),
    "service-details": () => shell(renderServiceDetails()),
    tests: () => shell(renderTests()),
    blog: () => shell(renderBlog()),
    "blog-details": () => shell(renderBlogDetails()),
    "home-collection": () => shell(`${pageHero(...pageTitle["home-collection"])}${collectionForm()}`),
    contact: () => shell(renderContact()),
    pricing: () => shell(pricing()),
    login: () => renderLogin(false),
    register: () => renderLogin(true),
    dashboard: () => renderDashboard(false),
    "report-download": () => shell(renderReport()),
    admin: () => renderDashboard(true),
    "not-found": renderNotFound,
    "coming-soon": renderComingSoon
  };
  app.innerHTML = (renderMap[page] || renderMap["not-found"])();
  if (page === "home" || page === "premium") {
    app.querySelectorAll("img").forEach(image => {
      if (!image.hasAttribute("loading")) image.loading = "lazy";
      if (!image.hasAttribute("decoding")) image.decoding = "async";
    });
    app.querySelectorAll(".slider-controls, .carousel-controls").forEach(control => control.remove());
    app.querySelectorAll(".test-track, .test-chip").forEach(element => element.removeAttribute("tabindex"));
    app.querySelectorAll(".testimonial").forEach((testimonialRegion, index) => {
      testimonialRegion.id = `patient-testimonials-${index + 1}`;
      testimonialRegion.setAttribute("role", "region");
      testimonialRegion.setAttribute("aria-roledescription", "carousel");
      testimonialRegion.setAttribute("aria-label", "Patient testimonials");
      const quoteContent = testimonialRegion.querySelector("[data-quote]");
      if (quoteContent) {
        quoteContent.id = "patient-testimonial-content";
        quoteContent.setAttribute("aria-live", "polite");
      }
    });
  }
  app.querySelectorAll('[data-action="rtl"]').forEach(button => {
    if (button.closest(".dash-panel")) return;
    const control = document.createElement("span");
    control.innerHTML = directionToggle();
    const group = control.firstElementChild;
    if (button.classList.contains("small")) group.classList.add("compact");
    button.replaceWith(group);
  });
  window.NovaTheme.setDirection(document.documentElement.dir === "rtl" ? "rtl" : "ltr");
  if (page === "home" || page === "premium") {
    const categorySection = document.createElement("section");
    categorySection.className = "home-category-strip section soft";
    const renderCategorySet = duplicate => `<div class="test-track-set" ${duplicate ? 'aria-hidden="true"' : ""}>${categories.map((name, index) => `<article class="test-chip reveal" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${categories.length}: ${name}"><span class="card-icon">${["◉","⌁","◈","≈","⌂","◇","✳","＋"][index % categories.length]}</span><strong>${name}</strong><p>Explore this test category</p></article>`).join("")}</div>`;
    categorySection.innerHTML = `
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Explore diagnostics</span>
          <h2>Tests for every health question</h2>
          <p>Browse our sample diagnostic categories. Availability and preparation should be confirmed locally.</p>
        </div>
        <div class="test-track-wrap">
          <div id="diagnostic-categories" class="test-track" data-test-track role="region" aria-label="Diagnostic test categories" aria-roledescription="carousel">
            ${renderCategorySet(false)}${renderCategorySet(true)}
          </div>
        </div>
      </div>`;
    if (page === "premium") $(".premium-hero")?.nextElementSibling?.nextElementSibling?.remove();
    $(".stats")?.after(categorySection);
    window.NovaAnimations?.bindAutoScroller({
      track: $("[data-test-track]", categorySection),
      viewport: $("[data-test-track]", categorySection),
      speed: 50
    });
    const videoUrl = page === "home"
      ? "https://videos.pexels.com/video-files/13532394/13532394-hd_1920_1080_60fps.mp4"
      : "https://videos.pexels.com/video-files/8381327/8381327-hd_1920_1080_25fps.mp4";
    const videoPoster = page === "home"
      ? "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
      : "https://images.pexels.com/videos/8381327/pexels-photo-8381327.jpeg?auto=compress&cs=tinysrgb&w=1200";
    const visual = page === "home" ? $(".hero-visual") : $(".premium-visual");
    if (visual) {
      const video = document.createElement("video");
      video.className = "hero-video";
      video.id = `${page}-hero-video`;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.poster = videoPoster;
      video.setAttribute("aria-hidden", "true");
      video.innerHTML = `<source src="${videoUrl}" type="video/mp4">`;
      visual.prepend(video);
      const videoMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
      videoMotionPreference.addEventListener("change", () => {
        if (videoMotionPreference.matches) video.pause();
      });
      if (videoMotionPreference.matches) video.pause();
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let scheduled = false;
      window.addEventListener("scroll", () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          $$(".hero-video").forEach(video => {
            const rect = video.parentElement.getBoundingClientRect();
            const offset = Math.max(-12, Math.min(12, (rect.top + rect.height / 2 - innerHeight / 2) * -.025));
            video.style.setProperty("--video-offset", `${offset}px`);
          });
          scheduled = false;
        });
      }, { passive: true });
    }
    const hoverCards = $$(".card, .test-chip");
    hoverCards.forEach(card => {
      card.addEventListener("pointermove", event => {
        if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.setProperty("--tilt-x", `${-y * 3}deg`);
        card.style.setProperty("--tilt-y", `${x * 3}deg`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      });
    });
    const homeEffectsStyle = document.createElement("link");
    homeEffectsStyle.rel = "stylesheet";
    homeEffectsStyle.href = "css/home-experience.css";
    document.head.append(homeEffectsStyle);
    const homeEffectsScript = document.createElement("script");
    homeEffectsScript.src = "js/home-experience.js";
    document.body.append(homeEffectsScript);
  }
  if (page === "admin") {
    const bookingRows = $$('[data-dash-panel="Bookings"] tbody tr');
    bookingRows.forEach((row, index) => {
      row.cells[2].innerHTML = `<select data-admin-status aria-label="Update sample booking status"><option ${index === 0 ? "selected" : ""}>Active</option><option ${index === 1 ? "selected" : ""}>Pending</option><option>Sample Collected</option><option>Processing</option><option>Completed</option><option>Cancelled</option></select>`;
    });
    const reportsPanel = $('[data-dash-panel="Reports"] .dash-panel');
    if (reportsPanel) reportsPanel.insertAdjacentHTML("afterbegin", '<label class="field" style="max-width:380px;margin-bottom:20px"><span>Choose a demonstration report file (PDF)</span><input type="file" accept="application/pdf,.pdf" data-admin-report><small>This preview does not upload or store a file.</small></label>');
  }
  const socialButtons = $$('[data-action="social"]');
  if (socialButtons.length === 2) {
    socialButtons[0].innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.57-5.17 3.57-8.64z"/><path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.93l-3.87-3c-1.08.72-2.45 1.15-4.08 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.27 14.26a7.2 7.2 0 0 1 0-4.52v-3.1H1.27a12 12 0 0 0 0 10.72l4-3.1z"/><path fill="#EA4335" d="M12 4.77c1.77 0 3.35.61 4.6 1.82l3.45-3.45C17.95 1.2 15.24 0 12 0A12 12 0 0 0 1.27 6.64l4 3.1C6.22 6.88 8.87 4.77 12 4.77z"/></svg> Google';
    socialButtons[1].innerHTML = '<svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.7 19.5c-.8 1.2-1.7 2.5-3 2.5s-1.8-.8-3.3-.8-2 .8-3.2.8-2.3-1.3-3.1-2.6c-1.7-2.4-3-6.8-1.2-9.8.9-1.5 2.5-2.4 4.2-2.4 1.3 0 2.5.9 3.3.9s2.2-1.1 3.8-.9c.6 0 2.4.3 3.6 2-.1.1-2.2 1.3-2.1 3.8 0 3 2.6 4 2.6 4-.1.1-.5 1.4-1.4 2.5zM13.5 4.7c.7-.8 1.8-1.4 2.8-1.5.1 1.1-.3 2.2-1 3-.7.8-1.7 1.4-2.8 1.3-.1-1.1.4-2.2 1-2.8z"/></svg> Apple';
  }
  if (page === "coming-soon") {
    const deadline = Date.now() + 12 * 24 * 60 * 60 * 1000;
    const updateCountdown = () => {
      let seconds = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
      const values = {
        days: Math.floor(seconds / 86400),
        hours: Math.floor((seconds % 86400) / 3600),
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: seconds % 60
      };
      Object.entries(values).forEach(([unit, value]) => { $(`[data-time="${unit}"]`).textContent = String(value).padStart(2, "0"); });
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
  window.NovaToast = message => {
    const old = $(".toast");
    if (old) old.remove();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    document.body.append(toast);
    setTimeout(() => toast.remove(), 3800);
  };
  if (window.NovaAnimations) window.NovaAnimations.start();
  const dayInput = $("#date");
  if (dayInput) dayInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const testimonials = [
    ["“The booking experience felt clear and straightforward from start to finish.”", "Sample patient · A."],
    ["“It was helpful to find the test information and collection request in one place.”", "Sample patient · B."],
    ["“The sample dashboard made it easy to understand where a report might appear.”", "Sample patient · C."]
  ];
  const quoteMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let quoteIndex = 0, quoteTimer = 0, quoteVisible = false, quoteHovered = false, quoteFocused = false;
  const quotePanel = $("[data-quote]")?.closest(".testimonial");
  const syncQuoteTimer = () => {
    const shouldRotate = quoteVisible && !quoteHovered && !quoteFocused
      && !quoteMotionPreference.matches;
    if (shouldRotate && !quoteTimer) quoteTimer = setInterval(rotateQuote, 5500);
    if (!shouldRotate && quoteTimer) {
      clearInterval(quoteTimer);
      quoteTimer = 0;
    }
  };
  const showQuote = () => {
    const q = $("[data-quote]");
    if (!q) return;
    q.textContent = testimonials[quoteIndex][0];
    $("[data-quote-name]").textContent = testimonials[quoteIndex][1];
  };
  const rotateQuote = () => { quoteIndex = (quoteIndex + 1) % testimonials.length; showQuote(); };
  if (quotePanel) {
    quotePanel.addEventListener("pointerenter", () => { quoteHovered = true; syncQuoteTimer(); });
    quotePanel.addEventListener("pointerleave", () => { quoteHovered = false; syncQuoteTimer(); });
    quotePanel.addEventListener("focusin", () => { quoteFocused = true; syncQuoteTimer(); });
    quotePanel.addEventListener("focusout", event => {
      if (!quotePanel.contains(event.relatedTarget)) {
        quoteFocused = false;
        syncQuoteTimer();
      }
    });
    if ("IntersectionObserver" in window) {
      const quoteVisibility = new IntersectionObserver(entries => {
        quoteVisible = entries[0].isIntersecting;
        syncQuoteTimer();
      }, { threshold: .2 });
      quoteVisibility.observe(quotePanel);
    } else {
      quoteVisible = true;
    }
  }
  document.addEventListener("visibilitychange", syncQuoteTimer);
  quoteMotionPreference.addEventListener("change", syncQuoteTimer);
  syncQuoteTimer();
  let blogCategory = "All", blogPage = 0;
  const filterBlogs = () => {
    const grid = $("[data-blog-grid]");
    if (!grid) return;
    const query = ($("[data-blog-search]").value || "").toLowerCase();
    const filtered = articles.filter(a => (blogCategory === "All" || a[0] === blogCategory) && a.slice(0, 3).join(" ").toLowerCase().includes(query));
    const pages = Math.max(1, Math.ceil(filtered.length / 3));
    blogPage = Math.min(blogPage, pages - 1);
    grid.innerHTML = articleCards(filtered.slice(blogPage * 3, blogPage * 3 + 3));
    $("[data-blog-page]").textContent = `Page ${blogPage + 1} of ${pages}`;
    if (window.NovaAnimations) window.NovaAnimations.start();
  };
  const filterTests = () => {
    const grid = $("[data-test-grid]");
    if (!grid) return;
    const query = ($("[data-test-search]").value || "").toLowerCase();
    const active = $('[data-test-filters] .chip.active')?.dataset.categoryFilter || "All";
    const order = $("[data-test-sort]").value;
    let list = window.NovaTests.tests.map((test, i) => ({ test, i })).filter(x => (!query || x.test.join(" ").toLowerCase().includes(query)) && (active === "All" || x.test[1] === active));
    if (order === "low") list.sort((a,b) => a.test[5] - b.test[5]);
    if (order === "high") list.sort((a,b) => b.test[5] - a.test[5]);
    if (order === "name") list.sort((a,b) => a.test[0].localeCompare(b.test[0]));
    grid.innerHTML = list.length ? list.map(x => testCard(x.test, x.i)).join("") : '<p class="notice">No tests match that search. Try another term or category.</p>';
    if (window.NovaAnimations) window.NovaAnimations.start();
  };
  const showTestModal = index => {
    const t = window.NovaTests.tests[index];
    if (!t) return;
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" data-action="modal-close" aria-label="Close">×</button><span class="eyebrow">${t[1]}</span><h2 id="modal-title">${t[0]}</h2><p>${t[2]}</p><ul class="check-list"><li>Sample type: ${t[3]} (confirm locally)</li><li>Preparation: ask your laboratory or clinician</li><li>Estimated turnaround: ${t[4]} (sample estimate)</li><li>Sample price: ₹${t[5]}</li></ul><p class="notice">Demonstration catalogue only. This is not medical advice.</p><a class="btn" href="home-collection.html">Request this test</a></section>`;
    document.body.append(backdrop);
  };
  const refreshAppointments = () => {
    const body = $("[data-appointment-rows]");
    if (!body) return;
    const bookings = window.NovaBooking.getAll();
    body.innerHTML = bookings.length ? bookings.map(b => `<tr><td>${b.reference}</td><td>${b.date || "Date not selected"}</td><td>${Array.isArray(b.tests) ? b.tests.join(", ") : "Sample tests"}</td><td><span class="status">${b.status}</span></td><td><button class="table-action" data-action="cancel-booking" data-ref="${b.reference}">Cancel</button></td></tr>`).join("") : '<tr><td colspan="5">No demonstration bookings saved in this browser.</td></tr>';
  };
  refreshAppointments();
  app.addEventListener("click", event => {
    const target = event.target.closest("[data-action],[data-category-filter],[data-blog-category],[data-dash-nav]");
    if (!target) return;
    const action = target.dataset.action;
    if (target.dataset.categoryFilter) {
      $('[data-test-filters] .chip.active')?.classList.remove("active"); target.classList.add("active"); filterTests(); return;
    }
    if (target.dataset.blogCategory) {
      $('[data-blog-filters] .chip.active')?.classList.remove("active"); target.classList.add("active"); blogCategory = target.dataset.blogCategory; blogPage = 0; filterBlogs(); return;
    }
    if (target.dataset.dashNav) {
      const name = target.dataset.dashNav;
      $$(".side-nav nav button").forEach(b => b.classList.toggle("active", b === target));
      $$(".dash-section").forEach(section => section.classList.toggle("active", section.dataset.dashPanel === name));
      const heading = $("[data-dash-title]");
      if (heading) heading.textContent = name === "Overview" ? (page === "admin" ? "Good morning, Admin." : "Good morning, Alex.") : name;
      if (window.innerWidth <= 850) { $("[data-sidebar]")?.classList.remove("open"); $("[data-sidebar-backdrop]")?.classList.remove("active"); }
      refreshAppointments(); return;
    }
    switch (action) {
      case "theme": window.NovaTheme.toggle(); break;
      case "rtl": window.NovaTheme.direction(); break;
      case "menu": {
        const nav = $("#main-nav"); const open = nav.classList.toggle("open"); target.setAttribute("aria-expanded", String(open)); target.textContent = open ? "×" : "☰"; break;
      }
      case "faq": {
        const item = target.closest(".faq"); item.classList.toggle("open"); target.setAttribute("aria-expanded", String(item.classList.contains("open"))); break;
      }
      case "test-detail": showTestModal(Number(target.dataset.index)); break;
      case "modal-close": target.closest(".modal-backdrop").remove(); break;
      case "password": {
        const input = target.parentElement.querySelector("input"); input.type = input.type === "password" ? "text" : "password"; target.setAttribute("aria-label", input.type === "password" ? "Show password" : "Hide password"); break;
      }
      case "forgot": event.preventDefault(); window.NovaToast("Password recovery is not connected in this demo."); break;
      case "social": window.NovaAuth.demoMessage(); break;
      case "share": {
        if (navigator.share) navigator.share({ title: document.title, url: location.href }).catch(() => {});
        else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(() => window.NovaToast("Article link copied."));
        else window.NovaToast("Copy this page address to share the article.");
        break;
      }
      case "back": history.length > 1 ? history.back() : location.assign("index.html"); break;
      case "sidebar": $("[data-sidebar]")?.classList.toggle("open"); $("[data-sidebar-backdrop]")?.classList.toggle("active"); break;
      case "logout": location.assign("login.html"); break;
      case "profile-menu": window.NovaToast("Sample profile: Alex Morgan"); break;
      case "invoice": window.NovaToast("Sample invoice only. No payment record exists."); break;
      case "admin-add": {
        const name = prompt("Name this fictional demonstration item:");
        if (name && name.trim()) {
          const row = document.createElement("tr");
          row.innerHTML = `<td></td><td>Demonstration data</td><td><span class="status">Active</span></td><td><div class="admin-edit"><button class="table-action" data-action="admin-edit">Edit</button><button class="table-action" data-action="admin-delete">Delete</button></div></td>`;
          row.cells[0].textContent = name.trim();
          target.closest(".dash-panel").querySelector("tbody").prepend(row);
          window.NovaToast("Fictional item added to this page.");
        }
        break;
      }
      case "admin-edit": {
        const cell = target.closest("tr").cells[0];
        const updated = prompt("Edit this fictional item:", cell.textContent);
        if (updated && updated.trim()) { cell.textContent = updated.trim(); window.NovaToast("Fictional item updated."); }
        break;
      }
      case "admin-delete": {
        if (confirm("Remove this fictional sample row from the demonstration table?")) target.closest("tr").remove();
        break;
      }
      case "cancel-booking": {
        window.NovaBooking.remove(target.dataset.ref);
        refreshAppointments(); window.NovaToast("Sample booking removed."); break;
      }
      case "download-report": {
        const escapePdf = value => value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        const lines = ["NOVALAB DEMONSTRATION REPORT", "FICTIONAL SAMPLE DATA - NOT FOR CLINICAL USE", "Patient: Demonstration Patient", "Test: Complete Blood Count", "Report ID: RPT-DEMO-001", "Values: Sample value only. No actual results."];
        const commands = ["BT", "/F1 18 Tf", "50 760 Td", `(${escapePdf(lines[0])}) Tj`, "/F1 11 Tf", ...lines.slice(1).flatMap(line => ["0 -28 Td", `(${escapePdf(line)}) Tj`]), "ET"].join("\n");
        const objects = [
          "<< /Type /Catalog /Pages 2 0 R >>",
          "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
          "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
          "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
          `<< /Length ${commands.length} >>\nstream\n${commands}\nendstream`
        ];
        let pdf = "%PDF-1.4\n";
        const offsets = [0];
        objects.forEach((object, index) => {
          offsets.push(pdf.length);
          pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
        });
        const xrefOffset = pdf.length;
        pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
        offsets.slice(1).forEach(offset => { pdf += `${String(offset).padStart(10, "0")} 00000 n \n`; });
        pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
        const blob = new Blob([pdf], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob); link.download = "novalab-sample-report.pdf"; link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 500);
        break;
      }
      case "blog-next": blogPage++; filterBlogs(); break;
      case "blog-prev": blogPage = Math.max(0, blogPage - 1); filterBlogs(); break;
    }
  });
  app.addEventListener("input", event => {
    if (event.target.matches("[data-test-search]")) filterTests();
    if (event.target.matches("[data-blog-search]")) { blogPage = 0; filterBlogs(); }
    if (event.target.matches("[data-admin-search]")) {
      const query = event.target.value.toLowerCase();
      event.target.closest(".dash-panel").querySelectorAll("tbody tr").forEach(row => row.classList.toggle("hidden", !row.textContent.toLowerCase().includes(query)));
    }
  });
  app.addEventListener("change", event => {
    if (event.target.matches("[data-test-sort]")) filterTests();
    if (event.target.matches("[data-admin-status]")) window.NovaToast(`Sample booking status changed to ${event.target.value}.`);
    if (event.target.matches("[data-admin-report]") && event.target.files[0]) window.NovaToast(`Selected ${event.target.files[0].name} for this demo only; no upload occurred.`);
  });
  app.addEventListener("submit", event => {
    const form = event.target.closest("[data-form]");
    if (!form) return;
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const message = $(".form-message", form);
    if (form.dataset.form === "collection") {
      if (!window.NovaCollection.validatePhone(data.phone)) { message.textContent = "Enter a valid phone number."; return; }
      const tests = new FormData(form).getAll("tests");
      const reference = window.NovaBooking.save({ ...data, tests });
      form.innerHTML = `<div class="notice"><strong>Request received in this demo.</strong><p>Your sample reference is <strong>${reference}</strong>.</p><p>This is not a real appointment. No details were sent to a laboratory.</p><a class="btn" href="dashboard.html">Open sample dashboard</a></div>`;
      return;
    }
    if (form.dataset.form === "contact") {
      message.textContent = "Thanks. This demo form does not send your message. Add a secure backend before launch.";
      form.reset(); return;
    }
    if (form.dataset.form === "login") {
      window.NovaToast("Demo sign-in only. Opening the fictional patient dashboard.");
      setTimeout(() => location.assign("dashboard.html"), 700); return;
    }
    if (form.dataset.form === "register") {
      if (data.password !== data.confirm) { message.textContent = "Passwords do not match."; return; }
      window.NovaToast("Demo profile created in this interface only.");
      setTimeout(() => location.assign("dashboard.html"), 700); return;
    }
    if (form.dataset.form === "profile") {
      message.textContent = "Profile changes are not saved to a server."; return;
    }
    if (form.dataset.form === "report") {
      message.textContent = "";
      const result = $("[data-report-result]");
      result.innerHTML = `<article class="report-sheet"><div class="report-head"><div>${brand}<p>Demonstration laboratory report</p></div><div><strong>Report ID</strong><br>RPT-DEMO-001</div></div><div class="notice">SAMPLE REPORT — FICTIONAL DATA ONLY. Not for clinical use.</div><h2 style="font-size:1.5rem;margin-top:22px">Complete Blood Count</h2><p>Patient: Demonstration Patient · Reference: NL-DEMO-104<br>Report date: November 12, 2026 · Laboratory: NOVALAB Demo</p><div class="table-wrap"><table><thead><tr><th>Test item</th><th>Sample value</th><th>Reference</th></tr></thead><tbody><tr><td>Hemoglobin</td><td>Sample value</td><td>Illustrative range</td></tr><tr><td>White blood cells</td><td>Sample value</td><td>Illustrative range</td></tr><tr><td>Platelets</td><td>Sample value</td><td>Illustrative range</td></tr></tbody></table></div><p style="margin-top:15px">This mock report contains no actual results. It must not be used for health decisions.</p><button class="btn small" data-action="download-report">Download sample report</button></article>`;
      return;
    }
  });
  app.addEventListener("click", event => {
    if (event.target.matches("[data-sidebar-backdrop]")) { $("[data-sidebar]")?.classList.remove("open"); event.target.classList.remove("active"); }
  });
})();
