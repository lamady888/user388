/* ── VARIANT SELECTION ── */
function selectVariant(btn, variant, price) {
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('buy-price').textContent = price;
}

/* ── ADD TO CART ── */
function addToCart() {
  const activeBtn = document.querySelector('.variant-btn.active');
  const variant = activeBtn ? activeBtn.textContent.trim().split('—')[0].trim() : '3 pack';
  const msg = document.getElementById('cart-toast-msg');
  if (msg) msg.textContent = variant + ' added to cart!';
  const toast = document.getElementById('cart-toast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── NAV SCROLL SHADOW ── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(13,42,69,0.08)' : '';
}, { passive: true });

/* ── SKIN TONE SWATCHES (build from CSS background) ── */
document.querySelectorAll('.tone-swatch').forEach(el => {
  const pseudo = document.createElement('div');
  pseudo.style.cssText = 'width:44px;height:44px;border-radius:50%;background:' +
    el.style.background + ';box-shadow:0 2px 8px rgba(0,0,0,0.15);border:2px solid rgba(255,255,255,0.8);margin:0 auto 8px;';
  const span = el.querySelector('span');
  if (span) el.insertBefore(pseudo, span);
  el.style.background = 'none';
});
