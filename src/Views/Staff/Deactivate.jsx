import React, { Component } from 'react'
import TriggerButton from '../../components/Modal/TriggerButton';
import { Modal, Button, Typography } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { FetchDeleteSemester as getDelete } from '../../helpers/semester.helper';
import { connect } from 'react-redux';
import Media from "react-media";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/modal';
import { Colors } from '../../styles/themes';
import { red } from '@material-ui/core/colors';
import { PersonAddDisabledOutlined, RestoreOutlined } from '@material-ui/icons';

class Deactivate extends Component {

    state = { isShown: false,
         shifModal:false,
         left:50,
         top:50,
         isMobile: '',
         };

/**
 * change modal direction
 * use
 * */
   componentDidUpdate =(prevProps,prevState)=>{
   } 

     
  showModal = () => {
    this.setState({ isShown: true }, () => {
    });
}

getModalStyle=()=> {
    const {top,left,shifModal}=this.state;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      transition:'0.3s',
      textAlign:'center',
      alignItems:'center',
    };
  }

onSubmit=()=>{}

closeModal = ()=>{
    this.setState({isShown:false})
}

handleOnDelete=()=>{
const {id} = this.props.staff;
this.props.getDelete(id)
}
render() {
    const {classes,staff,}= this.props;
    const {isMobile}= this.state;
    const {paper,mobileWidth,width,} = classes;
    const triggerText = <span style={{color:red['500']}}>Delete</span>;
    const Icon =<PersonAddDisabledOutlined style={{color:Colors.danger}}/>
    const form =(
        <div>
            <form onSubmit={this.onSubmit}>
            
            <div style={this.getModalStyle()} className={classNames(paper,isMobile? mobileWidth:width)}>
                <div className={classes.closeModal}>
            <Button onClick={this.closeModal}>
            &#x2715;
            </Button>
            </div>
            <RestoreOutlined style={{color:Colors.danger,fontSize:45}} />
            <Typography variant="subheading"><span > </span> Are You Sure you want to Deactivate <span style={{color:Colors.blueSecondary}}>{`${staff['firstname']}`}</span> ?</Typography>
            <Button
    //   disabled={departmentData['formLoading']}
       style={{marginTop:10,color:Colors.danger}}
        onClick={this.handleOnDelete} fullWidth variant="outlined"><PersonAddDisabledOutlined/> 
          {/* <span>{semesterData['formLoading']? <Loader type="ThreeDots"
                color={Colors.danger}
                height="20"
                width="20"/> : 'Delete Semester'}
              </span> */}
              </Button>
            </div>
            </form>
        </div>
    )
    return (
      < React.Fragment>
       <Media query="(max-width: 992px)" onChange={matches => this.setState({isMobile: matches})}/>
        <TriggerButton 
        showModal={this.showModal}
        style={{width:'100%',color:Colors.danger,justifyContent:'space-around'}}
        triggerText={triggerText}
        buttonRef={(n) => (this.TriggerButton = n)}
        outlined={this.props.outlined}
        Icon={Icon}
        />

          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.isShown}
          onClose={this.closeModal}
          >
          {form}
          </Modal> 
      </ React.Fragment>
    )
  }
}

Deactivate.propTypes = {
    classes: PropTypes.object.isRequired,
    closeModal:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,

  };

  const mapStateToProps = (state) => {
    return {
     
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      getDelete:id =>dispatch(getDelete(id))
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Deactivate));
