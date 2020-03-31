
const postReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_POST':
            console.log('create success')
            return state;
        case 'CREATE_ERROR':
            console.log('create error')
            return state;
        default:
            return state;
    }
}

export default postReducer