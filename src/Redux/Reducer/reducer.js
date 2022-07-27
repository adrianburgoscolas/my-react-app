const inicialState = {
    input:'',
    result:'0'
};

const reducer = (state = inicialState,action)=>{
    switch(action.type){
        case 'INPUT':
            return {...state,input:action.payload};
        case 'RESULT':
            return {...state,result:action.payload};
        default:
            return state;
    }
}

export default reducer;