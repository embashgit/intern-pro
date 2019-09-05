import { API } from '../Constants/costants';
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from '../API/common';

export const getAttendanceRecord =(credentials)=>{
    const AccessTokenHeader = getAccessTokenHeader(); 
    const method ="GET";
    let path = API.PATHS.ATTENDANCE;
    if(credentials){    
        path= path +`?limit=${credentials.limit}&offset=${credentials.offset}`;     
        if(credentials.institute)  path = path+`&studentinstitution=${String(credentials.institute)}`
        if(credentials.faculty) path = path+`&studentfaculty=${credentials.faculty}`;
        if(credentials.department)  path = path+`&studentdepartment=${credentials.department}`;
       if(credentials.name) path = path+`&course=${credentials.name}`;
    }
    if(!credentials){
        path = path+`?limit${20}&offset=${0}`
    }
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}