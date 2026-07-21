/**
 * state.js — Single source of truth for avatar configuration.
 */
const State = {
  skin:         '#F0C27F',
  hairStyle:    1,
  hairColor:    '#1C1008',
  eyeStyle:     0,
  eyeColor:     '#2E86AB',
  glassesStyle: 0,
  beardStyle:   0,
  beardColor:   '#1C1008',
  clothesStyle: 0,
  clothesColor: '#1565C0',
  bgColor:      '#0F1220',
};

/** Merge changes into State and trigger a re-render + UI refresh. */
function setState(patch) {
  Object.assign(State, patch);
  if (typeof renderAvatar === 'function') renderAvatar();
  if (typeof onStateChange === 'function') onStateChange(patch);
}
