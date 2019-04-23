import * as actionTypes from '../actions/actionTypes'


const initialState = {
    categories: [],
    recipesByCategory: [],
    loading: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_CATEGORIES_START:
            return {...state, loading: true}
        case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS:
            return {...state, categories: action.categories, loading: false}
        case actionTypes.FETCH_ALL_CATEGORIES_FAILED:
            return {...state, loading: false}
        case actionTypes.FETCH_RECEIPT_BY_CATEGORY_START:
            return {...state, loading: true}
        case actionTypes.FETCH_RECEIPT_BY_CATEGORY_SUCCESS:
            return {...state, recipesByCategory: action.recipesByCategory, loading: false}
        case actionTypes.FETCH_RECEIPT_BY_CATEGORY_FAILED:
            return {...state, loading: false}
        default:
            return state
    }
}


export default reducer

