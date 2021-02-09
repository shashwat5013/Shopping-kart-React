export const initialState = {
    basket: [],
    sum: 0
}

const reducer = (state, action) => {
    //  console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                sum: state.sum + action.item.price
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBakset = [...state.basket]
            let newSum = state.sum
            if (index >= 0) {
                newSum = newSum - newBakset[index].price
                newBakset.splice(index, 1)
            }
            else {
                console.warn(`item with id ${action.id} not available`)
            }
            return {
                ...state,
                basket: newBakset,
                sum: newSum
            }

        default:
            return state;
    }
};
export default reducer;