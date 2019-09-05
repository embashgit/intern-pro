import { API } from '../Constants/costants';
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from '../API/common';

export const getCountryLocations = ()=>{
    const AccessTokenHeader = getAccessTokenHeader(); 
    const path =API.PATHS.COUNTRYLOCATIONS
    const method ="GET";
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}
 

export const getCountries = ()=>{
    const AccessTokenHeader = getAccessTokenHeader(); 
    const path =API.PATHS.COUNTRIES
    const method ="GET";
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const facultyDropDown =(institution)=>{
    
    const AccessTokenHeader = getAccessTokenHeader(); 
    const method ="GET";
    let path =API.PATHS.DROPDOWNS.faculties;
    if(institution){
     path =  `${API.PATHS.DROPDOWNS.faculties}?institution=${institution}`;
    }
    
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}


export const institutionDropDown =()=>{
    const AccessTokenHeader = getAccessTokenHeader(); 
    const method ="GET";
    const path =  API.PATHS.DROPDOWNS.institution;
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}
 
export const departmentDropDown =(credentials)=>{
    const AccessTokenHeader = getAccessTokenHeader(); 
    const method ="GET";
    let path;
    if(credentials.institution){
         path = `${API.PATHS.DROPDOWNS.departments}institution=${credentials.institution}&faculty=${credentials.faculty}`;
    }else{
        path = `${API.PATHS.DROPDOWNS.departments}faculty=${credentials.faculty}`;
    }
    
    
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}
export const coursesDropdown =(credentials)=>{
    const AccessTokenHeader = getAccessTokenHeader(); 
    const method ="GET";
    
    const path = `${API.PATHS.DROPDOWNS.courses}institution=${credentials.institution}&faculty=${credentials.faculty}&department=${credentials.department}`;
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}