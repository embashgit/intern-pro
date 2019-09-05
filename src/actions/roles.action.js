import { ACTIONS } from "../Constants/ACTIONS";


const {RESOLVE_ROLES} =ACTIONS
export const resolveRoles = (role)=>{
    return{
        type:RESOLVE_ROLES,
        role,
    }
}