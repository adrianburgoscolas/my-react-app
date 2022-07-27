const sendResult = (textObj)=>{
    return {
        type:'RESULT',
        payload:textObj
    }
}

export default sendResult;