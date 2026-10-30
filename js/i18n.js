/**
 * kin9candra - Bilingual (ID / EN) Translation & Switching System
 * Supports both index.html (Portfolio) and cv.html (Curriculum Vitae)
 */

const I18N_STORAGE_KEY = 'kin9_portfolio_lang';

const translations = {
  id: {
    // Nav
    'nav_home': 'Home',
    'nav_gallery': 'Galeri Karya',
    'nav_cv': 'CV / Resume',
    'nav_booking': 'Booking Inquiry',
    'nav_cta': 'Mulai Proyek',

    // Hero
    'hero_available': 'Available for Creative Commissions',
    'hero_btn_explore': 'Eksplorasi Galeri',
    'hero_btn_start': 'Mulai Proyek',
    'stat_num_cat': '5 <span>Kategori</span>',
    'stat_lbl_cat': 'Kategori Karya',
    'stat_num_curated': '31 <span>Karya</span>',
    'stat_lbl_curated': 'Terkurasi Lengkap',
    'stat_num_custom': '100<span>%</span>',
    'stat_lbl_custom': 'Desain Kustom',

    // Gallery
    'gallery_label': 'Galeri Karya Terpilih',
    'gallery_title': 'Koleksi Desain Grafis',
    'filter_all': 'Semua Karya',
    'cat_count_sosmed': '13 Karya',
    'cat_count_logo': '2 Projek Presentasi',
    'cat_count_wedding': '9 Karya',
    'cat_count_text': '5 Karya',
    'cat_count_pres': '2 Karya',
    'item_view_full': 'Lihat Penuh',
    'logo_slides_33': '33 Halaman (Scroll View)',
    'logo_slides_27': '27 Halaman (Scroll View)',
    'logo_view_btn': 'Buka Presentasi (Scroll ke Bawah)',
    'more_portfolio_btn': 'More Portfolio',

    // Modal
    'modal_close_btn': 'Tutup',

    // Booking
    'booking_label': 'Hubungi Saya',
    'booking_title': 'Mari Wujudkan Proyek Desain Anda',
    'booking_desc': 'Punya ide menarik atau butuh materi visual berstandar tinggi untuk bisnis, brand, atau perayaan spesial Anda? Silakan isi formulir di samping untuk mendiskusikan kebutuhan, timeline, dan penawaran terbaik.',
    'booking_pill_quality': 'Desain Kustom & Berorientasi Kualitas',
    'form_lbl_name': 'Nama Lengkap',
    'form_ph_name': 'contoh: Budi Santoso',
    'form_lbl_email': 'Alamat Email',
    'form_ph_email': 'budi@example.com',
    'form_lbl_phone': 'Nomor WhatsApp / HP',
    'form_lbl_cat': 'Kategori Desain',
    'form_opt_cat_sosmed': 'Social Media Post',
    'form_opt_cat_logo': 'Logo Design & Brand Identity',
    'form_opt_cat_wedding': 'Wedding Invitation',
    'form_opt_cat_custom': 'Paket Lengkap / Custom Project',
    'form_lbl_timeline': 'Estimasi Timeline / Deadline',
    'form_opt_time_urgent': 'Mendesak / Urgent (< 7 Hari)',
    'form_opt_time_standard': 'Standar (1 - 2 Minggu)',
    'form_opt_time_flexible': 'Fleksibel (> 2 Minggu)',
    'form_lbl_budget': 'Estimasi Anggaran',
    'form_opt_budget_1': 'Under Rp 500.000',
    'form_opt_budget_2': 'Rp 500.000 - Rp 1.500.000',
    'form_opt_budget_3': 'Rp 1.500.000 - Rp 3.500.000',
    'form_opt_budget_4': 'Rp 3.500.000+ (Comprehensive Brand)',
    'form_lbl_details': 'Deskripsi & Detail Kebutuhan Desain',
    'form_ph_details': 'Ceritakan konsep, referensi gaya, jumlah materi, dan kebutuhan spesifik yang Anda inginkan...',
    'form_btn_email': 'Kirim via Email',
    'form_btn_wa': 'Kirim via WhatsApp',

    // Footer
    'footer_back_top': 'Kembali ke Atas',

    // CV PAGE
    'cv_btn_back': 'Lihat Portofolio',
    'cv_btn_print': 'Cetak / Simpan PDF (A4)',
    'cv_title_contact': 'Kontak & Info',
    'cv_lbl_ttl': 'Tempat, Tanggal Lahir',
    'cv_val_ttl': 'Engkepar, 11-11-1995',
    'cv_lbl_email': 'Email',
    'cv_lbl_wa': 'Telepon / WhatsApp',
    'cv_lbl_domisili': 'Domisili',
    'cv_val_domisili': 'Kubu Raya, Kalimantan Barat',
    'cv_sub_domisili': 'Desa Pal Sembilan, Kec. Sungai Kakap',
    'cv_lbl_ig': 'Instagram',
    'cv_title_skills': 'Keahlian Desain',
    'cv_lbl_tools': 'Software & Tools',
    'cv_lbl_soft': 'Keahlian Pendukung (Soft Skills)',
    'cv_skill_comm': 'Komunikasi',
    'cv_skill_time': 'Manajemen Waktu',
    'cv_skill_team': 'Teamwork',
    'cv_skill_adapt': 'Kemampuan Beradaptasi',
    'cv_title_lang': 'Bahasa',
    'cv_lang_id': 'Bahasa Indonesia',
    'cv_lang_en': 'Bahasa Inggris',
    'cv_title_about': 'Tentang Saya',
    'cv_desc_about': 'Graphic Designer dan kreator konten visual dengan pengalaman lebih dari 5 tahun dalam ekosistem kerja mandiri (freelance) maupun institusi. Menggabungkan latar belakang kepemimpinan media dan keahlian teknis desain (Photoshop, Illustrator, Canva) untuk menghasilkan karya yang terstruktur, tepat sasaran, serta didukung oleh manajemen waktu dan komunikasi yang solid.',
    'cv_title_exp': 'Pengalaman Kerja & Media',
    'cv_exp1_role': 'Koordinator Media',
    'cv_exp1_bullet1': 'Memimpin perencanaan konsep visual dan produksi materi publikasi digital instansi.',
    'cv_exp1_bullet2': 'Mengoordinasikan publikasi media sosial berkala, materi promosi acara, dan dokumentasi visual.',
    'cv_exp1_bullet3': 'Menjaga konsistensi identitas merek (brand identity) institusi di berbagai saluran komunikasi.',
    'cv_exp2_role': 'Koordinator Media',
    'cv_exp2_bullet1': 'Bertanggung jawab penuh atas kebutuhan aset visual, desain dakwah, dan publikasi lembaga.',
    'cv_exp2_bullet2': 'Merancang poster, spanduk, feeds media sosial, dan materi informasi visual secara berkala.',
    'cv_exp2_bullet3': 'Meningkatkan kualitas keterbacaan materi informasi visual kepada masyarakat dan wali santri.',
    'cv_title_edu': 'Pendidikan',
    'cv_edu_degree': 'Pendidikan Agama Islam (S1)',
    'cv_callout_title': 'Portofolio Digital Lengkap',
    'cv_callout_desc': 'Showcase 30+ karya high-res: Social Media, Logo, Wedding, Text Effects & Presentation.'
  },

  en: {
    // Nav
    'nav_home': 'Home',
    'nav_gallery': 'Selected Works',
    'nav_cv': 'CV / Resume',
    'nav_booking': 'Booking Inquiry',
    'nav_cta': 'Start Project',

    // Hero
    'hero_available': 'Available for Creative Commissions',
    'hero_btn_explore': 'Explore Gallery',
    'hero_btn_start': 'Start Project',
    'stat_num_cat': '5 <span>Categories</span>',
    'stat_lbl_cat': 'Work Categories',
    'stat_num_curated': '31 <span>Works</span>',
    'stat_lbl_curated': 'Fully Curated',
    'stat_num_custom': '100<span>%</span>',
    'stat_lbl_custom': 'Custom Design',

    // Gallery
    'gallery_label': 'Selected Works Showcase',
    'gallery_title': 'Graphic Design Collection',
    'filter_all': 'All Works',
    'cat_count_sosmed': '13 Works',
    'cat_count_logo': '2 Presentation Projects',
    'cat_count_wedding': '9 Works',
    'cat_count_text': '5 Works',
    'cat_count_pres': '2 Works',
    'item_view_full': 'View Full',
    'logo_slides_33': '33 Pages (Scroll View)',
    'logo_slides_27': '27 Pages (Scroll View)',
    'logo_view_btn': 'Open Presentation (Scroll Down)',
    'more_portfolio_btn': 'More Portfolio',

    // Modal
    'modal_close_btn': 'Close',

    // Booking
    'booking_label': 'Get In Touch',
    'booking_title': "Let's Bring Your Design Project to Life",
    'booking_desc': 'Have an exciting project or need high-standard visual assets for your brand, business, or special event? Fill out the form beside to discuss your goals, timeline, and personalized quote.',
    'booking_pill_quality': 'Custom Design & Quality Driven',
    'form_lbl_name': 'Full Name',
    'form_ph_name': 'e.g. John Doe',
    'form_lbl_email': 'Email Address',
    'form_ph_email': 'john@example.com',
    'form_lbl_phone': 'WhatsApp / Phone Number',
    'form_lbl_cat': 'Design Category',
    'form_opt_cat_sosmed': 'Social Media Post',
    'form_opt_cat_logo': 'Logo Design & Brand Identity',
    'form_opt_cat_wedding': 'Wedding Invitation',
    'form_opt_cat_custom': 'Complete Package / Custom Project',
    'form_lbl_timeline': 'Estimated Timeline / Deadline',
    'form_opt_time_urgent': 'Urgent (< 7 Days)',
    'form_opt_time_standard': 'Standard (1 - 2 Weeks)',
    'form_opt_time_flexible': 'Flexible (> 2 Weeks)',
    'form_lbl_budget': 'Estimated Budget',
    'form_opt_budget_1': 'Under IDR 500,000',
    'form_opt_budget_2': 'IDR 500,000 - 1,500,000',
    'form_opt_budget_3': 'IDR 1,500,000 - 3,500,000',
    'form_opt_budget_4': 'IDR 3,500,000+ (Comprehensive Brand)',
    'form_lbl_details': 'Project Brief & Design Details',
    'form_ph_details': 'Tell us about your concept, style references, quantity, and specific requirements...',
    'form_btn_email': 'Send via Email',
    'form_btn_wa': 'Send via WhatsApp',

    // Footer
    'footer_back_top': 'Back to Top',

    // CV PAGE
    'cv_btn_back': 'View Portfolio',
    'cv_btn_print': 'Print / Save PDF (A4)',
    'cv_title_contact': 'Contact & Info',
    'cv_lbl_ttl': 'Date of Birth',
    'cv_val_ttl': 'Engkepar, Nov 11, 1995',
    'cv_lbl_email': 'Email',
    'cv_lbl_wa': 'Phone / WhatsApp',
    'cv_lbl_domisili': 'Location',
    'cv_val_domisili': 'Kubu Raya, West Kalimantan',
    'cv_sub_domisili': 'Pal Sembilan, Sungai Kakap District',
    'cv_lbl_ig': 'Instagram',
    'cv_title_skills': 'Design Skills',
    'cv_lbl_tools': 'Software & Tools',
    'cv_lbl_soft': 'Supporting Skills (Soft Skills)',
    'cv_skill_comm': 'Communication',
    'cv_skill_time': 'Time Management',
    'cv_skill_team': 'Teamwork',
    'cv_skill_adapt': 'Adaptability',
    'cv_title_lang': 'Languages',
    'cv_lang_id': 'Indonesian',
    'cv_lang_en': 'English',
    'cv_title_about': 'About Me',
    'cv_desc_about': 'Graphic Designer and visual content creator with over 5 years of professional experience across freelance and institutional environments. Combining media leadership experience with technical design mastery (Photoshop, Illustrator, Canva) to deliver structured, high-impact visuals backed by dependable time management and clear communication.',
    'cv_title_exp': 'Work Experience & Media',
    'cv_exp1_role': 'Media Coordinator',
    'cv_exp1_bullet1': 'Directed visual concept planning and end-to-end production of institutional digital publication assets.',
    'cv_exp1_bullet2': 'Coordinated regular social media campaigns, event promotional materials, and visual documentation.',
    'cv_exp1_bullet3': 'Maintained rigorous brand identity consistency across all institutional communication channels.',
    'cv_exp2_role': 'Media Coordinator',
    'cv_exp2_bullet1': 'Led the development and execution of all organizational visual assets, posters, and institutional publications.',
    'cv_exp2_bullet2': 'Designed banners, social media feeds, event posters, and informational infographics on a regular schedule.',
    'cv_exp2_bullet3': 'Enhanced visual readability and engagement across public communications and parent outreach materials.',
    'cv_title_edu': 'Education',
    'cv_edu_degree': "Islamic Education (Bachelor's Degree)",
    'cv_callout_title': 'Complete Digital Portfolio',
    'cv_callout_desc': 'Showcase of 30+ high-res projects: Social Media, Logo, Wedding, Text Effects & Presentation.'
  }
};

/**
 * Apply selected language across document
 * @param {'id' | 'en'} lang 
 */
function applyLanguage(lang) {
  const currentLang = (lang === 'en') ? 'en' : 'id';
  const dict = translations[currentLang];
  if (!dict) return;

  // Set document lang attribute
  document.documentElement.lang = currentLang;

  // Translate textContent and innerHTML elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Translate input/textarea placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update switcher button state (.lang-switch)
  document.querySelectorAll('.lang-switch').forEach((btn) => {
    const idOpt = btn.querySelector('.lang-id');
    const enOpt = btn.querySelector('.lang-en');
    if (idOpt && enOpt) {
      if (currentLang === 'id') {
        idOpt.classList.add('active');
        enOpt.classList.remove('active');
      } else {
        enOpt.classList.add('active');
        idOpt.classList.remove('active');
      }
    }
  });

  // Persist preference to localStorage
  try {
    localStorage.setItem(I18N_STORAGE_KEY, currentLang);
  } catch (e) {
    console.warn('localStorage access error:', e);
  }
}

/**
 * Toggle language between ID and EN
 */
function toggleLanguage() {
  const current = getActiveLanguage();
  const nextLang = (current === 'id') ? 'en' : 'id';
  applyLanguage(nextLang);
}

/**
 * Get active language from localStorage or default to 'id'
 */
function getActiveLanguage() {
  try {
    return localStorage.getItem(I18N_STORAGE_KEY) || 'id';
  } catch (e) {
    return 'id';
  }
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getActiveLanguage();
  applyLanguage(initialLang);

  // Attach click listener to all switcher buttons
  document.querySelectorAll('.lang-switch').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });
});

