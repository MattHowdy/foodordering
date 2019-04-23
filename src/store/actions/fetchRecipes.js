import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'






//FetchAllCategories
export const fetchCategoriesStart = () => {
    return {type: actionTypes.FETCH_ALL_CATEGORIES_START}

}
export const fetchCategoriesSuccess = (categories) => {
    return {type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS, categories: categories}
}
export const fetchCategoriesFailed = (error) => {
    return {type: actionTypes.FETCH_ALL_CATEGORIES_FAILED, error: error}
}

export const fetchAllCategories = () => {
    return dispatch => {
        dispatch(fetchCategoriesStart())
        axios.get("/categories")
            .then(response => dispatch(fetchCategoriesSuccess(response.data)))
            .catch(error => dispatch(fetchCategoriesFailed(error)))
    }
}





//FetchRecipesByCategory
export const fetchRecipesByCategoryStart = () => {
    return {type: actionTypes.FETCH_RECEIPT_BY_CATEGORY_START}
}
export const fetchRecipesByCategorySuccess = (recipesByCategory) => {
    return {type: actionTypes.FETCH_RECEIPT_BY_CATEGORY_SUCCESS, recipesByCategory: recipesByCategory,}
}
export const fetchRecipesByCategoryFailed = (error) => {
    return {type: actionTypes.FETCH_RECEIPT_BY_CATEGORY_FAILED, error: error}
}

export const fetchRecipesByCategory = (category) =>{
    return dispatch => {
        dispatch(fetchRecipesByCategoryStart())
        axios.post('/category/' + category)
            .then(response => dispatch(fetchRecipesByCategorySuccess(response.data)))
            .catch(error => dispatch(fetchRecipesByCategoryFailed(error)))
    }
}