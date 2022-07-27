import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import action from "../Redux/Action";
import './UIComp.css'

const UIComp = ()=>{
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.result);
    const [inputDisplay,setInputDisplay] = useState('');
    const [inputNumber,setInputNumber] = useState('0');
    const [equalKey,handleEqual] = useState('');

useEffect(()=>{
    if(!/=|[+/*-]$|^[+/*]/.test(inputDisplay)){
        dispatch(action.sendInput(inputDisplay));
    }

},[equalKey,result,dispatch,inputDisplay,inputNumber]);

if(equalKey==='equal'){
    
    if(inputDisplay===''){
        setInputDisplay(inputNumber+'='+inputNumber+'');
    }else if(/=/.test(inputDisplay)){
        setInputDisplay(inputDisplay);
    }else{
        setInputNumber(result)
        setInputDisplay(inputDisplay+'='+result+'');
    }
    
    handleEqual('newcalc');
}

    const handleKey = (key = '0')=>{
       
        if(key==='clear'){
            setInputDisplay('');
            setInputNumber('0')
            dispatch(action.sendInput('0'));
            dispatch(action.sendResult('0'));
            return;
//calculator key enter rules/////////////////////////////////////////////////////////////////////
        }else if(inputNumber==='0' && inputDisplay==='0' && /[-\d]/.test(key)){
            setInputDisplay(key);
            setInputNumber(key);
        }else if('newcalc'===equalKey && /\d/.test(key)){
            setInputDisplay(key);
            setInputNumber(key);
            handleEqual('');
        }else if('newcalc'===equalKey && /[+/*-]/.test(key)){
            setInputDisplay(result+key);
            setInputNumber(key);
            handleEqual('');
        }else if('newcalc'===equalKey && /\./.test(key)){
            setInputDisplay(result+'.0');
            setInputNumber(result+'.0');
            handleEqual('');
        }else if(/\./.test(inputNumber) && /\./.test(key)){
            setInputNumber(inputNumber);
        }else if(/[+/*]-/.test(inputDisplay) && /[+/*]/.test(key)){
            setInputDisplay(inputDisplay.slice(-inputDisplay.length,-2)+key)
            setInputNumber(key);
        }else if(/[+/*]/.test(inputNumber) && /[+/*]/.test(key)){
            setInputDisplay(inputDisplay.slice(-inputDisplay.length,-1)+key)
            setInputNumber(key);
        }else if(/[+/*]/.test(inputNumber) && /-/.test(key)){
            setInputDisplay(inputDisplay+key);
            setInputNumber(key);
        }else if(/(\.0)$/.test(inputNumber) && /\d/.test(key)){
            setInputDisplay(inputDisplay.slice(-inputDisplay.length,-1)+key)
            setInputNumber(inputNumber.slice(-inputNumber.length,-1)+key)
        }else if(/\d/.test(inputNumber) && /\./.test(key)){
            setInputDisplay(inputDisplay+'.0');
            setInputNumber(inputNumber+'.0');
        }else if(/\d$/.test(inputNumber) && /[+/*-]/.test(key)){
            setInputDisplay(inputDisplay+key);
            setInputNumber(key);
        }else if(/^0$/.test(inputNumber) && /\d/.test(key)){
            setInputDisplay(inputDisplay.slice(-inputDisplay.length,-1)+key)
            setInputNumber(key);
        }else if(/^0$/.test(inputNumber) && /[+/*]/.test(key)){
            // setInputDisplay(inputDisplay.slice(-inputDisplay.length,-1)+key)
            setInputNumber(key);
        }else if(/[+/*-]/.test(inputNumber) && /\d/.test(key)){
            setInputDisplay(inputDisplay+key);
            setInputNumber(key);
        }else if(/\d?/.test(inputNumber) && /\d/.test(key)){
            setInputDisplay(inputDisplay+key);
            setInputNumber(inputNumber+key);
        }else if(/[+/*-]/.test(inputNumber) && /\./.test(key)){
            setInputNumber('0.0');
            setInputDisplay(inputDisplay+'0.0');
        }
///////////////////////////////////////////////////////////////////////////////////////////////////
    }
    return(
        <div id='container'>
            <header><u>Calc</u></header>
            <div id='box'>
            {/*display*/}
                <div id='input'>{inputDisplay}</div> 
                <div id='display'>{inputNumber}</div>   
                {/*keyboard*/}
                <div id='keyboard'>
                    <button id="one" onClick={()=>handleKey('1')} value='1'>1</button>
                    <button id="two" onClick={()=>handleKey('2')} value='2'>2</button>
                    <button id="three" onClick={()=>handleKey('3')} value='3'>3</button>
                    <button id="four" onClick={()=>handleKey('4')} value='4'>4</button>
                    <button id="five" onClick={()=>handleKey('5')} value='5'>5</button>
                    <button id="six" onClick={()=>handleKey('6')} value='6'>6</button>
                    <button id="seven" onClick={()=>handleKey('7')} value='7'>7</button>
                    <button id="eight" onClick={()=>handleKey('8')} value='8'>8</button>
                    <button id="nine" onClick={()=>handleKey('9')} value='9'>9</button>
                    <button id="zero" onClick={()=>handleKey('0')} value='0'>0</button>
                    <button id="add" onClick={()=>handleKey('+')} value="+">+</button>
                    <button id="subtract" onClick={()=>handleKey('-')} value="‑">-</button>
                    <button id="multiply" onClick={()=>handleKey('*')} value="x">*</button>
                    <button id="divide" onClick={()=>handleKey('/')} value="/">/</button>
                    <button id="decimal" onClick={()=>handleKey('.')} value=".">.</button>
                    <button id="equals" onClick={()=>handleEqual('equal')} value="=">=</button>
                    <button id="clear" onClick={()=>handleKey('clear')} value="AC">AC</button>
                </div>
            </div>
            <footer><a rel='noreferrer' href='https://www.freecodecamp.org/fcce3ec214d-b0f9-4ddc-b526-34aea3d1e4a3' target='_blank'>by Adrian Burgos</a></footer>
        </div>
    )
}

export default UIComp;