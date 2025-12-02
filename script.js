/* ====== Full improved JS (copy-paste) ====== */

/* ----------------------------
   Raw product list (unchanged)
   ---------------------------- */
const rawProducts = [
  // MEN
  { id: 1, name: "Abstract Pattern T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Abstract Pattern T-shirt variant.jpg", tag: "" },
  { id: 2, name: "Abstract Pattern T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Abstract Pattern T-shirt.jpg", tag: "" },
  { id: 3, name: "Army Design T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Army Design T-shirt variant.jpg", tag: "" },
  { id: 4, name: "Army Design T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Army Design T-shirt.jpg", tag: "" },
  { id: 5, name: "Baby Pink Polo T-Shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Baby Pink Polo T-Shirt Variant.jpg", tag: "" },
  { id: 6, name: "Baby Pink Polo T-Shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Baby Pink Polo T-Shirt.jpg", tag: "" },
  { id: 7, name: "Baby Pink Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Baby Pink Shirt.jpg", tag: "" },
  { id: 8, name: "Beige Polo T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Beige Polo T-shirt variant.jpg", tag: "" },
  { id: 9, name: "Beige Polo T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Beige Polo T-shirt.jpg", tag: "" },
  { id: 10, name: "Black Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Black Shirt.jpg", tag: "" },
  { id: 11, name: "Black Strips T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Black Strips T-shirt.jpg", tag: "" },
  { id: 12, name: "Blue-White Multi Colored Printed T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Blue-White Multi Colored Printed T-shirt.jpg", tag: "" },
  { id: 13, name: "Bold Yellow Sweatshirt ", category: "Sweatshirts", gender: "Men", price: "₹1,999", image: "assets/Men/Bold Yellow Sweatshirt variant.jpg", tag: "" },
  { id: 14, name: "Bold Yellow Sweatshirt", category: "Sweatshirts", gender: "Men", price: "₹1,999", image: "assets/Men/Bold Yellow Sweatshirt.jpg", tag: "" },
  { id: 15, name: "Bright Blue Shirt ", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Bright Blue Shirt Variant.jpg", tag: "" },
  { id: 16, name: "Bright Blue Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Bright Blue Shirt.jpg", tag: "" },
  { id: 17, name: "Bright Green Shirt ", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Bright Green Shirt variant.jpg", tag: "" },
  { id: 18, name: "Bright Green Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Bright Green Shirt.jpg", tag: "" },
  { id: 19, name: "Classic Black T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Classic Black T-shirt variant.jpg", tag: "" },
  { id: 20, name: "Classic Black T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Classic Black T-shirt.jpg", tag: "" },
  { id: 21, name: "Classic Dual colored Hoodie", category: "Hoodies", gender: "Men", price: "₹1,299", image: "assets/Men/Classic Dual colored Hoodie.jpg", tag: "" },
  { id: 22, name: "Classic Pattern T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Classic Pattern T-shirt.jpg", tag: "" },
  { id: 23, name: "Classic Printed T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Classic Printed T-shirt.jpg", tag: "" },
  { id: 24, name: "Dark Blue Shirt ", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Dark Blue Shirt Variant.jpg", tag: "" },
  { id: 25, name: "Dark Blue Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Dark Blue Shirt.jpg", tag: "" },
  { id: 26, name: "Dark Blue T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Dark Blue T-shirt.jpg", tag: "" },
  { id: 27, name: "Dark Grey Polo T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Dark Grey Polo T-shirt Variant.jpg", tag: "" },
  { id: 28, name: "Dark Grey Polo T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Dark Grey Polo T-Shirt.jpg", tag: "" },
  { id: 29, name: "Dark Pink Sweat shirt", category: "Sweatshirts", gender: "Men", price: "₹1,299", image: "assets/Men/Dark Pink Sweat shirt.jpg", tag: "" },
  { id: 30, name: "Dark polo T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Dark polo T-shirt.jpg", tag: "" },
  { id: 31, name: "Dark Yellow Polo T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Dark Yellow Polo T-shirt variant.jpg", tag: "" },
  { id: 32, name: "Dark Yellow Polo T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Dark Yellow Polo T-shirt.jpg", tag: "" },
  { id: 33, name: "Dual Colored Hoodie ", category: "Hoodies", gender: "Men", price: "₹1,599", image: "assets/Men/Dual Colored Hoodie variant.jpg", tag: "" },
  { id: 34, name: "Dual Colored Hoodie", category: "Hoodies", gender: "Men", price: "₹1,599", image: "assets/Men/Dual Colored Hoodie.jpg", tag: "" },
  { id: 35, name: "Genz Sweat shirt ", category: "Sweatshirts", gender: "Men", price: "₹1,299", image: "assets/Men/Genz Sweat shirt Variant.jpg", tag: "" },
  { id: 36, name: "Genz Sweat shirt", category: "Sweatshirts", gender: "Men", price: "₹1,299", image: "assets/Men/Genz Sweat shirt.jpg", tag: "" },
  { id: 37, name: "Light Blue Shirt ", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Light Blue Shirt Variant.jpg", tag: "" },
  { id: 38, name: "Light Blue Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Light Blue Shirt.jpg", tag: "" },
  { id: 39, name: "Light Yellow Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Light Yellow Shirt.jpg", tag: "" },
  { id: 40, name: "Loyal Polo T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Loyal Polo T-shirt.jpg", tag: "" },
  { id: 41, name: "Loyal T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Loyal T-shirt.jpg", tag: "" },
  { id: 42, name: "Mehndi Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Mehndi Shirt.jpg", tag: "" },
  { id: 43, name: "Multi colored Printed T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Multi colored Printed T-shirt variant.jpg", tag: "" },
  { id: 44, name: "Multi colored Printed T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Multi colored Printed T-shirt.jpg", tag: "" },
  { id: 45, name: "Multicolored Hoodie ", category: "Hoodies", gender: "Men", price: "₹1,499", image: "assets/Men/Multicolored Hoodie variant.jpg", tag: "" },
  { id: 46, name: "Multicolored Hoodie", category: "Hoodies", gender: "Men", price: "₹1,499", image: "assets/Men/Multicolored Hoodie.jpg", tag: "" },
  { id: 47, name: "Multicolored Sweatshirt", category: "Sweatshirts", gender: "Men", price: "₹1,499", image: "assets/Men/Multicolored Sweatshirt.jpg", tag: "" },
  { id: 48, name: "Multicolored T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Multicolored T-shirt.jpg", tag: "" },
  { id: 49, name: "Olive Green Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Olive Green Shirt.jpg", tag: "" },
  { id: 50, name: "Pink Sweatshirt", category: "Sweatshirts", gender: "Men", price: "₹1,399", image: "assets/Men/Pink Sweatshirt.jpg", tag: "" },
  { id: 51, name: "Plain White Sweat shirt", category: "Sweatshirts", gender: "Men", price: "₹1,299", image: "assets/Men/Plain White Sweat shirt.jpg", tag: "" },
  { id: 52, name: "Red-White Hoodie", category: "Hoodies", gender: "Men", price: "₹1,599", image: "assets/Men/Red-White Hoodie.jpg", tag: "" },
  { id: 53, name: "Shirt", category: "Shirts", gender: "Men", price: "₹1,899", image: "assets/Men/Shirt.jpg", tag: "" },
  { id: 54, name: "Sweat Shirt", category: "Sweatshirts", gender: "Men", price: "₹1,299", image: "assets/Men/Sweat Shirt.jpg", tag: "" },
  { id: 55, name: "Tri-design Hoodie ", category: "Hoodies", gender: "Men", price: "₹1,599", image: "assets/Men/Tri-design Hoodie variant.jpg", tag: "" },
  { id: 56, name: "Tri-design Hoodie", category: "Hoodies", gender: "Men", price: "₹1,599", image: "assets/Men/Tri-design Hoodie.jpg", tag: "" },
  { id: 57, name: "Wheat White Polo T-shirt ", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Wheat White Polo T-shirt Variant.jpg", tag: "" },
  { id: 58, name: "Wheat White T-shirt", category: "T-shirts", gender: "Men", price: "₹1,299", image: "assets/Men/Wheat White Shirt.jpg", tag: "" },

  // WOMEN
  { id: 201, name: "Abstract design T-shirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Abstract design T-shirt.jpg", tag: "" },
  { id: 202, name: "Another Texted T-shirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Another Texted T-shirt.jpg", tag: "" },
  { id: 203, name: "Army pattern Loose top ", category: "Tops", gender: "Women", price: "₹899", image: "assets/Women/Army pattern Loose top variant.JPG", tag: "" },
  { id: 204, name: "Army pattern Loose top", category: "Tops", gender: "Women", price: "₹899", image: "assets/Women/Army pattern Loose top.JPG", tag: "" },
  { id: 205, name: "Bold Black t-shirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Bold Black t-shirt.JPG", tag: "" },
  { id: 206, name: "Bold Printed T-shirt ", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Bold Printed T-shirt variant.jpg", tag: "" },
  { id: 207, name: "Bold Printed T-shirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Bold Printed T-shirt.jpg", tag: "" },
  { id: 208, name: "Classic Pink Top ", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Classic Pink Top variant 2.jpg", tag: "" },
  { id: 209, name: "Classic Pink Top ", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Classic Pink Top variant 3.jpg", tag: "" },
  { id: 210, name: "Classic Pink Top ", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Classic Pink Top variant.jpg", tag: "" },
  { id: 211, name: "Classic Pink Top", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Classic Pink Top.jpg", tag: "" },
  { id: 212, name: "Classic top", category: "Tops", gender: "Women", price: "₹899", image: "assets/Women/Classic top.jpg", tag: "" },
  { id: 213, name: "Dark yellow t-shirt ", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Dark yellow t-shirt variant.JPG", tag: "" },
  { id: 214, name: "Dark yellow t-shirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Dark yellow t-shirt.JPG", tag: "" },
  { id: 215, name: "Designer t-shirt", category: "T-shirts", gender: "Women", price: "₹899", image: "assets/Women/Designer t-shirt.jpg", tag: "" },
  { id: 216, name: "Designer top", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Designer top.jpg", tag: "" },
  { id: 217, name: "Green Tshirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Green Tshirt.jpg", tag: "" },
  { id: 218, name: "Long Top", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Long Top.jpg", tag: "" },
  { id: 219, name: "Mehndi colored Top t", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Mehndi colored Top variant.jpg", tag: "" },
  { id: 220, name: "Mehndi colored Top", category: "Tops", gender: "Women", price: "₹999", image: "assets/Women/Mehndi colored Top.jpg", tag: "" },
  { id: 221, name: "Multicolored t-shirt ", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Multicolored t-shirt variant 2.jpg", tag: "" },
  { id: 222, name: "Multicolored t-shirt ", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Multicolored t-shirt variant 3.jpg", tag: "" },
  { id: 223, name: "Multicolored t-shirt ", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Multicolored t-shirt variant.jpg", tag: "" },
  { id: 224, name: "Multicolored t-shirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Multicolored t-shirt.jpg", tag: "" },
  { id: 225, name: "Tri-colored T-shirt ", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Tri-colored T-shirt variant.JPG", tag: "" },
  { id: 226, name: "Tri-colored T-shirt", category: "T-shirts", gender: "Women", price: "₹799", image: "assets/Women/Tri-colored T-shirt.JPG", tag: "" }
];

/* ------------------------------
   Database shell
   ------------------------------ */
const db = { products: [], stores: [
  {
    id: 'mumbai',
    name: 'Mumbai - Marine Lines',
    address: '14 Fashion Street, Marine Lines, Mumbai, MH',
    phone: '+91 22 1234 5678',
    img: 'https://lh3.googleusercontent.com/p/AF1QipPyvSFb5swKqskUkYw_Kl42DFNxY8C4qDgu2IKu=w260-h175-n-k-no?q=80&w=1200&auto=format&fit=crop'
  },
  { id:'delhi', name:'Delhi - Connaught Place', address:'22 Market Lane, Connaught Place, New Delhi, DL', phone:'+91 11 9876 5432', img:'https://images.unsplash.com/photo-1522092787780-9b0b9068b06b?q=80&w=1200&auto=format&fit=crop' },
  { id:'ahmedabad', name:'Ahmedabad - Ashram Road', address:'8 Ashram Road, Ahmedabad, GJ', phone:'+91 79 3322 4455', img:'https://images.unsplash.com/photo-1604147706286-8e1d5c0bb2a1?q=80&w=1200&auto=format&fit=crop' },
  { id:'bengaluru', name:'Bengaluru - Brigade Road', address:'101 Brigade Road, Bengaluru, KA', phone:'+91 80 5566 7788', img:'https://images.unsplash.com/photo-1520975663864-1d9b1dc4b72b?q=80&w=1200&auto=format&fit=crop' }
] };

/* ------------------------------
   Group / consolidate variant images into single product objects
   ------------------------------ */
(function groupVariants() {
  const map = new Map();

  rawProducts.forEach(p => {
    const rawName = (p.name || '').trim();
    const baseName = rawName.replace(/\bvariant\b/ig, '').replace(/\s{2,}/g,' ').trim();
    const key = `${(p.category||'').toLowerCase()}||${baseName.toLowerCase()}`;

    if (!map.has(key)) {
      map.set(key, {
        name: baseName || rawName,
        category: p.category || 'Uncategorized',
        gender: p.gender || null,
        price: p.price || '',
        tag: p.tag || '',
        description: p.description || '',
        images: p.image ? [p.image] : []
      });
    } else {
      const ex = map.get(key);
      if (p.image && !ex.images.includes(p.image)) ex.images.push(p.image);
      if (!ex.price && p.price) ex.price = p.price;
      if (!ex.tag && p.tag) ex.tag = p.tag;
    }
  });

  db.products = Array.from(map.values()).map((prod, idx) => ({
    id: idx + 1,
    name: prod.name,
    category: prod.category,
    gender: prod.gender,
    price: prod.price,
    tag: prod.tag,
    description: prod.description,
    images: prod.images,
    variantsCount: prod.images.length
  }));
})();

/* ===========================
   Performance helpers
   =========================== */

/* tiny transparent placeholder */
const TRANSPARENT_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

/* IntersectionObserver for lazy loading images */
let imageObserver = null;
function initImageObserver() {
  if (imageObserver) return;
  const options = { root: null, rootMargin: '250px', threshold: 0.01 };
  imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const real = img.dataset.src;
        if (real) {
          img.src = real;
          if (img.dataset.srcset) img.srcset = img.dataset.srcset;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  }, options);
}
function observeImageEl(imgEl) {
  if (!imgEl) return;
  if (!imageObserver) initImageObserver();
  if (imgEl.dataset && imgEl.dataset.src) imageObserver.observe(imgEl);
}

/* small throttle for scroll events */
let _lastScroll = 0;
function throttleNav() {
  const now = Date.now();
  if (now - _lastScroll < 80) return;
  _lastScroll = now;
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.classList.add('shadow-md');
    nav.classList.add('bg-white');
    nav.classList.remove('bg-white/95');
  } else {
    nav.classList.remove('shadow-md');
    nav.classList.remove('bg-white');
    nav.classList.add('bg-white/95');
  }
}
window.addEventListener('scroll', throttleNav, { passive: true });

/* renderPaginationControls(filter, currentPage, totalPages)
   returns HTML for the page bar. Shows a few pages and ellipses when needed.
*/
function renderPaginationControls(filter='all', currentPage=1, totalPages=1) {
  // Controls will use data attributes and CSS utility classes for styling.
  // We'll show up to 7 page buttons (first, some middle, last) with ellipsis if needed.
  const maxButtons = 7;
  const showPages = [];

  if (totalPages <= maxButtons) {
    for (let i=1;i<=totalPages;i++) showPages.push(i);
  } else {
    // always show first and last
    showPages.push(1);
    const side = Math.floor((maxButtons - 3) / 2); // allow center chunk
    let start = Math.max(2, currentPage - side);
    let end = Math.min(totalPages - 1, currentPage + side);

    if (currentPage - 1 <= side) { start = 2; end = 2 + (maxButtons - 3); }
    if (totalPages - currentPage <= side) { end = totalPages - 1; start = end - (maxButtons - 3); }

    for (let i = start; i <= end; i++) showPages.push(i);
    showPages.push(totalPages);
  }

  // Build HTML
  let html = `<nav class="inline-flex items-center gap-2" aria-label="Pagination">`;

  // Prev button
  const prevDisabled = currentPage <= 1;
  html += `<button class="page-btn hoverable px-3 py-2 border rounded ${prevDisabled ? 'opacity-40 cursor-not-allowed' : ''}" data-action="page" data-filter="${filter}" data-page="${Math.max(1, currentPage-1)}" ${prevDisabled ? 'disabled' : ''} aria-label="Previous">Prev</button>`;

  // page buttons (with ellipses)
  let lastAdded = null;
  showPages.forEach(p => {
    if (lastAdded !== null && p - lastAdded > 1) {
      html += `<span class="px-2 text-sm text-gray-500">…</span>`;
    }
    const isActive = p === currentPage;
    html += `<button class="page-btn px-3 py-2 border rounded ${isActive ? 'bg-[#002349] text-white' : 'hoverable'}" data-action="page" data-filter="${filter}" data-page="${p}" ${isActive ? 'aria-current="page"' : ''}>${p}</button>`;
    lastAdded = p;
  });

  // Next button
  const nextDisabled = currentPage >= totalPages;
  html += `<button class="page-btn hoverable px-3 py-2 border rounded ${nextDisabled ? 'opacity-40 cursor-not-allowed' : ''}" data-action="page" data-filter="${filter}" data-page="${Math.min(totalPages, currentPage+1)}" ${nextDisabled ? 'disabled' : ''} aria-label="Next">Next</button>`;

  html += `</nav>`;
  return html;
}


/* requestAnimationFrame throttled cursor */
let pendingCursor = false;
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
let lastMouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
  lastMouse.x = e.clientX;
  lastMouse.y = e.clientY;
  if (!pendingCursor) {
    pendingCursor = true;
    requestAnimationFrame(() => {
      if (cursorDot && typeof gsap !== 'undefined') gsap.to(cursorDot, { x: lastMouse.x, y: lastMouse.y, duration: 0.08, ease: 'power2' });
      if (cursorOutline && typeof gsap !== 'undefined') gsap.to(cursorOutline, { x: lastMouse.x, y: lastMouse.y, duration: 0.28, ease: 'power3' });
      pendingCursor = false;
    });
  }
});
/* Delegated click handler for pagination and some dynamic controls */
document.addEventListener('click', (e) => {
  const pageBtn = e.target.closest('.page-btn');
  if (pageBtn) {
    e.preventDefault();
    // button has data-filter and data-page attributes
    const filter = pageBtn.dataset.filter || 'all';
    const page = parseInt(pageBtn.dataset.page || '1', 10);
    // navigate to the requested page
    router.navigate('catalog', { filter, page });
    return;
  }

  // keep any other delegated handling you already do here (e.g., mobile-menu close)
});

/* ------------------------------
   UI Components (uses lazy images)
   ------------------------------ */

const CATALOG_PAGE_SIZE = 8; // change page size if desired

const Components = {
  hero: () => {
    const heroImg = (db.products[0] && db.products[0].images && db.products[0].images[0]) || 'assets/Men/Abstract Pattern T-shirt.jpg';
    // hero background kept high-quality: lazy load via data-src but for hero we show background <img> as placeholder first.
    return `
      <section class="relative w-full h-[86vh] overflow-hidden bg-gray-900 premium-card" id="hero-section">
        <div class="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/p/AF1QipMjWEeWAKtz6hfelBTcmFkEv050aqE5E70jZbRr=s1360-w1360-h1020-rw?q=80&w=2670&auto=format&fit=crop"
                alt="Hero" class="w-full h-full object-cover hero-bg">
          <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>
        </div>
        <div class="absolute inset-0 flex flex-col justify-center items-start text-white text-left px-6 md:px-20 max-w-6xl mx-auto z-10">
          <span class="text-[#111827] text-xs font-bold tracking-[0.2em] uppercase mb-3 opacity-0 hero-text">The Wedding Collection 2024</span>
          <h1 class="hero-title text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 opacity-0 hero-text">Elegance Reimagined — For The Moment That Matters</h1>
          <p class="hero-text opacity-0 text-gray-200 max-w-xl mb-8 text-sm md:text-base leading-relaxed font-light">Impeccable tailoring, fine fabrics and thoughtful detailing. Designed for the modern gentleman who seeks timeless style.</p>
          <div class="hero-text opacity-0 flex gap-4">
            <button onclick="router.navigate('catalog')" class="hoverable group relative px-8 md:px-10 py-3 bg-white text-[#002349] font-semibold text-xs tracking-[0.12em] uppercase shadow-lg rounded">Explore Collection</button>
            <button onclick="router.navigate('lookbook')" class="hoverable group relative px-8 md:px-10 py-3 border border-white text-white font-semibold text-xs tracking-[0.12em] uppercase rounded">View Lookbook</button>
          </div>
        </div>
        <div class="absolute bottom-8 right-8 text-white/60 hidden lg:block">
          <i data-lucide="chevrons-right" class="w-7 h-7 animate-bounce"></i>
        </div>
      </section>
    `;
  },

  categories: () => {
    return `
      <section class="py-20 bg-[#fcfcfc]">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 scroll-reveal">
            <span class="text-[#c6a87c] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Essentials</span>
            <h3 class="serif text-3xl md:text-4xl text-[#002349]">Shop By Category</h3>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            ${['T-shirts','Shirts','Hoodies','Sweatshirts','Jackets'].map(cat => `
              <div class="scroll-reveal group cursor-pointer hoverable relative overflow-hidden hover-scale" onclick="router.navigate('catalog', { filter: '${cat}', page: 1 })">
                <div class="aspect-[3/4] overflow-hidden mb-5 relative premium-card">
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors duration-500 z-10"></div>
                  <img data-src="${getCategoryImg(cat)}" src="${TRANSPARENT_PLACEHOLDER}" loading="lazy" alt="${cat}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 category-img">
                  <div class="absolute bottom-6 left-0 right-0 text-center z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span class="inline-block px-4 py-2 bg-white/90 text-[#002349] text-xs font-semibold tracking-wide uppercase">Shop Now</span>
                  </div>
                </div>
                <h4 class="text-center text-lg md:text-xl text-gray-900 group-hover:text-[#c6a87c] transition-colors font-medium">${cat}</h4>
              </div>`).join('')}
          </div>
        </div>
      </section>
    `;
  },

  featured: () => {
    return `
      <section class="py-16 bg-white">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row justify-between items-end mb-8 scroll-reveal gap-4">
            <div>
              <h3 class="serif text-2xl md:text-4xl text-[#002349] mb-2">Trending Now</h3>
              <p class="text-gray-500 font-light">Curated picks for the modern gentleman</p>
            </div>
            <button onclick="router.navigate('catalog')" class="hoverable hidden md:flex items-center gap-2 text-[#002349] font-medium text-sm hover:text-[#c6a87c] transition-colors group">
              View All Products <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${db.products.slice(0,4).map(product => Components.productCard(product)).join('')}
          </div>
          <div class="mt-8 text-center md:hidden">
            <button onclick="router.navigate('catalog')" class="hoverable px-8 py-3 border border-[#002349] text-[#002349] text-xs font-semibold uppercase tracking-wide w-full rounded">View All</button>
          </div>
        </div>
      </section>
    `;
  },

  productCard: (product) => {
    const img = (product.images && product.images[0]) ? product.images[0] : '';
    return `
      <div class="group cursor-pointer hoverable scroll-reveal flex flex-col h-full premium-card p-4 hover-scale" onclick="router.navigate('product', ${product.id})">
        <div class="relative overflow-hidden aspect-[3/4] mb-5 bg-gray-100 rounded-lg">
          ${product.tag ? `<span class="absolute top-3 left-3 bg-[#002349] text-white text-[10px] font-semibold px-3 py-1.5 uppercase tracking-wider z-10 rounded">${product.tag}</span>` : ''}
          <img
            data-src="${img}"
            src="${TRANSPARENT_PLACEHOLDER}"
            loading="lazy"
            alt="${product.name}"
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 rounded-lg product-img"
          >
          ${product.variantsCount && product.variantsCount > 1 ? `<span class="absolute top-3 right-3 bg-white/90 text-[#002349] text-[11px] font-semibold px-2 py-1 rounded z-10">${product.variantsCount} images</span>` : ''}
        </div>
        <div class="mt-auto">
          <h3 class="text-base text-gray-900 group-hover:text-[#002349] transition-colors font-semibold leading-snug">${product.name}</h3>
          <div class="flex justify-between items-center mt-3 border-t border-gray-100 pt-3">
            <p class="text-sm text-gray-500 italic">${product.price}</p>
            <span class="text-xs text-[#c6a87c] font-semibold uppercase tracking-wide">View Details</span>
          </div>
        </div>
      </div>
    `;
  },

  productDetail: (id) => {
    const product = db.products.find(p => p.id == id);
    if (!product) return `<div class="pt-32 text-center text-xl serif">Product not found</div>`;

    const images = product.images && product.images.length ? product.images : [product.image || ''];

    return `
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div class="mb-6 fade-in-up">
          <button onclick="router.navigate('catalog')" class="hoverable inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 hover:text-[#002349] uppercase group">
            <i data-lucide="arrow-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"></i> Back to Catalog
          </button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 fade-in-up">
            <div class="md:col-span-2 aspect-[4/5] img-zoom-container cursor-crosshair bg-gray-100 relative overflow-hidden rounded-lg">
              <img data-src="${images[0]}" src="${TRANSPARENT_PLACEHOLDER}" class="w-full h-full object-cover product-img" alt="${product.name}">
            </div>
            ${images.slice(1,3).map(img => `
              <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer img-zoom-container rounded-lg">
                <img data-src="${img}" src="${TRANSPARENT_PLACEHOLDER}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 product-img" alt="Detail">
              </div>`).join('')}
          </div>
          <div class="lg:col-span-5 fade-in-up" style="animation-delay: 0.2s">
            <div class="lg:sticky lg:top-28">
              <span class="text-[#c6a87c] font-semibold tracking-[0.12em] text-xs uppercase mb-4 block">Loyal Greens Premium</span>
              <h1 class="text-3xl md:text-4xl text-[#002349] mb-4 leading-tight">${product.name}</h1>
              <p class="text-2xl text-gray-600 mb-6 font-semibold">${product.price}</p>
              <div class="prose text-gray-600 mb-6 leading-relaxed font-light text-sm md:text-base">
                <p>Variants (if any) are available below as images. Click to view them.</p>
              </div>
              <div class="mb-6">
                <div class="flex justify-between items-center mb-3">
                  <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-900">Available Sizes</h4>
                  <button onclick="router.navigate('sizeGuide')" class="text-xs text-gray-500 underline hover:text-[#002349] hoverable">Size Guide</button>
                </div>
                <div class="flex gap-3 flex-wrap">
                  ${['S','M','L','XL'].map((size,i) => `<button class="hoverable w-12 h-12 border ${i===1 ? 'border-[#002349] bg-[#002349] text-white' : 'border-gray-200 text-gray-700'} flex items-center justify-center rounded text-sm font-medium">${size}</button>`).join('')}
                </div>
              </div>
              <div class="flex gap-4 mb-8">
                <button onclick="enquireProduct('${product.name}')" class="hoverable flex-1 bg-[#002349] text-white py-3 font-semibold text-sm uppercase rounded hover:bg-[#1a3a5f] transition-all shadow-lg">Enquire Now</button>
                <a href="mailto:hello@peterengland.example?subject=Enquiry%20about%20${encodeURIComponent(product.name)}" class="hoverable w-14 flex items-center justify-center border border-gray-200 hover:border-[#c6a87c] text-gray-600 hover:text-[#c6a87c] rounded">
                  <i data-lucide="mail"></i>
                </a>
              </div>
              <div class="border-t border-gray-100 pt-6 space-y-5">
                <div class="flex items-start gap-4">
                  <div class="p-2 bg-gray-50 rounded-full"><i data-lucide="truck" class="w-4 h-4 text-[#002349]"></i></div>
                  <div>
                    <h5 class="text-sm font-semibold text-gray-900">Delivery</h5>
                    <p class="text-xs text-gray-500 mt-1">Free standard shipping on select purchases.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="p-2 bg-gray-50 rounded-full"><i data-lucide="award" class="w-4 h-4 text-[#002349]"></i></div>
                  <div>
                    <h5 class="text-sm font-semibold text-gray-900">Quality Promise</h5>
                    <p class="text-xs text-gray-500 mt-1">Designed and inspected with the highest standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  lookbook: () => {
    return `
      <section class="py-20 bg-[#fafafa]">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="serif text-3xl md:text-4xl text-[#002349]">Lookbook</h2>
            <p class="text-gray-500">A curated selection from our seasonal stories.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img data-src="${(db.products[1] && db.products[1].images[0]) || 'assets/Men/Abstract Pattern T-shirt.jpg'}" src="${TRANSPARENT_PLACEHOLDER}" class="w-full h-72 object-cover rounded-lg premium-card scroll-reveal product-img" alt="LB1">
            <img data-src="${(db.products[5] && db.products[5].images[0]) || 'assets/Men/Baby Pink Polo T-Shirt.jpg'}" src="${TRANSPARENT_PLACEHOLDER}" class="w-full h-72 object-cover rounded-lg premium-card scroll-reveal product-img" alt="LB2">
            <img data-src="${(db.products[15] && db.products[15].images[0]) || 'assets/Men/Bright Blue Shirt.jpg'}" src="${TRANSPARENT_PLACEHOLDER}" class="w-full h-72 object-cover rounded-lg premium-card scroll-reveal product-img" alt="LB3">
          </div>
        </div>
      </section>`;
  },

/* Replace Components.catalog with this function (supports page numbers) */
catalog: (filter='all', page = 1) => {
  const filtered = filter === 'all' ? db.products : db.products.filter(p => p.category && p.category.toLowerCase() === filter.toLowerCase());
  const totalItems = filtered.length;
  const pageSize = CATALOG_PAGE_SIZE || 8;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, parseInt(page || 1, 10)), totalPages);
  const start = (currentPage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  return `
    <div class="pt-10 pb-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 fade-in-up border-b border-gray-100 pb-8">
        <div>
          <p class="text-xs text-gray-400 mb-3 uppercase tracking-widest font-semibold">Home / Catalog / ${filter}</p>
          <h2 class="serif text-3xl md:text-5xl text-[#002349] capitalize">${filter === 'all' ? 'All Products' : filter + ' Collection'}</h2>
        </div>
        <div class="mt-6 md:mt-0 flex gap-6 items-center w-full md:w-auto">
          <span class="text-sm text-gray-500 whitespace-nowrap">${totalItems} Items</span>
          <div class="relative w-full md:w-48">
            <select onchange="router.navigate('catalog', { filter: this.value, page: 1 })" class="hoverable appearance-none bg-transparent border-b border-gray-300 py-2 w-full outline-none text-sm cursor-pointer font-medium text-gray-800 focus:border-[#002349] transition-colors">
              <option value="all" ${filter==='all' ? 'selected' : ''}>All Categories</option>
              <option value="Shirts" ${filter==='Shirts' ? 'selected' : ''}>Shirts</option>
              <option value="T-shirts" ${filter==='T-shirts' ? 'selected' : ''}>T-shirts</option>
              <option value="Hoodies" ${filter==='Hoodies' ? 'selected' : ''}>Hoodies</option>
              <option value="Sweatshirts" ${filter==='Sweatshirts' ? 'selected' : ''}>Sweatshirts</option>
            </select>
            <i data-lucide="chevron-down" class="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"></i>
          </div>
        </div>
      </div>

      ${visible.length === 0 ? `<div class="text-center py-28 bg-gray-50 rounded-lg"><p class="text-gray-500 text-lg serif">No products found in this category.</p><button onclick="router.navigate('catalog')" class="mt-4 text-[#002349] underline hover:text-[#c6a87c]">View all products</button></div>` :
      `<div id="catalog-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
         ${visible.map(p => Components.productCard(p)).join('')}
       </div>

       <div class="mt-12 flex justify-center">
         ${renderPaginationControls(filter, currentPage, totalPages)}
       </div>`
      }
    </div>`;
},


  about: function(){
    const storesHtml = db.stores.map(s => `
      <div class="premium-card overflow-hidden rounded-lg scroll-reveal hover-scale">
        <div class="md:flex">
          <div class="md:flex-shrink-0"><img data-src="${s.img}" src="${TRANSPARENT_PLACEHOLDER}" alt="${s.name}" class="w-full h-44 md:h-full md:w-48 object-cover store-img product-img"></div>
          <div class="p-5 flex-1">
            <h4 class="text-lg font-semibold text-[#002349]">${s.name}</h4>
            <p class="store-address mt-2">${s.address}</p>
            <div class="mt-3 flex items-center gap-4">
              <a href="tel:${s.phone.replace(/\s+/g,'')}" class="text-sm text-[#002349] font-medium hover:underline">${s.phone}</a>
              <a target="_blank" rel="noopener" href="https://www.google.com/maps/search/${encodeURIComponent(s.address)}" class="ml-auto text-sm uppercase px-3 py-2 border border-[#002349] rounded text-[#002349] hover:bg-[#002349] hover:text-white transition-colors">Directions</a>
            </div>
          </div>
        </div>
      </div>`).join('');
    return ` <section class="py-16 bg-white"><div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">${storesHtml}</div></section>`;
  },

  contact: function(){ return `
    <section class="py-16 bg-white">
      <div class="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 class="serif text-3xl text-[#002349] mb-4">Get In Touch</h3>
            <p class="text-gray-600 mb-6">For inquiries, bespoke appointments or wholesale partnerships, reach out to our team.</p>
            <div class="space-y-4 text-sm text-gray-700">
              <div><strong>Email:</strong> <a href="mailto:hello@peterengland.example" class="underline">hello@peterengland.example</a></div>
            </div>
            <div class="mt-8"><button onclick="openMailClient()" class="hoverable px-6 py-3 bg-[#002349] text-white rounded font-semibold">Email Us</button></div>
          </div>
          <div>
            <form onsubmit="event.preventDefault(); formSubmit()" class="space-y-4 bg-[#fafafa] p-6 rounded-lg premium-card">
              <input required type="text" name="name" placeholder="Your name" class="w-full p-3 bg-white rounded border border-gray-200 outline-none">
              <input required type="email" name="email" placeholder="Email" class="w-full p-3 bg-white rounded border border-gray-200 outline-none">
              <input type="text" name="subject" placeholder="Subject" class="w-full p-3 bg-white rounded border border-gray-200 outline-none">
              <textarea name="message" placeholder="Message" rows="4" class="w-full p-3 bg-white rounded border border-gray-200 outline-none"></textarea>
              <div class="flex justify-between items-center">
                <button type="submit" class="px-6 py-3 bg-[#002349] text-white rounded font-semibold">Send Message</button>
                <div class="text-sm text-gray-500">We usually reply within 48 hours.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`; }
};

/* ------------------------------
   Utility functions
   ------------------------------ */
function getCategoryImg(cat) {
  const p = db.products.find(p => p.category && p.category.toLowerCase() === cat.toLowerCase());
  return (p && p.images && p.images[0]) ? p.images[0] : (db.products[0] && db.products[0].images[0]) || 'assets/Men/Abstract Pattern T-shirt.jpg';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) {
    alert(msg);
    return;
  }
  toastMsg.innerText = msg;
  toast.style.display = 'flex';
  toast.classList.add('show');
  setTimeout(()=> { toast.classList.remove('show'); toast.style.display='none'; }, 3000);
}
function enquireProduct(name) { router.navigate('contact'); setTimeout(()=> openMailClient(`Enquiry about ${name}`), 600); }
function openMailClient(subject='') { window.location.href = `mailto:hello@peterengland.example?subject=${encodeURIComponent(subject || 'General Enquiry')}`; }
function formSubmit(){ showToast('Thanks — we received your message. We will reply within 48 hours.'); const form = document.querySelector('form'); if(form) form.reset(); }

function toggleMobileMenu(){
  const menu = document.getElementById('mobile-menu');
  if(!menu) return;
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : 'auto';
}

/* ------------------------------
   Animations init (safe & capped)
   ------------------------------ */
function initAnimations() {
  if (typeof gsap === 'undefined') return;

  try { if (gsap.registerPlugin && typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger); } catch(e){}

  const reveals = gsap.utils.toArray('.scroll-reveal').slice(0, 120);
  reveals.forEach((elem, idx) => {
    if (elem.dataset.animated) return;
    gsap.fromTo(elem, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
      scrollTrigger: (typeof ScrollTrigger !== 'undefined') ? { trigger: elem, start: "top 90%", toggleActions: "play none none none" } : undefined,
      delay: idx * 0.03,
      onComplete() { elem.dataset.animated = '1'; }
    });
  });

  if (document.querySelector('.hero-text')) {
    const tl = gsap.timeline();
    tl.fromTo('.hero-text', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.06 });
    if (typeof ScrollTrigger !== 'undefined') {
      try {
        gsap.to(".hero-bg", { scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: 0.7 }, y: 120, scale: 1.06, ease: "none" });
      } catch(e){}
    }
  }

  gsap.utils.toArray('.hoverable').forEach(el => {
    if (el._hoverBound) return;
    el.addEventListener('mouseenter', ()=> gsap.to(el,{scale:1.02,duration:0.28,ease:"power2.out"}));
    el.addEventListener('mouseleave', ()=> gsap.to(el,{scale:1,duration:0.28,ease:"power2.out"}));
    el._hoverBound = true;
  });
}

/* ------------------------------
   Router (render + navigation)
   - router.navigate(page, param)
   - param can be string (filter) or object {filter, page}
   ------------------------------ */
const router = {
  navigate: (page, param=null) => {
    const menu = document.getElementById('mobile-menu');
    if(menu && menu.classList.contains('open')) toggleMobileMenu();
    // fade out then render
    if (typeof gsap !== 'undefined') {
      gsap.to('#app-container',{ opacity:0, y:-20, duration:0.35, ease:"power2.inOut", onComplete: ()=>{ window.scrollTo(0,0); router.render(page,param); gsap.fromTo('#app-container',{opacity:0,y:30,visibility:'visible'},{opacity:1,y:0,duration:0.6,ease:"power3.out"}); }});
    } else {
      router.render(page,param);
    }
  },
  render: (page,param) => {
    const app = document.getElementById('app-container');
    if (!app) return;
    let content = '';
    switch(page) {
      case 'home':
        content = Components.hero() + Components.categories() + Components.featured() + Components.lookbook() + Components.contact();
        break;
      case 'catalog':
        // param could be string or object
        if (param && typeof param === 'object') {
          const filter = param.filter || 'all';
          const pageNum = parseInt(param.page || 1, 10);
          content = Components.catalog(filter, pageNum);
        } else {
          const filter = param || 'all';
          content = Components.catalog(filter, 1);
        }
        break;
      case 'product':
        content = Components.productDetail(param);
        break;
      case 'about':
        content = Components.about();
        break;
      case 'lookbook':
        content = Components.lookbook();
        break;
      case 'contact':
        content = Components.contact();
        break;
      default:
        content = Components.hero() + Components.categories() + Components.featured();
    }

    app.innerHTML = content;
    if(window.lucide && lucide.createIcons) lucide.createIcons();

    // Observe lazy images injected into the DOM
    document.querySelectorAll('.product-img, .category-img, .store-img').forEach(img => observeImageEl(img));

    // After render, wire load-more, and small handlers
    attachLoadMoreHandler();

    initAnimations();
  }
};

/* ------------------------------
   Load more handler (delegated)
   ------------------------------ */
function attachLoadMoreHandler() {
  // Remove any previous handler to avoid duplicates (we use a single delegated listener)
  // We'll just ensure the button behaves correctly by scanning and adding click listeners to it.
  const btn = document.getElementById('load-more-btn');
  if (!btn) return;
  // prevent double-binding
  if (btn._bound) return;
  btn.addEventListener('click', (e) => {
    const filter = btn.dataset.filter || 'all';
    const nextPage = parseInt(btn.dataset.page || '1', 10) + 1;
    // Re-render catalog with next page
    // Use router.render directly (no animation) to inject the new page content quickly
    router.render('catalog', { filter, page: nextPage });
    // scroll to top of catalog grid (optional)
    const grid = document.getElementById('catalog-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  btn._bound = true;
}

/* ------------------------------
   Global click delegation for certain dynamic interactions
   ------------------------------ */
document.addEventListener('click', (e) => {
  // Close mobile menu on click outside (light)
  // (Preserve other click handlers)
});

/* ------------------------------
   Initial load sequence
   ------------------------------ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const bar = document.querySelector('.loader-bar');
  if (bar) setTimeout(()=> bar.style.width = "100%", 120);
  setTimeout(()=> {
    if (loader && typeof gsap !== 'undefined') {
      gsap.to(loader,{ yPercent:-110, duration:0.9, ease:"power4.inOut", onComplete: ()=> { router.render('home'); const app = document.getElementById('app-container'); if(app) app.classList.add('loaded'); }});
    } else {
      router.render('home');
      const app = document.getElementById('app-container'); if(app) app.classList.add('loaded');
    }
  }, 700);

  // small delay then observe any images already in DOM (hero etc.)
  setTimeout(()=> {
    document.querySelectorAll('.product-img, .category-img, .store-img').forEach(img => observeImageEl(img));
  }, 120);
});

/* ------------------------------
   Initial lucide icons (if any)
   ------------------------------ */
if(window.lucide && lucide.createIcons) lucide.createIcons();
