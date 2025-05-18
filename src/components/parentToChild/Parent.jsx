import { useState } from "react";
import Child from "./Child";

function Parent(){


    let [product, setProduct] = useState(
        {
            name : "IPhone", 
            price : 10000, 
            description : "8Gb Ram, 128 Gb Storage"
        }
    );
    

    return(
        <div>
            <h1>
                Shop
            </h1>
            <div>
                <Child products={product} tagName={"Tag Name"}/>
            </div>
        </div>
    )
}

export default Parent;