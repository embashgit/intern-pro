import React, { Component } from 'react'
import { withStyles, TextField, InputAdornment, IconButton, } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Phone from '@material-ui/icons/Phone'
import PropTypes from 'prop-types';
import ReactCustomFlagSelect from 'react-custom-flag-select';
import "react-custom-flag-select/lib/react-custom-flag-select.min.css";
import PhoneInputStyles from './styles';
import  { styles } from '../../styles/PhoneInput.styles'
import { find } from '../../helpers/handleCountryCode';
import { Fonts } from '../../styles/themes';


class PhoneInput extends Component {
    constructor(props) {
        const DEFAULT_AREA_CODE = props.countries[0].id;
        super(props);
        this.state = {inputActive:false, areaCode: DEFAULT_AREA_CODE, phonenumber: '', hasPhoneError: true, validate: false };
    }

    static propTypes = {
        /**
         * callback for when a change occurs
         */
        onChange: PropTypes.func.isRequired,
        /**
         * phone state from parent component
         */
        phoneState: PropTypes.shape({
          code: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired
        }).isRequired,
        /**
         * all country names and corresponding codes
         */
       
        hasError: PropTypes.bool
      }

      handleCountryChange = (dialCode) => {
        if (dialCode === null) {
          return;
        }
          this.setState({inputActive:true})
        this.props.onChange({
          type: 'custom', name: 'phone', subprop: 'code', value:dialCode
        });
      }

    handleNumberChange = (event) => {
      event.preventDefault();
      const { value } = event.target;
      if (value.match(/^\d+$/) || value === '') {
        this.props.onChange({
          type: 'custom', name: 'phone', subprop: 'number', value
        });
      }
    }
  
    render() {

      const { classes,countries,OptionContainer,borderless} = this.props;
      const{optionListContainer, PrimarySelect,noOutline} =PhoneInputStyles;
      const {inputActive, } = this.state;
      const {phoneNumberField, phoneInputprops,resize,cssOutlinedInput,notchedOutline,cssFocused}= classes
      const currentItem = find(countries, { id: this.props.phoneState.code })[0];
      // const formInputProps = {
      //   InputLabelProps:{
      //     classes: {
      //         root: classes.label,
      //     }
      // },
      // InputProps:{
      //     classes: {
      //         input: classes.size,
      //     },
      // }
      // }
     
      const renderprops={
        InputLabelProps:{phoneInputprops},
        InputProps:{
          classes: {
        
           input :resize,
            root: cssOutlinedInput,
            focused: cssFocused,
            notchedOutline: notchedOutline,
          },
        }
      }
      
         return (

            <div className="phone-form-input" >
                <div className="flag-input">
                    <ReactCustomFlagSelect
                        tabIndex={'1'} //
                         id ={this.props.inputType}
                        name={'areaCode'} //
                        value={currentItem.id} //
                        disabled={this.props.disabled} //
                        optionList={countries} //
                        classNameWrapper={''} //
                        classNameContainer={''} //
                        classNameOptionListItem={'hoverItems optionItems'} //
                        classNameOptionListContainer={'optionContainer'} //
                        classNameDropdownIconOptionListItem={''} //
                        customStyleWrapper={{}} //
                        customStyleContainer={borderless? noOutline:{...PrimarySelect,...this.props.selectStyle}} //
                        customStyleSelect={{ width: '90px',fontSize:'13.5px',fontFamily:Fonts.form}}
                        customStyleOptionListItem={{padding:'3px 10px 3px 5px',fontFamily:Fonts.primary,fontSize:'13px',lineHeight:'30px'}} //
                        customStyleOptionListContainer={{...optionListContainer,...OptionContainer}} //
                        customStyleDropdownIcon={{borderColor:'#333'}} //
                        onChange={dialCode=>{this.handleCountryChange(dialCode)}}
                    
                    />
                </div>
                {this.props.icon ?
               
                    (<TextField 
                        {...renderprops}
                        id={this.props.id}
                        placeholder="Phone number"
                        className={phoneNumberField}
                        margin="normal"
                        name="phone"
                        onChange={this.handleNumberChange}
                        variant="outlined"
                        // disabled={!inputActive}
                        value={this.props.phoneState.number}
                        InputProps={{
                          classes: {
                            input :resize,
                            root: cssOutlinedInput,
                            focused: cssFocused,
                            notchedOutline: notchedOutline,
                        },
                        endAdornment: (
                      <InputAdornment position="end">
                      <IconButton>
                    <Phone/>
                      </IconButton>
                    </InputAdornment>
                  ),
                        }}
                      
                    />):
                    (
                      <TextField 
                      {...renderprops}
                      id={this.props.id}
                      placeholder="Phone number"
                      className={phoneNumberField}
                      margin="normal"
                      name="phone"
                      onChange={this.handleNumberChange}
                      variant="outlined"
                      // disabled={!inputActive}
                      value={this.props.phoneState.number}
                     
                  /> 
                    )}

            </div>

        )
    }
}

export default withStyles(styles)(PhoneInput)

