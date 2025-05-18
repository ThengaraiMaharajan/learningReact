import GrandChild from "./GrandChild";

function Child({products, tagName}){

    // const {products, tagName} = props;
    console.log(products);
    console.log(tagName);

    return (
        <div>
            <h3>Products</h3>
            <div className="card">
                <div className="card-title">
                    {products.name}
                </div>
                <div className="card-container">
                    {products.description}
                </div>
            </div>
            <GrandChild products={products}/>
        </div>
    )
}

export default Child;