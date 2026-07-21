/**
 * toast.js — Simple toast notification system.
 */

let _toastTimer = null;

function showToast(msg, icon = '✅', dur = 2600) {
  const el   = document.getElementById('toast');
  const msg_ = document.getElementById('toastMsg');
  const ico  = document.getElementById('toastIcon');
  if (!el) return;

  msg_.textContent = msg;
  ico.textContent  = icon;
  el.classList.remove('show');
  clearTimeout(_toastTimer);
  void el.offsetWidth; // force reflow
  el.classList.add('show');
  _toastTimer = setTimeout(() => el.classList.remove('show'), dur);
}
