/**
 * sidebar.js — Wires the icon nav buttons to the shop panel.
 */

function initSidebar() {
  const btns = document.querySelectorAll('.nav-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildShop(btn.dataset.cat);
    });
  });
}
