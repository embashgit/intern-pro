import { updateBreadcrumb } from '../actions/breadcrumbAction'
import React from 'react';
import {DashboardIcon,SettingsIcon, Icon} from '../mui';
import { VerticalSplitOutlined, ListAltOutlined } from '@material-ui/icons';

export const handleBreadcrumbUpdate = (breadcrumbData) => {
    console.log('handling breadcrumb data')
    return (dispatch) => {
        return dispatch(updateBreadcrumb(breadcrumbData))
    }
}

export const updateKey =(keys)=>{
    let key = keys.toLowerCase();
   let update = key.replace(" ",'-');
   return update;
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  
/** 
 * name in file: `Handle Side Navigation Items`..
 * @param {Object}
 * take data object from server and 
 * @return {Object}
 *  sidebar format object 
 * with their corresponding navigation links
*/ 
export const handleSidebarNavItems = (sidebarObj) => {
    const { access  } = sidebarObj;
    const sideNavItems = [];
    if(access){
        for(var i=0; i<access.length; i++){ 
         const child =access[i]['pages'].map(page=>{
             return{
                 name:capitalize(page),
                 link:`/${updateKey(page)}`,
                //  icon:<img height="20px" width="20px" src={iconLogo}/>,
                icon:<ListAltOutlined/> 
             }
           })
           if(access[i]['pages'].length){
               sideNavItems.push({
                name:access[i]['module'],
                icon:<DashboardIcon/>,
                children:[...child]
            })
           }else{
            sideNavItems.push({
                name:access[i]['module'],
                icon:<DashboardIcon/>,
                link: `/${updateKey(access[i]['module'])}`,
            })
           }
        }
    }
return sideNavItems
}

export const resizeName = (initialName)=>{
    let length =10;
    let append = '..';
    let newName = initialName;
    if( typeof newName ==='string'){
        if(newName.length > length){  
            return newName = initialName.substring(0, length - append.length) + append;
        }else{
            return newName;
        }

    }else{
        if(Object.keys(newName).length > length){  
            return newName = initialName.substring(0, length - append.length) + append;
        }else{
            return newName;
        }
    }

}


