import { ACTIONS } from '../Constants/ACTIONS'

const {UPDATE_BREADCRUMB} = ACTIONS;

export const updateBreadcrumb = (breadcrumbData) => {
    return  {
        type: UPDATE_BREADCRUMB,
        payload: breadcrumbData
    }
}