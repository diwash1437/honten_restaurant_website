import { foodProducts } from '../data/nabatacoltd.js';
import { Link } from 'react-router-dom';

function NabataColtd153() {
  return (
    <>
      <title>Nabata Co ltd (株)名畑</title>

      <Link to="/">Home</Link>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Romanji</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {foodProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.romanji || "-"}</td>
              <td>
                {product.Image ? (
                  <img
                    src={product.Image}
                    alt={product.name}
                    width="80"
                  />
                ) : (
                  "No Image"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NabataColtd153;
