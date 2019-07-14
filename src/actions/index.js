

//action creator
export const selectLibrary = (librayId) =>  {

    console.log('librayId :', librayId);

    //action
    return {
        type:'select_library',
        payload: librayId
    };       
};


//I might have many action creators
/*
export const selectLibrary = (librayId) => {
    return {
        type:'select_library',
        payload: librayId
    }
};
*/