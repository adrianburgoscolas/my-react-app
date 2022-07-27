const calculator = (inputData)=>{
    let op = inputData.split(/(\d\.?\d?)/)
    let a = eval(op.join(''));
    return a;
}

export default calculator;