

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DGhvY_BG.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.aKaDqPNn.js"];
export const stylesheets = ["_app/immutable/assets/0.UlLwCWmA.css"];
export const fonts = [];