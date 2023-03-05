import './styles.css'
import { useState } from 'react';

const Calculator = () => {

    const[input, setInput]=useState("");
    const[suminput, setSumInput]=useState("");

    const handleAnswer=()=>{
        try{
            setInput(eval(input));
            setSumInput(input);
        }
        catch(error){
            setInput(error) ;
        }
   };
    
   const handleReset=()=>{
      setInput("");
      setSumInput("")
   }

    return(
        <div className="CalcMainDiv">
            <input type="text" className="calculator-result" value={(suminput) ? suminput: "0"} />
            <input type="text" className="calculator-screen" value={(input) ? input: "0"}/>

            <div className="calculator-keys">

            <button type="button" className="all-clear" value="all-clear" onClick={handleReset}>AC</button>
            <button type="button" className="operator" value="/" onClick={(e)=>setInput(input.concat(e.target.value))}>/</button>
            <button type="button" className="operator" value="*" onClick={(e)=>setInput(input.concat(e.target.value))}>&times;</button>

            <button type="button" value="7" onClick={(e)=>setInput(input.concat(e.target.value))}>7</button>
            <button type="button" value="8" onClick={(e)=>setInput(input.concat(e.target.value))}>8</button>
            <button type="button" value="9" onClick={(e)=>setInput(input.concat(e.target.value))}>9</button>
            <button type="button" className="operator" value="-" onClick={(e)=>setInput(input.concat(e.target.value))}>-</button>


            <button type="button" value="4" onClick={(e)=>setInput(input.concat(e.target.value))}>4</button>
            <button type="button" value="5" onClick={(e)=>setInput(input.concat(e.target.value))}>5</button>
            <button type="button" value="6" onClick={(e)=>setInput(input.concat(e.target.value))}>6</button>
            <button type="button" className="operator" onClick={(e)=>setInput(input.concat(e.target.value))} value="+">+</button>


            <button type="button" value="1" onClick={(e)=>setInput(input.concat(e.target.value))}>1</button>
            <button type="button" value="2" onClick={(e)=>setInput(input.concat(e.target.value))}>2</button>
            <button type="button" value="3" onClick={(e)=>setInput(input.concat(e.target.value))}>3</button>
            <button type="button" className="equal-sign" value="=" onClick={handleAnswer}>=</button>


            <button type="button" className='zero' value="0" onClick={(e)=>setInput(input.concat(e.target.value))}>0</button>
            <button type="button" className="decimal" value="." onClick={(e)=>setInput(input.concat(e.target.value))}>.</button>
    
            </div>
        </div>
    );
}


export default Calculator;