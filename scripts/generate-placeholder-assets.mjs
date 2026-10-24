import { mkdirSync, writeFileSync } from "node:fs";

const colors = [
  ["R001", "Ivory Silk", "#e9e0d1", "#c8bca8"],
  ["R002", "Ash Linen", "#c9c2b6", "#9f988d"],
  ["R003", "Warm Beige", "#d8c4a9", "#b49472"],
  ["R004", "Walnut Vein", "#6f4e37", "#2f241b"],
  ["R005", "Smoked Oak", "#4d4036", "#211b17"],
  ["R006", "Travertine Mist", "#c8bda9", "#988b75"],
  ["R007", "Graphite Slate", "#393a37", "#191a18"],
  ["R008", "Brushed Champagne", "#b9a27f", "#826b4c"],
  ["R009", "Pearl Clay", "#d2c8bb", "#a39889"],
  ["R010", "Silver Elm", "#a9aaa4", "#70736d"],
  ["R011", "Marble Cloud", "#e2dfd8", "#b8b7b2"],
  ["R012", "Bronze Dust", "#8b7059", "#4d382c"]
];

mkdirSync("public/colors", { recursive: true });
mkdirSync("public/visual/kitchen", { recursive: true });

for (const [code, name, base, vein] of colors) {
  const material = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${base}"/>
      <stop offset="1" stop-color="${vein}"/>
    </linearGradient>
    <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency=".012 .08" numOctaves="4" seed="${code.slice(1)}"/><feColorMatrix type="saturate" values=".28"/><feBlend mode="multiply" in2="SourceGraphic"/></filter>
  </defs>
  <rect width="1200" height="1500" fill="url(#g)"/>
  <path d="M-40 220 C260 120 430 360 760 220 S1120 120 1250 260" fill="none" stroke="${vein}" stroke-opacity=".28" stroke-width="34"/>
  <path d="M-80 780 C240 620 520 940 860 760 S1120 660 1280 820" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="22"/>
  <path d="M-80 1180 C210 1040 470 1310 790 1150 S1080 1040 1290 1210" fill="none" stroke="#1f1c18" stroke-opacity=".1" stroke-width="18"/>
  <rect width="1200" height="1500" filter="url(#noise)" opacity=".18"/>
  <text x="70" y="1350" fill="#1f1c18" fill-opacity=".55" font-family="Arial" font-size="42" letter-spacing="10">${code}</text>
  <text x="70" y="1408" fill="#1f1c18" fill-opacity=".45" font-family="Arial" font-size="24" letter-spacing="6">${name.toUpperCase()}</text>
</svg>`;

  const visual = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="wall" x1="0" x2="1"><stop offset="0" stop-color="#f5f0e7"/><stop offset="1" stop-color="#e5ded3"/></linearGradient>
    <linearGradient id="mat" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="${base}"/><stop offset="1" stop-color="${vein}"/></linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="#efe8dc"/>
  <rect x="0" y="0" width="1600" height="590" fill="url(#wall)"/>
  <polygon points="0,590 1600,590 1600,1000 0,1000" fill="#d2c6b6"/>
  <rect x="160" y="160" width="1280" height="520" fill="url(#mat)"/>
  <rect x="160" y="160" width="1280" height="520" fill="none" stroke="#fffaf0" stroke-opacity=".7" stroke-width="10"/>
  <rect x="240" y="240" width="350" height="360" fill="#fffaf0" fill-opacity=".16"/>
  <rect x="660" y="245" width="700" height="58" fill="#1f1c18" fill-opacity=".12"/>
  <rect x="660" y="345" width="520" height="58" fill="#1f1c18" fill-opacity=".1"/>
  <rect x="220" y="720" width="1160" height="72" fill="#1f1c18" fill-opacity=".18"/>
  <rect x="310" y="620" width="980" height="140" fill="#fffaf0" fill-opacity=".82"/>
  <circle cx="1240" cy="265" r="70" fill="#fffaf0" fill-opacity=".25"/>
  <text x="104" y="108" fill="#1f1c18" font-family="Arial" font-size="34" letter-spacing="9">${code}</text>
  <text x="104" y="154" fill="#1f1c18" fill-opacity=".58" font-family="Arial" font-size="20" letter-spacing="6">KITCHEN PREVIEW PLACEHOLDER</text>
</svg>`;

  writeFileSync(`public/colors/${code}.svg`, material);
  writeFileSync(`public/visual/kitchen/${code}.svg`, visual);
}

writeFileSync(
  "public/favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#1f1c18"/><text x="32" y="41" text-anchor="middle" fill="#fffaf0" font-family="Georgia" font-size="24" font-weight="700">R</text></svg>`
);
