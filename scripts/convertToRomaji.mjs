import fs from "fs";
import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import { foodProducts } from "../src/data/nabatacoltd.js";

const kuroshiro = new Kuroshiro();
await kuroshiro.init(new KuromojiAnalyzer());

const result = await Promise.all(
  foodProducts.map(async (p, i) => ({
    id: `foodProduct-${i + 1}`,
    name: p.name,
    romanji:
      p.romanji && p.romanji.trim() !== ""
        ? p.romanji
        : await kuroshiro.convert(p.name, { to: "romaji" }),
    price: p.price ?? 0,
    image: p.Image || ""
  }))
);

fs.writeFileSync(
  "./src/data/normalizedProducts.json",
  JSON.stringify(result, null, 2),
  "utf-8"
);

console.log("✅ Romaji conversion finished");
