import { combineReducers } from 'redux';
import AuthState from './authentication.reducer';
import updateBreadcrumb from './breadcrumbReducer';
import institute from './institute.reducer'
import faculty from './faculty.reducer';
import department from './department.reducer';
import courses from './courses.reducer';
import student from './student.reducer';
import session from './session.reducer';
import semester from './semester.reducer';
import courseReg from './courseReg.reducer';
import roles  from './roles.reducer';
import interns from './interns.reducer.js';
import subscription from './subscription.reducer';
import contact from './contact.reducer';

export const reducers = {
  AuthState,
  updateBreadcrumb,
  institute,
  faculty,
  department,
  courses,
  student,
  courseReg,
  semester,
  session,
  roles,
  interns,
  subscription,
  contact
};


const rootReducer = combineReducers({
  ...reducers,
});


export default rootReducer;