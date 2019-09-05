import {
    ACTIONS
    } from '../Constants/ACTIONS'
import { SUCCESS_MESSAGES } from '../Constants/costants';

  const { DELETE,ADD,UPDATE,UPLOADED,SYNC}=  SUCCESS_MESSAGES;


    const InitState = {
      feeData: {
        unitcost:'',
        currentsession:{},
        paymentmodes:{},
      },
      internList:[
        {id:1,startdate:'21 March 2018',email:'musakalam@applicationCache.com', enddate:'22 August 2018',gender:'Male',firstname:'Musa',surname:'Kalaam',jobtype:'Software'},
        {id:2,startdate:'21 March 2018',email:'alafin02@app.com', enddate:'22 August 2018',gender:'Female',firstname:'Alafin',surname:'Obanla',jobtype:'Software'},
        {id:3,startdate:'21 April 2018',email:'alikalam@gmail.com', enddate:'22 September 2018',gender:'Male',firstname:'Ali',surname:'Kalaam',jobtype:'Software'},
        {id:4,startdate:'21 March 2018',email:'embash@cardon.com', enddate:'22 August 2018',gender:'Female',firstname:'Embash',surname:'Cardon',jobtype:'Software'},
        {id:5,startdate:'21 July 2018',email:'lola@gmail.com', enddate:'22 December 2010',gender:'Female',firstname:'Lola',surname:'Kemi',jobtype:'Administration'},
        {id:6,startdate:'21 March 2018',email:'louisa@gmail.com', enddate:'22 August 2018',gender:'Male',firstname:'Louisa',surname:'Jefer',jobtype:'Software'},
        {id:7,startdate:'21 January 2018',email:'bamidele@gmail.com', enddate:'22 August 2019',gender:'Male',firstname:'Bamidele',surname:'Akor',jobtype:'Media'},
      ],

      supervisor:[
        {id:1,email:'musakalam@applicationCache.com', startdate:'22 August 2011',gender:'Male',firstname:'Musa',surname:'Kalaam',jobtype:'Software'},
        {id:2,email:'alafin02@app.com', startdate:'22 August 2012',gender:'Female',firstname:'Alafin',surname:'Obanla',jobtype:'Software'},
        {id:3,email:'alikalam@gmail.com', startdate:'22 September 2008',gender:'Male',firstname:'Ali',surname:'Kalaam',jobtype:'Software'},
        {id:4,email:'embash@cardon.com', startdate:'22 August 2014',gender:'Female',firstname:'Embash',surname:'Cardon',jobtype:'Software'},
        {id:5,email:'lola@gmail.com', startdate:'22 December 2010',gender:'Female',firstname:'Lola',surname:'Kemi',jobtype:'Administration'},
        {id:6,email:'louisa@gmail.com', startdate:'22 August 2013',gender:'Male',firstname:'Louisa',surname:'Jefer',jobtype:'Software'},
        {id:7,email:'bamidele@gmail.com', startdate:'22 August 2016',gender:'Male',firstname:'Bamidele',surname:'Akor',jobtype:'Media'},
      ],

      taskList:[
        {id:1,title:'Add Document to git', Author:'Musa Kalam',startdate:'21 April 2018',supervisor:'Mr Moo'},
        {id:2,title:'Add Validation to forms', Author:'Lola Adeniyi',startdate:'1 April 2018',supervisor:'Mr Ajayi'},
        {id:3,title:'Review Code',Author:'Bello Umar',startdate:'2 July 2018',supervisor:'Embash Cardon'},
        {id:4,title:'Payment Gateway', Author:'Kollore',startdate:'11 May 2018',supervisor:'Dauda kane'},
        {id:5,title:'AirLine Booking System', Author:'Faisal Small',startdate:'20 August 2018',supervisor:'Mustapha Yaro'}
      ],
    
      email:'',
      phone:'',
      feeError:false,
      paymentHistory:{},
      isLoading:false,
      addpayment:'',
      isLoadingData:false,
      dataError:false,
      fetchSuccess:false,
      dataErrorMessage:'',
      fetchLoading:false,
      fetchPaymentError:false,
      formLoading:false,
      formDataError:false,
      formSuccess:false,
    }

    const {
        REFRESH_PAYMENT_REQUEST,
        REQUEST_PAYMENT_FEE,
        FETCH_PAYMENT_FEE,
        FETCH_PAYMENT_FEE_ERROR,
        REQUEST_PAYMENT_REFERENCE,
        FETCH_PAYMENT_REFERENCE,
        FETCH_REFERENCE_ERROR,
        FETCH_PAYMENT_HISTORY,
        REQUEST_PAYMENT_HISTORY,
        FETCH_PAYMENT_HISTORY_ERROR,
        REQUEST_ADD_PAYMENT,
        ADD_PAYMENT,
        ADD_PAYMENT_ERROR,
        }= ACTIONS

    const interns = (state = InitState, action) => {

        switch (action.type) {

            case REQUEST_PAYMENT_FEE:
            return{
                ...state,
                isLoading:true,
                dataError:false,
                dataErrorMessage:'',
                fetchSuccess:false,
            }
            case FETCH_PAYMENT_FEE:
            return{
                ...state,
                isLoading:false,
                dataError:false,
                feeData:action.payload,
                fetchSuccess:true,
            }
            case  FETCH_PAYMENT_FEE_ERROR:
                return{
                    ...state,
                    isLoading:false,
                    dataError:true,
                    feeError:true,
                    dataErrorMessage:action.payload,
                    fetchSuccess:false,
                }
            case REQUEST_PAYMENT_REFERENCE:
            return{
                ...state,
                phone:'',
                email:'',
                formLoading:true,
                dataError:false,
                fetchSucess:false,
                dataError:false,
            }

            case 'ADD_DETAILS':
                return{
                    ...state,
                    phone:action.payload.phone,
                    email:action.payload.email,
                    formLoading:false,
                }
            case  FETCH_PAYMENT_REFERENCE:
            return{
                ...state,
                formLoading:false,
                dataError:false,
                referenceData:action.payload,
                fetchSuccess:true,
            }
            case FETCH_REFERENCE_ERROR:
                return{
                    ...state,
                    formLoading:false,
                    dataError:true,
                    dataErrorMessage:action.payload,
                    fetchSuccess:false,
                }
            case REQUEST_PAYMENT_HISTORY:
            return{
                ...state,
               
                isLoading:true,
                dataError:false,
                fetchSuccess:false,
            }
            case FETCH_PAYMENT_HISTORY:
            return{
                ...state,
                isLoading:false,
                dataError:false,
                paymentHistory:{...state.paymentHistory,...action.payload}
            }
           case FETCH_PAYMENT_HISTORY_ERROR:
               return{
                ...state,
                isLoading:false,
                dataError:true,
                dataErrorMessage:action.payload,
               }
            case REQUEST_ADD_PAYMENT:
                return{
                    ...state,
                    isLoading:true,
                    dataErrorMessage:'',
                    dataError:false,
                    formSuccess:false,
                }
              case  ADD_PAYMENT:
                  return{
                      ...state,
                    isLoading:false,
                    formSuccess:true,
                    addpayment:ADD,
                  }
            case ADD_PAYMENT_ERROR:
                return{
                    isLoading:false,
                    formSuccess:false,
                    dataErrorMessage:action.payload,
                    dataError:true,
                }
           
            case  REFRESH_PAYMENT_REQUEST:
            return{
                ...state,
                isLoading:false,
                isLoadingData:false,
                dataError:false,
                fetchSuccess:false,
                dataErrorMessage:'',
                fetchLoading:false,
                addpayment:'',
                fetchPaymentError:false,
                formLoading:false,
                formDataError:false,
                formSuccess:false,
                phone:'',
                email:'',
            }
            default:
            return state;
        }

    }

    export default interns
