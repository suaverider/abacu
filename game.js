// BURROW - Underground Adventure Game
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const W = 960, H = 640;
canvas.width = W; canvas.height = H;
const GROUND_Y = 180, TILE = 16;
let game = null, keys = {}, animFrame = 0;
window.addEventListener('keydown', e => { keys[e.key.toLowerCase()] = true; keys[e.code] = true; });
window.addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; keys[e.code] = false; });

function seededRandom(seed) {
    let s = seed % 2147483647; if (s <= 0) s += 2147483646;
    return function() { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; };
}
function noise2D(x, y, seed) {
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    const sx = fx*fx*(3-2*fx), sy = fy*fy*(3-2*fy);
    function h(a,b) { return seededRandom(a*7919+b*1013+seed)(); }
    return (h(ix,iy)*(1-sx)+h(ix+1,iy)*sx)*(1-sy)+(h(ix,iy+1)*(1-sx)+h(ix+1,iy+1)*sx)*sy;
}
function noise1D(x, seed) { return noise2D(x, 0, seed); }
function rgb(r,g,b) { return `rgb(${r|0},${g|0},${b|0})`; }
function rgba(r,g,b,a) { return `rgba(${r|0},${g|0},${b|0},${a})`; }
