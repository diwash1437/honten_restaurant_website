import ProductCard from './ProductCard';
function ProductList()
{
    const products=[
        
        {id:1, name:"diwash", powerlevel:'Extreme'},
        {id:2, name:"sese", powerlevel:'hard'},
        {id:3, name:"prasanna", powerlevel:'little hard'},
    ];
    return(
        <div>
            {products.map((product)=>{
                return(
                <ProductCard 
                key={product.id}
                product={product}
                />
                )
            })}
        </div>
    )
}

export default ProductList;

