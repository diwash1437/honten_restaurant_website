import { useState } from 'react';
import normalizedProducts from '../data/normalizedProducts';
import { Link } from 'react-router-dom';

function NabataColtd153() {
  const [search, setSearch] = useState("");

  const filteredProducts = normalizedProducts.filter(product =>
    product.name.includes(search) ||
    product.romanji.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <title>Nabata Co ltd (株)名畑</title>

      <Link to="/">Home</Link>

      <br /><br />

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search name or romaji..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name (JP)</th>
            <th>Romaji</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.romanji}</td>
              <td>{product.image ? "Image" : "No Image"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NabataColtd153;
