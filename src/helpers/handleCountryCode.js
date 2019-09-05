import React from 'react'
import ReactCountryFlag from "react-country-flag";
import { Countries } from '../services/countries';
import { updateKey } from './uiHelpers';

export const changeToOptionItem =(data)=>{
    const newData=[];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            newData.push({
                id:data[key]['dial-code'],
                name:data[key].code,
                displayText:data[key].name,
                flag:<ReactCountryFlag code={data[key].code}  svg />
                // flag:updateKey(data[key].code)+'.png'
            })
          }
        }
        return newData
}

/**
 * get user country object 
 * */ 
export const getUserCountryData =code=>{
    for(var i=0; i<Countries.length;i++){
        if(Countries[i]['dial-code']===code) {
            let userCountry = Countries[i];
            return {
                'country-name':userCountry['name'],
                'country-code':userCountry['code'],
                'dial-code':userCountry['dial-code']
            }
        }
    }
}

    export const find = (arr, obj) => {
    const res = [];
    arr.filter(o => {
        let match = false;
        Object.keys(obj).map(i => {
            if (obj[i] === o[i]) {
               return match = true;
            }
          
        });
        if (match) {
          return  res.push(o);
        }
        return;
    });
    return res;
};