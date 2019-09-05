import { ACTIONS } from '../Constants/ACTIONS'

const initState = {
    breadcrumbData: {
        parent: 'Dashboard',
        child: null
    }
};

const {UPDATE_BREADCRUMB} = ACTIONS;

const updateBreadcrumb = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_BREADCRUMB:
        return {
            ...state,
            breadcrumbData: {...state.breadcrumbData, ...action.payload}
        }
        default: return {...state}
    }
}


export default updateBreadcrumb