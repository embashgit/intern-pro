import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { Colors } from '../styles/themes';

class Spinner extends Component {
   constructor(props) {
      super(props)
      this.state = { timePassed: false, }
      
   }

static defaultProps = {
   color:Colors.blueSecondary,
   height:50,
   width:50,
   className:'spinner-background-opt',
}
 

   render() {
     
    const {className,color,width,height} = this.props;
         return (
           <div className={`spinner-container ${ className }`}>
           <div className='loader'>
               <Loader
               type="Rings"
               color={color}
               height={height}
               width={width}
            />
            </div>
            {this.props.text ? <p>{this.props.text}</p> : null}
         </div>);
      }
   
}



export default Spinner
