
import {API} from '../Constants/costants'

import { fetchAndHandleTokenRefresh } from './common';

export const login = (phone, pin) => {
    const method = 'POST';
    const samsApi =API.PATHS.LOGIN;
    const meta = {};
    const headers={
      'Content-Type':'application/json',
    }
    const data = { phone:phone, pin:pin };
    const requestBody = JSON.stringify({ meta, data});
   
    return fetchAndHandleTokenRefresh(samsApi,method,requestBody,headers)
  };

/**
 * - Name in file: `Initiate Sign Up`
 * - Send signup link to user's email and OTP to user's phone
 * @name fetchInitiateSignUp
 * @param {String} formInputs; contains the name, email and phone number of the user
 * @return {Promise} Resulting promise from fetch
 */
export const InitialSignUp =(dataInput)=>{
  const path = API.PATHS.SIGNUP;
  const meta = {
    'action': API.actions.AUTHENTICATION,
    'source': 'web',
  };
  const method = 'POST';
  const data = {
    'country-code':dataInput['country-code'], 
    'country':dataInput['country-name'],
    'dial-code':dataInput['dial-code'],
    'business-name':dataInput['business-name'],
    'phone':dataInput['phone'],
    'email':dataInput['email']
  }
  const requestBody = JSON.stringify({ meta, data });

  return fetchAndHandleTokenRefresh(path, method, requestBody);

}

/**
 * - Name in file: `Sign Up Otp validation`
 * - validates otp entered by the user from phone
 * @name fetchSignUpOTPValidation
 * @param {String} otp; otp sent to user's phone
 * @return {Promise} Resulting promise from fetch
 */
export const fetchSignUpOTPValidation =(otp)=>{
  const path = API.PATHS.SIGNUP;
  const meta = {
    'action': API.actions.SIGN_UP_VALIDATION,
    'source': 'web',
  };
  const method = 'POST';
  const data ={
    otp
  }
  const requestBody = JSON.stringify({ meta, data });
  return fetchAndHandleTokenRefresh(path, method, requestBody);
}

export const signUpCompletion=(credentials)=>{
  const path = API.PATHS.SIGNUP;
  const meta = {
    'action': API.actions.SIGNUP_COMPLETION,
    'source': 'web',
  }; 
  const method = 'POST';
 const data={
    business:{
     ...credentials.business,
    },
    profile:{
      ...credentials.profile,
    }
  }
  const requestBody = JSON.stringify({ meta, data });
  return fetchAndHandleTokenRefresh(path, method,requestBody,null)
}