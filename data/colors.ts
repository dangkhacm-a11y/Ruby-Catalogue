export interface RubyColor {
  code: string;
  name: string;
  color: string;
  category: string;
  size: string;
  surface: string;
  image: string;
  downloadImage: string;
  visuals: {
    kitchen?: string;
    bedroom?: string;
    livingRoom?: string;
    bathroom?: string;
  };
}

const sourceSamples = [
  ["RB-01", "White", "Solid", "RB-01 màu đơn sắc.jpg"],
  ["RB-02", "Jet Black", "Solid", "RB-02 màu đơn sắc.jpg"],
  ["RB-03", "Silver Gray", "Solid", "RB-03 màu đơn sắc.jpg"],
  ["RB-037", "Champagne", "Metallic", "RB-037 Nhũ.png"],
  ["RB-060", "Smoky Blue", "Metallic", "RB-060 Nhũ.png"],
  ["RB-061", "Beige Gray", "Solid", "RB-061 màu đơn sắc.png"],
  ["RB-062", "Dark Walnut", "Wood", "RB-062 Vân Gỗ.png"],
  ["RB-063", "Slate Blue", "Solid", "RB-063 màu đơn sắc.png"],
  ["RB-080", "Neutral Gray", "Solid", "RB-080 màu đơn sắc.png"],
  ["RB-081", "Bright Silver", "Metallic", "RB-081 màu nhũ.png"],
  ["RB-092", "Antique", "Metallic", "RB-092 màu nhũ.png"],
  ["RB-10", "Cool White", "Solid", "RB-10 Màu đơn sắc.jpg"],
  ["RB-106", "Saddle Brown", "Solid", "RB-106 màu đơn bóng.png"],
  ["RB-11", "Pearl White", "Solid", "RB-11 màu đơn sắc.jpg"],
  ["RB-12", "Ivory White", "Solid", "RB-12 màu đơn sắc.png"],
  ["RB-13", "Greige", "Solid", "RB-13 màu đơn sắc.jpg"],
  ["RB-148", "Light Gray", "Solid", "RB-148 màu đơn sắc.png"],
  ["RB-15", "Cream Yellow", "Solid", "RB-15 màu đơn sắc.jpg"],
  ["RB-152", "Taupe Gray", "Solid", "RB-152 màu đơn sắc.jpg"],
  ["RB-16", "Charcoal Gray", "Solid", "RB-16 màu đơn sắc.jpg"],
  ["RB-17", "Gray Brown", "Solid", "RB-17 màu đơn sắc.png"],
  ["RB-18", "Warm Gray", "Solid", "RB-18 màu đơn sắc.png"],
  ["RB-20", "Gray Beige", "Solid", "RB-20 màu đơn sắc.jpg"],
  ["RB-28", "Brown Oak", "Wood", "RB-28 vân gỗ.jpg"],
  ["RB-300", "Light Brown", "Solid", "RB-300 màu đơn sắc.png"],
  ["RB-304", "Walnut Wood", "Wood", "RB-304 vân gỗ.png"],
  ["RB-32", "Deep Gray", "Solid", "RB-32 màu đơn sắc.png"],
  ["RB-34", "Silver Gray", "Metallic", "RB-34Nhũ.png"],
  ["RB-40", "Pale Gray", "Solid", "RB-40 màu đơn sắc.jpg"],
  ["RB-44", "Brown Beige", "Solid", "RB-44 màu đơn sắc.png"],
  ["RB-45", "Deep Black", "Solid", "RB-45 màu đơn sắc.png"],
  ["RB-50", "Dark Taupe", "Solid", "RB-50 màu đơn sắc.png"],
  ["RB-51", "Snow White", "Solid", "RB-51 màu đơn sắc.jpg"],
  ["RB-52", "Charcoal Gray", "Solid", "RB-52 màu đơn sắc.jpg"],
  ["RB-54", "Moss Green", "Solid", "RB-54 màu đơn sắc.jpg"],
  ["RB-64", "Smoky Brown", "Wood", "RB-64 vân gỗ.png"],
  ["RB-71", "Light Oak", "Wood", "RB-71 vân gỗ.png"],
  ["RB-900", "Blue Gray", "Solid", "RB-900 màu đơn sắc.png"],
  ["RB-97", "Dark Walnut", "Wood", "RB-97 vân gỗ.png"],
  ["V-005", "Mirror Gold", "Mirror", "V-005 màu gương .png"],
] as const;

export const rubyColors: RubyColor[] = sourceSamples.map(([code, name, category, filename]) => {
  const image = `/colors/${filename.split("/").map(encodeURIComponent).join("/")}`;
  return {
    code,
    name,
    color: name,
    category,
    surface: category,
    size: "",
    image,
    downloadImage: image,
    visuals: {
      kitchen: `/visual/kitchen/${code}.jpg`,
    },
  };
});

export const categories = ["All", ...Array.from(new Set(rubyColors.map((item) => item.category)))];

export function findRubyColor(code?: string | null) {
  return rubyColors.find((item) => item.code.toLowerCase() === code?.toLowerCase()) ?? rubyColors[0];
}

export function downloadName(color: RubyColor, kind: "color" | "kitchen-preview") {
  const label = color.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
  return kind === "color"
    ? `RUBY-${color.code}-${label}.${color.image.toLowerCase().split("?")[0].split(".").pop() ?? "png"}`
    : `RUBY-${color.code}-KITCHEN-PREVIEW.jpg`;
}

