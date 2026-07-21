/**
 * download.js — Exports avatar as high-res PNG.
 */

const EXPORT_PX = 512;

function downloadAvatar() {
  const src = document.getElementById('avatarCanvas');
  const { canvas: ex, ctx: ectx } = makeCtx(EXPORT_PX, EXPORT_PX);
  ectx.imageSmoothingEnabled = false;
  ectx.drawImage(src, 0, 0, 32, 32, 0, 0, EXPORT_PX, EXPORT_PX);

  ex.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a   = Object.assign(document.createElement('a'), { href: url, download: `avatar-${Date.now()}.png` });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    const frame = document.querySelector('.avatar-frame');
    if (frame) {
      frame.classList.remove('flash');
      void frame.offsetWidth;
      frame.classList.add('flash');
      setTimeout(() => frame.classList.remove('flash'), 750);
    }
    showToast('Avatar saved — 512 × 512 PNG', '⬇', 2800);
  }, 'image/png');
}

function initDownload() {
  document.getElementById('btnDownload').addEventListener('click', downloadAvatar);
}
