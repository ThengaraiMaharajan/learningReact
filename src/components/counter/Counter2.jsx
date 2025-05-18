import { useState } from 'react';

function Counter2() {

    let [counter, setCount] = useState(0);
    let [data, setData] = useState("Loading") ;

    let message = '';
    let remainingClick = 10 - counter;

    if(counter<10){
        message = (
            <div>
                <p>click {remainingClick} times to see message</p>
            </div>
        )
    }else if(counter===10){
        message = (
            <div>
                <p>congrats you clicked {counter} times</p>
            </div>
        )
    }else{
        message = (
            <div>
                <p>You Clicked too many times</p>
            </div>
        )
    }

    let displayComp = () =>{
        switch(data){
            case "Loading" :
                return <Loading/>
            case "Error" :
                return <Error/>
            case "Success" :
                return <Success/>
        }
    }

    function increase() {
        console.log(counter++);
        setCount((prevCount) => prevCount + 1);
    }

    function change1() {
        setData((prevData) => "Error");
    }
    function change2(){
        setData((prevData) => "Success");
    }

    return (
        <div>
            <h1>
                click to unlock rewards
            </h1>
            <p>
                count : {counter}   
            </p>
            <div>message var : {message}</div>
            <button className="btn btn-sm btn-primary" onClick={increase}>
                Plus
            </button>
            { 
            counter > 10 ? 
                        (<p>unlocked 10% discount</p>)
                        :
                        (<p>click 10 times to unlock discount</p>)
            }
            { 
            counter > 20 && <p>click master</p>
            }
            <div>
                {displayComp()}
            </div>
            <button className="btn btn-sm btn-primary" onClick={change1} >Change 1</button>
            <button className="btn btn-sm btn-primary" onClick={change2} >Change 2</button>
        </div>
    )
}

export default Counter2;


function Loading(){
    return (
        <div>
            <h6>
                loading......
            </h6>
        </div>
    )
}

function Success(){
    return (
        <div>
            <h6>
                Success ❤️
            </h6>
        </div>
    )
}

function Error(){
    return (
        <div>
            <h6>
                Error 😭
            </h6>
        </div>
    )
}