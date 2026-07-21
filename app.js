/**
 * app.js — Entry point. Initialises all modules in order.
 */

function boot() {
  // 1. Canvas renderer
  initRenderer();

  // 2. Left sidebar nav
  initSidebar();

  // 3. Zoom + bg controls
  initZoom();

  // 4. Download button
  initDownload();

  // 5. Randomize / reset
  initRandomize();

  // 6. Build default shop panel (hair)
  buildShop('hair');

  // 7. First render
  renderAvatar();

  // 8. Welcome message
  setTimeout(() => showToast('Welcome to Avatar Studio!', '👾', 2800), 500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
