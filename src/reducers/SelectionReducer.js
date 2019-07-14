
//export default (state = null, action) => {
const SelectionReducer = (state = null, action) => {
    
    //console.log(action);
    //return null;
    
   switch (action.type) {
       case 'select_library':
           //console.log('action.payload: ', action.payload)
           return action.payload;              
       default:
           return state;
           
   }

}

export default SelectionReducer;