/**
 * kin9candra - Graphic Design Portfolio
 * Interaction & Functional Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Navigation Drawer Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = hamburgerBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close menu when clicking any nav link
    const mobileLinks = navLinks.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Category Filter Handler
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryBlocks = document.querySelectorAll('.category-block');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });

      const filterValue = btn.getAttribute('data-filter');

      categoryBlocks.forEach((block) => {
        const blockCat = block.getAttribute('data-category');
        if (filterValue === 'all' || blockCat === filterValue) {
          block.classList.remove('is-hidden');
          block.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          block.classList.add('is-hidden');
        }
      });
    });
  });

  // Horizontal Drag & Scroll Support for Filter Tabs
  const filterTabsContainer = document.querySelector('.filter-tabs');
  if (filterTabsContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    filterTabsContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - filterTabsContainer.offsetLeft;
      scrollLeft = filterTabsContainer.scrollLeft;
    });

    filterTabsContainer.addEventListener('mouseleave', () => {
      isDown = false;
    });

    filterTabsContainer.addEventListener('mouseup', () => {
      isDown = false;
    });

    filterTabsContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - filterTabsContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      filterTabsContainer.scrollLeft = scrollLeft - walk;
    });
  }

  // 3. Scroll Reveal Entrance Animation
  const galleryItems = document.querySelectorAll('.gallery-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    galleryItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index % 4 * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index % 4 * 0.08}s`;
      observer.observe(item);
    });
  }

  // 4. Data Slide Projects untuk Kategori Logo
  // PROJEK 1: 33 Gambar
  const logoProjek1Images = [];
  for (let i = 1; i <= 33; i++) {
    const num = i < 10 ? `0${i}` : `${i}`;
    logoProjek1Images.push({
      src: `Logo/PROJEK%201/PENJELASAN%20IDENTITAS%20VISUAL%20PONTIANAK%20254-${num}.jpg`,
      title: 'Identitas Visual Pontianak 254',
      numText: `${num} / 33`
    });
  }

  // PROJEK 2: 27 Gambar
  const logoProjek2Images = [];
  for (let i = 1; i <= 27; i++) {
    const num = i < 10 ? `0${i}` : `${i}`;
    logoProjek2Images.push({
      src: `Logo/PROJEK%202/LOGO%20PRESENTATION%20STYLE%201-${num}.jpg`,
      title: 'Logo Presentation & Guidelines',
      numText: `${num} / 27`
    });
  }

  // 5. VERTICAL SCROLL CASE STUDY MODAL (Khusus Kategori Logo)
  const projectScrollModal = document.getElementById('projectScrollModal');
  const scrollModalTitle = document.getElementById('scrollModalTitle');
  const scrollModalCount = document.getElementById('scrollModalCount');
  const scrollModalBody = document.getElementById('scrollModalBody');
  const scrollModalClose = document.getElementById('scrollModalClose');
  const scrollModalBackTop = document.getElementById('scrollModalBackTop');

  function openScrollModal(projectType) {
    let images = [];
    let title = '';
    let total = 0;

    if (projectType === 'projek-1') {
      images = logoProjek1Images;
      title = 'Identitas Visual Pontianak 254';
      total = 33;
    } else {
      images = logoProjek2Images;
      title = 'Logo Presentation & Brand Guidelines';
      total = 27;
    }

    scrollModalTitle.textContent = title;
    scrollModalCount.textContent = `${total} Halaman Presentasi (Scroll ke Bawah)`;

    // Render all images stacked vertically
    scrollModalBody.innerHTML = '';
    images.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'scroll-modal-item';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = `${title} - ${item.numText}`;
      img.className = 'scroll-modal-img';
      img.loading = 'lazy';

      const pageBadge = document.createElement('span');
      pageBadge.className = 'scroll-modal-page-num';
      pageBadge.textContent = item.numText;

      card.appendChild(img);
      card.appendChild(pageBadge);
      scrollModalBody.appendChild(card);
    });

    projectScrollModal.classList.add('active');
    projectScrollModal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeScrollModal() {
    projectScrollModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (scrollModalClose) {
    scrollModalClose.addEventListener('click', closeScrollModal);
  }

  if (scrollModalBackTop) {
    scrollModalBackTop.addEventListener('click', () => {
      projectScrollModal.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 6. STANDARD LIGHTBOX MODAL (Untuk Social Media Post, Wedding, Clipart)
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCat = document.getElementById('lightboxCat');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let regularSlides = [];
  let currentRegularIndex = 0;

  function openRegularLightbox(clickedItem) {
    const visibleRegularItems = Array.from(document.querySelectorAll('.category-block:not(.is-hidden) .gallery-item:not([data-project])'));
    regularSlides = visibleRegularItems.map((el) => {
      const img = el.querySelector('.item-img');
      const title = el.querySelector('.item-title')?.textContent || 'Karya Desain Grafis';
      const cat = el.querySelector('.item-category-tag')?.textContent || 'Portfolio';
      return { src: img.src, title, cat };
    });

    currentRegularIndex = visibleRegularItems.indexOf(clickedItem);
    if (currentRegularIndex === -1) currentRegularIndex = 0;

    renderRegularSlide();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function renderRegularSlide() {
    if (regularSlides.length === 0) return;
    const item = regularSlides[currentRegularIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxCat.textContent = item.cat;
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNextRegular() {
    if (regularSlides.length === 0) return;
    currentRegularIndex = (currentRegularIndex + 1) % regularSlides.length;
    renderRegularSlide();
  }

  function showPrevRegular() {
    if (regularSlides.length === 0) return;
    currentRegularIndex = (currentRegularIndex - 1 + regularSlides.length) % regularSlides.length;
    renderRegularSlide();
  }

  // Bind click event to each gallery item
  galleryItems.forEach((item) => {
    const projectType = item.getAttribute('data-project');
    item.addEventListener('click', () => {
      if (projectType) {
        // Khusus Logo Design: Buka style scroll ke bawah!
        openScrollModal(projectType);
      } else {
        // Untuk kategori lain: Lightbox reguler
        openRegularLightbox(item);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showNextRegular(); });
  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrevRegular(); });

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Global Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectScrollModal && projectScrollModal.classList.contains('active')) {
        closeScrollModal();
      } else if (lightboxModal && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    }
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowRight') showNextRegular();
      if (e.key === 'ArrowLeft') showPrevRegular();
    }
  });

  // 7. Booking Inquiry Form Handler (WhatsApp & Email Destination)
  const bookingForm = document.getElementById('bookingForm');
  const btnSubmitWA = document.getElementById('btnSubmitWA');

  // Nomor WhatsApp tujuan: +6285159668886
  const WHATSAPP_NUMBER = '6285159668886';
  // Email tujuan: kin9candra@gmail.com
  const EMAIL_ADDRESS = 'kin9candra@gmail.com';

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmission('email');
    });
  }

  if (btnSubmitWA) {
    btnSubmitWA.addEventListener('click', (e) => {
      e.preventDefault();
      handleFormSubmission('whatsapp');
    });
  }

  function handleFormSubmission(method) {
    const name = document.getElementById('clientName')?.value.trim();
    const email = document.getElementById('clientEmail')?.value.trim();
    const phone = document.getElementById('clientPhone')?.value.trim();
    const category = document.getElementById('projectCategory')?.value;
    const timeline = document.getElementById('projectTimeline')?.value;
    const budget = document.getElementById('projectBudget')?.value;
    const details = document.getElementById('projectDetails')?.value.trim();

    if (!name || !email || !phone || !details) {
      alert('Mohon lengkapi semua kolom bertanda bintang (*) sebelum mengirim permintaan.');
      return;
    }

    const messageTemplate = 
`Halo Wahyu Candra (kin9candra),
Saya ingin mengajukan Booking Inquiry untuk Project Desain Grafis:

*Detail Klien:*
• Nama: ${name}
• Email: ${email}
• WhatsApp / Kontak: ${phone}

*Detail Proyek:*
• Kategori: ${category}
• Estimasi Timeline: ${timeline}
• Estimasi Budget: ${budget}

*Brief / Kebutuhan Desain:*
${details}

Terima kasih!`;

    if (method === 'whatsapp') {
      const encodedMsg = encodeURIComponent(messageTemplate);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
      window.open(waUrl, '_blank');
    } else {
      const subject = encodeURIComponent(`Booking Inquiry - ${category} (${name})`);
      const body = encodeURIComponent(messageTemplate);
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    }

    showToast('Permintaan booking Anda sedang dialihkan. Terima kasih!');
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  // 8. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
