import { SET_LOADING, SET_FOODS, HANDLE_SEARCH } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_FOODS:
      return { ...state, isLoading: false, meals: action.payload.meals };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};

export default reducer;
