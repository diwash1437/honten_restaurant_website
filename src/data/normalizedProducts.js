// normalizedProducts.js
import { toRomaji } from 'wanakana';
import { foodProducts } from './nabatacoltd';

const normalizedProducts = foodProducts.map((product, index) => ({
  id: `foodProduct-${index + 1}`,
  name: product.name,
//   product.romanji && product.romanji.trim() !== ""
//   condition ? A : B
//   IF condition is true → use A
// ELSE → use B
  romanji:
    product.romanji && product.romanji.trim() !== ""
      ? product.romanji
      : toRomaji(product.name),
  price: product.price ?? 0,
  image: product.Image || ""
}));

export default normalizedProducts;
