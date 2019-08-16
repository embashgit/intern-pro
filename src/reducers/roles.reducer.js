import { ACTIONS} from '../Constants/ACTIONS'
import { ROLES } from '../Constants/costants';
    const { RESOLVE_ROLES} = ACTIONS;
  
const { 
    INSTITUTIONADMIN,
    INSTITUTIONOBSERVER,
    FACULTYADMIN,
    FACULTYOBSERVER,
    DEPARTMENTADMIN,
    SYSTEMADMIN,
    DEPARTMENTOBSERVER
} =ROLES;


  const turnOnAll = {
    showCountry:true,
    showCountryLocation:true,
    showInstitution:true,
    showFaculty:true,
    showdepartment:true,
  }

  const turnOffAll = {
    showCountry:false,
    showCountryLocation:false,
    showInstitution:false,
    showFaculty:false,
    showdepartment:false,
  }
    const InitState ={
        showCountry:false,
        showCountryLocation:false,
        showInstitution:false,
        showFaculty:false,
        showdepartment:false,
    };
    const roles = (state = InitState, action) => {
        switch (action.type) {
            case RESOLVE_ROLES:
             
                switch (action.role) {
                    case SYSTEMADMIN:
                        return state = turnOnAll;
                    case INSTITUTIONADMIN ||INSTITUTIONOBSERVER:  
                    return{
                        ...state,
                        showFaculty:true,
                        showdepartment:true,
                        showInstitution:false,
                        showCountryLocation:false,
                        showCountry:false,
                    }
                    case FACULTYADMIN ||FACULTYOBSERVER:    
                    return{
                        ...state,
                        showFaculty:false,
                        showdepartment:true,
                        showInstitution:false,
                        showCountryLocation:false,
                        showCountry:false,
                    }
                    case DEPARTMENTADMIN ||DEPARTMENTOBSERVER:    
                    return state = turnOffAll;
                    default:
                    return state;
                }
                
        
            default:
                return state;
        }
     }

     export default roles