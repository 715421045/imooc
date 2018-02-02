// reducer
const ADD_GUN = '加机关枪';
const MINUS_GUN = '减机关枪';
export function  counter( state = 0, action) {
    switch(action.type) {
        case ADD_GUN:
            return state + 1;
        case MINUS_GUN:
            return state - 1;
        default:
            return 10; 
    }
};
//action
export function addGun() {
    return {type: ADD_GUN};
};
export function minusGun() {
    return {type: MINUS_GUN};
};
export function asyncGun() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun());
        }, 2000)
    }
}