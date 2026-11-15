(() => {
  const page = document.body.dataset.page;
  if (page !== "home" && page !== "premium") return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const photo = (id, alt, collection = "videos") => {
    const path = collection === "photos"
      ? `photos/${id}/pexels-photo-${id}.jpeg`
      : `videos/${id}/pexels-photo-${id}.jpeg`;
    return {
      src: `https://images.pexels.com/${path}?auto=compress&cs=tinysrgb&w=1600&q=85`,
      srcset: [480, 900, 1600].map(width => `https://images.pexels.com/${path}?auto=compress&cs=tinysrgb&w=${width}&q=85 ${width}w`).join(", "),
      alt
    };
  };
  const photos = page === "home" ? [
    { ...photo("32810112", "Laboratory technician handling blood samples in a centrifuge"), label: "Sample processing" },
    { ...photo("6290527", "Blood sample tubes arranged for laboratory checking"), label: "Blood sample tubes" },
    { ...photo("3735731", "Close view of a laboratory sample under examination"), label: "Sample examination" },
    { ...photo("6290529", "Blood sample processing in a clinical laboratory"), label: "Diagnostic workflow" }
  ] : [
    { ...photo("30775057", "Modern diagnostic laboratory equipment"), label: "Diagnostic instruments" },
    { ...photo("8381266", "Test tubes moving through an automated laboratory machine"), label: "Automated sample analysis" },
    { ...photo("8381577", "Contemporary scientific laboratory interior"), label: "Laboratory environment" },
    { ...photo("5722114", "Laboratory professional examining a sample plate"), label: "Laboratory testing" }
  ];

  const makeGallery = () => {
    const section = document.createElement("section");
    section.className = "section nova-gallery-section";
    section.setAttribute("aria-label", page === "home" ? "Diagnostic laboratory photo gallery" : "Premium diagnostic technology gallery");
    const title = page === "home" ? "A closer look inside the laboratory." : "Technology in motion. Care in every sample.";
    const copy = page === "home"
      ? "Explore the people, samples and equipment behind a thoughtful diagnostic experience."
      : "A real-world look at modern sample processing and laboratory technology.";
    const renderSet = duplicate => `<div class="nova-gallery-set" ${duplicate ? 'aria-hidden="true"' : ""}>${photos.map((item, index) => `
      <figure class="nova-gallery-card reveal" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${photos.length}: ${item.label}">
      <img src="${item.src}" srcset="${item.srcset}" sizes="(max-width: 700px) 78vw, (max-width: 1200px) 29vw, 350px" alt="${duplicate ? "" : item.alt}" loading="lazy" decoding="async">
        <figcaption>${item.label}</figcaption>
      </figure>`).join("")}</div>`;
    section.innerHTML = `
      <div class="container">
        <div class="nova-gallery-heading">
          <div><span class="eyebrow">${page === "home" ? "Inside NOVALAB" : "A modern laboratory"}</span><h2>${title}</h2><p>${copy}</p></div>
        </div>
        <div id="laboratory-gallery" class="nova-gallery-window" data-gallery-window role="region" aria-label="Laboratory image carousel" aria-roledescription="carousel">
          <div class="nova-gallery-track" data-gallery-track>${renderSet(false)}${renderSet(true)}</div>
        </div>
      </div>`;
    return section;
  };

  const hero = $(".hero, .premium-hero");
  const visual = $(".hero-visual, .premium-visual");
  if (!hero || !visual) return;

  if (page === "home") {
    const heading = $(".hero h1");
    const description = $(".hero-copy > p");
    if (heading) heading.textContent = "Your Health Deserves Accurate Testing & Better Care.";
    if (description) description.textContent = "Reliable blood tests, convenient home sample collection and easy digital report access for a better diagnostic experience.";
  } else {
    const heading = $(".premium-hero h1");
    const description = $(".premium-hero .container > p");
    if (heading) heading.textContent = "Advanced Diagnostics. A Healthier Tomorrow.";
    if (description) description.textContent = "Experience convenient health checkups, modern laboratory services and secure digital reports through a smarter diagnostic journey.";
  }

  const tube = document.createElement("span");
  tube.className = "nova-sample-tube tube-one";
  tube.setAttribute("aria-hidden", "true");
  tube.innerHTML = `<svg viewBox="0 0 42 100" fill="none"><path d="M12 7h18M15 8v62a6 6 0 0 0 6 6 6 6 0 0 0 6-6V8" stroke="currentColor" stroke-width="2.5"/><path d="M16 48h10v22a5 5 0 0 1-10 0V48Z" fill="currentColor" opacity=".55"/><path d="M13 18h16" stroke="currentColor" stroke-width="2"/></svg>`;
  const tubeSecond = tube.cloneNode(true);
  tubeSecond.className = "nova-sample-tube tube-two";
  visual.append(tube, tubeSecond);

  const gallery = makeGallery();
  hero.after(gallery);

  const equipment = document.createElement("section");
  const equipmentPhoto = page === "home"
    ? photo("8442029", "Blood sample tubes inside a laboratory centrifuge", "photos")
    : photo("8442027", "Advanced diagnostic machinery inside a medical laboratory", "photos");
  equipment.className = "section soft nova-equipment-section";
  equipment.innerHTML = page === "home" ? `
    <div class="container grid-2">
      <div class="photo-frame reveal nova-equipment-image"><img src="${equipmentPhoto.src}" srcset="${equipmentPhoto.srcset}" sizes="(max-width: 700px) 100vw, 50vw" alt="${equipmentPhoto.alt}" loading="lazy" decoding="async"></div>
      <div class="reveal"><span class="eyebrow">Laboratory equipment</span><h2>Thoughtful processes, supported by modern tools.</h2><p>Learn about the instruments and processes used at your local laboratory. This demonstration page does not claim specific equipment, performance or certification.</p><ul class="check-list"><li>Ask which tests are performed on site</li><li>Confirm sample handling and report timing</li><li>Check verified quality and safety information</li></ul></div>
    </div>` : `
    <div class="container grid-2">
      <div class="photo-frame reveal nova-equipment-image"><img src="${equipmentPhoto.src}" srcset="${equipmentPhoto.srcset}" sizes="(max-width: 700px) 100vw, 50vw" alt="${equipmentPhoto.alt}" loading="lazy" decoding="async"></div>
      <div class="reveal"><span class="eyebrow">Advanced diagnostic equipment</span><h2>Modern instruments. A clear, considered journey.</h2><p>Explore an illustrative view of laboratory technology and sample processing. Confirm actual equipment and service capabilities with the laboratory.</p><ul class="check-list"><li>Automated sample processing visuals</li><li>Clear, secure report access concept</li><li>Real equipment details should be verified before publication</li></ul></div>
    </div>`;

  const testimonial = $("[data-quote]")?.closest(".section");
  if (testimonial) testimonial.before(equipment);

  if (page === "premium") {
    const report = document.createElement("section");
    report.className = "section nova-report-section";
    report.innerHTML = `<div class="container nova-report-card reveal"><div class="nova-report-art" aria-hidden="true"><div class="nova-report-sheet"><span></span><span></span><span></span><span></span><i>✓</i></div></div><div><span class="eyebrow">Digital report experience</span><h2>Your report, in a clear digital space.</h2><p>Preview the sample report experience. Real patient reports require secure, verified laboratory access.</p><a class="btn outline" href="report-download.html">Explore report access</a></div></div>`;
    equipment.after(report);

    const team = document.createElement("section");
    team.className = "section soft nova-team-section";
    team.innerHTML = `<div class="container"><div class="section-head reveal"><span class="eyebrow">The people behind the process</span><h2>Skilled hands. Thoughtful work.</h2><p>Use verified staff photos and credentials before publishing a real laboratory team profile.</p></div><div class="nova-team-grid">${[
      ["8442568", "Scientist using a microscope", "Laboratory technicians", "photos"],
      ["9574556", "Scientist analyzing laboratory samples", "Laboratory operations", "photos"],
      ["3735705", "Gloved hands examining a blood sample", "Diagnostic team", "photos"]
    ].map(member => {
      const memberPhoto = photo(member[0], member[1], member[3]);
      return `<article class="nova-team-card reveal"><img src="${memberPhoto.src}" srcset="${memberPhoto.srcset}" sizes="(max-width: 700px) 125px, 33vw" alt="${member[1]}" loading="lazy" decoding="async"><div><strong>${member[2]}</strong><span>Sample team role</span></div></article>`;
    }).join("")}</div></div>`;
    report.after(team);
  }

  const windowEl = $("[data-gallery-window]", gallery);
  const track = $("[data-gallery-track]", gallery);
  if (!windowEl || !track) return;

  if (window.NovaAnimations) {
    window.NovaAnimations.bindAutoScroller({ track, viewport: windowEl, speed: 42 });
    window.NovaAnimations.start();
  }
})();
