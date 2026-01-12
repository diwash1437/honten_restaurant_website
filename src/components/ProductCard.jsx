import { useState } from "react";

function ProductCard({product})
{

    const [quantity, setQuantity]=useState(0);

    function quantityUp()
    {
        setQuantity(quantity+1);
    }
    return(
        <div className="card">
            <h3>{product.name}</h3>
            <p>Price : {product.price}</p>

            <button onClick={quantityUp}>Add</button>
        </div>
    )
}

export default ProductCard;