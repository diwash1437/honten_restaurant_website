import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";


const kuroshiro = new Kuroshiro();

let initialized = false;

export async function toRomajiFull(text) {
  if (!initialized) {
    await kuroshiro.init(new KuromojiAnalyzer());
    initialized = true;
  }

  return await kuroshiro.convert(text, {
    to: "romaji",
    romajiSystem: "hepburn"
  });
}
